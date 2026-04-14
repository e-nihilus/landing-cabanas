import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const SITE_URL = "https://chicadenavalmelendro.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    keywords: locale === "es"
      ? [
          "cabaña con piscina cerca de Madrid",
          "alquiler cabaña Madrid",
          "escapada naturaleza Madrid",
          "cabaña en el campo Madrid",
          "cabaña con vistas cerca de Madrid",
          "alojamiento con piscina Madrid",
          "cabañas de madera Madrid",
          "escapada en pareja Madrid",
          "alojamiento naturaleza Madrid",
        ]
      : [
          "cabin with pool near Madrid",
          "cabin rental Madrid",
          "nature getaway Madrid",
          "countryside cabin Madrid",
          "cabin with views near Madrid",
          "accommodation with pool Madrid",
          "wooden cabins Madrid",
          "couple getaway Madrid",
          "nature accommodation Madrid",
        ],
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        es: `${SITE_URL}/es`,
        en: `${SITE_URL}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: `${SITE_URL}/${locale}`,
      siteName: "Cabañas Chica de Navalmelendro",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "/cabana1-1.jpg",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("twitterDescription"),
      images: ["/cabana1-1.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Cabañas Chica de Navalmelendro",
  description:
    "Cabañas de madera con piscina panorámica y vistas al valle en plena naturaleza, a 30 minutos de Madrid. Alojamiento con barbacoa, terraza privada y entorno natural único.",
  url: SITE_URL,
  telephone: "+34647622690",
  email: "chicadenavalmelendro@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Finca Navalmelendro, Ctra. M104 km 6,5",
    addressLocality: "Colmenar Viejo",
    addressRegion: "Madrid",
    postalCode: "28770",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.683459,
    longitude: -3.670316,
  },
  image: `${SITE_URL}/cabana1-1.jpg`,
  priceRange: "€€",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Piscina panorámica", value: true },
    { "@type": "LocationFeatureSpecification", name: "Barbacoa", value: true },
    { "@type": "LocationFeatureSpecification", name: "Terraza privada", value: true },
    { "@type": "LocationFeatureSpecification", name: "WiFi gratuito", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parking privado", value: true },
    { "@type": "LocationFeatureSpecification", name: "Vistas al valle", value: true },
    { "@type": "LocationFeatureSpecification", name: "Admite mascotas", value: true },
    { "@type": "LocationFeatureSpecification", name: "Aire acondicionado", value: true },
  ],
  checkinTime: "15:00",
  checkoutTime: "12:00",
  numberOfRooms: 2,
  petsAllowed: true,
  starRating: {
    "@type": "Rating",
    ratingValue: "5",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/logo.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
