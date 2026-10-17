import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, Flame } from "lucide-react";
import heroBurger from "@/assets/hero-burger.png";
import interior from "@/assets/interior.jpg";
import { menu, sideImages } from "@/data/menu";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { MapArea, VisitDetails } from "@/components/VisitInfo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Burger Treats — Big Bites. Good Vibes. | Athens Burger Spot" },
      { name: "description", content: "Smashed burgers, street fries and thick shakes in Athens. Discover the Burger Treats menu and come find us." },
      { property: "og:title", content: "Burger Treats — Big Bites. Good Vibes." },
      { property: "og:description", content: "Athens street-food burger spot. Smashed burgers, street fries and thick shakes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const headline = ["Big bites.", "Good vibes."];

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden">
      <span aria-hidden className="pointer-events-none absolute -right-10 bottom-0 select-none font-display text-[22vw] font-black uppercase leading-none text-foreground/[0.05]">Athens</span>
      <div className="container-bt relative grid items-center gap-8 py-12 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <motion.p
            className="eyebrow inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-secondary-foreground"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Flame size={14} className="text-accent" /> Athens Burger Spot
          </motion.p>
          <h1 className="display-xl mt-6">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  className={`block ${i === 1 ? "text-primary" : ""}`}
                  initial={reduce ? false : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            Smashed to order, stacked high and served with zero fuss. Athens' freshest street-food burgers — bring your crew.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.45 }}
          >
            <Link to="/menu" className="btn btn-primary">Explore Menu <ArrowRight size={18} /></Link>
            <Link to="/" hash="find-us" className="btn btn-ghost">Find Us</Link>
          </motion.div>
        </div>
        <div className="relative lg:col-span-6">
          <div aria-hidden className="absolute left-1/2 top-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
          <motion.img
            src={heroBurger}
            alt="Double smash burger with melted cheddar, lettuce and tomato"
            width={1024}
            height={1024}
            fetchPriority="high"
            className="relative mx-auto w-[88%] max-w-[620px] drop-shadow-[0_30px_30px_color-mix(in_oklab,var(--ink)_35%,transparent)]"
            initial={reduce ? false : { opacity: 0, y: 60, scale: 0.88, rotate: -6 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute right-2 top-4 grid h-24 w-24 rotate-12 place-items-center rounded-full bg-primary text-center text-primary-foreground md:h-28 md:w-28"
            initial={reduce ? false : { opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <span className="font-display text-lg font-black uppercase leading-none">Smashed<br />fresh<br />daily</span>
          </motion.div>
        </div>
      </div>
      <Ticker />
    </section>
  );
}

const TICKER_COPIES = 6;
const TICKER_WORDS = ["Smash burgers", "Street fries", "Thick shakes", "Good vibes"];

function Ticker() {
  const reduce = useReducedMotion();
  const track = Array.from({ length: TICKER_COPIES });
  return (
    <div className="overflow-hidden border-y-2 border-foreground bg-secondary py-3 text-secondary-foreground" aria-hidden>
      <motion.div
        className="flex w-max font-display text-xl font-black uppercase"
        initial={{ x: 0 }}
        animate={reduce ? { x: 0 } : { x: ["0%", `-${100 / TICKER_COPIES}%`] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {track.map((_, i) => (
          <span key={i} className="flex shrink-0 gap-10 pr-10">
            {TICKER_WORDS.map((w) => (
              <span key={w} className="flex gap-10">{w}<span className="text-accent">✦</span></span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Puzzle-style composition: 12-column grid where each card has a purposeful span.
// Desktop: featured card (6x2) anchors the left, a wide card tops the right,
// two squares interlock in the middle, two wides close the composition.
const signatureLayouts: { cls: string; layout: "featured" | "wide" | "standard" }[] = [
  { cls: "sm:col-span-2 lg:col-span-6 lg:row-span-2", layout: "featured" },
  { cls: "sm:col-span-2 lg:col-span-6", layout: "wide" },
  { cls: "lg:col-span-3", layout: "standard" },
  { cls: "lg:col-span-3", layout: "standard" },
  { cls: "sm:col-span-2 lg:col-span-6", layout: "wide" },
  { cls: "sm:col-span-2 lg:col-span-6", layout: "wide" },
];

function Signatures() {
  const items = menu.filter((m) => m.signature);
  return (
    <section className="container-bt py-20 md:py-28">
      <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow text-primary">02 — Signatures</p>
          <h2 className="display-lg mt-3">Meet the<br />burgers</h2>
        </div>
        <Link to="/menu" className="btn btn-ghost self-start md:self-auto">View Full Menu <ArrowUpRight size={18} /></Link>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[300px]">
        {items.map((item, i) => {
          const slot = signatureLayouts[i % signatureLayouts.length];
          if (!slot) return null;
          return (
            <Reveal key={item.id} className={slot.cls} delay={(i % 3) * 0.08}>
              <ProductCard item={item} layout={slot.layout} appearance="street" />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Brand() {
  return (
    <section id="our-spot" className="scroll-mt-20 bg-secondary text-secondary-foreground">
      <div className="container-bt grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:items-center">
        <Reveal className="relative lg:col-span-5">
          <img src={interior} alt="Friends eating burgers at the Burger Treats counter" loading="lazy" width={1280} height={1600} className="aspect-[4/5] w-full rounded-[16px] object-cover" />
          <span className="absolute -bottom-5 -right-3 rotate-[-4deg] rounded-[10px] bg-accent px-5 py-3 font-display text-2xl font-black uppercase text-accent-foreground">Since day one ✦</span>
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
          <p className="eyebrow text-accent">03 — Our Spot</p>
          <h2 className="display-lg mt-3">Good food.<br /><span className="text-primary">Good energy.</span></h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed opacity-85">
            Burger Treats started with one idea: the best burgers are made fresh, eaten loud and shared with friends. We smash local beef on a screaming-hot griddle, toast every bun and make our sauces in house.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-6 border-t border-secondary-foreground/20 pt-8">
            {[["Fresh", "Never-frozen beef, smashed to order"], ["Bold", "Big flavours, house sauces"], ["Friendly", "Fast, warm, no-fuss service"], ["Social", "Counter seats made for sharing"]].map(([t, d]) => (
              <li key={t}><p className="font-display text-3xl font-black uppercase text-accent">{t}</p><p className="mt-1 text-sm opacity-80">{d}</p></li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Sidekicks() {
  const tiles = [
    { cat: "sides" as const, title: "Sides", sub: "Fries, rings & loaded bites", img: sideImages.sides, cls: "bg-accent text-accent-foreground" },
    { cat: "drinks" as const, title: "Drinks", sub: "Thick shakes & house lemonade", img: sideImages.drinks, cls: "bg-primary text-primary-foreground" },
  ];
  return (
    <section className="container-bt py-20 md:py-28">
      <Reveal>
        <p className="eyebrow text-primary">04 — Extras</p>
        <h2 className="display-lg mt-3">The perfect<br />sidekicks</h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {tiles.map((t, i) => (
          <Reveal key={t.cat} delay={i * 0.1}>
            <Link to="/menu" search={{ category: t.cat }} className={`group relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[16px] p-8 ${t.cls}`}>
              <div className="relative z-10">
                <h3 className="font-display text-7xl font-black uppercase leading-none md:text-8xl">{t.title}</h3>
                <p className="mt-2 font-semibold">{t.sub}</p>
              </div>
              <span className="relative z-10 inline-flex items-center gap-2 font-bold">See {t.title.toLowerCase()} <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} /></span>
              <img src={t.img} alt="" loading="lazy" width={1024} height={1024} className="absolute -bottom-10 -right-10 w-[62%] rounded-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3 motion-reduce:transition-none" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FindUs() {
  return (
    <section id="find-us" className="scroll-mt-20 border-t-2 border-foreground">
      <div className="container-bt grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow text-primary">05 — Visit</p>
          <h2 className="display-lg mt-3">Your next<br /><span className="text-primary">stop.</span></h2>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">Drop by, grab a seat at the counter and order straight from the grill.</p>
          <div className="mt-10"><VisitDetails /></div>
        </Reveal>
        <Reveal delay={0.1}><MapArea className="aspect-[4/3]" /></Reveal>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Signatures />
      <Brand />
      <Sidekicks />
      <FindUs />
    </>
  );
}
