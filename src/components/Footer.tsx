import { MapPin, Phone } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { site, telHref, waHref } from "@/lib/site";
import { WhatsAppIcon } from "./ui";

const Instagram = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
const Facebook = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8h3.3z" />
  </svg>
);

export default function Footer({ t, locale }: { t: Dictionary; locale: Locale }) {
  const quick = [["#services", t.nav.services], ["#why", t.nav.why], ["#pricing", t.nav.pricing], ["#faq", t.nav.faq], ["#book", t.nav.book]];
  return (
    <footer className="bg-plum pb-28 pt-16 text-white md:pb-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl">{locale === "ar" ? site.nameAr : site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-white/60">{t.footer.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a href={site.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-pink-600"><Instagram /></a>
            <a href={site.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-pink-600"><Facebook /></a>
            <a href={waHref()} target="_blank" rel="noopener" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-[#25D366]"><WhatsAppIcon /></a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-pink-300">{t.footer.quick}</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {quick.map(([href, label]) => <li key={href}><a href={href} className="hover:text-white">{label}</a></li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-pink-300">{t.footer.services}</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {t.services.items.slice(0, 5).map((s) => <li key={s.title}><a href="#services" className="hover:text-white">{s.title}</a></li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-pink-300">{t.footer.contact}</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-pink-400" /> {site.address[locale]}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-pink-400" /> <span className="flex flex-col gap-1" dir="ltr"><a href={telHref()} className="hover:text-white">{site.phoneDisplay}</a><a href={`tel:${site.phone2E164}`} className="hover:text-white">{site.phone2Display}</a></span></li>
            <li>{t.contact.hoursValue}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-6 text-center text-xs text-white/40 sm:px-8">
        &copy; {new Date().getFullYear()} {t.footer.developed}. {t.footer.rights}.
      </div>
    </footer>
  );
}
