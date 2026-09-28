import type { NextConfig } from "next";

// NEXT_PUBLIC_BASE_PATH is set by the GitHub Pages workflow (e.g. "/barbie-website").
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
