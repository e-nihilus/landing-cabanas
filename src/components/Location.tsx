"use client";

import SectionHeader from "./SectionHeader";
import { useEffect } from "react";

export default function Location() {
  useEffect(() => {
    // Ocultar el popup del mapa después de que cargue
    const timer = setTimeout(() => {
      const button = document.querySelector('[aria-label="Cerrar"]') as HTMLElement;
      if (button) {
        button.click();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="ubicacion" className="py-24 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="¿Dónde estamos?"
          title="Nuestra Ubicación"
          description="Situadas en plena naturaleza, nuestras cabañas ofrecen el retiro perfecto sin renunciar a la accesibilidad."
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-80 lg:h-full min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.5692430625545!2d-3.6703159328186032!3d40.683459174139415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd43d7508dcc9f11%3A0xc2df516480dd0f57!2sChica%20de%20Navalmelendro!5e0!3m2!1ses!2ses!4v1774733520225!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Chica de Navalmelendro"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-text-dark mb-1">
                    Ubicación
                  </h4>
                  <p className="text-text-muted">
                    Finca Navalmelendro, Ctra. M104 km 6,5
                    <br />
                    28770 Colmenar Viejo, Madrid, España
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🚗</div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-text-dark mb-1">
                    Cómo Llegar
                  </h4>
                  <p className="text-text-muted">
                    A 15 minutos del pueblo más cercano. Carretera asfaltada
                    hasta la entrada. Parking privado incluido.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-text-dark mb-1">
                    Contacto
                  </h4>
                  <p className="text-text-muted">
                    Teléfono:{" "}
                    <a
                      href="tel:+34647622690"
                      className="text-primary hover:text-primary-light font-medium"
                    >
                      +34 647 622 690
                    </a>
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:chicadenavalmelendro@gmail.com"
                      className="text-primary hover:text-primary-light font-medium"
                    >
                      chicadenavalmelendro@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-2xl">⏰</div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-text-dark mb-1">
                    Horarios
                  </h4>
                  <p className="text-text-muted">
                    Check-in: a partir de las 15:00
                    <br />
                    Check-out: antes de las 12:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
