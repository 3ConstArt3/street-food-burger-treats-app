// Fictional demonstration testimonials — replace with real customer quotes when available.
export type Testimonial = {
  id: string;
  quote: string;
  highlight: string; // phrase inside the quote to accent
  name: string;
  note: string;
  tone: "ink" | "punch" | "cheddar" | "cream" | "outline";
  featured?: boolean;
};

export const testimonialsAreSamples = true;

export const testimonials: Testimonial[] = [
  {
    id: "eleni",
    quote: "I ordered the Smoky Bacon BBQ on a whim and now I plan my week around it. Crispy edges, proper smoke, sauce on my sleeve. Worth it.",
    highlight: "plan my week around it",
    name: "Eleni K.",
    note: "Regular since the first month",
    tone: "ink",
    featured: true,
  },
  {
    id: "nikos",
    quote: "Loud music, neon glow, people talking across tables. It feels like the neighbourhood's living room.",
    highlight: "living room",
    name: "Nikos P.",
    note: "Kerameikos local",
    tone: "cheddar",
  },
  {
    id: "maria",
    quote: "The guy at the counter remembered my order the second time I came in. Small thing, huge difference.",
    highlight: "remembered my order",
    name: "Maria T.",
    note: "Lunch-break crew",
    tone: "cream",
  },
  {
    id: "jordan",
    quote: "Graffiti on the walls, fries in a paper cone, zero pretension. Athens in a burger joint.",
    highlight: "zero pretension",
    name: "Jordan M.",
    note: "Visiting from Lyon",
    tone: "punch",
  },
  {
    id: "dimitris",
    quote: "I've done every smash burger spot in the city. This is the one I take friends to.",
    highlight: "the one",
    name: "Dimitris A.",
    note: "Street-food hunter",
    tone: "outline",
  },
];
