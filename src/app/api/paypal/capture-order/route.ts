import { NextRequest, NextResponse } from "next/server";
import { updateReservationStatus, getReservationById } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const { orderId, reservationId } = await request.json();

    if (!orderId || !reservationId) {
      return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
    }

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
    const { access_token } = await tokenRes.json();

    const captureRes = await fetch(
      `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const captureData = await captureRes.json();

    if (captureData.status === "COMPLETED") {
      updateReservationStatus(reservationId, "confirmed");
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Pago no completado" }, { status: 400 });
  } catch (error: any) {
    console.error("Error capturing PayPal order:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
