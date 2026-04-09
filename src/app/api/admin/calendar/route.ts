import { NextRequest, NextResponse } from "next/server";
import { getAllReservationsForCabin, createAdminBlock, deleteAdminBlock, cancelReservation } from "@/lib/db";
import { getAdminToken, unauthorized } from "@/lib/admin-auth";

export async function GET(request: NextRequest) {
  const token = await getAdminToken(request);
  if (!token) return unauthorized();

  const cabinId = request.nextUrl.searchParams.get("cabinId");
  if (!cabinId) {
    return NextResponse.json({ error: "cabinId requerido" }, { status: 400 });
  }

  const reservations = await getAllReservationsForCabin(token, cabinId);
  return NextResponse.json({ reservations });
}

export async function POST(request: NextRequest) {
  const token = await getAdminToken(request);
  if (!token) return unauthorized();

  const { cabinId, checkIn, checkOut } = await request.json();
  if (!cabinId || !checkIn || !checkOut) {
    return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
  }

  const reservation = await createAdminBlock(token, cabinId, checkIn, checkOut);
  return NextResponse.json({ reservation });
}

export async function DELETE(request: NextRequest) {
  const token = await getAdminToken(request);
  if (!token) return unauthorized();

  const { id, type } = await request.json();
  if (!id) {
    return NextResponse.json({ error: "id requerido" }, { status: 400 });
  }

  if (type === "admin") {
    await deleteAdminBlock(token, id);
  } else {
    await cancelReservation(token, id);
  }

  return NextResponse.json({ success: true });
}
