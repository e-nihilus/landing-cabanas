import { NextRequest, NextResponse } from "next/server";
import { checkAvailability } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
  const { success } = rateLimit(ip, { maxRequests: 20, windowMs: 60 * 1000 });
  if (!success) {
    return NextResponse.json({ error: "Demasiadas solicitudes" }, { status: 429 });
  }

  const body = await request.json();
  const { cabinId, checkIn, checkOut } = body;

  if (!cabinId || !checkIn || !checkOut) {
    return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
  }

  const available = await checkAvailability(cabinId, checkIn, checkOut);
  return NextResponse.json({ available });
}
