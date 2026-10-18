import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Asterisk, Quote } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { Reveal } from "@/components/Reveal";

function QuoteText({ item }: { item: Testimonial }) {
  if (!item.highlight) return <>{item.quote}</>;
  const [before, after] = item.quote.split(item.highlight);
  return <>{before}<span className="text-accent">{item.highlight}</span>{after}</>;
}

export function StreetTestimonials() {
  const reduce = useReducedMotion();
  return (
    <section aria-labelledby="street-heading" className="street-stories">
      <div className="container-bt py-20 md:py-28">
        <Reveal className="street-stories-heading">
          <div>
            <p className="eyebrow text-primary">04 — Street stories</p>
            <h2 id="street-heading" className="street-stories-title mt-4">The word<br />on the <span className="text-primary">street.</span></h2>
          </div>
          <div className="street-stories-intro">
            <ArrowUpRight aria-hidden size={44} strokeWidth={1.5} className="mb-4 text-primary" />
            <p className="max-w-xs text-lg leading-relaxed">Great burgers. Better stories.<br />Straight from the streets.</p>
          </div>
        </Reveal>

        <div className="street-stories-grid">
          {testimonials.map((item, i) => (
            <motion.figure
              key={item.id}
              className={`street-review street-review--${item.id}`}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={reduce ? { y: 0 } : { y: -5 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="street-review-top">
                <span className="street-review-topic">{item.subject}</span>
                {i === 0 ? <Asterisk aria-hidden size={38} strokeWidth={1.5} /> : <Quote aria-hidden size={24} strokeWidth={1.5} />}
              </div>
              <blockquote className="street-review-quote"><QuoteText item={item} /></blockquote>
              <figcaption className="street-review-person">
                <span aria-hidden className="street-review-initials">{item.initials}</span>
                <span className="font-bold">{item.name}</span>
                <span aria-hidden className="street-review-number">0{i + 1}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="street-stories-caption">
          <span aria-hidden className="font-display text-xl font-black uppercase">Good food. Shared stories. <span className="text-primary">✦</span></span>
          <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">A taste of the vibe: all quotes and names are fictional, created for demonstration.</p>
        </div>
      </div>
    </section>
  );
}