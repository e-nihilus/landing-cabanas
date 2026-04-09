-- ============================================================
-- MIGRACIÓN: Separación de datos públicos / privados + RLS
-- Ejecutar en Supabase SQL Editor en orden
-- ============================================================

-- ════════════════════════════════════════════════════════════
-- 1. TABLA: admin_users (debe existir ANTES de is_admin())
-- ════════════════════════════════════════════════════════════

CREATE TABLE public.admin_users (
  id         uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

-- ════════════════════════════════════════════════════════════
-- 2. FUNCIÓN AUXILIAR: is_admin()
-- ════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_users WHERE id = auth.uid()
  );
$$;

ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- El usuario autenticado puede verificar si él mismo es admin
CREATE POLICY "admin_users_select_self"
  ON public.admin_users
  FOR SELECT
  TO authenticated
  USING (id = auth.uid());

-- No se permite INSERT/UPDATE/DELETE vía API (solo desde dashboard o service_role)

-- ════════════════════════════════════════════════════════════
-- 3. TABLA: reservations (PRIVADA - solo admin + service_role)
-- ════════════════════════════════════════════════════════════

CREATE TABLE public.reservations (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cabin_id       text        NOT NULL,
  check_in       date        NOT NULL,
  check_out      date        NOT NULL,
  nights         integer     NOT NULL,
  guests         integer     NOT NULL,
  total_price    numeric     NOT NULL,
  status         text        NOT NULL DEFAULT 'pending'
                   CHECK (status IN ('pending', 'confirmed', 'awaiting_transfer', 'awaiting_bizum', 'cancelled')),
  payment_method text        NOT NULL
                   CHECK (payment_method IN ('transfer', 'bizum', 'admin')),
  name           text        NOT NULL,
  phone          text        NOT NULL,
  created_at     timestamptz DEFAULT now()
);

ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;

-- Admin autenticado puede leer todas las reservas
CREATE POLICY "reservations_select_admin"
  ON public.reservations
  FOR SELECT
  TO authenticated
  USING (public.is_admin());

-- Admin autenticado puede actualizar reservas (confirmar, cancelar)
CREATE POLICY "reservations_update_admin"
  ON public.reservations
  FOR UPDATE
  TO authenticated
  USING (public.is_admin());

-- Admin autenticado puede eliminar reservas
CREATE POLICY "reservations_delete_admin"
  ON public.reservations
  FOR DELETE
  TO authenticated
  USING (public.is_admin());

-- INSERT: solo service_role (las API routes del servidor insertan)
-- No se crea policy de INSERT para anon ni authenticated
-- El service_role key bypasea RLS automáticamente

-- ════════════════════════════════════════════════════════════
-- 4. TABLA: booked_dates (PÚBLICA - lectura anónima)
-- ════════════════════════════════════════════════════════════

CREATE TABLE public.booked_dates (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cabin_id       text        NOT NULL,
  check_in       date        NOT NULL,
  check_out      date        NOT NULL,
  source         text        NOT NULL DEFAULT 'reservation'
                   CHECK (source IN ('reservation', 'admin_block')),
  reservation_id uuid        UNIQUE REFERENCES public.reservations(id) ON DELETE CASCADE,
  created_at     timestamptz DEFAULT now()
);

ALTER TABLE public.booked_dates ENABLE ROW LEVEL SECURITY;

-- Cualquiera puede leer las fechas ocupadas (calendario público)
CREATE POLICY "booked_dates_select_anon"
  ON public.booked_dates
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Admin autenticado puede insertar bloqueos manuales
CREATE POLICY "booked_dates_insert_admin"
  ON public.booked_dates
  FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin());

-- Admin autenticado puede eliminar bloqueos
CREATE POLICY "booked_dates_delete_admin"
  ON public.booked_dates
  FOR DELETE
  TO authenticated
  USING (public.is_admin());

-- INSERT automático via trigger (service_role) no necesita policy

-- Índice para consultas por cabaña
CREATE INDEX idx_booked_dates_cabin ON public.booked_dates(cabin_id);

-- ════════════════════════════════════════════════════════════
-- 5. TABLA: custom_prices (lectura pública, escritura admin)
-- ════════════════════════════════════════════════════════════

CREATE TABLE public.custom_prices (
  id        uuid    PRIMARY KEY DEFAULT gen_random_uuid(),
  cabin_id  text    NOT NULL,
  date      date    NOT NULL,
  price     numeric NOT NULL,
  UNIQUE (cabin_id, date)
);

ALTER TABLE public.custom_prices ENABLE ROW LEVEL SECURITY;

-- Cualquiera puede leer los precios (se muestran en el calendario público)
CREATE POLICY "custom_prices_select_anon"
  ON public.custom_prices
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Admin autenticado puede insertar precios
CREATE POLICY "custom_prices_insert_admin"
  ON public.custom_prices
  FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin());

-- Admin autenticado puede actualizar precios
CREATE POLICY "custom_prices_update_admin"
  ON public.custom_prices
  FOR UPDATE
  TO authenticated
  USING (public.is_admin());

-- Admin autenticado puede eliminar precios
CREATE POLICY "custom_prices_delete_admin"
  ON public.custom_prices
  FOR DELETE
  TO authenticated
  USING (public.is_admin());

-- ════════════════════════════════════════════════════════════
-- 6. TRIGGERS: sincronizar reservations → booked_dates
-- ════════════════════════════════════════════════════════════

-- 6a. Al insertar una reserva → crear entrada en booked_dates
CREATE OR REPLACE FUNCTION public.on_reservation_insert()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.booked_dates (cabin_id, check_in, check_out, source, reservation_id)
  VALUES (
    NEW.cabin_id,
    NEW.check_in,
    NEW.check_out,
    CASE WHEN NEW.payment_method = 'admin' THEN 'admin_block' ELSE 'reservation' END,
    NEW.id
  );
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_reservation_insert
  AFTER INSERT ON public.reservations
  FOR EACH ROW
  EXECUTE FUNCTION public.on_reservation_insert();

-- 6b. Al cancelar una reserva → eliminar de booked_dates
CREATE OR REPLACE FUNCTION public.on_reservation_cancel()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF NEW.status = 'cancelled' AND OLD.status <> 'cancelled' THEN
    DELETE FROM public.booked_dates WHERE reservation_id = NEW.id;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_reservation_cancel
  AFTER UPDATE ON public.reservations
  FOR EACH ROW
  EXECUTE FUNCTION public.on_reservation_cancel();

-- 6c. Al eliminar una reserva → cascadea automáticamente por ON DELETE CASCADE
--     (no necesita trigger adicional)

-- ════════════════════════════════════════════════════════════
-- 7. REGISTRAR ADMIN
-- ════════════════════════════════════════════════════════════
-- Después de crear un usuario admin en Supabase Auth (dashboard → Authentication → Users),
-- copia su UUID y ejecuta:
--
--   INSERT INTO public.admin_users (id) VALUES ('TU-UUID-DE-AUTH-AQUÍ');
--
-- ════════════════════════════════════════════════════════════

-- ════════════════════════════════════════════════════════════
-- 8. (OPCIONAL) MIGRAR DATOS EXISTENTES
-- ════════════════════════════════════════════════════════════
-- Si tienes una tabla "reservations" antigua con datos, migra así:
--
-- INSERT INTO public.booked_dates (cabin_id, check_in, check_out, source, reservation_id)
-- SELECT cabin_id, check_in, check_out,
--        CASE WHEN payment_method = 'admin' THEN 'admin_block' ELSE 'reservation' END,
--        id
-- FROM public.reservations
-- WHERE status NOT IN ('cancelled');
--
-- ════════════════════════════════════════════════════════════
