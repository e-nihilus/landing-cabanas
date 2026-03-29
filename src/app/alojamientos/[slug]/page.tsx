"use client";

import { cabins, pool } from "@/lib/data";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingCalendar from "@/components/BookingCalendar";
import DescriptionModal from "@/components/DescriptionModal";
import FeaturesList from "@/components/FeaturesList";
import PropertyGallery from "@/components/PropertyGallery";

interface PropertyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;

  // Buscar cabaña o piscina por slug
  let property: any = null;
  let type: "cabin" | "pool" = "cabin";
  let features: string[] = [];

  if (slug === "piscina") {
    property = pool;
    type = "pool";
    features = pool.features;
  } else {
    const cabin = cabins.find((c) => c.slug === slug);
    if (!cabin) {
      notFound();
    }
    property = cabin;
    type = "cabin";
    features = cabin.features;
  }

  const images =
    type === "pool"
      ? pool.images.map((src) => ({ src, alt: property.name }))
      : property.images.map((src: string) => ({ src, alt: property.name }));

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section with Image */}
        <section className="relative h-96 overflow-hidden">
          <img
            src={images[0]?.src || "/cabana1-1.jpg"}
            alt={property.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="px-4 sm:px-8 pb-8 max-w-7xl mx-auto w-full">
              <h1 className="font-display text-4xl sm:text-5xl text-white font-bold">
                {property.name}
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Description */}
              <div className="md:col-span-2">
                <h2 className="font-display text-2xl font-bold text-text-dark mb-4">
                  Descripción
                </h2>
                {type === "cabin" ? (
                  <DescriptionModal
                    title={property.name}
                    description={property.description}
                  />
                ) : (
                  <p className="text-text-muted leading-relaxed mb-8 whitespace-pre-wrap">
                    {property.description}
                  </p>
                )}

                {/* Features Grid */}
                <div className="mt-12 pt-8 border-t border-beige-dark">
                  <h3 className="font-display text-xl font-bold text-text-dark mb-6">
                    Servicios y Características
                  </h3>
                  <FeaturesList features={features} initialCount={8} />
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="md:col-span-1">
                <div className="bg-cream rounded-2xl p-6 sticky top-20">
                  {type === "cabin" && (
                    <>
                      {/* Precios */}
                      <div className="mb-6">
                        <h4 className="font-display font-bold text-text-dark mb-3">
                          Precios
                        </h4>
                        <div className="text-3xl font-bold text-primary mb-1">
                          {property.pricePerNight}€
                        </div>
                        <div className="text-text-muted text-sm mb-4">
                          por noche
                        </div>
                        <div className="text-sm text-text-muted space-y-2">
                          <p>
                            Precio de fin de semana:{" "}
                            <span className="font-semibold text-text-dark">
                              {property.priceWeekend}€
                            </span>
                          </p>
                          <p>
                            Descuento semanal:{" "}
                            <span className="font-semibold text-text-dark">
                              {property.weeklyDiscount}%
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Disponibilidad */}
                      <div className="mb-6 pb-6 border-b border-beige-dark">
                        <h4 className="font-display font-bold text-text-dark mb-3">
                          Disponibilidad
                        </h4>
                        <div className="text-sm text-text-muted space-y-2">
                          <p>
                            Estancias de {property.minStay} a{" "}
                            {property.maxStay} noches
                          </p>
                          <p>Preáviso mínimo de {property.minStay} días</p>
                        </div>
                      </div>

                      {/* Características */}
                      <div className="space-y-4 mb-6 pb-6 border-b border-beige-dark">
                        <div className="flex justify-between">
                          <span className="text-text-muted">Capacidad</span>
                          <span className="font-semibold text-text-dark">
                            {property.capacity} huéspedes
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Dormitorios</span>
                          <span className="font-semibold text-text-dark">
                            {property.bedrooms}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Baños</span>
                          <span className="font-semibold text-text-dark">
                            {property.bathrooms}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Camas</span>
                          <span className="font-semibold text-text-dark">
                            {property.beds}
                          </span>
                        </div>
                      </div>

                      <a
                        href="#reservas"
                        className="block w-full text-center bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                      >
                        Reservar Ahora
                      </a>
                    </>
                  )}

                  {type === "pool" && (
                    <>
                      <p className="text-text-muted text-sm leading-relaxed mb-6">
                        Disfruta de nuestra piscina panorámica durante tu estancia.
                        Incluida en todas las reservas de cabañas.
                      </p>
                      <a
                        href="#reservas"
                        className="block w-full text-center bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                      >
                        Reservar Cabaña
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Gallery Component */}
            <PropertyGallery images={images} video={property.video} />
          </div>
        </section>

        {/* Booking Section */}
        <BookingCalendar initialProperty={type === "cabin" ? property : null} />
      </main>
      <Footer />
    </>
  );
}
