import { Link } from "@tanstack/react-router";
import { restaurant } from "@/data/restaurant";
import { Wordmark } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-primary pb-24 text-primary-foreground md:pb-0">
      <div className="container-bt py-16 md:py-24">
        <p className="display-xl max-w-5xl">
          Burger Treats.<br />
          <span className="text-secondary">Big bites.</span><br />
          Good vibes.
        </p>
        <div className="mt-14 grid gap-10 border-t border-primary-foreground/30 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div><Wordmark className="[&_span]:text-secondary" /><p className="mt-3 text-sm opacity-85">Street-food burgers in {restaurant.city}.</p></div>
          <div>
            <h2 className="eyebrow mb-3 opacity-80">Explore</h2>
            <ul className="space-y-2 text-sm font-semibold">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/" hash="our-spot">Our Spot</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="eyebrow mb-3 opacity-80">Visit</h2>
            <p className="text-sm">{restaurant.address.value}</p>
            <p className="mt-1 text-sm">{restaurant.phone.value}</p>
            {restaurant.address.isPlaceholder && <p className="mt-2 text-xs opacity-75">Location details coming soon.</p>}
          </div>
          <div>
            <h2 className="eyebrow mb-3 opacity-80">Follow</h2>
            <ul className="flex flex-wrap gap-2">
              {restaurant.socials.map((s) => (
                <li key={s.label}>
                  {s.href ? (
                    <a href={s.href} className="rounded-full border border-primary-foreground/50 px-3 py-1.5 text-xs font-bold">{s.label}</a>
                  ) : (
                    <span className="rounded-full border border-primary-foreground/30 px-3 py-1.5 text-xs font-bold opacity-70" title="Coming soon">{s.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-xs opacity-75">© {new Date().getFullYear()} Burger Treats. All rights reserved.</p>
      </div>
    </footer>
  );
}
