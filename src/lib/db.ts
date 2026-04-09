import { supabaseAnon, createSupabaseAuth } from "./supabase";
import { supabaseService } from "./supabase-server";
import { v4 as uuidv4 } from "uuid";

// ════════════════════════════════════════════════════════════
// Tipos
// ════════════════════════════════════════════════════════════

export interface Reservation {
  id: string;
  cabinId: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  totalPrice: number;
  status: "pending" | "confirmed" | "awaiting_transfer" | "awaiting_bizum" | "cancelled";
  paymentMethod: "transfer" | "bizum" | "admin";
  name: string;
  phone: string;
  createdAt: string;
}

export interface CustomPrice {
  id: string;
  cabinId: string;
  date: string;
  price: number;
}

function mapReservation(row: Record<string, any>): Reservation {
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
    phone: row.phone,
    createdAt: row.created_at,
  };
}

function mapCustomPrice(row: Record<string, any>): CustomPrice {
  return { id: row.id, cabinId: row.cabin_id, date: row.date, price: row.price };
}

// ════════════════════════════════════════════════════════════
// FUNCIONES PÚBLICAS (usan supabaseAnon, leen booked_dates)
// ════════════════════════════════════════════════════════════

export async function getBookedDatesForCabin(cabinId: string): Promise<{ checkIn: string; checkOut: string }[]> {
  const { data, error } = await supabaseAnon
    .from("booked_dates")
    .select("check_in, check_out")
    .eq("cabin_id", cabinId);

  if (error) throw new Error(`Error obteniendo fechas: ${error.message}`);
  return (data || []).map((r) => ({ checkIn: r.check_in, checkOut: r.check_out }));
}

export async function checkAvailability(cabinId: string, checkIn: string, checkOut: string): Promise<boolean> {
  const { data, error } = await supabaseAnon
    .from("booked_dates")
    .select("id")
    .eq("cabin_id", cabinId)
    .lt("check_in", checkOut)
    .gt("check_out", checkIn);

  if (error) throw new Error(`Error verificando disponibilidad: ${error.message}`);
  return (data || []).length === 0;
}

export async function getCustomPricesForCabin(cabinId: string): Promise<CustomPrice[]> {
  const { data, error } = await supabaseAnon
    .from("custom_prices")
    .select("*")
    .eq("cabin_id", cabinId)
    .gte("date", new Date().toISOString().split("T")[0]);

  if (error) throw new Error(`Error obteniendo precios: ${error.message}`);
  return (data || []).map(mapCustomPrice);
}

// ════════════════════════════════════════════════════════════
// FUNCIONES DE CREACIÓN (usan supabaseService, insertan en reservations)
// El trigger en Supabase crea automáticamente el booked_dates
// ════════════════════════════════════════════════════════════

export async function createReservation(data: Omit<Reservation, "createdAt">): Promise<Reservation> {
  const { data: row, error } = await supabaseService
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
      phone: data.phone,
    })
    .select()
    .single();

  if (error) throw new Error(`Error creando reserva: ${error.message}`);
  return mapReservation(row);
}

// ════════════════════════════════════════════════════════════
// FUNCIONES ADMIN (usan supabaseAuth con JWT, respetan RLS)
// ════════════════════════════════════════════════════════════

export async function getTransferReservations(accessToken: string): Promise<Reservation[]> {
  const supabase = createSupabaseAuth(accessToken);
  const { data, error } = await supabase
    .from("reservations")
    .select("*")
    .in("payment_method", ["transfer", "bizum"])
    .in("status", ["awaiting_transfer", "awaiting_bizum", "confirmed"])
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Error obteniendo transferencias: ${error.message}`);
  return (data || []).map(mapReservation);
}

export async function getAllReservationsForCabin(accessToken: string, cabinId: string): Promise<Reservation[]> {
  const supabase = createSupabaseAuth(accessToken);
  const { data, error } = await supabase
    .from("reservations")
    .select("*")
    .eq("cabin_id", cabinId)
    .in("status", ["confirmed", "pending", "awaiting_transfer", "awaiting_bizum"])
    .order("check_in", { ascending: true });

  if (error) throw new Error(`Error obteniendo reservas: ${error.message}`);
  return (data || []).map(mapReservation);
}

export async function updateReservationStatus(accessToken: string, id: string, status: Reservation["status"]): Promise<void> {
  const supabase = createSupabaseAuth(accessToken);
  const { error } = await supabase
    .from("reservations")
    .update({ status })
    .eq("id", id);

  if (error) throw new Error(`Error actualizando estado: ${error.message}`);
}

export async function createAdminBlock(accessToken: string, cabinId: string, checkIn: string, checkOut: string): Promise<Reservation> {
  // Usamos service porque el trigger necesita insertar en booked_dates
  // pero primero verificamos que el token es de admin
  const supabase = createSupabaseAuth(accessToken);
  const { data: adminCheck } = await supabase
    .from("admin_users")
    .select("id")
    .single();

  if (!adminCheck) throw new Error("No autorizado");

  const { data: row, error } = await supabaseService
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
      phone: "",
    })
    .select()
    .single();

  if (error) throw new Error(`Error creando bloqueo: ${error.message}`);
  return mapReservation(row);
}

export async function deleteAdminBlock(accessToken: string, id: string): Promise<void> {
  const supabase = createSupabaseAuth(accessToken);
  const { error } = await supabase
    .from("reservations")
    .delete()
    .eq("id", id)
    .eq("payment_method", "admin");

  if (error) throw new Error(`Error eliminando bloqueo: ${error.message}`);
}

export async function cancelReservation(accessToken: string, id: string): Promise<void> {
  const supabase = createSupabaseAuth(accessToken);
  const { error } = await supabase
    .from("reservations")
    .update({ status: "cancelled" })
    .eq("id", id);

  if (error) throw new Error(`Error cancelando reserva: ${error.message}`);
}

export async function getAdminCustomPrices(accessToken: string, cabinId: string): Promise<CustomPrice[]> {
  const supabase = createSupabaseAuth(accessToken);
  const { data, error } = await supabase
    .from("custom_prices")
    .select("*")
    .eq("cabin_id", cabinId)
    .gte("date", new Date().toISOString().split("T")[0]);

  if (error) throw new Error(`Error obteniendo precios: ${error.message}`);
  return (data || []).map(mapCustomPrice);
}

export async function setCustomPrice(accessToken: string, cabinId: string, date: string, price: number): Promise<CustomPrice> {
  const supabase = createSupabaseAuth(accessToken);
  const { data: row, error } = await supabase
    .from("custom_prices")
    .upsert(
      { cabin_id: cabinId, date, price },
      { onConflict: "cabin_id,date" }
    )
    .select()
    .single();

  if (error) throw new Error(`Error guardando precio: ${error.message}`);
  return mapCustomPrice(row);
}

export async function deleteCustomPrice(accessToken: string, cabinId: string, date: string): Promise<void> {
  const supabase = createSupabaseAuth(accessToken);
  const { error } = await supabase
    .from("custom_prices")
    .delete()
    .eq("cabin_id", cabinId)
    .eq("date", date);

  if (error) throw new Error(`Error eliminando precio: ${error.message}`);
}
