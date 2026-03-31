import { cabins } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import CabinCard from "./CabinCard";

export default function CabinsSection() {
  return (
    <section id="cabanas" className="py-24 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Nuestros alojamientos"
          title="Cabañas con Piscina cerca de Madrid"
          description="Dos cabañas de madera únicas rodeadas de naturaleza, con piscina panorámica y vistas a Madrid. Tu escapada perfecta en el campo a solo 30 minutos de Madrid."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cabins.map((cabin, index) => (
            <CabinCard key={cabin.id} cabin={cabin} index={index} />
          ))}
        </div>

        {/* Pool teaser */}
        <div className="mt-16 relative rounded-2xl overflow-hidden max-w-5xl mx-auto">
          <img
            src="/piscina-1.jpg"
            alt="Piscina panorámica con vistas al valle en cabañas cerca de Madrid"
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
            <div className="px-8 sm:px-12 max-w-xl">
              <h3 className="font-display text-3xl sm:text-4xl text-white font-bold mb-3">
                Piscina Panorámica
              </h3>
              <p className="text-white/85 leading-relaxed mb-6">
                Piscina de diseño moderno con vistas espectaculares al valle.
                Zona solárium con tumbonas y espacio lounge exclusivo para
                nuestros huéspedes.
              </p>
              <a
                href="/alojamientos/piscina"
                className="inline-block bg-accent hover:bg-accent-dark text-primary font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}