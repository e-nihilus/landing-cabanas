"use client";

import { useState, useEffect } from "react";

interface PropertyGalleryProps {
  images: Array<{ src: string; alt: string }>;
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAllGallery, setShowAllGallery] = useState(false);

  // Bloquear scroll cuando se abre el modal
  useEffect(() => {
    if (showAllGallery) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAllGallery]);

  if (images.length <= 1) {
    return null;
  }

  const initialImageCount = 8; // 2 filas x 4 columnas
  const displayedImages = images.slice(0, initialImageCount);
  const hasMoreImages = images.length > initialImageCount;

  return (
    <>
      {/* Gallery */}
      <div className="mt-12 pt-8 border-t border-beige-dark">
        <h2 className="font-display text-2xl font-bold text-text-dark mb-6">
          Galería de Fotos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Ver todas las imágenes button */}
        {hasMoreImages && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllGallery(true)}
              className="inline-block bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Ver todas las imágenes ({images.length})
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && !showAllGallery && (
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
                lightboxIndex > 0 ? lightboxIndex - 1 : images.length - 1
              );
            }}
            className="absolute left-4 text-white/70 hover:text-white text-4xl transition-colors p-2"
          >
            ‹
          </button>
          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex < images.length - 1 ? lightboxIndex + 1 : 0
              );
            }}
            className="absolute right-4 text-white/70 hover:text-white text-4xl transition-colors p-2"
          >
            ›
          </button>
        </div>
      )}

      {/* All Gallery Modal */}
      {showAllGallery && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center p-4 overflow-y-auto"
          onClick={() => setShowAllGallery(false)}
        >
          <button
            onClick={() => setShowAllGallery(false)}
            className="fixed top-6 right-6 text-white/70 hover:text-white text-4xl transition-colors z-50"
          >
            ×
          </button>

          <div className="max-w-7xl w-full py-8" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-white text-3xl font-display font-bold mb-6 pt-8">
              Todas las imágenes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox from All Gallery Modal */}
      {lightboxIndex !== null && showAllGallery && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
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
                lightboxIndex > 0 ? lightboxIndex - 1 : images.length - 1
              );
            }}
            className="absolute left-4 text-white/70 hover:text-white text-4xl transition-colors p-2"
          >
            ‹
          </button>
          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex < images.length - 1 ? lightboxIndex + 1 : 0
              );
            }}
            className="absolute right-4 text-white/70 hover:text-white text-4xl transition-colors p-2"
          >
            ›
          </button>
        </div>
      )}
      </>
      );
      }
