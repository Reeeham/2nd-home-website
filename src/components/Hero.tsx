/* eslint-disable @next/next/no-img-element */
import { MapPin, Sparkles, Star, Timer } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { img, site, waHref } from "@/lib/site";
import { Button, WhatsAppIcon } from "./ui";

export default function Hero({ t, locale }: { t: Dictionary; locale: Locale }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="blob -top-32 -start-32 h-[32rem] w-[32rem] bg-pink-200/70" />
      <div className="blob top-1/3 -end-40 h-[28rem] w-[28rem] bg-gold/25" />
      <div className="blob bottom-0 start-1/3 h-72 w-72 bg-pink-300/40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-pink-700 ring-1 ring-pink-200 shadow-sm">
            <MapPin className="h-3.5 w-3.5" /> {t.hero.badge}
          </span>
          <h1 className="font-display mt-6 text-4xl leading-[1.1] text-plum sm:text-5xl md:text-6xl lg:text-7xl">
            {t.hero.title1}
            <br />
            <span className="text-gradient">{t.hero.title2}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-plum/70 md:text-xl">{t.hero.subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#book" size="lg">
              <Sparkles className="h-5 w-5" /> {t.hero.ctaPrimary}
            </Button>
            <Button href={waHref(t.waMessage)} target="_blank" rel="noopener" variant="whatsapp" size="lg">
              <WhatsAppIcon /> {t.hero.ctaSecondary}
            </Button>
          </div>

          <a href="#pricing" className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/15 to-pink-100/60 px-4 py-2.5 text-sm font-semibold text-pink-800 transition hover:border-gold">
            <Timer className="h-4 w-4 text-pink-600" /> {t.hero.offer}
          </a>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {t.hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl text-plum md:text-4xl">{s.value}</dd>
                <dd className="text-xs font-medium uppercase tracking-wide text-plum/50">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-glow ring-1 ring-white/70">
            <img src={img("offer-fullbody.jpg")} alt={t.hero.offer} className="h-full w-full object-cover object-top" fetchPriority="high" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-plum/60 to-transparent" />
          </div>

          <div className="glass animate-float absolute -start-6 top-10 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl ring-1 ring-white">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold/20 text-gold"><Star className="h-5 w-5 fill-current" /></span>
            <div className="text-sm">
              <p className="font-bold text-plum" dir="ltr">{site.rating.value} <span className="text-plum/50">({site.rating.count})</span></p>
              <p className="text-plum/60">{t.hero.rating}</p>
            </div>
          </div>
          <div className="glass animate-float absolute -end-4 bottom-14 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl ring-1 ring-white [animation-delay:1.5s]">
            <img src={img("logo.jpg")} alt="" className="h-10 w-10 rounded-xl object-cover" />
            <div className="text-sm">
              <p className="font-bold text-plum">{locale === "ar" ? site.doctorAr : site.doctor}</p>
              <p className="text-plum/60">Candela Max Pro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
