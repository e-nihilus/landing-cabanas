import { NextRequest, NextResponse } from "next/server";
import { getCustomPricesForCabin, setCustomPrice, deleteCustomPrice } from "@/lib/db";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";

function isAuthorized(request: NextRequest): boolean {
  const password = request.headers.get("x-admin-password");
  return password === ADMIN_PASSWORD;
}

// GET: get custom prices for a cabin
export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const cabinId = request.nextUrl.searchParams.get("cabinId");
  if (!cabinId) {
    return NextResponse.json({ error: "cabinId requerido" }, { status: 400 });
  }

  const prices = await getCustomPricesForCabin(cabinId);
  return NextResponse.json({ prices });
}

// POST: set a custom price for specific dates
export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { cabinId, dates, price } = await request.json();
  if (!cabinId || !dates || !price) {
    return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
  }

  const results = [];
  for (const date of dates) {
    const result = await setCustomPrice(cabinId, date, price);
    results.push(result);
  }
  return NextResponse.json({ prices: results });
}

// DELETE: remove custom price for a date
export async function DELETE(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { cabinId, date } = await request.json();
  if (!cabinId || !date) {
    return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
  }

  await deleteCustomPrice(cabinId, date);
  return NextResponse.json({ success: true });
}
