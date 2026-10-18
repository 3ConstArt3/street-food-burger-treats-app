import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Clock, MapPin, Navigation, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const ease = [0.22, 1, 0.36, 1] as const;

function UrbanMap() {
  const reduce = useReducedMotion();
  const a = restaurant.address;
  return (
    <div className="relative h-full min-h-[420px] overflow-hidden rounded-[16px] bg-foreground text-background" role="img" aria-label={`Stylised map showing ${a.street}, ${a.area}`}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <pattern id="bt-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeOpacity="0.08" />
          </pattern>
        </defs>
        <rect width="600" height="600" fill="url(#bt-grid)" />
        <g fill="currentColor" fillOpacity="0.06">
          <rect x="40" y="60" width="150" height="110" rx="6" />
          <rect x="380" y="40" width="170" height="140" rx="6" />
          <rect x="60" y="400" width="190" height="150" rx="6" />
          <rect x="400" y="390" width="140" height="170" rx="6" />
        </g>
        <path d="M-20 330 C 140 280, 300 360, 620 250" stroke="currentColor" strokeOpacity="0.22" strokeWidth="26" fill="none" />
        <path d="M260 -20 L 330 620" stroke="currentColor" strokeOpacity="0.16" strokeWidth="16" fill="none" />
        <path d="M-20 120 L 620 200" stroke="currentColor" strokeOpacity="0.12" strokeWidth="8" fill="none" />
        <motion.path
          d="M80 560 L 150 470 L 230 430 L 300 330"
          stroke="var(--accent)" strokeWidth="5" strokeDasharray="2 14" strokeLinecap="round" fill="none"
          initial={reduce ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeInOut" }}
        />
        <text x="430" y="300" fill="currentColor" fillOpacity="0.45" fontSize="13" fontWeight="700" letterSpacing="3" transform="rotate(-10 430 300)">SMASH LN</text>
        <text x="285" y="560" fill="currentColor" fillOpacity="0.35" fontSize="12" fontWeight="700" letterSpacing="3" transform="rotate(84 285 560)">ERMOU</text>
      </svg>

      {/* compass */}
      <motion.div
        className="absolute right-5 top-5 grid h-14 w-14 place-items-center rounded-full border border-background/30 font-display text-sm font-black"
        animate={reduce ? undefined : { rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        N<Navigation size={14} className="absolute -top-2 fill-accent text-accent" />
      </motion.div>

      {/* pin */}
      <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-full">
        <motion.div
          className="flex flex-col items-center"
          initial={reduce ? false : { y: -60, opacity: 0, scale: 0.6 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.3 }}
        >
          <span className="whitespace-nowrap rounded-full bg-accent px-3 py-1 font-display text-sm font-black uppercase text-accent-foreground">Burger Treats</span>
          <span className="mt-2 grid h-16 w-16 rotate-45 place-items-center rounded-[50%_50%_50%_0] bg-primary text-primary-foreground shadow-[0_14px_24px_-8px_color-mix(in_oklab,var(--primary)_70%,transparent)]">
            <MapPin size={26} className="-rotate-45" />
          </span>
        </motion.div>
        {!reduce && (
          <motion.span
            aria-hidden
            className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-primary"
            animate={{ scale: [1, 3], opacity: [0.8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </div>

      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
        <p className="eyebrow text-background/70">{a.coords}</p>
        <p className="eyebrow rounded-full border border-background/30 px-3 py-1 text-background/80">{a.area} · GR</p>
      </div>
    </div>
  );
}

export function FindUsSection() {
  const reduce = useReducedMotion();
  const r = restaurant;
  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, delay: 0.1 + i * 0.1, ease },
  });

  return (
    <section id="find-us" className="relative scroll-mt-20 overflow-hidden border-t-2 border-foreground">
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full border-[28px] border-accent/40"
        animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container-bt relative py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.div {...item(0)}>
            <p className="eyebrow text-primary">05 — Visit</p>
            <h2 className="mt-3 font-display text-[clamp(3.5rem,11vw,9.5rem)] font-black uppercase leading-[0.85]">
              Your next<br /><span className="text-primary">stop</span><span className="text-accent">.</span>
            </h2>
          </motion.div>
          <motion.p {...item(1)} className="max-w-xs text-lg text-muted-foreground">
            Drop by, grab a seat at the counter and order straight from the grill.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Info panel */}
          <div className="relative z-10 flex flex-col gap-6 lg:col-span-5 lg:-mr-16 lg:mt-12">
            <motion.div {...item(2)} className="rounded-[16px] bg-primary p-7 text-primary-foreground md:p-9">
              <p className="eyebrow flex items-center gap-2 opacity-80"><MapPin size={14} /> The spot</p>
              <p className="mt-4 font-display text-4xl font-black uppercase leading-[0.95] md:text-5xl">{r.address.street}</p>
              <p className="mt-3 text-lg font-semibold">{r.address.area}, {r.address.postcode}</p>
              <p className="opacity-80">{r.address.country}</p>
              <div className="mt-6 inline-flex -rotate-2 items-center gap-2 rounded-[6px] bg-accent px-3 py-1.5 font-display text-sm font-black uppercase text-accent-foreground">
                <ArrowUpRight size={16} /> Follow the smell of the grill
              </div>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <motion.div {...item(3)} className="rounded-[16px] border-2 border-foreground bg-background p-6">
                <p className="eyebrow flex items-center gap-2 text-muted-foreground"><Clock size={14} className="text-primary" /> Opening hours</p>
                <dl className="mt-4 space-y-2">
                  {r.hours.rows.map((h) => (
                    <div key={h.days} className="flex items-baseline justify-between gap-3 border-b border-dashed border-foreground/20 pb-2 last:border-0">
                      <dt className="text-sm font-semibold text-muted-foreground">{h.days}</dt>
                      <dd className="font-display text-lg font-black">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
              <motion.div {...item(4)} className="group flex flex-col justify-between rounded-[16px] bg-accent p-6 text-accent-foreground transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none">
                <p className="eyebrow flex items-center gap-2 opacity-80"><Phone size={14} /> Call the counter</p>
                <p className="mt-6 font-display text-3xl font-black leading-none">{r.phone.value}</p>
              </motion.div>
            </div>
          </div>

          {/* Map */}
          <motion.div
            className="lg:col-span-7"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease }}
          >
            <UrbanMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
