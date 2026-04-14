"use client";

import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="py-16 text-center border-b border-white/10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            {t("ctaDescription")}
          </p>
          <a
            href={`/${locale}/#reservas`}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary-dark px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105"
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

        {/* Footer content */}
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.ico" alt="Logo" className="w-7 h-7" />
              <span className="font-display text-xl font-semibold">
                Chica de Navalmelendro
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {t("footerDescription")}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">{t("navigation")}</h4>
            <ul className="space-y-2">
              {[
                { href: "#cabanas", label: t("cabins") },
                { href: "#reservas", label: t("bookings") },
                { href: "#opiniones", label: t("reviews") },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">{t("contact")}</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>📞 +34 647 622 690</li>
              <li>✉️ chicadenavalmelendro@gmail.com</li>
              <li>📍 Finca Navalmelendro, Ctra. M104 km 6,5</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">{t("followUs")}</h4>
            <div className="flex gap-3">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-accent hover:text-primary-dark transition-all duration-300 text-sm font-medium"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            {t("copyright")}
          </p>
          <div className="flex gap-6">
            <a
              href={`/${locale}/politica-de-privacidad`}
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              {t("privacy")}
            </a>
            <a
              href={`/${locale}/aviso-legal`}
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              {t("legal")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
