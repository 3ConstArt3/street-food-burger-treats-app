import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { hasDirections, hasPhone, restaurant } from "@/data/restaurant";

export function PlaceholderBadge() {
  return <span className="eyebrow ml-2 rounded-full bg-accent px-2 py-0.5 text-[0.6rem] text-accent-foreground">Placeholder</span>;
}

export function VisitDetails() {
  const r = restaurant;
  return (
    <dl className="space-y-6">
      <div className="flex gap-4">
        <MapPin className="mt-1 shrink-0 text-primary" />
        <div><dt className="eyebrow text-muted-foreground">Location{r.address.isPlaceholder && <PlaceholderBadge />}</dt><dd className="mt-1 text-lg font-semibold">{r.address.value}</dd></div>
      </div>
      <div className="flex gap-4">
        <Clock className="mt-1 shrink-0 text-primary" />
        <div className="flex-1">
          <dt className="eyebrow text-muted-foreground">Opening hours{r.hours.isPlaceholder && <PlaceholderBadge />}</dt>
          <dd className="mt-1 space-y-1">
            {r.hours.rows.map((h) => (
              <div key={h.days} className="flex max-w-xs justify-between gap-6 font-semibold"><span>{h.days}</span><span>{h.time}</span></div>
            ))}
          </dd>
        </div>
      </div>
      <div className="flex gap-4">
        <Phone className="mt-1 shrink-0 text-primary" />
        <div><dt className="eyebrow text-muted-foreground">Telephone{r.phone.isPlaceholder && <PlaceholderBadge />}</dt><dd className="mt-1 text-lg font-semibold">{r.phone.value}</dd></div>
      </div>
    </dl>
  );
}

export function VisitActions() {
  const dirs = hasDirections();
  const call = hasPhone();
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {dirs ? (
        <a href={restaurant.mapsUrl.value} target="_blank" rel="noreferrer" className="btn btn-primary"><Navigation size={18} />Get Directions</a>
      ) : (
        <button type="button" disabled className="btn btn-primary"><Navigation size={18} />Directions coming soon</button>
      )}
      {call ? (
        <a href={`tel:${restaurant.phone.tel}`} className="btn btn-ghost"><Phone size={18} />Call Us</a>
      ) : (
        <button type="button" disabled className="btn btn-ghost"><Phone size={18} />Phone coming soon</button>
      )}
    </div>
  );
}

export function MapArea({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[16px] bg-secondary text-secondary-foreground ${className}`} role="img" aria-label="Map area — exact location coming soon">
      <svg className="absolute inset-0 h-full w-full opacity-25" aria-hidden>
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <path d="M-20 260 C 120 200, 260 320, 420 220 S 700 140, 900 240" stroke="currentColor" strokeWidth="14" fill="none" />
        <path d="M200 -20 L 320 600" stroke="currentColor" strokeWidth="10" fill="none" />
      </svg>
      <div className="relative flex h-full min-h-72 flex-col items-center justify-center gap-3 p-8 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_0_0_10px_color-mix(in_oklab,var(--punch)_30%,transparent)]">
          <MapPin size={28} />
        </span>
        <p className="font-display text-3xl font-black uppercase">Athens, GR</p>
        <p className="text-sm opacity-75">Exact map pin coming soon</p>
      </div>
    </div>
  );
}
