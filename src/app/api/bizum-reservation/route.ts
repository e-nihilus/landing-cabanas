import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { checkAvailability, createReservation } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cabinId, checkIn, checkOut, nights, guests, totalPrice, name, phone } = body;

    if (!cabinId || !checkIn || !checkOut || !totalPrice || !name || !phone) {
      return NextResponse.json({ error: "Faltan datos obligatorios" }, { status: 400 });
    }

    const available = await checkAvailability(cabinId, checkIn, checkOut);
    if (!available) {
      return NextResponse.json({ error: "Las fechas seleccionadas ya no están disponibles" }, { status: 409 });
    }

    const reservationId = uuidv4();

    await createReservation({
      id: reservationId,
      cabinId,
      checkIn,
      checkOut,
      nights,
      guests,
      totalPrice,
      status: "awaiting_bizum",
      paymentMethod: "bizum",
      name,
      phone,
    });

    return NextResponse.json({ reservationId });
  } catch (error: any) {
    console.error("Error creating bizum reservation:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
