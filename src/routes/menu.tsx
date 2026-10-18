import { createFileRoute } from "@tanstack/react-router";
import { MenuShowcase } from "@/components/MenuShowcase";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "The Menu — Burgers, Sides & Drinks | Burger Treats Athens" },
      { name: "description", content: "View the original Burger Treats food menu. Open our official PDF to explore burgers, sides, drinks and prices in Athens." },
      { property: "og:title", content: "The Menu | Burger Treats Athens" },
      { property: "og:description", content: "The original Burger Treats food menu, presented as an interactive printed-menu showcase." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuShowcase,
});
