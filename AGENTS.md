<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- ProductCard uses an explicit appearance variant for home signature cards; keep the standard menu appearance unchanged so home-only design requests do not affect the menu.
- All product displays and sidekick selections derive from src/data/menu.ts so official content stays synchronized; images are optional to avoid presenting conflicting ingredients when no suitable photo exists.
- The menu showcase uses a PDF-derived asset preview and dynamically imports PDF.js inside the popup after hydration; keep the original document in public and shared product data separate to preserve fidelity without server-side browser dependencies.
