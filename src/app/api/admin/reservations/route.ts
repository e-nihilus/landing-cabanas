import { NextRequest, NextResponse } from "next/server";
import { getTransferReservations, updateReservationStatus } from "@/lib/db";
import { getAdminToken, unauthorized } from "@/lib/admin-auth";

export async function GET(request: NextRequest) {
  const token = await getAdminToken(request);
  if (!token) return unauthorized();

  const reservations = await getTransferReservations(token);
  return NextResponse.json({ reservations });
}

export async function PATCH(request: NextRequest) {
  const token = await getAdminToken(request);
  if (!token) return unauthorized();

  const { id, action } = await request.json();
  if (!id || !["confirm", "cancel"].includes(action)) {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }

  const status = action === "confirm" ? "confirmed" : "cancelled";
  await updateReservationStatus(token, id, status);
  return NextResponse.json({ success: true, status });
}
