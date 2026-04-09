import { NextRequest, NextResponse } from "next/server";
import { getBookedDatesForCabin, getCustomPricesForCabin } from "@/lib/db";

export async function GET(request: NextRequest) {
  const cabinId = request.nextUrl.searchParams.get("cabinId");
  if (!cabinId) {
    return NextResponse.json({ error: "cabinId requerido" }, { status: 400 });
  }

  const [booked, customPrices] = await Promise.all([
    getBookedDatesForCabin(cabinId),
    getCustomPricesForCabin(cabinId),
  ]);
  return NextResponse.json({ booked, customPrices });
}
