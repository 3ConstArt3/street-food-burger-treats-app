import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu as MenuIcon, X, UtensilsCrossed, Navigation, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { hasDirections, hasPhone, restaurant } from "@/data/restaurant";

const nav = [
  { label: "Home", to: "/" as const },
  { label: "Menu", to: "/menu" as const },
  { label: "Our Spot", to: "/" as const, hash: "our-spot" },
  { label: "Contact", to: "/contact" as const },
];

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-2xl font-black uppercase leading-none tracking-tight ${className}`}>
      Burger<span className="text-primary">Treats</span>
      <span className="ml-0.5 inline-block h-2 w-2 rounded-full bg-accent align-top" aria-hidden />
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="container-bt flex h-16 items-center justify-between md:h-20">
          <Link to="/" aria-label="Burger Treats home"><Wordmark /></Link>
          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                {...(n.hash ? { hash: n.hash } : {})}
                activeOptions={{ exact: true, includeHash: !!n.hash }}
                className="relative text-sm font-semibold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full data-[status=active]:after:w-full"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/contact" className="btn btn-primary hidden !h-11 md:inline-flex">Find Us</Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-[10px] bg-secondary text-secondary-foreground md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-16 z-30 bg-secondary text-secondary-foreground md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <nav aria-label="Mobile" className="container-bt flex flex-col gap-2 pt-10">
              {nav.map((n, i) => (
                <motion.div key={n.label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                  <Link to={n.to} {...(n.hash ? { hash: n.hash } : {})} onClick={() => setOpen(false)} className="font-display text-5xl font-black uppercase hover:text-primary">
                    {n.label}
                  </Link>
                </motion.div>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary mt-8 w-full">Find Us</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function MobileActionBar() {
  const dirs = hasDirections();
  const call = hasPhone();
  const item = "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-xs font-bold";
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-secondary text-secondary-foreground md:hidden">
      <Link to="/menu" className={item}><UtensilsCrossed size={18} />Menu</Link>
      {dirs ? (
        <a href={restaurant.mapsUrl.value} target="_blank" rel="noreferrer" className={`${item} bg-primary text-primary-foreground`}><Navigation size={18} />Directions</a>
      ) : (
        <Link to="/contact" className={`${item} bg-primary text-primary-foreground`}><Navigation size={18} />Directions</Link>
      )}
      {call ? (
        <a href={`tel:${restaurant.phone.tel}`} className={item}><Phone size={18} />Call</a>
      ) : (
        <span className={`${item} opacity-50`} aria-disabled="true" title="Phone number coming soon"><Phone size={18} />Call</span>
      )}
    </div>
  );
}
