import { createFileRoute } from "@tanstack/react-router";
import { MapArea, VisitActions, VisitDetails } from "@/components/VisitInfo";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Come Find Us — Location & Hours | Burger Treats Athens" },
      { name: "description", content: "Where to find Burger Treats in Athens: location, opening hours and contact details." },
      { property: "og:title", content: "Come Find Us | Burger Treats Athens" },
      { property: "og:description", content: "Location, opening hours and contact for Burger Treats in Athens." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="container-bt py-14 md:py-20">
      <p className="eyebrow text-primary">Athens, Greece</p>
      <h1 className="display-xl mt-3">Come<br /><span className="text-primary">find us</span></h1>
      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="rounded-[16px] bg-card p-8 ring-1 ring-border">
            <VisitDetails />
            <div className="mt-10"><VisitActions /></div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Details marked “Placeholder” will be updated once our exact location is confirmed.</p>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.1}><MapArea className="h-full min-h-[420px]" /></Reveal>
      </div>
    </section>
  );
}
