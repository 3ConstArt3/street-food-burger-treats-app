# Burger Treats — "Bold Motion Diner" website

Three-page site (Home, Menu, Contact) for an Athens street-food burger spot, following the brief: 70% clean urban / 30% street pop, cream/ink/red/yellow palette, Roboto Condensed + Manrope, Motion animations, EN/EL toggle.

## Pages
- **Home (/)**: Hero "BIG BITES. GOOD VIBES." (split screen, floating burger cutout, staggered headline) → Meet the Burgers (6 cards) → Good Food. Good Energy. (`#our-spot`, editorial image + story) → The Perfect Sidekicks (Sides / Drinks tiles linking to `/menu?category=...`) → Your Next Stop (location, hours, phone placeholders, map area, Get Directions) → red/ink footer.
- **Menu (/menu)**: "THE MENU", tabs Burgers / Sides / Drinks synced to `?category=`, animated tab transitions, image cards with euro prices. No cart/ordering.
- **Contact (/contact)**: "COME FIND US", address/hours/phone clearly marked as placeholders, map area, directions & call buttons shown disabled with "coming soon" until real data is supplied.

## Shared
- Sticky header: wordmark, Home, Menu, Our Spot, Contact, EN/EL switch, "Find Us" CTA. Mobile: animated hamburger drawer + fixed bottom bar (Menu · Directions · Call).
- Reduced-motion respected; scroll-reveal sections; hover scale on food photos.
- Unique SEO title/description per page.

## Imagery
Generated photoreal assets: hero burger cutout (transparent), 6 burgers, ~4 sides, ~4 drinks, 2 interior/atmosphere shots, 2 sidekick category images.

## Technical details
- TanStack Router file routes (`index`, `menu`, `contact`) — the brief's React Router maps onto the project's fixed router; `validateSearch` for `category`.
- `motion` package for animations, `lucide-react` icons.
- Centralized data: `src/data/menu.ts`, `src/data/restaurant.ts` (with `isPlaceholder` flags), `src/i18n/` (EN/EL dictionaries + context, persisted language).
- Design tokens in `src/styles.css` (oklch versions of #F7F3EC, #191919, #F04438, #FFC247), fonts via `<link>` in root head.
- Components: Header, MobileNav, BottomBar, Footer, Reveal, ProductCard, SectionHeading.
