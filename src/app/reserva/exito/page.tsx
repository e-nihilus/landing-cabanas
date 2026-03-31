import Link from "next/link";

export default function ExitoPage() {
  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-lg w-full text-center">
        <div className="text-7xl mb-6">✅</div>
        <h1 className="font-display text-3xl font-bold text-text-dark mb-4">
          ¡Reserva Confirmada!
        </h1>
        <p className="text-text-muted text-lg mb-6">
          Tu pago se ha procesado correctamente. Hemos recibido tu reserva y te
          enviaremos un email de confirmación en breve.
        </p>
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full py-3.5 rounded-xl font-semibold bg-primary text-white hover:bg-primary-light transition-all duration-300"
          >
            Volver al Inicio
          </Link>
          <p className="text-text-muted text-xs">
            Cancelación gratuita hasta 48h antes de la llegada.
          </p>
        </div>
      </div>
    </div>
  );
}
