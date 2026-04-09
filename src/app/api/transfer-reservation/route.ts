import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { checkAvailability, createReservation } from "@/lib/db";
import { calculateServerPrice } from "@/lib/pricing";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    const { success } = rateLimit(ip, { maxRequests: 5, windowMs: 60 * 1000 });
    if (!success) {
      return NextResponse.json({ error: "Demasiadas solicitudes. Inténtalo más tarde." }, { status: 429 });
    }

    const body = await request.json();
    const { cabinId, checkIn, checkOut, nights, guests, name, phone, pets } = body;

    if (!cabinId || !checkIn || !checkOut || !name || !phone) {
      return NextResponse.json({ error: "Faltan datos obligatorios" }, { status: 400 });
    }

    const available = await checkAvailability(cabinId, checkIn, checkOut);
    if (!available) {
      return NextResponse.json({ error: "Las fechas seleccionadas ya no están disponibles" }, { status: 409 });
    }

    const totalPrice = await calculateServerPrice({ cabinId, checkIn, checkOut, guests, pets });

    const reservationId = uuidv4();

    await createReservation({
      id: reservationId,
      cabinId,
      checkIn,
      checkOut,
      nights,
      guests,
      totalPrice,
      status: "awaiting_transfer",
      paymentMethod: "transfer",
      name,
      phone,
    });

    return NextResponse.json({ reservationId, totalPrice });
  } catch (error: any) {
    console.error("Error creating transfer reservation:", error);
    return NextResponse.json({ error: "Error interno al crear la reserva" }, { status: 500 });
  }
}
