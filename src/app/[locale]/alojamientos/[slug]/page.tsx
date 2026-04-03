import { cabins, pool } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
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

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const t = await getTranslations("PropertyPage");

  if (slug === "piscina") {
    return {
      title: t("poolTitle"),
      description: t("poolMetaDesc"),
      openGraph: {
        title: t("poolOgTitle"),
        description: t("poolOgDesc"),
        images: [{ url: "/piscina-1.jpg", width: 1200, height: 630, alt: t("poolTitle") }],
      },
    };
  }

  const cabin = cabins.find((c) => c.slug === slug);
  if (!cabin) {
    return { title: t("notFound") };
  }

  return {
    title: cabin.name,
    description: `${cabin.shortDescription} ${t("cabinMetaDesc", { description: "", price: cabin.pricePerNight })}`,
    openGraph: {
      title: t("cabinOgTitle", { name: cabin.name }),
      description: cabin.shortDescription,
      images: [{ url: cabin.images[0], width: 1200, height: 630, alt: cabin.name }],
    },
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const t = await getTranslations("PropertyPage");
  const td = await getTranslations("Data");
  const locale = await getLocale();

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

  const propertyName = type === "pool"
    ? td("pool.name")
    : td(`cabins.${property.id}.name`);
  const propertyDescription = type === "pool"
    ? td("pool.description")
    : td(`cabins.${property.id}.description`);
  const propertyShortDescription = type === "cabin"
    ? td(`cabins.${property.id}.shortDescription`)
    : "";

  const images =
    type === "pool"
      ? pool.images.map((src) => ({ src, alt: propertyName }))
      : property.images.map((src: string) => ({ src, alt: propertyName }));

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section with Image */}
        <section className="relative h-96 overflow-hidden">
          <img
            src={images[0]?.src || "/cabana1-1.jpg"}
            alt={propertyName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="px-4 sm:px-8 pb-8 max-w-7xl mx-auto w-full">
              <h1 className="font-display text-4xl sm:text-5xl text-white font-bold">
                {propertyName}
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
                  {t("description")}
                </h2>
                {type === "cabin" ? (
                  <DescriptionModal
                    title={propertyName}
                    description={propertyDescription}
                  />
                ) : (
                  <p className="text-text-muted leading-relaxed mb-8 whitespace-pre-wrap">
                    {propertyDescription}
                  </p>
                )}

                {/* Features Grid */}
                <div className="mt-12 pt-8 border-t border-beige-dark">
                  <h3 className="font-display text-xl font-bold text-text-dark mb-6">
                    {t("servicesTitle")}
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
                          {t("prices")}
                        </h4>
                        <div className="text-3xl font-bold text-primary mb-1">
                          {property.pricePerNight}€
                        </div>
                        <div className="text-text-muted text-sm mb-4">
                          {t("perNight")}
                        </div>
                        <div className="text-sm text-text-muted space-y-2">
                          <p>
                            {t("weekendPrice")}{" "}
                            <span className="font-semibold text-text-dark">
                              {property.priceWeekend}€
                            </span>
                          </p>
                          <p>
                            {t("weeklyDiscount")}{" "}
                            <span className="font-semibold text-text-dark">
                              {property.weeklyDiscount}%
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Disponibilidad */}
                      <div className="mb-6 pb-6 border-b border-beige-dark">
                        <h4 className="font-display font-bold text-text-dark mb-3">
                          {t("availability")}
                        </h4>
                        <div className="text-sm text-text-muted space-y-2">
                          <p>
                           {t("staysRange", { min: property.minStay, max: property.maxStay })}
                          </p>
                          <p>{t("minNotice", { min: property.minStay })}</p>
                        </div>
                      </div>

                      {/* Características */}
                      <div className="space-y-4 mb-6 pb-6 border-b border-beige-dark">
                        <div className="flex justify-between">
                          <span className="text-text-muted">{t("capacity")}</span>
                          <span className="font-semibold text-text-dark">
                            {property.capacity} {t("guestsLabel")}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">{t("bedrooms")}</span>
                          <span className="font-semibold text-text-dark">
                            {property.bedrooms}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">{t("bathrooms")}</span>
                          <span className="font-semibold text-text-dark">
                            {property.bathrooms}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">{t("beds")}</span>
                          <span className="font-semibold text-text-dark">
                            {property.beds}
                          </span>
                        </div>
                      </div>

                      <a
                        href="#reservas"
                        className="block w-full text-center bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                      >
                        {t("bookNow")}
                      </a>
                    </>
                  )}

                  {type === "pool" && (
                    <>
                      <p className="text-text-muted text-sm leading-relaxed mb-6">
                        {t("poolNote")}
                      </p>
                      <a
                        href={`/${locale}/#reservas`}
                        className="block w-full text-center bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                      >
                        {t("bookNow")}
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
        {type === "cabin" && (
          <BookingCalendar initialProperty={property} />
        )}
      </main>
      <Footer />
    </>
  );
}
