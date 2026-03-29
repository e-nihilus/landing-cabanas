"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

function TransferenciaContent() {
  const searchParams = useSearchParams();
  const reservationId = searchParams.get("id") || "";
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const total = searchParams.get("total") || "";

  const iban = process.env.NEXT_PUBLIC_BANK_IBAN || "ES00 0000 0000 0000 0000 0000";
  const beneficiary = process.env.NEXT_PUBLIC_BANK_BENEFICIARY || "Cabañas Chica de Navalmelendro";
  const concepto = `RESERVA ${checkIn} - ${checkOut}`;

  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-lg w-full">
        <div className="text-center mb-8">
          <div className="text-7xl mb-6">🏦</div>
          <h1 className="font-display text-3xl font-bold text-text-dark mb-4">
            Transferencia Bancaria
          </h1>
          <p className="text-text-muted text-lg">
            Realiza la transferencia con los siguientes datos. Tu reserva quedará
            confirmada cuando verifiquemos el pago.
          </p>
        </div>

        <div className="bg-beige rounded-2xl p-6 space-y-4 mb-8">
          <div>
            <p className="text-text-muted text-sm">Beneficiario</p>
            <p className="font-semibold text-text-dark">{beneficiary}</p>
          </div>
          <div>
            <p className="text-text-muted text-sm">IBAN</p>
            <p className="font-mono font-semibold text-text-dark text-lg">{iban}</p>
          </div>
          <div>
            <p className="text-text-muted text-sm">Concepto</p>
            <p className="font-semibold text-text-dark">{concepto}</p>
          </div>
          <div>
            <p className="text-text-muted text-sm">Importe</p>
            <p className="font-bold text-primary text-2xl">{total}€</p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
          <p className="text-amber-800 text-sm">
            ⚠️ <strong>Importante:</strong> Incluye el concepto exacto en la
            transferencia para poder identificar tu pago. La reserva se
            confirmará en un plazo de 24-48 horas laborables.
          </p>
        </div>

        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full py-3.5 rounded-xl font-semibold bg-primary text-white hover:bg-primary-light transition-all duration-300 text-center"
          >
            Volver al Inicio
          </Link>
          <p className="text-center text-text-muted text-xs">
            Referencia: {reservationId.slice(0, 8)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TransferenciaPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-primary-dark flex items-center justify-center">
          <div className="text-white text-xl">Cargando...</div>
        </div>
      }
    >
      <TransferenciaContent />
    </Suspense>
  );
}
