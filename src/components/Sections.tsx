import { Award, BadgeCheck, Check, ChevronDown, CreditCard, Cpu, Lock, Snowflake, Sparkles, Star } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { waHref } from "@/lib/site";
import BranchTabs from "./BranchTabs";
import { Button, Heading, Section, WhatsAppIcon } from "./ui";

export function TrustBar({ t }: { t: Dictionary }) {
  const items = [...t.trust, ...t.trust];
  return (
    <div className="relative overflow-hidden border-y border-pink-100 bg-white/60 py-4" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap px-5">
        {items.map((x, i) => (
          <span key={i} className="flex items-center gap-2 text-sm font-semibold text-plum/70">
            <BadgeCheck className="h-4 w-4 text-pink-600" /> {x}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Services({ t }: { t: Dictionary }) {
  return (
    <Section id="services">
      <Heading eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.services.items.map((s, i) => (
          <a
            key={s.title}
            href={waHref(`${t.waMessage} (${s.title})`)}
            target="_blank"
            rel="noopener"
            className="group relative overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-pink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:ring-pink-300"
          >
            <span className="absolute -end-6 -top-6 h-24 w-24 rounded-full bg-pink-100 transition-transform duration-500 group-hover:scale-[2.5]" />
            <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-pink-50 text-pink-600 ring-1 ring-pink-100">
              <Sparkles className="h-5 w-5" />
            </span>
            <h3 className="relative mt-5 text-lg font-bold text-plum">{s.title}</h3>
            <p className="relative mt-2 min-h-[3rem] text-sm text-plum/65">{s.desc}</p>
            <div className="relative mt-5 flex items-end justify-between border-t border-pink-100 pt-4">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-plum/50">{t.services.from}</p>
                <p className="font-display text-xl text-pink-700">{s.from}</p>
              </div>
              <div className="text-end">
                <p className="text-[11px] uppercase tracking-wide text-plum/50">{t.services.sessions}</p>
                <p className="text-sm font-semibold text-plum">{s.sessions}</p>
              </div>
            </div>
            <span className="sr-only">{i + 1}</span>
          </a>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href={waHref(t.waMessage)} target="_blank" rel="noopener" variant="secondary" size="lg">
          <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> {t.services.cta}
        </Button>
      </div>
    </Section>
  );
}

const whyIcons = [Cpu, Snowflake, Award, BadgeCheck, Lock, CreditCard];
export function WhyUs({ t }: { t: Dictionary }) {
  return (
    <Section id="why" className="bg-gradient-to-b from-white to-cream">
      <div className="blob -start-40 top-20 h-96 w-96 bg-pink-200/40" />
      <Heading eyebrow={t.why.eyebrow} title={t.why.title} subtitle={t.why.subtitle} />
      <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.why.items.map((w, i) => {
          const Icon = whyIcons[i] ?? Sparkles;
          return (
            <div key={w.title} className="rounded-3xl bg-white/80 p-7 ring-1 ring-pink-100 backdrop-blur transition hover:ring-pink-300">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 text-white shadow-glow">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-plum">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-plum/65">{w.desc}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function Pricing({ t }: { t: Dictionary }) {
  return (
    <Section id="pricing">
      <Heading eyebrow={t.pricing.eyebrow} title={t.pricing.title} subtitle={t.pricing.subtitle} />
      <div className="grid items-stretch gap-6 lg:grid-cols-3">
        {t.pricing.plans.map((p) => {
          const featured = Boolean(p.badge);
          return (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-[2rem] p-8 ring-1 transition ${featured ? "bg-gradient-to-b from-plum to-pink-900 text-white ring-pink-700 shadow-glow lg:-my-4 lg:py-12" : "bg-white text-plum ring-pink-100"}`}
            >
              {p.badge && (
                <span className="absolute -top-3 start-8 rounded-full bg-gold px-3 py-1 text-xs font-bold text-plum shadow">{p.badge}</span>
              )}
              <h3 className={`text-sm font-semibold uppercase tracking-widest ${featured ? "text-pink-200" : "text-pink-600"}`}>{p.name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl">{p.price}</span>
                <span className={`text-sm ${featured ? "text-white/70" : "text-plum/60"}`}>{p.unit}</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${featured ? "bg-pink-500/40 text-pink-100" : "bg-pink-100 text-pink-700"}`}>
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button href={waHref(`${t.waMessage} - ${p.name}`)} target="_blank" rel="noopener" variant={featured ? "primary" : "secondary"} className="mt-8 w-full">
                {t.pricing.cta}
              </Button>
            </div>
          );
        })}
      </div>
      <p className="mt-8 text-center text-xs text-plum/50">{t.pricing.note}</p>
    </Section>
  );
}

export function Process({ t }: { t: Dictionary }) {
  return (
    <Section className="bg-plum text-white">
      <div className="blob -end-32 top-0 h-96 w-96 bg-pink-600/30" />
      <div className="relative">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-pink-200">{t.process.eyebrow}</span>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl md:text-5xl">{t.process.title}</h2>
        </div>
        <ol className="grid gap-8 md:grid-cols-4">
          {t.process.steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="font-display text-6xl text-pink-500/40">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function Reviews({ t }: { t: Dictionary }) {
  return (
    <Section id="reviews">
      <Heading eyebrow={t.reviews.eyebrow} title={t.reviews.title} subtitle={t.reviews.subtitle} />
      <div className="grid gap-6 md:grid-cols-3">
        {t.reviews.items.map((r) => (
          <figure key={r.name} className="flex flex-col rounded-3xl bg-white p-7 ring-1 ring-pink-100">
            <div className="flex gap-0.5 text-gold" aria-label="5 stars">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <blockquote className="mt-4 flex-1 text-plum/80 leading-relaxed">&ldquo;{r.text}&rdquo;</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-pink-100 font-bold text-pink-700">{r.name[0]}</span>
              <div className="text-sm"><p className="font-bold text-plum">{r.name}</p><p className="text-plum/50">{r.area}</p></div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export function FAQ({ t }: { t: Dictionary }) {
  return (
    <Section id="faq" className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <Heading eyebrow={t.faq.eyebrow} title={t.faq.title} align="start" />
        <div className="divide-y divide-pink-100 rounded-3xl ring-1 ring-pink-100">
          {t.faq.items.map((f, i) => (
            <details key={f.q} className="group px-6" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold text-plum [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-pink-600 transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-plum/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Contact({ t, locale }: { t: Dictionary; locale: Locale }) {
  return (
    <Section id="contact">
      <Heading eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} />
      <BranchTabs t={t} locale={locale} />
    </Section>
  );
}
