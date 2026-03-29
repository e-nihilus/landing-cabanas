import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { v4 as uuidv4 } from "uuid";
import { checkAvailability, createReservation } from "@/lib/db";
import { cabins } from "@/lib/data";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cabinId, checkIn, checkOut, nights, guests, totalPrice, name, email, phone } = body;

    if (!cabinId || !checkIn || !checkOut || !totalPrice || !name || !email || !phone) {
      return NextResponse.json({ error: "Faltan datos obligatorios" }, { status: 400 });
    }

    // Validate availability in backend
    const available = checkAvailability(cabinId, checkIn, checkOut);
    if (!available) {
      return NextResponse.json({ error: "Las fechas seleccionadas ya no están disponibles" }, { status: 409 });
    }

    const cabin = cabins.find((c) => c.id === cabinId);
    const cabinName = cabin?.name || cabinId;

    // Create reservation as pending
    const reservationId = uuidv4();
    
    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `Reserva ${cabinName}`,
              description: `${checkIn} → ${checkOut} · ${nights} noches · ${guests} huéspedes`,
            },
            unit_amount: Math.round(totalPrice * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/reserva/exito?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/reserva/cancelada`,
      customer_email: email,
      metadata: {
        reservationId,
        cabinId,
        checkIn,
        checkOut,
      },
    });

    // Save reservation with stripe session id
    createReservation({
      id: reservationId,
      cabinId,
      checkIn,
      checkOut,
      nights,
      guests,
      totalPrice,
      status: "pending",
      paymentMethod: "stripe",
      name,
      email,
      phone,
      stripeSessionId: session.id,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
