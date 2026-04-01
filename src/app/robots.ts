import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/reserva/", "/*/admin/", "/*/reserva/"],
    },
    sitemap: "https://chicadenavalmelendro.com/sitemap.xml",
  };
}
