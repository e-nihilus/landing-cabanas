"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-[2000ms]"
          style={{
            backgroundImage:
              "url('/cabana1-1.jpg')",
            transform: loaded ? "scale(1)" : "scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p
          className={`text-accent font-medium tracking-[0.3em] uppercase text-base sm:text-lg mb-6 transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t("subtitle")}
        </p>
        <h1
          className={`font-display text-6xl sm:text-7xl lg:text-8xl text-white font-bold leading-tight mb-6 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t("titleLine1")}
          <br />
          <span className="text-accent italic font-medium">Chica de Navalmelendro</span>
        </h1>
        <p
          className={`text-white/85 text-xl sm:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-light transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t("description")}
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-900 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#reservas"
            className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            {t("bookNow")}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1200ms] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="#cabanas"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">{t("scroll")}</span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
