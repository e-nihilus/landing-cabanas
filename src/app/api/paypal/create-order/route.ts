import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { checkAvailability, createReservation } from "@/lib/db";
import { cabins } from "@/lib/data";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cabinId, checkIn, checkOut, nights, guests, totalPrice, name, email, phone } = body;

    if (!cabinId || !checkIn || !checkOut || !totalPrice || !name || !email || !phone) {
      return NextResponse.json({ error: "Faltan datos obligatorios" }, { status: 400 });
    }

    const available = await checkAvailability(cabinId, checkIn, checkOut);
    if (!available) {
      return NextResponse.json({ error: "Las fechas seleccionadas ya no están disponibles" }, { status: 409 });
    }

    const cabin = cabins.find((c) => c.id === cabinId);
    const cabinName = cabin?.name || cabinId;

    const reservationId = uuidv4();

    // Create PayPal order via REST API
    const auth = Buffer.from(
      `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`
    ).toString("base64");

    const tokenRes = await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });
    const tokenData = await tokenRes.json();
    if (!tokenRes.ok || !tokenData.access_token) {
      console.error("PayPal token error:", tokenData);
      return NextResponse.json({ error: "Error autenticando con PayPal" }, { status: 500 });
    }
    const { access_token } = tokenData;

    const orderRes = await fetch("https://api-m.sandbox.paypal.com/v2/checkout/orders", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            reference_id: reservationId,
            description: `Reserva ${cabinName} · ${checkIn} → ${checkOut}`,
            amount: {
              currency_code: "EUR",
              value: totalPrice.toFixed(2),
            },
          },
        ],
      }),
    });
    const order = await orderRes.json();
    if (!orderRes.ok || !order.id) {
      console.error("PayPal order error:", order);
      return NextResponse.json({ error: "Error creando orden en PayPal" }, { status: 500 });
    }

    // Save reservation as pending
    await createReservation({
      id: reservationId,
      cabinId,
      checkIn,
      checkOut,
      nights,
      guests,
      totalPrice,
      status: "pending",
      paymentMethod: "paypal",
      name,
      email,
      phone,
      paypalOrderId: order.id,
    });

    return NextResponse.json({ orderId: order.id, reservationId });
  } catch (error: any) {
    console.error("Error creating PayPal order:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
