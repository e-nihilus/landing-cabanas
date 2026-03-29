import { supabase } from "./supabase";

export interface Reservation {
  id: string;
  cabinId: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  totalPrice: number;
  status: "pending" | "confirmed" | "awaiting_transfer" | "cancelled";
  paymentMethod: "stripe" | "paypal" | "transfer";
  name: string;
  email: string;
  phone: string;
  stripeSessionId?: string;
  paypalOrderId?: string;
  createdAt: string;
}

// Mapeo de columnas snake_case (Supabase) a camelCase (app)
function mapRow(row: Record<string, any>): Reservation {
  return {
    id: row.id,
    cabinId: row.cabin_id,
    checkIn: row.check_in,
    checkOut: row.check_out,
    nights: row.nights,
    guests: row.guests,
    totalPrice: row.total_price,
    status: row.status,
    paymentMethod: row.payment_method,
    name: row.name,
    email: row.email,
    phone: row.phone,
    stripeSessionId: row.stripe_session_id ?? undefined,
    paypalOrderId: row.paypal_order_id ?? undefined,
    createdAt: row.created_at,
  };
}

export async function createReservation(data: Omit<Reservation, "createdAt">): Promise<Reservation> {
  const { data: row, error } = await supabase
    .from("reservations")
    .insert({
      id: data.id,
      cabin_id: data.cabinId,
      check_in: data.checkIn,
      check_out: data.checkOut,
      nights: data.nights,
      guests: data.guests,
      total_price: data.totalPrice,
      status: data.status,
      payment_method: data.paymentMethod,
      name: data.name,
      email: data.email,
      phone: data.phone,
      stripe_session_id: data.stripeSessionId ?? null,
      paypal_order_id: data.paypalOrderId ?? null,
    })
    .select()
    .single();

  if (error) throw new Error(`Error creando reserva: ${error.message}`);
  return mapRow(row);
}

export async function getReservationById(id: string): Promise<Reservation | null> {
  const { data, error } = await supabase
    .from("reservations")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return null;
  return mapRow(data);
}

export async function getReservationByStripeSession(sessionId: string): Promise<Reservation | null> {
  const { data, error } = await supabase
    .from("reservations")
    .select("*")
    .eq("stripe_session_id", sessionId)
    .single();

  if (error) return null;
  return mapRow(data);
}

export async function updateReservationStatus(id: string, status: Reservation["status"]): Promise<void> {
  const { error } = await supabase
    .from("reservations")
    .update({ status })
    .eq("id", id);

  if (error) throw new Error(`Error actualizando estado: ${error.message}`);
}

// Filtro para reservas activas (confirmadas, pendientes <24h, transfer <48h)
const ACTIVE_STATUS_FILTER = `
  status.eq.confirmed,
  and(status.eq.pending,created_at.gt.${new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()}),
  and(status.eq.awaiting_transfer,created_at.gt.${new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString()})
`;

async function getActiveReservationsForCabin(cabinId: string) {
  // Primero obtenemos todas las reservas de la cabaña, luego filtramos en JS
  // porque los filtros OR complejos con AND anidados son más fiables así
  const { data, error } = await supabase
    .from("reservations")
    .select("*")
    .eq("cabin_id", cabinId);

  if (error) throw new Error(`Error obteniendo reservas: ${error.message}`);

  const now = new Date();
  const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const twoDaysAgo = new Date(now.getTime() - 48 * 60 * 60 * 1000);

  return (data || []).filter((r) => {
    if (r.status === "confirmed") return true;
    if (r.status === "pending" && new Date(r.created_at) > oneDayAgo) return true;
    if (r.status === "awaiting_transfer" && new Date(r.created_at) > twoDaysAgo) return true;
    return false;
  });
}

export async function getBookedDatesForCabin(cabinId: string): Promise<{ checkIn: string; checkOut: string }[]> {
  const rows = await getActiveReservationsForCabin(cabinId);
  return rows.map((r) => ({ checkIn: r.check_in, checkOut: r.check_out }));
}

export async function checkAvailability(cabinId: string, checkIn: string, checkOut: string): Promise<boolean> {
  const rows = await getActiveReservationsForCabin(cabinId);
  // Comprobar solapamiento: existe conflicto si check_in < checkOut AND check_out > checkIn
  const conflict = rows.some((r) => r.check_in < checkOut && r.check_out > checkIn);
  return !conflict;
}

export async function getTransferReservations(): Promise<Reservation[]> {
  const { data, error } = await supabase
    .from("reservations")
    .select("*")
    .in("payment_method", ["transfer"])
    .in("status", ["awaiting_transfer", "confirmed"])
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Error obteniendo transferencias: ${error.message}`);
  return (data || []).map(mapRow);
}
