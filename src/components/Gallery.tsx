"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const galleryImages = [
  {
    src: "/cabana1-1.jpg",
    alt: "Cabaña Momentos Únicos - Exterior",
    category: "Cabaña 1",
  },
  {
    src: "/piscina-1.jpg",
    alt: "Piscina panorámica",
    category: "Piscina",
  },
  {
    src: "/cabana2-9.jpg",
    alt: "Cabaña Vistas Impresionantes - Interior",
    category: "Cabaña 2",
  },
  {
    src: "/piscina-2.jpg",
    alt: "Zona de relax",
    category: "Piscina",
  },
  {
    src: "/cabana1-2.jpg",
    alt: "Interior acogedor",
    category: "Cabaña 1",
  },
  {
    src: "/cabana2-3.jpg",
    alt: "Terraza con vistas",
    category: "Cabaña 2",
  },
  {
    src: "/cabana1-3.jpg",
    alt: "Naturaleza",
    category: "Entorno",
  },
  {
    src: "/piscina-3.jpg",
    alt: "Vistas panorámicas",
    category: "Entorno",
  },
];

const categories = ["Cabaña 1", "Cabaña 2", "Piscina"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Cabaña 1");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="galeria" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Galería"
          title="Descubre Cada Rincón"
          description="Explora nuestras cabañas, la piscina y el entorno natural que te espera."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-lg"
                  : "bg-beige text-text-muted hover:bg-beige-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((img, index) => (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(index)}
              className={`group relative overflow-hidden rounded-xl aspect-square cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                  <p className="text-white/70 text-xs">{img.category}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl transition-colors"
            >
              ×
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  lightboxIndex > 0 ? lightboxIndex - 1 : filtered.length - 1
                );
              }}
              className="absolute left-4 text-white/70 hover:text-white text-4xl transition-colors p-2"
            >
              ‹
            </button>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  lightboxIndex < filtered.length - 1 ? lightboxIndex + 1 : 0
                );
              }}
              className="absolute right-4 text-white/70 hover:text-white text-4xl transition-colors p-2"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
