import { supabase } from "./supabase";
import { v4 as uuidv4 } from "uuid";

export interface Reservation {
  id: string;
  cabinId: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  totalPrice: number;
  status: "pending" | "confirmed" | "awaiting_transfer" | "awaiting_bizum" | "cancelled";
  paymentMethod: "paypal" | "transfer" | "bizum" | "admin";
  name: string;
  email: string;
  phone: string;
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
  and(status.eq.awaiting_transfer,created_at.gt.${new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString()}),
  and(status.eq.awaiting_bizum,created_at.gt.${new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString()})
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
    if (r.status === "awaiting_bizum" && new Date(r.created_at) > twoDaysAgo) return true;
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
    .in("payment_method", ["transfer", "bizum"])
    .in("status", ["awaiting_transfer", "awaiting_bizum", "confirmed"])
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Error obteniendo transferencias: ${error.message}`);
  return (data || []).map(mapRow);
}

// Get ALL reservations for a cabin (for admin view - includes admin blocks)
export async function getAllReservationsForCabin(cabinId: string): Promise<Reservation[]> {
  const { data, error } = await supabase
    .from("reservations")
    .select("*")
    .eq("cabin_id", cabinId)
    .in("status", ["confirmed", "pending", "awaiting_transfer", "awaiting_bizum"])
    .order("check_in", { ascending: true });

  if (error) throw new Error(`Error obteniendo reservas: ${error.message}`);
  return (data || []).map(mapRow);
}

// Create a manual admin block (reservation with payment_method 'admin')
export async function createAdminBlock(cabinId: string, checkIn: string, checkOut: string): Promise<Reservation> {
  const { data: row, error } = await supabase
    .from("reservations")
    .insert({
      id: uuidv4(),
      cabin_id: cabinId,
      check_in: checkIn,
      check_out: checkOut,
      nights: Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)),
      guests: 0,
      total_price: 0,
      status: "confirmed",
      payment_method: "admin",
      name: "Bloqueo Admin",
      email: "",
      phone: "",
    })
    .select()
    .single();

  if (error) throw new Error(`Error creando bloqueo: ${error.message}`);
  return mapRow(row);
}

// Delete an admin block
export async function deleteAdminBlock(id: string): Promise<void> {
  const { error } = await supabase
    .from("reservations")
    .delete()
    .eq("id", id)
    .eq("payment_method", "admin");

  if (error) throw new Error(`Error eliminando bloqueo: ${error.message}`);
}

// Cancel any reservation (for admin to release dates)
export async function cancelReservation(id: string): Promise<void> {
  const { error } = await supabase
    .from("reservations")
    .update({ status: "cancelled" })
    .eq("id", id);

  if (error) throw new Error(`Error cancelando reserva: ${error.message}`);
}
