"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { href: "#cabanas", label: t("cabins") },
    { href: "#reservas", label: t("bookings") },
    { href: "#opiniones", label: t("reviews") },
    { href: "#ubicacion", label: t("location") },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const otherLocale = locale === "es" ? "en" : "es";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href={`/${locale}`} className="flex items-center gap-2">
          <span className="text-4xl">🏡</span>
          <span
            className={`font-display text-2xl font-semibold transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Chica de Navalmelendro
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : `/${locale}/${link.href}`}
              className={`text-base font-bold transition-colors duration-300 hover:text-accent ${
                scrolled ? "text-text-dark" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Language switcher */}
          <a
            href={`/${otherLocale}${pathname === "/" ? "" : pathname}`}
            className={`text-sm font-bold px-3 py-1.5 rounded-full border transition-all duration-300 ${
              scrolled
                ? "border-primary/30 text-primary hover:bg-primary hover:text-white"
                : "border-white/40 text-white/90 hover:bg-white/20"
            }`}
          >
            {otherLocale.toUpperCase()}
          </a>

          <a
            href={isHome ? "#reservas" : `/${locale}/#reservas`}
            className="bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            {t("bookNow")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={t("menu")}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen
                ? "rotate-45 translate-y-2 bg-text-dark"
                : scrolled
                ? "bg-text-dark"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen
                ? "opacity-0"
                : scrolled
                ? "bg-text-dark"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen
                ? "-rotate-45 -translate-y-2 bg-text-dark"
                : scrolled
                ? "bg-text-dark"
                : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : `/${locale}/${link.href}`}
              onClick={() => setMenuOpen(false)}
              className="text-text-dark py-2 text-base font-bold hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Language switcher mobile */}
          <a
            href={`/${otherLocale}${pathname === "/" ? "" : pathname}`}
            onClick={() => setMenuOpen(false)}
            className="text-primary py-2 text-base font-bold hover:text-primary-light transition-colors"
          >
            🌐 {otherLocale.toUpperCase()}
          </a>

          <a
            href={isHome ? "#reservas" : `/${locale}/#reservas`}
            onClick={() => setMenuOpen(false)}
            className="bg-primary text-white text-center py-3 rounded-full font-semibold mt-2 hover:bg-primary-light transition-colors"
          >
            {t("bookNow")}
          </a>
        </div>
      </div>
    </nav>
  );
}
