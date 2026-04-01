import type { MetadataRoute } from "next";

const SITE_URL = "https://chicadenavalmelendro.com";
const locales = ["es", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/alojamientos/momentos-unicos", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/alojamientos/vistas-impresionantes", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/alojamientos/piscina", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/politica-de-privacidad", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/aviso-legal", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }))
  );
}
