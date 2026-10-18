import { useState } from "react";
import { Star } from "lucide-react";
import { testimonials, testimonialsAreSamples, type Testimonial } from "@/data/testimonials";
import { Reveal } from "@/components/Reveal";

const OFFSETS = ["lg:mt-6", "lg:mt-0", "lg:mt-9", "lg:mt-2", "lg:mt-7"];

function TestimonialCard({ t, selected, onSelect }: { t: Testimonial; selected: boolean; onSelect: () => void }) {
  return (
    <button type="button" aria-pressed={selected} onClick={onSelect} className="tw-card" data-selected={selected}>
      <span aria-hidden className="tw-pin" />
      <span aria-hidden className="tw-quote">“</span>
      <p className="relative text-[15px] leading-relaxed">{t.quote}</p>
      <span className="mt-auto flex items-end justify-between gap-3 border-t-2 border-dashed border-foreground/15 pt-4">
        <span className="font-sans text-base font-extrabold">{t.name}</span>
        <span className="flex gap-0.5" role="img" aria-label={`Rated ${t.rating} out of 5`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={15} className={i < t.rating ? "fill-accent text-foreground" : "text-foreground/25"} />
          ))}
        </span>
      </span>
    </button>
  );
}

export function TestimonialWall() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <section className="tw-wall relative overflow-hidden py-20 md:py-28">
      <div className="container-bt relative">
        <Reveal>
          <p className="eyebrow text-accent">04 — Street talk</p>
          <h2 className="display-lg mt-3 text-secondary-foreground">The word<br />on the <span className="text-primary">street.</span></h2>
          <p className="mt-4 max-w-md text-lg text-secondary-foreground/80">Great burgers. Better stories. Straight from the streets.</p>
        </Reveal>
      </div>
      <Reveal className="relative mx-auto mt-12 max-w-[1280px]">
        <ul className="tw-track">
          {testimonials.map((t, i) => (
            <li key={t.id} className={`tw-slot ${OFFSETS[i % OFFSETS.length]}`}>
              <TestimonialCard t={t} selected={selected === t.id} onSelect={() => setSelected(t.id)} />
            </li>
          ))}
        </ul>
      </Reveal>
      {testimonialsAreSamples && (
        <p className="container-bt relative mt-8 text-xs text-secondary-foreground/60">Sample testimonials for illustration — not verified customer reviews.</p>
      )}
    </section>
  );
}
