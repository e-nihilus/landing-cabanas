"use client";

import { useState } from "react";
import { reviews } from "@/lib/data";
import SectionHeader from "./SectionHeader";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-accent" : "text-beige-dark"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(3);

  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <section id="opiniones" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          subtitle="Lo que dicen nuestros huéspedes"
          title="Opiniones Reales"
        />

        {/* Average rating */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-beige px-6 py-3 rounded-full">
            <span className="font-display text-3xl font-bold text-primary">
              {averageRating.toFixed(1)}
            </span>
            <div>
              <StarRating rating={Math.round(averageRating)} />
              <p className="text-text-muted text-xs mt-0.5">
                {reviews.length} valoraciones
              </p>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, visibleCount).map((review) => (
            <div
              key={review.id}
              className="bg-cream rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {review.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-text-dark text-sm">
                    {review.name}
                  </h4>
                  <p className="text-text-muted text-xs">{review.date}</p>
                </div>
              </div>

              <StarRating rating={review.rating} />

              <p className="text-text-muted text-sm leading-relaxed mt-3 mb-3">
                &ldquo;{review.text}&rdquo;
              </p>

              <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                {review.cabin}
              </span>
            </div>
          ))}
        </div>

        {visibleCount < reviews.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount(reviews.length)}
              className="text-primary hover:text-primary-light font-semibold text-sm transition-colors"
            >
              Ver más opiniones →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
