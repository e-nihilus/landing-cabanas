import Database from "better-sqlite3";
import path from "path";

const DB_PATH = path.join(process.cwd(), "reservas.db");

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma("journal_mode = WAL");
    db.exec(`
      CREATE TABLE IF NOT EXISTS reservations (
        id TEXT PRIMARY KEY,
        cabinId TEXT NOT NULL,
        checkIn TEXT NOT NULL,
        checkOut TEXT NOT NULL,
        nights INTEGER NOT NULL,
        guests INTEGER NOT NULL,
        totalPrice REAL NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending',
        paymentMethod TEXT NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        stripeSessionId TEXT,
        paypalOrderId TEXT,
        createdAt TEXT NOT NULL DEFAULT (datetime('now'))
      )
    `);
  }
  return db;
}

export interface Reservation {
  id: string;
  cabinId: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  totalPrice: number;
  status: "pending" | "confirmed" | "awaiting_transfer" | "cancelled";
  paymentMethod: "stripe" | "paypal" | "transfer";
  name: string;
  email: string;
  phone: string;
  stripeSessionId?: string;
  paypalOrderId?: string;
  createdAt: string;
}

export function createReservation(data: Omit<Reservation, "createdAt">): Reservation {
  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO reservations (id, cabinId, checkIn, checkOut, nights, guests, totalPrice, status, paymentMethod, name, email, phone, stripeSessionId, paypalOrderId)
    VALUES (@id, @cabinId, @checkIn, @checkOut, @nights, @guests, @totalPrice, @status, @paymentMethod, @name, @email, @phone, @stripeSessionId, @paypalOrderId)
  `);
  stmt.run({ stripeSessionId: null, paypalOrderId: null, ...data });
  return getReservationById(data.id)!;
}

export function getReservationById(id: string): Reservation | null {
  const db = getDb();
  return db.prepare("SELECT * FROM reservations WHERE id = ?").get(id) as Reservation | null;
}

export function getReservationByStripeSession(sessionId: string): Reservation | null {
  const db = getDb();
  return db.prepare("SELECT * FROM reservations WHERE stripeSessionId = ?").get(sessionId) as Reservation | null;
}

export function updateReservationStatus(id: string, status: Reservation["status"]): void {
  const db = getDb();
  db.prepare("UPDATE reservations SET status = ? WHERE id = ?").run(status, id);
}

const ACTIVE_RESERVATION_FILTER = `
  status = 'confirmed'
  OR (status = 'pending' AND createdAt > datetime('now', '-24 hours'))
  OR (status = 'awaiting_transfer' AND createdAt > datetime('now', '-48 hours'))
`;

export function getBookedDatesForCabin(cabinId: string): { checkIn: string; checkOut: string }[] {
  const db = getDb();
  const rows = db.prepare(
    `SELECT checkIn, checkOut FROM reservations WHERE cabinId = ? AND (${ACTIVE_RESERVATION_FILTER})`
  ).all(cabinId) as { checkIn: string; checkOut: string }[];
  return rows;
}

export function checkAvailability(cabinId: string, checkIn: string, checkOut: string): boolean {
  const db = getDb();
  const conflict = db.prepare(`
    SELECT COUNT(*) as count FROM reservations
    WHERE cabinId = ?
      AND (${ACTIVE_RESERVATION_FILTER})
      AND checkIn < ?
      AND checkOut > ?
  `).get(cabinId, checkOut, checkIn) as { count: number };
  return conflict.count === 0;
}

export function getTransferReservations(): Reservation[] {
  const db = getDb();
  return db.prepare(
    "SELECT * FROM reservations WHERE paymentMethod = 'transfer' AND status IN ('awaiting_transfer', 'confirmed') ORDER BY createdAt DESC"
  ).all() as Reservation[];
}
