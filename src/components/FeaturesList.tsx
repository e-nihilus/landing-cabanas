"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface Feature {
  name: string;
  icon: string;
}

interface FeaturesListProps {
  features: string[];
  initialCount?: number;
}

const getIcon = (feature: string): string => {
  const iconMap: Record<string, string> = {
    "Agua caliente": "🚿",
    "Agua corriente con temperatura suficiente": "💧",
    "Aire acondicionado": "❄️",
    "Almohadas y mantas adicionales": "🛏️",
    "Alojamiento de una altura": "🏠",
    "Aparcamiento gratuito en instalaciones": "🅿️",
    "Bandeja de repostería": "🍰",
    "Barbacoa": "🔥",
    "Batidora": "🍹",
    "Botiquín": "🩹",
    "Cafetera": "☕",
    "Café": "☕",
    "Calefacción": "🔥",
    "Cocina completa": "🍳",
    "Comedor al aire libre": "🌿",
    "Congelador": "🧊",
    "Copas de vino": "🍷",
    "Disponible para estancias largas": "📅",
    "Entrada privada": "🚪",
    "Espacio para guardar ropa": "👔",
    "Fogones": "🍳",
    "Gel de ducha": "🧴",
    "Hervidor de agua": "🫖",
    "Horno": "🍞",
    "Juegos de mesa": "🎲",
    "Kitchenette": "🍽️",
    "Lavadora": "🧺",
    "Libros y material de lectura": "📚",
    "Limpieza disponible durante estancia": "🧹",
    "Mesa de comedor": "🪑",
    "Microondas": "📡",
    "Mobiliario exterior": "🪑",
    "Mosquiteras": "🪟",
    "Mosquitera": "🪟",
    "Nevera": "🧊",
    "Patio o balcón": "🌺",
    "Patio trasero": "🌳",
    "Perchas": "🧥",
    "Persianas o cortinas opacas": "🌙",
    "Piscina compartida": "🏊",
    "Plancha": "👕",
    "Platos y cubiertos": "🍽️",
    "Productos de limpieza": "🧹",
    "Ropa de cama algodón": "🛏️",
    "Salón privado": "🛋️",
    "Secador de pelo": "💇",
    "Secadora": "🧺",
    "Servicios básicos": "✅",
    "Sofá cama adicional": "🛋️",
    "Tendedero para ropa": "👕",
    "Tostadora": "🍞",
    "Tumbonas": "☀️",
    "TV": "📺",
    "Utensilios básicos de cocina": "🥄",
    "Utensilios de barbacoa": "🍖",
    "Vistas a la montaña": "⛰️",
    "Vistas panorámicas": "🏔️",
    "Zona para trabajar": "💻",
    "Acceso piscina": "🏊",
    "Admite mascotas": "🐾",
    "Personal 24h": "👨‍💼",
    "Llegada autónoma": "🔑",
  };
  return iconMap[feature] || "✓";
};

export default function FeaturesList({
  features,
  initialCount = 8,
}: FeaturesListProps) {
  const t = useTranslations("PropertyPage");
  const td = useTranslations("Data");
  const [expanded, setExpanded] = useState(false);

  const displayFeatures = expanded ? features : features.slice(0, initialCount);
  const hasMore = features.length > initialCount;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {displayFeatures.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-3 p-4 bg-beige rounded-lg hover:bg-beige-dark transition-colors"
          >
            <span className="text-2xl flex-shrink-0">{getIcon(feature)}</span>
            <span className="text-text-dark font-medium">{td.has(`features.${feature}`) ? td(`features.${feature}`) : feature}</span>
          </div>
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-xl font-semibold transition-all duration-300"
        >
          {expanded ? t("showLess") : t("showMore")}
        </button>
      )}
    </div>
  );
}
