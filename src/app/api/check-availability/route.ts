import { NextRequest, NextResponse } from "next/server";
import { checkAvailability } from "@/lib/db";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { cabinId, checkIn, checkOut } = body;

  if (!cabinId || !checkIn || !checkOut) {
    return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
  }

  const available = await checkAvailability(cabinId, checkIn, checkOut);
  return NextResponse.json({ available });
}
