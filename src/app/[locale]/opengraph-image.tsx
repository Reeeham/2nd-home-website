import { ImageResponse } from "next/og";
import { dictionaries, isLocale, locales } from "@/lib/i18n";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

async function loadFont(family: string, weight: number, text: string) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}`,
    { headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0" } },
  ).then((r) => r.text());
  const url = css.match(/src: url\((.+?)\) format\('(?:woff|truetype|opentype)'\)/)?.[1];
  return url ? fetch(url).then((r) => r.arrayBuffer()) : null;
}

export default async function OG({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "en";
  const t = dictionaries[l];
  const text = [site.name, "Sheikh Zayed", t.hero.title1, t.hero.title2, t.hero.offer, site.phoneDisplay].join("");
  const fontData = await loadFont("Cairo", 800, text).catch(() => null);
  // Satori has no bidi support: reverse word order for Arabic and right-align
  const rtl = l === "ar";
  const bidi = (s: string) => (rtl ? s.split(" ").reverse().join(" ") : s);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: rtl ? "flex-end" : "flex-start", padding: 80, background: "linear-gradient(135deg,#fbf6f0 0%,#f3e7da 50%,#f7efe6 100%)", color: "#3d2415", fontFamily: "Cairo, sans-serif" }}>
        <div style={{ display: "flex", flexDirection: rtl ? "row-reverse" : "row", alignItems: "center", gap: 20, fontSize: 28, color: "#8f5f36", fontWeight: 800 }}>
          <div style={{ width: 56, height: 56, borderRadius: 999, background: "linear-gradient(135deg,#c89a6b,#6e4626)" }} />
          {site.name} · Sheikh Zayed
        </div>
        <div style={{ marginTop: 40, fontSize: 84, fontWeight: 800, lineHeight: 1.1 }}>{bidi(t.hero.title1)}</div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.1, color: "#8f5f36" }}>{bidi(t.hero.title2)}</div>
        <div style={{ marginTop: 36, fontSize: 26, color: "#6e4626", opacity: 0.8, whiteSpace: "nowrap" }}>{bidi(t.hero.offer)}</div>
        <div style={{ marginTop: 40, fontSize: 30, fontWeight: 800 }}>{site.phoneDisplay}</div>
      </div>
    ),
    { ...size, fonts: fontData ? [{ name: "Cairo", data: fontData, weight: 800, style: "normal" }] : undefined },
  );
}
