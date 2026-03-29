"use client";

import { useState, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface PaymentScreenProps {
  cabinId: string;
  cabinName: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  totalPrice: number;
  name: string;
  email: string;
  phone: string;
  onBack: () => void;
  onSuccess: () => void;
}

function PayPalButtonWrapper({
  bookingData,
  onSuccess,
  onError,
}: {
  bookingData: Record<string, any>;
  onSuccess: () => void;
  onError: (msg: string) => void;
}) {
  const reservationIdRef = useRef<string>("");

  return (
    <PayPalButtons
      style={{ layout: "horizontal", tagline: false }}
      createOrder={async () => {
        const res = await fetch("/api/paypal/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingData),
        });
        const data = await res.json();
        if (!res.ok || data.error) {
          onError(data.error || "Error creando orden de PayPal");
          throw new Error(data.error);
        }
        reservationIdRef.current = data.reservationId;
        return data.orderId;
      }}
      onApprove={async (data) => {
        const res = await fetch("/api/paypal/capture-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderId: data.orderID,
            reservationId: reservationIdRef.current,
          }),
        });
        const result = await res.json();
        if (result.success) {
          onSuccess();
          window.location.href = "/reserva/exito";
        } else {
          onError("Error al procesar el pago con PayPal");
        }
      }}
      onCancel={() => {
        onError("Pago cancelado por el usuario.");
      }}
    />
  );
}

export default function PaymentScreen({
  cabinId,
  cabinName,
  checkIn,
  checkOut,
  nights,
  guests,
  totalPrice,
  name,
  email,
  phone,
  onBack,
  onSuccess,
}: PaymentScreenProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const bookingData = {
    cabinId,
    checkIn,
    checkOut,
    nights,
    guests,
    totalPrice,
    name,
    email,
    phone,
  };

  const handleStripe = async () => {
    setLoading(true);
    setError("");
    try {
      // Check availability first
      const availRes = await fetch("/api/check-availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cabinId, checkIn, checkOut }),
      });
      const availData = await availRes.json();
      if (!availData.available) {
        setError("Las fechas seleccionadas ya no están disponibles.");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Error al crear la sesión de pago");
        setLoading(false);
      }
    } catch {
      setError("Error de conexión. Inténtalo de nuevo.");
      setLoading(false);
    }
  };

  const handleTransfer = async () => {
    setLoading(true);
    setError("");
    try {
      const availRes = await fetch("/api/check-availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cabinId, checkIn, checkOut }),
      });
      const availData = await availRes.json();
      if (!availData.available) {
        setError("Las fechas seleccionadas ya no están disponibles.");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/transfer-reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });
      const data = await res.json();
      if (data.reservationId) {
        window.location.href = `/reserva/transferencia?id=${data.reservationId}&checkIn=${checkIn}&checkOut=${checkOut}&total=${totalPrice}`;
      } else {
        setError(data.error || "Error al crear la reserva");
        setLoading(false);
      }
    } catch {
      setError("Error de conexión. Inténtalo de nuevo.");
      setLoading(false);
    }
  };

  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  const content = (
    <div className="p-6 sm:p-10 max-w-lg mx-auto">
      <button
        onClick={onBack}
        className="text-primary hover:text-primary-light font-medium text-sm mb-6 flex items-center gap-1"
      >
        ← Volver
      </button>

      <h3 className="font-display text-2xl font-bold text-text-dark mb-2">
        Selecciona método de pago
      </h3>

      {/* Booking Summary */}
      <div className="bg-beige/50 rounded-xl p-4 mb-6">
        <p className="font-semibold text-text-dark">{cabinName}</p>
        <p className="text-text-muted text-sm mt-1">
          {new Date(checkIn + "T12:00:00").toLocaleDateString("es-ES", {
            weekday: "short",
            day: "numeric",
            month: "short",
          })}{" "}
          →{" "}
          {new Date(checkOut + "T12:00:00").toLocaleDateString("es-ES", {
            weekday: "short",
            day: "numeric",
            month: "short",
          })}{" "}
          · {nights} noches · {guests} huéspedes
        </p>
        <p className="text-primary font-bold text-xl mt-2">{totalPrice}€</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <div className="space-y-4">
        {/* Stripe - Tarjeta / Bizum */}
        <button
          onClick={handleStripe}
          disabled={loading}
          className="w-full py-4 rounded-xl font-bold text-lg bg-primary text-white hover:bg-primary-light hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Procesando...
            </span>
          ) : (
            <>
              💳 Pagar con Tarjeta / Bizum
            </>
          )}
        </button>

        {/* PayPal */}
        {paypalClientId && (
          <div className="border border-beige-dark rounded-xl p-4">
            <p className="text-text-muted text-sm mb-3 text-center font-medium">
              Pagar con PayPal
            </p>
            <PayPalButtonWrapper
              bookingData={bookingData}
              onSuccess={onSuccess}
              onError={(msg) => setError(msg)}
            />
          </div>
        )}

        {/* Transfer */}
        <button
          onClick={handleTransfer}
          disabled={loading}
          className="w-full py-4 rounded-xl font-bold text-lg border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          🏦 Pagar por Transferencia
        </button>
      </div>

      <p className="text-center text-text-muted text-xs mt-6">
        Tus datos de pago están protegidos. Cancelación gratuita hasta 48h
        antes.
      </p>
    </div>
  );

  if (paypalClientId) {
    return (
      <PayPalScriptProvider
        options={{
          clientId: paypalClientId,
          currency: "EUR",
          intent: "capture",
        }}
        deferLoading={false}
      >
        {content}
      </PayPalScriptProvider>
    );
  }

  return content;
}
