import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((l) => ({
    url: `${site.url}/${l}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: l === "ar" ? 1 : 0.9,
    alternates: { languages: { ar: `${site.url}/ar`, en: `${site.url}/en` } },
  }));
}
