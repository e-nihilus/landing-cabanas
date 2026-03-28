"use client";

import { useState } from "react";

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
    "Vistas panorámicas": "🏔️",
    "Vistas a la montaña": "⛰️",
    "Cocina completa": "🍳",
    "Baño con ducha": "🚿",
    "Dormitorio con mosquiteras": "🛏️",
    "Sofá cama adicional": "🛋️",
    "Aire acondicionado": "❄️",
    "Calefacción": "🔥",
    "Lavadora": "🧺",
    "TV": "📺",
    "Zona para trabajar": "💻",
    "Entrada privada": "🚪",
    "Patio trasero": "🌳",
    "Tumbonas": "☀️",
    "Barbacoa": "🔥",
    "Aparcamiento gratuito": "🅿️",
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
            <span className="text-text-dark font-medium">{feature}</span>
          </div>
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-xl font-semibold transition-all duration-300"
        >
          {expanded ? "Ver menos" : "Ver más servicios"}
        </button>
      )}
    </div>
  );
}
