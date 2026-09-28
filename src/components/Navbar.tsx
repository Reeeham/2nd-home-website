"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { img, site, telHref } from "@/lib/site";
import { Button } from "./ui";

export default function Navbar({ t, locale }: { t: Dictionary; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const other = locale === "ar" ? "en" : "ar";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["#services", t.nav.services],
    ["#why", t.nav.why],
    ["#pricing", t.nav.pricing],
    ["#results", t.nav.results],
    ["#faq", t.nav.faq],
    ["#contact", t.nav.contact],
  ] as const;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "glass shadow-[0_10px_40px_-20px_rgba(42,15,31,.25)]" : "bg-transparent"}`}>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-2.5" aria-label={site.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img("logo.jpg")} alt="" className="h-11 w-11 rounded-full object-cover ring-2 ring-white shadow" />
          <span className="leading-none">
            <span className="font-display block text-lg text-plum">2nd Home</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[.25em] text-pink-600">{locale === "ar" ? site.doctorAr : site.doctor}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="text-sm font-medium text-plum/80 transition hover:text-pink-600">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href={`/${other}`} hrefLang={other} className="rounded-full px-3 py-1.5 text-sm font-semibold text-plum/70 ring-1 ring-plum/10 transition hover:text-pink-600 hover:ring-pink-300">
            {t.nav.lang}
          </Link>
          <a href={telHref()} className="flex items-center gap-2 text-sm font-semibold text-plum" dir="ltr">
            <Phone className="h-4 w-4 text-pink-600" /> {site.phoneDisplay}
          </a>
          <Button href="#book">{t.nav.book}</Button>
        </div>

        <button type="button" onClick={() => setOpen((v) => !v)} className="grid h-11 w-11 place-items-center rounded-full text-plum lg:hidden" aria-label="Menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-pink-100 px-5 pb-6 pt-3 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-pink-100/70 py-3 text-base font-medium text-plum">
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <Button href="#book" className="flex-1" onClick={() => setOpen(false)}>{t.nav.book}</Button>
            <Link href={`/${other}`} className="rounded-full px-4 py-3 text-sm font-semibold ring-1 ring-plum/10">{t.nav.lang}</Link>
          </div>
        </div>
      )}
    </header>
  );
}
