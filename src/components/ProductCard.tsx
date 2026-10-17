import { formatPrice, type MenuItem } from "@/data/menu";

export function ProductCard({ item, large }: { item: MenuItem; large?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[16px] bg-card ring-1 ring-border transition-shadow duration-300 hover:shadow-[0_14px_0_-6px_var(--ink)]">
      <div className="relative aspect-square overflow-hidden bg-muted">
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
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className={`font-display font-extrabold leading-none ${large ? "text-3xl" : "text-2xl"}`}>{item.name}</h3>
          <span className="font-display text-2xl font-black text-primary">{formatPrice(item.price)}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      </div>
    </article>
  );
}
