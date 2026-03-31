import { NextRequest, NextResponse } from "next/server";
import { getAllReservationsForCabin, createAdminBlock, deleteAdminBlock, cancelReservation } from "@/lib/db";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";

function isAuthorized(request: NextRequest): boolean {
  const password = request.headers.get("x-admin-password");
  return password === ADMIN_PASSWORD;
}

// GET: get all reservations for a cabin (including admin blocks)
export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const cabinId = request.nextUrl.searchParams.get("cabinId");
  if (!cabinId) {
    return NextResponse.json({ error: "cabinId requerido" }, { status: 400 });
  }

  const reservations = await getAllReservationsForCabin(cabinId);
  return NextResponse.json({ reservations });
}

// POST: create a manual admin block
export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { cabinId, checkIn, checkOut } = await request.json();
  if (!cabinId || !checkIn || !checkOut) {
    return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
  }

  const reservation = await createAdminBlock(cabinId, checkIn, checkOut);
  return NextResponse.json({ reservation });
}

// DELETE: delete an admin block or cancel a reservation
export async function DELETE(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { id, type } = await request.json();
  if (!id) {
    return NextResponse.json({ error: "id requerido" }, { status: 400 });
  }

  if (type === "admin") {
    await deleteAdminBlock(id);
  } else {
    await cancelReservation(id);
  }

  return NextResponse.json({ success: true });
}
