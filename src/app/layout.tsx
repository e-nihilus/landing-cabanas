import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://chicadenavalmelendro.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Cabañas con Piscina cerca de Madrid | Chica de Navalmelendro",
    template: "%s | Cabañas Chica de Navalmelendro",
  },
  description:
    "Alquiler de cabañas con piscina panorámica cerca de Madrid. Escapada perfecta en plena naturaleza con vistas al valle, barbacoa y terraza privada. Reserva ahora.",
  keywords: [
    "cabaña con piscina cerca de Madrid",
    "alquiler cabaña Madrid",
    "escapada naturaleza Madrid",
    "cabaña en el campo Madrid",
    "cabaña con vistas cerca de Madrid",
    "alojamiento con piscina Madrid",
    "cabañas de madera Madrid",
    "escapada en pareja Madrid",
    "alojamiento naturaleza Madrid",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Cabañas Chica de Navalmelendro",
    title: "Cabañas con Piscina cerca de Madrid | Chica de Navalmelendro",
    description:
      "Cabañas de madera con piscina panorámica y vistas al valle. Tu escapada perfecta en plena naturaleza, a solo 30 minutos de Madrid.",
    images: [
      {
        url: "/cabana1-1.jpg",
        width: 1200,
        height: 630,
        alt: "Cabaña de madera con piscina panorámica cerca de Madrid - Chica de Navalmelendro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabañas con Piscina cerca de Madrid | Chica de Navalmelendro",
    description:
      "Escapada en plena naturaleza con piscina, vistas al valle y barbacoa. A 30 min de Madrid. Reserva tu cabaña ahora.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏡</text></svg>"
        />
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
      <body className="font-sans">{children}</body>
    </html>
  );
}
