/* eslint-disable @next/next/no-img-element */
import type { Dictionary } from "@/lib/i18n";
import { img, waHref } from "@/lib/site";
import { Button, Heading, Section, WhatsAppIcon } from "./ui";

const results = ["ba-face.jpg", "ba-body.jpg"];
const posters = [
  { file: "post-candela.jpg", alt: "Full body session in 20 minutes with Candela Max Pro" },
  { file: "post-devices.jpg", alt: "Not every laser device suits your skin" },
  { file: "post-booster.jpg", alt: "Skin booster or moisturizer?" },
  { file: "post-whitening.jpg", alt: "Whitening - start with the right choice" },
  { file: "post-laser-men.jpg", alt: "Laser makes daily shaving no longer a routine" },
];

export default function Results({ t }: { t: Dictionary }) {
  return (
    <Section id="results" className="bg-white">
      <Heading eyebrow={t.results.eyebrow} title={t.results.title} subtitle={t.results.subtitle} />

      <div className="grid gap-6 md:grid-cols-2">
        {t.results.items.map((r, i) => (
          <figure key={r.title} className="overflow-hidden rounded-[2rem] bg-cream ring-1 ring-pink-100">
            <img src={img(results[i])} alt={`${r.title} - ${t.results.before} / ${t.results.after}`} className="aspect-[4/5] w-full object-cover" loading="lazy" />
            <figcaption className="p-6">
              <p className="text-lg font-bold text-plum">{r.title}</p>
              <p className="mt-1 text-sm text-plum/65">{r.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {posters.map((p, i) => (
          <img key={p.file} src={img(p.file)} alt={p.alt} loading="lazy" className={`aspect-[4/5] w-full rounded-3xl object-cover ring-1 ring-pink-100 transition hover:-translate-y-1 hover:shadow-glow ${i === 4 ? "hidden lg:block" : ""}`} />
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
