// Fictional demonstration testimonials — replace with real customer quotes when available.
export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  rating: number; // out of 5
};

export const testimonialsAreSamples = true;

export const testimonials: Testimonial[] = [
  { id: "eleni", name: "Eleni K.", rating: 5, quote: "The Smoky Bacon BBQ is ridiculous — crispy edges, proper smoke, sauce on my sleeve. I plan my week around it." },
  { id: "nikos", name: "Nikos P.", rating: 5, quote: "Loud music, warm lights, people chatting across tables. It feels like the neighbourhood's living room." },
  { id: "maria", name: "Maria T.", rating: 4, quote: "The guy at the counter remembered my order the second time I came in. Small thing, huge difference." },
  { id: "jordan", name: "Jordan M.", rating: 5, quote: "Fries in hand, street art on the walls, zero pretension. This is Athens in a burger joint." },
  { id: "dimitris", name: "Dimitris A.", rating: 4, quote: "Fast, friendly and honest food. It's the burger spot I take friends to when they visit." },
];
