-- NULL preserves the unknown value for reservations created before this migration.
ALTER TABLE public.reservations
ADD COLUMN IF NOT EXISTS pets integer CHECK (pets BETWEEN 0 AND 2);
