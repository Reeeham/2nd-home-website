import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Cairo, Inter, Playfair_Display } from "next/font/google";
import { dictionaries, dir, isLocale, locales } from "@/lib/i18n";
import { branches, site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = { themeColor: "#8f5f36", width: "device-width", initialScale: 1 };

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = dictionaries[locale].meta;
  return {
    metadataBase: new URL(site.url),
    title: { default: t.title, template: `%s | ${site.name}` },
    description: t.description,
    keywords: t.keywords,
    alternates: { canonical: `/${locale}`, languages: { ar: "/ar", en: "/en", "x-default": "/ar" } },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      url: `/${locale}`,
      siteName: site.name,
      title: t.title,
      description: t.description,
      images: [{ url: `/${locale}/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.description },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = dictionaries[locale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "BeautySalon"],
    founder: { "@type": "Physician", name: site.doctor },
    aggregateRating: { "@type": "AggregateRating", ratingValue: site.rating.value, reviewCount: site.rating.count, bestRating: 5 },
    name: site.name,
    alternateName: site.nameAr,
    description: t.meta.description,
    url: `${site.url}/${locale}`,
    telephone: [site.phoneE164, site.phone2E164],
    image: `${site.url}/${locale}/opengraph-image`,
    priceRange: "EGP",
    currenciesAccepted: "EGP",
    paymentAccepted: "Cash, Credit Card, Instalments",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kazan Mall, Building A4, Unit 121",
      addressLocality: "Sheikh Zayed, 6th of October",
      addressRegion: "Giza Governorate",
      postalCode: "3236103",
      addressCountry: "EG",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: site.hours.open,
      closes: site.hours.close,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Laser Hair Removal",
      itemListElement: t.services.items.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.desc },
      })),
    },
    sameAs: [site.instagram, site.facebook],
    department: branches.length < 2 ? undefined : branches.map((b) => ({
      "@type": "MedicalBusiness",
      name: `${site.name} - ${b.name.en}`,
      telephone: b.phoneE164,
      address: { "@type": "PostalAddress", streetAddress: b.address.en, addressCountry: "EG" },
    })),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <html lang={locale} dir={dir(locale)} className={`${inter.variable} ${playfair.variable} ${cairo.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col overflow-x-hidden">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        {children}
      </body>
    </html>
  );
}
