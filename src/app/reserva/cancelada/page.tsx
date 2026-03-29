import Link from "next/link";

export default function CanceladaPage() {
  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-lg w-full text-center">
        <div className="text-7xl mb-6">❌</div>
        <h1 className="font-display text-3xl font-bold text-text-dark mb-4">
          Pago Cancelado
        </h1>
        <p className="text-text-muted text-lg mb-8">
          El proceso de pago ha sido cancelado. No se ha realizado ningún cargo.
          Puedes volver a intentarlo cuando quieras.
        </p>
        <Link
          href="/#reservas"
          className="block w-full py-3.5 rounded-xl font-semibold bg-primary text-white hover:bg-primary-light transition-all duration-300"
        >
          Volver a Reservar
        </Link>
      </div>
    </div>
  );
}
