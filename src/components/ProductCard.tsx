import { formatPrice, type MenuItem } from "@/data/menu";

type CardLayout = "standard" | "wide" | "featured";

export function ProductCard({ item, large, layout = "standard", appearance = "menu" }: { item: MenuItem; large?: boolean; layout?: CardLayout; appearance?: "menu" | "street" }) {
  const featured = layout === "featured";
  if (appearance === "street") {
    return (
      <article className={`group street-card street-card--${layout} street-card--${item.id}`}>
        {item.image && <img
          src={item.image}
          alt={item.imageAlt ?? item.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="street-card-photo"
        />}
        <div className="street-card-ribbon">
          <svg className="street-card-ribbon-shape" viewBox="0 0 600 100" preserveAspectRatio="none" aria-hidden="true">
            <path className="street-card-ribbon-fold" d="M0 18 L35 9 L42 91 L9 96 Z M558 8 L599 14 L589 98 L553 91 Z" />
            <path className="street-card-ribbon-face" d="M0 5 Q155 20 300 8 Q455 -3 600 6 L600 82 Q455 73 300 87 Q155 100 0 83 Z" />
            <path className="street-card-ribbon-line" d="M12 16 Q155 30 300 19 Q455 8 588 17 M12 74 Q155 87 300 76 Q455 63 588 72" />
          </svg>
          <h3 className="street-card-name">{item.name}</h3>
        </div>
        <span className="street-card-price">{formatPrice(item.price)}</span>
      </article>
    );
  }
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[16px] bg-card ring-1 ring-border transition-shadow duration-300 hover:shadow-[0_14px_0_-6px_var(--ink)]">
      {item.image && <div
        className={`relative overflow-hidden bg-muted ${
          layout === "wide" ? "aspect-[16/10] lg:aspect-auto lg:min-h-0 lg:flex-1" : "aspect-square lg:aspect-auto lg:min-h-0 lg:flex-1"
        }`}
      >
        {item.image && <img
          src={item.image}
          alt={item.imageAlt ?? item.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />}
        {item.tag && (
          <span className="eyebrow absolute left-3 top-3 rounded-full bg-accent px-3 py-1.5 text-accent-foreground">
            {item.tag}
          </span>
        )}
      </div>}
      <div className={`flex flex-col gap-2 ${featured ? "p-6" : "p-5"}`}>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className={`min-w-0 font-display font-extrabold leading-none ${featured || large ? "text-3xl" : "text-2xl"}`}>{item.name}</h3>
          <span className={`shrink-0 font-display font-black text-primary ${featured ? "text-3xl" : "text-2xl"}`}>{formatPrice(item.price)}</span>
        </div>
        <p className={`leading-relaxed text-muted-foreground ${featured ? "text-base" : "text-sm"}`}>{item.description}</p>
      </div>
    </article>
  );
}
