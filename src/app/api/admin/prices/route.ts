import { NextRequest, NextResponse } from "next/server";
import { getAdminCustomPrices, setCustomPrice, deleteCustomPrice } from "@/lib/db";
import { getAdminToken, unauthorized } from "@/lib/admin-auth";

export async function GET(request: NextRequest) {
  const token = await getAdminToken(request);
  if (!token) return unauthorized();

  const cabinId = request.nextUrl.searchParams.get("cabinId");
  if (!cabinId) {
    return NextResponse.json({ error: "cabinId requerido" }, { status: 400 });
  }

  const prices = await getAdminCustomPrices(token, cabinId);
  return NextResponse.json({ prices });
}

export async function POST(request: NextRequest) {
  const token = await getAdminToken(request);
  if (!token) return unauthorized();

  const { cabinId, dates, price } = await request.json();
  if (!cabinId || !dates || !price) {
    return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
  }

  const results = [];
  for (const date of dates) {
    const result = await setCustomPrice(token, cabinId, date, price);
    results.push(result);
  }
  return NextResponse.json({ prices: results });
}

export async function DELETE(request: NextRequest) {
  const token = await getAdminToken(request);
  if (!token) return unauthorized();

  const { cabinId, date } = await request.json();
  if (!cabinId || !date) {
    return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
  }

  await deleteCustomPrice(token, cabinId, date);
  return NextResponse.json({ success: true });
}
