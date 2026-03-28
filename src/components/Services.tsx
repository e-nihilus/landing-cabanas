import { services } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="¿Qué ofrecemos?"
          title="Servicios y Comodidades"
          description="Todo lo que necesitas para una estancia perfecta. Cada detalle está pensado para que solo te preocupes de disfrutar."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-text-dark mb-2">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
