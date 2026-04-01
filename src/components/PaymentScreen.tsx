"use client";

import { useState, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useTranslations, useLocale } from "next-intl";

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
  const t = useTranslations("Payment");
  const locale = useLocale();

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
          onError(data.error || t("errorPaypal"));
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
          window.location.href = `/${locale}/reserva/exito`;
        } else {
          onError(t("errorProcessing"));
        }
      }}
      onCancel={() => {
        onError(t("cancelled"));
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
  const t = useTranslations("Payment");
  const locale = useLocale();

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

  const handleBizum = async () => {
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
        setError(t("datesUnavailable"));
        setLoading(false);
        return;
      }

      const res = await fetch("/api/bizum-reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });
      const data = await res.json();
      if (data.reservationId) {
        window.location.href = `/${locale}/reserva/bizum?id=${data.reservationId}&checkIn=${checkIn}&checkOut=${checkOut}&total=${totalPrice}`;
      } else {
        setError(data.error || t("errorCreating"));
        setLoading(false);
      }
    } catch {
      setError(t("connectionError"));
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
        setError(t("datesUnavailable"));
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
        window.location.href = `/${locale}/reserva/transferencia?id=${data.reservationId}&checkIn=${checkIn}&checkOut=${checkOut}&total=${totalPrice}`;
      } else {
        setError(data.error || t("errorCreating"));
        setLoading(false);
      }
    } catch {
      setError(t("connectionError"));
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
        {t("back")}
      </button>

      <h3 className="font-display text-2xl font-bold text-text-dark mb-2">
        {t("selectMethod")}
      </h3>

      {/* Booking Summary */}
      <div className="bg-beige/50 rounded-xl p-4 mb-6">
        <p className="font-semibold text-text-dark">{cabinName}</p>
        <p className="text-text-muted text-sm mt-1">
          {new Date(checkIn + "T12:00:00").toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
          })}{" "}
          →{" "}
          {new Date(checkOut + "T12:00:00").toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
          })}{" "}
          · {nights} {t("nightsLabel")} · {guests} {t("guestsLabel")}
        </p>
        <p className="text-primary font-bold text-xl mt-2">{totalPrice}€</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <div className="space-y-4">
        {/* PayPal */}
        {paypalClientId && (
          <div className="border border-beige-dark rounded-xl p-4">
            <p className="text-text-muted text-sm mb-3 text-center font-medium">
              {t("payWithPaypal")}
            </p>
            <PayPalButtonWrapper
              bookingData={bookingData}
              onSuccess={onSuccess}
              onError={(msg) => setError(msg)}
            />
          </div>
        )}

        {/* Bizum */}
        <button
          onClick={handleBizum}
          disabled={loading}
          className="w-full py-4 rounded-xl font-bold text-lg border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {t("payWithBizum")}
        </button>

        {/* Transfer */}
        <button
          onClick={handleTransfer}
          disabled={loading}
          className="w-full py-4 rounded-xl font-bold text-lg border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {t("payWithTransfer")}
        </button>
      </div>

      <p className="text-center text-text-muted text-xs mt-6">
        {t("dataProtected")}
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
