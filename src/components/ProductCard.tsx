import { formatPrice, type MenuItem } from "@/data/menu";

type CardLayout = "standard" | "wide" | "featured";

export function ProductCard({ item, large, layout = "standard" }: { item: MenuItem; large?: boolean; layout?: CardLayout }) {
  const featured = layout === "featured";
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[16px] bg-card ring-1 ring-border transition-shadow duration-300 hover:shadow-[0_14px_0_-6px_var(--ink)]">
      <div
        className={`relative overflow-hidden bg-muted ${
          layout === "wide" ? "aspect-[16/10] lg:aspect-auto lg:min-h-0 lg:flex-1" : "aspect-square lg:aspect-auto lg:min-h-0 lg:flex-1"
        }`}
      >
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        {item.tag && (
          <span className="eyebrow absolute left-3 top-3 rounded-full bg-accent px-3 py-1.5 text-accent-foreground">
            {item.tag}
          </span>
        )}
      </div>
      <div className={`flex flex-col gap-2 ${featured ? "p-6" : "p-5"}`}>
        <div className="flex items-baseline justify-between gap-3">
          <h3 className={`font-display font-extrabold leading-none ${featured || large ? "text-3xl" : "text-2xl"}`}>{item.name}</h3>
          <span className={`font-display font-black text-primary ${featured ? "text-3xl" : "text-2xl"}`}>{formatPrice(item.price)}</span>
        </div>
        <p className={`leading-relaxed text-muted-foreground ${featured ? "text-base" : "text-sm"}`}>{item.description}</p>
      </div>
    </article>
  );
}
