import classic from "@/assets/burger-classic.jpg";
import spicy from "@/assets/burger-spicy.jpg";
import bbq from "@/assets/burger-bbq.jpg";
import truffle from "@/assets/burger-truffle.jpg";
import chicken from "@/assets/burger-chicken.jpg";
import veggie from "@/assets/burger-veggie.jpg";
import fries from "@/assets/side-fries.jpg";
import rings from "@/assets/side-rings.jpg";
import shake from "@/assets/drink-shake.jpg";
import lemonade from "@/assets/drink-lemonade.jpg";

export type Category = "burgers" | "sides" | "drinks";
export const categories: { id: Category; label: string }[] = [
  { id: "burgers", label: "Burgers" },
  { id: "sides", label: "Sides" },
  { id: "drinks", label: "Drinks" },
];

export type MenuItem = {
  id: string;
  category: Category;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
  signature?: boolean;
};

// Demonstration prices in EUR.
export const menu: MenuItem[] = [
  { id: "og", category: "burgers", name: "The OG Treat", description: "Smashed beef, aged cheddar, house pickles and our secret Treat sauce on a toasted brioche.", price: 9.5, image: classic, tag: "Bestseller", signature: true },
  { id: "inferno", category: "burgers", name: "Athens Inferno", description: "Pepper jack, fresh jalapeños, red onion and smoky chipotle mayo. Brings the heat.", price: 10.5, image: spicy, tag: "Spicy", signature: true },
  { id: "smokehouse", category: "burgers", name: "Smokehouse Stack", description: "Crispy bacon, beer-battered onion rings, cheddar and sticky BBQ glaze.", price: 11.9, image: bbq, tag: "Loaded", signature: true },
  { id: "truffle", category: "burgers", name: "Truffle Shroom", description: "Sautéed mushrooms, melted Swiss and black truffle aioli. Rich and earthy.", price: 12.5, image: truffle, signature: true },
  { id: "cluck", category: "burgers", name: "Hot Honey Cluck", description: "Buttermilk fried chicken, hot honey drizzle, crunchy slaw and pickles.", price: 10.9, image: chicken, tag: "Crunchy", signature: true },
  { id: "garden", category: "burgers", name: "Garden Halloumi", description: "Grilled halloumi, avocado, rocket and tomato on a seeded bun.", price: 10.2, image: veggie, tag: "Veggie", signature: true },
  { id: "fries", category: "sides", name: "Street Fries", description: "Hand-cut, double-fried and tossed with sea salt and Greek oregano.", price: 3.9, image: fries, tag: "Classic" },
  { id: "loaded-fries", category: "sides", name: "Feta Loaded Fries", description: "Street fries topped with crumbled feta, Treat sauce and spring onion.", price: 5.5, image: fries },
  { id: "rings", category: "sides", name: "Onion Rings", description: "Beer-battered, golden and crunchy, with herby ranch dip.", price: 4.5, image: rings },
  { id: "shake", category: "drinks", name: "Vanilla Thick Shake", description: "Real vanilla bean, whipped cream and a cherry on top.", price: 5.2, image: shake, tag: "Sweet" },
  { id: "lemonade", category: "drinks", name: "Pink Lemonade", description: "House-made, freshly squeezed and lightly sparkling.", price: 3.8, image: lemonade },
  { id: "shake-choc", category: "drinks", name: "Choc Fudge Shake", description: "Dark chocolate, fudge swirl and whipped cream.", price: 5.5, image: shake },
];

export const sideImages = { sides: fries, drinks: shake };
export const formatPrice = (p: number) => `€${p.toFixed(2)}`;
