export type Testimonial = {
  id: string;
  name: string;
  initials: string;
  subject: string;
  quote: string;
  highlight?: string;
};

// Fictional demonstration content, not verified customer reviews.
export const testimonials: Testimonial[] = [
  {
    id: "flavour",
    name: "Nikos P.",
    initials: "NP",
    subject: "All about the bite",
    quote: "That first bite? Worth the detour. Juicy burger, proper melted cheese, and a sauce I’m still thinking about.",
    highlight: "Worth the detour.",
  },
  {
    id: "atmosphere",
    name: "Elena K.",
    initials: "EK",
    subject: "Stay a little longer",
    quote: "Came in for a quick lunch, ended up staying with friends. It’s got that easy, lively feel without trying too hard.",
  },
  {
    id: "service",
    name: "Alex M.",
    initials: "AM",
    subject: "Good people, good energy",
    quote: "The crew helped me pick a burger and made us feel welcome straight away. Little things like that bring you back.",
  },
  {
    id: "personality",
    name: "Maya T.",
    initials: "MT",
    subject: "A little street soul",
    quote: "Bold colours, good music, no fuss. Feels like a little piece of the neighbourhood, with a very good burger in hand.",
  },
  {
    id: "destination",
    name: "Theo S.",
    initials: "TS",
    subject: "One for the regular rotation",
    quote: "My kind of street-food stop. A burger, crispy fries, and the whole evening ahead. Already planning the next visit.",
  },
];