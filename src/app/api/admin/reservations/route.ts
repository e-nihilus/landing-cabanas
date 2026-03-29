import { NextRequest, NextResponse } from "next/server";
import { getTransferReservations, updateReservationStatus } from "@/lib/db";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";

function isAuthorized(request: NextRequest): boolean {
  const password = request.headers.get("x-admin-password");
  return password === ADMIN_PASSWORD;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }
  const reservations = getTransferReservations();
  return NextResponse.json({ reservations });
}

export async function PATCH(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { id, action } = await request.json();
  if (!id || !["confirm", "cancel"].includes(action)) {
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }

  const status = action === "confirm" ? "confirmed" : "cancelled";
  updateReservationStatus(id, status);
  return NextResponse.json({ success: true, status });
}
