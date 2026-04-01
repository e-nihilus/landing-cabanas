"use client";

import { useState, useCallback, useEffect } from "react";

interface Reservation {
  id: string;
  cabinId: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  totalPrice: number;
  status: string;
  paymentMethod?: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

type AdminTab = "transfers" | "calendar";

const CALENDARS = [
  { id: "cabana-1", label: "Cabaña Momentos Únicos" },
  { id: "cabana-2", label: "Cabaña Vistas Impresionantes" },
  { id: "piscina", label: "Piscina" },
];

const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const WEEKDAYS = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function formatDateISO(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function generateDatesBetween(checkIn: string, checkOut: string): Date[] {
  const dates: Date[] = [];
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const current = new Date(start);
  while (current < end) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

// ─── Calendar Management Component ───────────────────────────────
function CalendarManager({ password }: { password: string }) {
  const [selectedCalendar, setSelectedCalendar] = useState(CALENDARS[0].id);
  const [calendarReservations, setCalendarReservations] = useState<Reservation[]>([]);
  const [calendarLoading, setCalendarLoading] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [selectStart, setSelectStart] = useState<Date | null>(null);
  const [selectEnd, setSelectEnd] = useState<Date | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [calendarError, setCalendarError] = useState("");

  const fetchCalendarData = useCallback(async (cabinId: string) => {
    setCalendarLoading(true);
    setCalendarError("");
    try {
      const res = await fetch(`/api/admin/calendar?cabinId=${cabinId}`, {
        headers: { "x-admin-password": password },
      });
      if (res.ok) {
        const data = await res.json();
        setCalendarReservations(data.reservations);
      }
    } catch {
      setCalendarError("Error cargando calendario");
    }
    setCalendarLoading(false);
  }, [password]);

  const handleCalendarChange = (cabinId: string) => {
    setSelectedCalendar(cabinId);
    setSelectStart(null);
    setSelectEnd(null);
    fetchCalendarData(cabinId);
  };

  // Initial load
  useEffect(() => {
    fetchCalendarData(selectedCalendar);
  }, []);

  const bookedDates = calendarReservations.flatMap((r) =>
    generateDatesBetween(r.checkIn, r.checkOut).map((d) => ({
      date: d,
      reservationId: r.id,
      isAdmin: r.paymentMethod === "admin",
      name: r.name,
    }))
  );

  const handleMonthChange = (dir: number) => {
    let newMonth = calendarMonth + dir;
    let newYear = calendarYear;
    if (newMonth > 11) { newMonth = 0; newYear++; }
    else if (newMonth < 0) { newMonth = 11; newYear--; }
    setCalendarMonth(newMonth);
    setCalendarYear(newYear);
  };

  const handleDateClick = (date: Date) => {
    if (!selectStart || (selectStart && selectEnd)) {
      setSelectStart(date);
      setSelectEnd(null);
    } else {
      if (date < selectStart) {
        setSelectStart(date);
        setSelectEnd(null);
      } else {
        setSelectEnd(date);
      }
    }
  };

  const handleBlockDates = async () => {
    if (!selectStart || !selectEnd) return;
    setActionLoading("block");
    try {
      const checkOut = new Date(selectEnd);
      checkOut.setDate(checkOut.getDate() + 1);
      const res = await fetch("/api/admin/calendar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify({
          cabinId: selectedCalendar,
          checkIn: formatDateISO(selectStart),
          checkOut: formatDateISO(checkOut),
        }),
      });
      if (res.ok) {
        setSelectStart(null);
        setSelectEnd(null);
        fetchCalendarData(selectedCalendar);
      }
    } catch {
      setCalendarError("Error bloqueando fechas");
    }
    setActionLoading(null);
  };

  const handleReleaseDates = async (id: string, isAdmin: boolean) => {
    if (!confirm(isAdmin ? "¿Eliminar este bloqueo manual?" : "¿Cancelar esta reserva y liberar las fechas?")) return;
    setActionLoading(id);
    try {
      const res = await fetch("/api/admin/calendar", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify({ id, type: isAdmin ? "admin" : "reservation" }),
      });
      if (res.ok) {
        fetchCalendarData(selectedCalendar);
      }
    } catch {
      setCalendarError("Error liberando fechas");
    }
    setActionLoading(null);
  };

  const daysInMonth = getDaysInMonth(calendarYear, calendarMonth);
  const firstDay = getFirstDayOfMonth(calendarYear, calendarMonth);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days: (Date | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(new Date(calendarYear, calendarMonth, d));

  const activeReservations = calendarReservations.filter((r) => r.status !== "cancelled");
  const adminBlocks = activeReservations.filter((r) => r.paymentMethod === "admin");
  const realReservations = activeReservations.filter((r) => r.paymentMethod !== "admin");

  return (
    <div>
      {/* Calendar selector tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {CALENDARS.map((cal) => (
          <button
            key={cal.id}
            onClick={() => handleCalendarChange(cal.id)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              selectedCalendar === cal.id
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {cal.label}
          </button>
        ))}
      </div>

      {calendarError && (
        <p className="text-red-500 text-sm mb-4">{calendarError}</p>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Calendar */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => handleMonthChange(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500"
            >
              ‹
            </button>
            <h3 className="text-lg font-semibold text-gray-800">
              {MONTHS[calendarMonth]} {calendarYear}
            </h3>
            <button
              onClick={() => handleMonthChange(1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500"
            >
              ›
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {WEEKDAYS.map((d) => (
              <div key={d} className="text-center text-xs font-medium text-gray-400 py-2">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days.map((date, i) => {
              if (!date) return <div key={`empty-${i}`} />;

              const isPast = date < today;
              const bookedInfo = bookedDates.find((b) => isSameDay(b.date, date));
              const isBooked = !!bookedInfo;
              const isAdminBlock = bookedInfo?.isAdmin;
              const isSelectStart = selectStart && isSameDay(date, selectStart);
              const isSelectEnd = selectEnd && isSameDay(date, selectEnd);
              const isInSelection = selectStart && selectEnd && date >= selectStart && date <= selectEnd;

              return (
                <button
                  key={date.toISOString()}
                  onClick={() => handleDateClick(date)}
                  disabled={isPast}
                  title={isBooked ? (isAdminBlock ? "Bloqueo admin" : `Reserva: ${bookedInfo.name}`) : undefined}
                  className={`relative aspect-square flex items-center justify-center text-sm rounded-lg transition-all ${
                    isPast
                      ? "text-gray-300 cursor-not-allowed"
                      : isSelectStart || isSelectEnd
                      ? "bg-blue-600 text-white font-bold"
                      : isInSelection
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : isAdminBlock
                      ? "bg-orange-200 text-orange-800 font-medium"
                      : isBooked
                      ? "bg-red-200 text-red-800 font-medium"
                      : "text-gray-700 hover:bg-gray-100 cursor-pointer"
                  }`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mt-4 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-blue-600 rounded" /> Seleccionado
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-red-200 rounded" /> Reserva cliente
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-orange-200 rounded" /> Bloqueo admin
            </span>
          </div>

          {/* Block action */}
          {selectStart && selectEnd && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800 mb-3">
                <strong>Bloquear:</strong>{" "}
                {selectStart.toLocaleDateString("es-ES")} → {selectEnd.toLocaleDateString("es-ES")}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleBlockDates}
                  disabled={actionLoading === "block"}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50 text-sm"
                >
                  {actionLoading === "block" ? "Bloqueando..." : "🔒 Bloquear fechas"}
                </button>
                <button
                  onClick={() => { setSelectStart(null); setSelectEnd(null); }}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-sm"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
          {selectStart && !selectEnd && (
            <p className="mt-4 text-sm text-blue-600">
              Selecciona la fecha de fin para bloquear el rango.
            </p>
          )}
        </div>

        {/* Reservations list */}
        <div className="space-y-4">
          {calendarLoading && (
            <p className="text-gray-500 text-sm">Cargando...</p>
          )}

          {/* Admin blocks */}
          {adminBlocks.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-orange-700 mb-2">
                🔒 Bloqueos manuales ({adminBlocks.length})
              </h4>
              <div className="space-y-2">
                {adminBlocks.map((r) => (
                  <div
                    key={r.id}
                    className="bg-white rounded-lg p-4 shadow-sm border border-orange-200 flex items-center justify-between gap-3"
                  >
                    <div>
                      <p className="text-sm text-gray-800 font-medium">
                        {new Date(r.checkIn).toLocaleDateString("es-ES")} → {new Date(r.checkOut).toLocaleDateString("es-ES")}
                      </p>
                      <p className="text-xs text-gray-500">{r.nights} días bloqueados</p>
                    </div>
                    <button
                      onClick={() => handleReleaseDates(r.id, true)}
                      disabled={actionLoading === r.id}
                      className="px-3 py-1.5 bg-orange-100 text-orange-700 rounded-lg font-medium hover:bg-orange-200 transition-colors disabled:opacity-50 text-xs"
                    >
                      {actionLoading === r.id ? "..." : "🔓 Liberar"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Real reservations */}
          {realReservations.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                📅 Reservas activas ({realReservations.length})
              </h4>
              <div className="space-y-2">
                {realReservations.map((r) => (
                  <div
                    key={r.id}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-between gap-3"
                  >
                    <div>
                      <p className="text-sm text-gray-800 font-medium">
                        {r.name}
                        <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                          r.status === "confirmed"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}>
                          {r.status === "confirmed" ? "Confirmada" : r.status === "awaiting_transfer" ? "Pendiente" : r.status}
                        </span>
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(r.checkIn).toLocaleDateString("es-ES")} → {new Date(r.checkOut).toLocaleDateString("es-ES")} · {r.nights} noches · {r.totalPrice}€
                      </p>
                      {(r.email || r.phone) && (
                        <p className="text-xs text-gray-400">
                          {r.email}{r.email && r.phone && " · "}{r.phone && `📞 ${r.phone}`}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => handleReleaseDates(r.id, false)}
                      disabled={actionLoading === r.id}
                      className="px-3 py-1.5 bg-red-100 text-red-600 rounded-lg font-medium hover:bg-red-200 transition-colors disabled:opacity-50 text-xs whitespace-nowrap"
                    >
                      {actionLoading === r.id ? "..." : "✕ Cancelar"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!calendarLoading && adminBlocks.length === 0 && realReservations.length === 0 && (
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
              <p className="text-gray-500 text-sm">No hay reservas ni bloqueos para este calendario.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Admin Page ─────────────────────────────────────────────
export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<AdminTab>("transfers");

  const fetchReservations = useCallback(async (pwd: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/reservations", {
        headers: { "x-admin-password": pwd },
      });
      if (!res.ok) {
        setError("Contraseña incorrecta");
        setAuthenticated(false);
        setLoading(false);
        return;
      }
      const data = await res.json();
      setReservations(data.reservations);
      setAuthenticated(true);
    } catch {
      setError("Error de conexión");
    }
    setLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchReservations(password);
  };

  const handleAction = async (id: string, action: "confirm" | "cancel") => {
    setActionLoading(id);
    try {
      const res = await fetch("/api/admin/reservations", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify({ id, action }),
      });
      if (res.ok) {
        fetchReservations(password);
      }
    } catch {
      setError("Error al actualizar");
    }
    setActionLoading(null);
  };

  const getTimeRemaining = (createdAt: string) => {
    const created = new Date(createdAt + "Z");
    const expires = new Date(created.getTime() + 48 * 60 * 60 * 1000);
    const now = new Date();
    const diff = expires.getTime() - now.getTime();
    if (diff <= 0) return "Expirada";
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl p-8 shadow-lg max-w-sm w-full"
        >
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Panel de Admin
          </h1>
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-4 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? "Cargando..." : "Entrar"}
          </button>
        </form>
      </div>
    );
  }

  const pending = reservations.filter((r) => r.status === "awaiting_transfer" || r.status === "awaiting_bizum");
  const confirmed = reservations.filter((r) => r.status === "confirmed");

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Panel de Admin</h1>
        </div>

        {/* Tab navigation */}
        <div className="flex gap-1 mb-8 bg-white rounded-xl p-1 shadow-sm border border-gray-200 w-fit">
          <button
            onClick={() => setActiveTab("transfers")}
            className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-colors ${
              activeTab === "transfers"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            💳 Transferencias / Bizum
          </button>
          <button
            onClick={() => setActiveTab("calendar")}
            className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-colors ${
              activeTab === "calendar"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            📅 Gestión Calendarios
          </button>
        </div>

        {activeTab === "calendar" ? (
          <CalendarManager password={password} />
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Reservas por Transferencia / Bizum
              </h2>
              <button
                onClick={() => fetchReservations(password)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors text-sm"
              >
                ↻ Actualizar
              </button>
            </div>

            {/* Pending transfers */}
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              ⏳ Pendientes de pago ({pending.length})
            </h3>
            {pending.length === 0 ? (
              <p className="text-gray-500 mb-8 bg-white rounded-xl p-6">
                No hay reservas pendientes de transferencia / bizum.
              </p>
            ) : (
              <div className="space-y-4 mb-8">
                {pending.map((r) => (
                  <div
                    key={r.id}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-bold text-gray-800">{r.name}</span>
                          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-medium">
                            Pendiente ({r.status === "awaiting_bizum" ? "Bizum" : "Transferencia"})
                          </span>
                          <span className="text-xs text-gray-500">
                            Expira en: {getTimeRemaining(r.createdAt)}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          <strong>{r.cabinId}</strong> ·{" "}
                          {new Date(r.checkIn).toLocaleDateString("es-ES")} →{" "}
                          {new Date(r.checkOut).toLocaleDateString("es-ES")} ·{" "}
                          {r.nights} noches · {r.guests} huéspedes
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                          📧 {r.email} · 📞 {r.phone}
                        </p>
                        <p className="text-blue-600 font-bold text-lg mt-1">
                          {r.totalPrice}€
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          Concepto: RESERVA {r.checkIn} - {r.checkOut}
                        </p>
                      </div>
                      <div className="flex gap-2 sm:flex-col">
                        <button
                          onClick={() => handleAction(r.id, "confirm")}
                          disabled={actionLoading === r.id}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 text-sm"
                        >
                          ✓ Confirmar
                        </button>
                        <button
                          onClick={() => handleAction(r.id, "cancel")}
                          disabled={actionLoading === r.id}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors disabled:opacity-50 text-sm"
                        >
                          ✕ Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Confirmed transfers */}
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              ✅ Confirmadas ({confirmed.length})
            </h3>
            {confirmed.length === 0 ? (
              <p className="text-gray-500 bg-white rounded-xl p-6">
                No hay reservas confirmadas por transferencia / bizum.
              </p>
            ) : (
              <div className="space-y-4">
                {confirmed.map((r) => (
                  <div
                    key={r.id}
                    className="bg-white rounded-xl p-6 shadow-sm border border-green-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-bold text-gray-800">{r.name}</span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                            Confirmada
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          <strong>{r.cabinId}</strong> ·{" "}
                          {new Date(r.checkIn).toLocaleDateString("es-ES")} →{" "}
                          {new Date(r.checkOut).toLocaleDateString("es-ES")} ·{" "}
                          {r.nights} noches · {r.totalPrice}€
                        </p>
                        {(r.email || r.phone) && (
                          <p className="text-gray-400 text-sm mt-1">
                            {r.email && <>📧 {r.email}</>}{r.email && r.phone && " · "}{r.phone && <>📞 {r.phone}</>}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => handleAction(r.id, "cancel")}
                        disabled={actionLoading === r.id}
                        className="px-4 py-2 bg-red-100 text-red-600 rounded-lg font-semibold hover:bg-red-200 transition-colors disabled:opacity-50 text-sm"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
