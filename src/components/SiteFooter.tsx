import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "Menu", to: "/menu" as const },
  { label: "Our Spot", to: "/" as const, hash: "our-spot" },
  { label: "Contact", to: "/" as const, hash: "find-us" },
];

const linkClass =
  "group relative inline-flex items-center gap-2 py-1 text-cream transition-colors duration-300 hover:text-cheddar focus-visible:text-cheddar";
const underline =
  "pointer-events-none absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-punch transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink pb-24 text-cream md:pb-0">
      {/* Zig-zag transition from the section above */}
      <svg aria-hidden className="block h-4 w-full text-background" preserveAspectRatio="none" viewBox="0 0 100 4">
        <path d="M0 0 H100 V0 L97.5 4 L95 0 L92.5 4 L90 0 L87.5 4 L85 0 L82.5 4 L80 0 L77.5 4 L75 0 L72.5 4 L70 0 L67.5 4 L65 0 L62.5 4 L60 0 L57.5 4 L55 0 L52.5 4 L50 0 L47.5 4 L45 0 L42.5 4 L40 0 L37.5 4 L35 0 L32.5 4 L30 0 L27.5 4 L25 0 L22.5 4 L20 0 L17.5 4 L15 0 L12.5 4 L10 0 L7.5 4 L5 0 L2.5 4 L0 0 Z" fill="currentColor" />
      </svg>

      {/* Restrained geometric accents */}
      <span aria-hidden className="pointer-events-none absolute right-[8%] top-64 hidden h-28 w-28 rounded-full border-2 border-cheddar/40 md:block" />
      <span aria-hidden className="pointer-events-none absolute right-[calc(8%+6rem)] top-[22rem] hidden h-5 w-5 rotate-45 bg-punch md:block" />

      <div className="container-bt relative pt-16 md:pt-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="eyebrow text-cheddar">Street-food burgers · {restaurant.city}</p>
          <p className="inline-flex w-fit -rotate-2 items-center gap-2 rounded-full border-2 border-cheddar px-4 py-1.5 font-display text-sm font-black uppercase tracking-wider text-cheddar">
            <span className="h-2 w-2 rounded-full bg-punch" /> Big bites. Good vibes.
          </p>
        </div>

        <h2 className="mt-6 font-display font-black uppercase leading-[0.82] tracking-tight text-[clamp(3.25rem,15vw,13rem)]">
          Burger
          <br />
          <span className="text-punch">Treats</span>
          <span className="text-cheddar">.</span>
        </h2>

        <div className="mt-14 grid gap-10 border-t border-cream/15 pt-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.3fr_1fr] lg:gap-12">
          <div>
            <p className="max-w-xs text-base leading-relaxed text-cream/80">
              Street-food burgers in {restaurant.city}. Smashed, stacked and served with good vibes.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="eyebrow mb-4 text-cream/55">Explore</h3>
            <ul className="space-y-2 font-display text-lg font-bold uppercase tracking-wide">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} hash={l.hash} className={linkClass}>
                    {l.label}
                    <ArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    <span className={underline} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="eyebrow mb-4 text-cream/55">Visit</h3>
            <p className="flex items-start gap-2 text-sm text-cream">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-punch" /> {restaurant.address.value}
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-cream">
              <Phone className="h-4 w-4 shrink-0 text-punch" /> {restaurant.phone.value}
            </p>
            {restaurant.address.isPlaceholder && <p className="mt-3 text-xs text-cream/60">Location details coming soon.</p>}
          </div>

          <div>
            <h3 className="eyebrow mb-4 text-cream/55">Follow</h3>
            <ul className="flex flex-wrap gap-2">
              {restaurant.socials.map((s) =>
                <li key={s.label}>
                  {s.href ? (
                    <a href={s.href} className="inline-flex min-h-10 items-center rounded-full border border-cream/40 px-4 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:border-cheddar hover:bg-cheddar hover:text-ink">
                      {s.label}
                    </a>
                  ) : (
                    <span className="inline-flex min-h-10 items-center rounded-full border border-cream/20 px-4 text-xs font-bold uppercase tracking-wider text-cream/60" title="Coming soon">
                      {s.label}
                    </span>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/15 py-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Burger Treats. All rights reserved.</p>
          <p className="font-display font-bold uppercase tracking-[0.2em]">Made in Athens <span className="text-punch">✦</span></p>
        </div>
      </div>
    </footer>
  );
}
