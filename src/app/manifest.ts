import type { MetadataRoute } from "next";
import { basePath, site } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "2nd Home",
    start_url: `${basePath}/ar/`,
    display: "standalone",
    background_color: "#f7efe6",
    theme_color: "#8f5f36",
    icons: [{ src: `${basePath}/icon`, sizes: "512x512", type: "image/png" }],
  };
}
