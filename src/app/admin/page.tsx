"use client";

import { useState, useEffect, useCallback } from "react";

interface Reservation {
  id: string;
  cabinId: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  totalPrice: number;
  status: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [actionLoading, setActionLoading] = useState<string | null>(null);

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

  const pending = reservations.filter((r) => r.status === "awaiting_transfer");
  const confirmed = reservations.filter((r) => r.status === "confirmed");

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Reservas por Transferencia
          </h1>
          <button
            onClick={() => fetchReservations(password)}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors text-sm"
          >
            ↻ Actualizar
          </button>
        </div>

        {/* Pending transfers */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          ⏳ Pendientes de pago ({pending.length})
        </h2>
        {pending.length === 0 ? (
          <p className="text-gray-500 mb-8 bg-white rounded-xl p-6">
            No hay reservas pendientes de transferencia.
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
                        Pendiente
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
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          ✅ Confirmadas ({confirmed.length})
        </h2>
        {confirmed.length === 0 ? (
          <p className="text-gray-500 bg-white rounded-xl p-6">
            No hay reservas confirmadas por transferencia.
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
    </div>
  );
}
