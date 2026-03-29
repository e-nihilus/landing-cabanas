import { NextRequest, NextResponse } from "next/server";
import { getBookedDatesForCabin } from "@/lib/db";

export async function GET(request: NextRequest) {
  const cabinId = request.nextUrl.searchParams.get("cabinId");
  if (!cabinId) {
    return NextResponse.json({ error: "cabinId requerido" }, { status: 400 });
  }

  const booked = await getBookedDatesForCabin(cabinId);
  return NextResponse.json({ booked });
}
