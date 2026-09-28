"use client";

import { useState } from "react";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { branches, mapsDirectionsUrl, mapsEmbedUrl, telHref, waHref } from "@/lib/site";
import { Button, WhatsAppIcon } from "./ui";

export default function BranchTabs({ t, locale }: { t: Dictionary; locale: Locale }) {
  const [id, setId] = useState(branches[0].id);
  const b = branches.find((x) => x.id === id) ?? branches[0];
  const rows = [
    { Icon: MapPin, label: t.contact.address, value: b.address[locale] },
    { Icon: Clock, label: t.contact.hours, value: t.contact.hoursValue },
    { Icon: Phone, label: t.contact.phone, value: b.phoneDisplay, href: telHref(b), ltr: true },
  ];

  return (
    <>
      {branches.length > 1 && (
      <div role="tablist" aria-label={t.contact.branches} className="mx-auto mb-8 flex w-full max-w-xl rounded-full bg-white p-1.5 ring-1 ring-pink-100">
        {branches.map((x) => {
          const active = x.id === id;
          return (
            <button
              key={x.id}
              role="tab"
              type="button"
              aria-selected={active}
              onClick={() => setId(x.id)}
              className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition ${active ? "bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-glow" : "text-plum/70 hover:text-pink-600"}`}
            >
              {x.name[locale]}
            </button>
          );
        })}
      </div>
      )}

      <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div className="flex flex-col justify-between rounded-[2rem] bg-white p-8 ring-1 ring-pink-100">
          <ul className="space-y-6">
            {rows.map(({ Icon, label, value, href, ltr }) => (
              <li key={label} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-pink-50 text-pink-600"><Icon className="h-5 w-5" /></span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-plum/50">{label}</p>
                  {href ? (
                    <a href={href} className="text-lg font-semibold text-plum hover:text-pink-600" dir={ltr ? "ltr" : undefined}>{value}</a>
                  ) : (
                    <p className="text-lg font-semibold text-plum">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={mapsDirectionsUrl(b)} target="_blank" rel="noopener" variant="secondary" className="flex-1"><Navigation className="h-4 w-4" /> {t.contact.directions}</Button>
            <Button href={waHref(t.waMessage, b)} target="_blank" rel="noopener" variant="whatsapp" className="flex-1"><WhatsAppIcon /> {t.contact.whatsapp}</Button>
          </div>
        </div>
        <div className="min-h-[22rem] overflow-hidden rounded-[2rem] ring-1 ring-pink-100">
          <iframe key={b.id} title={`2nd Home Clinic - ${b.name.en}`} src={mapsEmbedUrl(b)} className="h-full w-full min-h-[22rem] border-0 grayscale-[.2]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
      </div>
    </>
  );
}
