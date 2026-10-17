import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { categories, menu, type Category } from "@/data/menu";
import { ProductCard } from "@/components/ProductCard";

const valid = (c: unknown): c is Category => c === "burgers" || c === "sides" || c === "drinks";

export const Route = createFileRoute("/menu")({
  validateSearch: (s: Record<string, unknown>): { category?: Category } =>
    valid(s.category) && s.category !== "burgers" ? { category: s.category } : {},
  head: () => ({
    meta: [
      { title: "The Menu — Burgers, Sides & Drinks | Burger Treats Athens" },
      { name: "description", content: "Explore the Burger Treats menu: signature smash burgers, street fries, onion rings, thick shakes and house lemonade." },
      { property: "og:title", content: "The Menu | Burger Treats Athens" },
      { property: "og:description", content: "Signature smash burgers, street fries and thick shakes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { category = "burgers" } = Route.useSearch();
  const reduce = useReducedMotion();
  const items = menu.filter((m) => m.category === category);
  const isBurgers = category === "burgers";

  return (
    <section className="container-bt py-14 md:py-20">
      <p className="eyebrow text-primary">Made fresh in Athens</p>
      <h1 className="display-xl mt-3">The menu</h1>

      <div role="tablist" aria-label="Menu categories" className="mt-10 inline-flex flex-wrap gap-2 rounded-[14px] bg-muted p-1.5">
        {categories.map((c) => {
          const active = c.id === category;
          return (
            <Link
              key={c.id}
              role="tab"
              aria-selected={active}
              to="/menu"
              search={c.id === "burgers" ? {} : { category: c.id }}
              replace
              resetScroll={false}
              className={`relative rounded-[10px] px-6 py-3 font-display text-xl font-extrabold uppercase transition-colors ${active ? "text-secondary-foreground" : "text-foreground hover:text-primary"}`}
            >
              {active && (
                <motion.span layoutId="tab-pill" className="absolute inset-0 rounded-[10px] bg-secondary" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
              )}
              <span className="relative">{c.label}</span>
            </Link>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={category}
          role="tabpanel"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`mt-10 grid gap-6 sm:grid-cols-2 ${isBurgers ? "lg:grid-cols-3" : "lg:grid-cols-3"}`}
        >
          {items.map((item) => <ProductCard key={item.id} item={item} large={isBurgers} />)}
        </motion.div>
      </AnimatePresence>

      <p className="mt-12 text-sm text-muted-foreground">Prices shown are for demonstration. Order and pay at the counter — no online ordering.</p>
    </section>
  );
}
