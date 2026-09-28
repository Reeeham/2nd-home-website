"use client";

import { useState, type FormEvent } from "react";
import { CalendarCheck, MapPin, ShieldCheck } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { branches, waHref } from "@/lib/site";
import { Heading, Section, WhatsAppIcon } from "./ui";

export default function BookingForm({ t, locale }: { t: Dictionary; locale: Locale }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [branchId, setBranchId] = useState(branches[0].id);
  const branch = branches.find((x) => x.id === branchId) ?? branches[0];
  const b = t.booking;
  const today = new Date().toISOString().slice(0, 10);
  const field = "w-full rounded-2xl border border-pink-100 bg-white px-4 py-3.5 text-plum outline-none transition placeholder:text-plum/40 focus:border-pink-400 focus:ring-4 focus:ring-pink-100";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const lines = locale === "ar"
      ? [`مرحباً 2nd Home Clinic، أرغب في حجز موعد:`, `الاسم: ${d.name}`, `الموبايل: ${d.phone}`, `الخدمة: ${d.service}`, `التاريخ: ${d.date}`, `الوقت: ${d.time}`, d.notes && `ملاحظات: ${d.notes}`]
      : [`Hi 2nd Home Clinic, I'd like to book an appointment:`, `Name: ${d.name}`, `Mobile: ${d.phone}`, `Service: ${d.service}`, `Date: ${d.date}`, `Time: ${d.time}`, d.notes && `Notes: ${d.notes}`];
    setStatus("sending");
    window.open(waHref(lines.filter(Boolean).join("\n"), branch), "_blank", "noopener");
    setStatus("done");
  }

  return (
    <Section id="book" className="bg-gradient-to-b from-cream to-pink-50">
      <div className="blob -end-32 top-10 h-96 w-96 bg-pink-200/50" />
      <div className="relative grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <Heading eyebrow={b.eyebrow} title={b.title} subtitle={b.subtitle} align="start" />
          <ul className="space-y-3 text-sm text-plum/70">
            {t.trust.slice(0, 4).map((x) => (
              <li key={x} className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-pink-600" /> {x}</li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-[2rem] bg-white p-6 shadow-glow ring-1 ring-pink-100 sm:p-8">
          {branches.length > 1 && (
          <fieldset className="mb-5">
            <legend className="text-sm font-semibold text-plum">{b.branch}</legend>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {branches.map((x) => {
                const active = x.id === branchId;
                return (
                  <button
                    key={x.id}
                    type="button"
                    onClick={() => setBranchId(x.id)}
                    aria-pressed={active}
                    className={`flex items-center justify-center gap-1.5 rounded-2xl border px-3 py-3 text-sm font-semibold transition ${active ? "border-pink-500 bg-pink-50 text-pink-700 ring-4 ring-pink-100" : "border-pink-100 text-plum/70 hover:border-pink-300"}`}
                  >
                    <MapPin className="h-4 w-4 shrink-0" /> {x.name[locale]}
                  </button>
                );
              })}
            </div>
            <p className="mt-2 text-xs text-plum/50">{branch.address[locale]}</p>
          </fieldset>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-plum">
              {b.name}
              <input name="name" required autoComplete="name" className={`${field} mt-1.5 font-normal`} />
            </label>
            <label className="block text-sm font-semibold text-plum">
              {b.phone}
              <input name="phone" type="tel" required inputMode="tel" autoComplete="tel" pattern="[0-9+\s]{8,}" dir="ltr" className={`${field} mt-1.5 font-normal`} placeholder="01x xxxx xxxx" />
            </label>
            <label className="block text-sm font-semibold text-plum sm:col-span-2">
              {b.service}
              <select name="service" required defaultValue="" className={`${field} mt-1.5 font-normal`}>
                <option value="" disabled>—</option>
                {t.services.items.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
              </select>
            </label>
            <label className="block text-sm font-semibold text-plum">
              {b.date}
              <input name="date" type="date" required min={today} className={`${field} mt-1.5 font-normal`} />
            </label>
            <label className="block text-sm font-semibold text-plum">
              {b.time}
              <select name="time" required defaultValue={b.times[0]} className={`${field} mt-1.5 font-normal`}>
                {b.times.map((x) => <option key={x} value={x}>{x}</option>)}
              </select>
            </label>
            <label className="block text-sm font-semibold text-plum sm:col-span-2">
              {b.notes}
              <textarea name="notes" rows={3} className={`${field} mt-1.5 font-normal`} />
            </label>
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-semibold text-white shadow-[0_20px_50px_-20px_rgba(37,211,102,.7)] transition hover:-translate-y-0.5 hover:bg-[#1ebe5b] focus-visible:ring-4 focus-visible:ring-emerald-200 disabled:opacity-70"
          >
            {status === "sending" ? <CalendarCheck className="h-5 w-5" /> : <WhatsAppIcon />}
            {status === "sending" ? b.sending : b.submit}
          </button>
          <p className="mt-3 text-center text-xs text-plum/50" aria-live="polite">{status === "done" ? b.success : b.hint}</p>
        </form>
      </div>
    </Section>
  );
}
