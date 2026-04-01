"use client";

import { cabins } from "@/lib/data";
import { useTranslations, useLocale } from "next-intl";
import SectionHeader from "./SectionHeader";
import CabinCard from "./CabinCard";

export default function CabinsSection() {
  const t = useTranslations("CabinsSection");
  const locale = useLocale();

  return (
    <section id="cabanas" className="py-24 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle={t("subtitle")}
          title={t("title")}
          description={t("description")}
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cabins.map((cabin, index) => (
            <CabinCard key={cabin.id} cabin={cabin} index={index} />
          ))}
        </div>

        {/* Pool teaser */}
        <div className="mt-16 relative rounded-2xl overflow-hidden max-w-5xl mx-auto">
          <img
            src="/piscina-1.jpg"
            alt={t("poolTitle")}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
            <div className="px-8 sm:px-12 max-w-xl">
              <h3 className="font-display text-3xl sm:text-4xl text-white font-bold mb-3">
                {t("poolTitle")}
              </h3>
              <p className="text-white/85 leading-relaxed mb-6">
                {t("poolDescription")}
              </p>
              <a
                href={`/${locale}/alojamientos/piscina`}
                className="inline-block bg-accent hover:bg-accent-dark text-primary font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                {t("viewDetails")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
