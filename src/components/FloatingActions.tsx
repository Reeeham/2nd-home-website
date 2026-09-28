import { CalendarDays, Phone } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { telHref, waHref } from "@/lib/site";
import { WhatsAppIcon } from "./ui";

export default function FloatingActions({ t }: { t: Dictionary }) {
  return (
    <>
      {/* Desktop: floating WhatsApp bubble */}
      <a
        href={waHref(t.waMessage)}
        target="_blank"
        rel="noopener"
        aria-label={t.floating.whatsapp}
        className="fixed bottom-6 end-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_20px_50px_-15px_rgba(37,211,102,.8)] transition hover:scale-105 md:grid"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </a>

      {/* Mobile: sticky bottom action bar */}
      <nav className="glass fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-pink-100 p-2 pb-[max(.5rem,env(safe-area-inset-bottom))] md:hidden" aria-label="Quick actions">
        <a href={telHref()} className="flex flex-col items-center gap-1 rounded-xl py-2 text-xs font-semibold text-plum">
          <Phone className="h-5 w-5 text-pink-600" /> {t.floating.call}
        </a>
        <a href="#book" className="-mt-6 mx-auto flex h-16 w-16 flex-col items-center justify-center gap-0.5 rounded-full bg-gradient-to-br from-pink-500 to-pink-700 text-[11px] font-bold text-white shadow-glow">
          <CalendarDays className="h-5 w-5" /> {t.floating.book}
        </a>
        <a href={waHref(t.waMessage)} target="_blank" rel="noopener" className="flex flex-col items-center gap-1 rounded-xl py-2 text-xs font-semibold text-plum">
          <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> {t.floating.whatsapp}
        </a>
      </nav>
    </>
  );
}
