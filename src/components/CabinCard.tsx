"use client";

import { useState } from "react";
import type { Cabin } from "@/lib/data";

const featureIcon: Record<string, string> = {
  "Agua caliente": "🚿",
  "Aire acondicionado": "❄️",
  "Aparcamiento gratuito en instalaciones": "🅿️",
  "Barbacoa": "🔥",
  "Calefacción": "🔥",
  "Cocina completa": "🍳",
  "Entrada privada": "🚪",
  "Lavadora": "🧺",
  "Piscina compartida": "🏊",
  "TV": "📺",
  "Tumbonas": "☀️",
  "Vistas a la montaña": "⛰️",
  "Vistas panorámicas": "🏔️",
  "Zona para trabajar": "💻",
  "Acceso piscina": "🏊",
  "Admite mascotas": "🐾",
  "Sofá cama adicional": "🛋️",
  "Patio trasero": "🌳",
  "Llegada autónoma": "🔑",
};

interface CabinCardProps {
  cabin: Cabin;
  index: number;
}

export default function CabinCard({ cabin, index }: CabinCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const placeholderImages = [
    `/cabana1-1.jpg`,
    `/cabana2-9.jpg`,
  ];

  const image = placeholderImages[index % 2];

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={cabin.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span className="text-primary font-bold text-sm">
            {cabin.pricePerNight}€
            <span className="text-text-muted font-normal text-xs">/noche</span>
          </span>
        </div>
        <div className="absolute bottom-4 left-4 flex gap-2">
          <span className="bg-primary/90 text-white text-xs px-3 py-1 rounded-full font-medium">
            {cabin.capacity} huéspedes
          </span>
          <span className="bg-white/90 text-text-dark text-xs px-3 py-1 rounded-full font-medium">
            {cabin.bedrooms} hab. · {cabin.bathrooms} baño
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-text-dark mb-2">
          {cabin.name}
        </h3>
        <p className="text-text-muted leading-relaxed mb-4">
          {cabin.shortDescription}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {cabin.features.slice(0, 4).map((feature) => (
            <span
              key={feature}
              className="bg-beige text-secondary text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1"
            >
              <span>{featureIcon[feature] || "✓"}</span>
              {feature}
            </span>
          ))}
          {cabin.features.length > 4 && (
            <span className="bg-beige text-secondary text-xs px-3 py-1.5 rounded-full font-medium">
              +{cabin.features.length - 4} más
            </span>
          )}
        </div>

        <a
           href={`/alojamientos/${cabin.slug}`}
           className="block w-full text-center bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
         >
           Ver Detalles
         </a>
      </div>
    </div>
  );
}
