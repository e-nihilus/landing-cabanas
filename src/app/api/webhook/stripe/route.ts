import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getReservationByStripeSession, updateReservationStatus } from "@/lib/db";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
});

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const reservation = await getReservationByStripeSession(session.id);
    if (reservation) {
      await updateReservationStatus(reservation.id, "confirmed");
    }
  }

  return NextResponse.json({ received: true });
}
