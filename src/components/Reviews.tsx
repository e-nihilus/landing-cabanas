"use client";

import { cabins } from "@/lib/data";
import { useTranslations } from "next-intl";
import SectionHeader from "./SectionHeader";

export default function Reviews() {
  const t = useTranslations("Reviews");
  const td = useTranslations("Data");

  return (
    <section id="opiniones" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          subtitle={t("subtitle")}
          title={t("title")}
        />

        <p className="text-center text-text-muted mb-10">
          {t("description")}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {cabins.map((cabin) => (
            <a
              key={cabin.id}
              href={cabin.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <h3 className="font-display text-lg font-semibold text-text-dark mb-2">
                {td(`cabins.${cabin.id}.name`)}
              </h3>

              <p className="text-text-muted text-sm mb-4">
                {t("readReviews")}
              </p>

              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:text-primary-light transition-colors">
                {t("viewReviews")}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
