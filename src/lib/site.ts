import type { Locale } from "./i18n";

export type Branch = {
  id: string;
  name: Record<Locale, string>;
  address: Record<Locale, string>;
  phoneDisplay: string;
  phoneE164: string;
  whatsapp: string; // digits only, international format without "+"
  mapsQuery: string;
  directionsQuery: string;
};

export const branches: Branch[] = [
  {
    id: "zayed",
    name: { ar: "الشيخ زايد", en: "Sheikh Zayed" },
    address: {
      ar: "كازان مول، السادس من أكتوبر - مبنى A4، وحدة ١٢١، الدور الأول",
      en: "Kazan Mall, 6th of October - Building A4, Unit 121, 1st floor",
    },
    phoneDisplay: "01555 144 534",
    phoneE164: "+201555144534",
    whatsapp: "201555144534",
    mapsQuery: "2nd home clinics, Kazan Mall, 6th of October",
    directionsQuery: "2X59+39 First 6th of October",
  },
];

export const mainBranch = branches[0];
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const site = {
  name: "2nd Home Clinic",
  nameAr: "عيادة 2nd Home",
  doctor: "Dr. Nuran Jehad",
  doctorAr: "د. نوران جهاد",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://2ndhomeclinic.com").replace(/\/$/, ""),
  phoneDisplay: mainBranch.phoneDisplay,
  phoneE164: mainBranch.phoneE164,
  phone2Display: "01060 368 632",
  phone2E164: "+201060368632",
  whatsapp: mainBranch.whatsapp,
  address: mainBranch.address,
  hours: { open: "12:00", close: "23:00" },
  rating: { value: 4.7, count: 68 },
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
} as const;

export const img = (file: string) => `${basePath}/images/${file}`;
export const mapsEmbedUrl = (b: Branch = mainBranch) => `https://www.google.com/maps?q=${encodeURIComponent(b.mapsQuery)}&output=embed`;
export const mapsDirectionsUrl = (b: Branch = mainBranch) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(b.directionsQuery)}`;
export const telHref = (b: Branch = mainBranch) => `tel:${b.phoneE164}`;
export const waHref = (text?: string, b: Branch = mainBranch) =>
  `https://wa.me/${b.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
