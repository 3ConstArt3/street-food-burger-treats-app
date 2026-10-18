import classic from "@/assets/sig-classic.jpg";
import bbq from "@/assets/sig-bbq.jpg";
import spicy from "@/assets/sig-spicy.jpg";
import chicken from "@/assets/sig-chicken.jpg";
import truffle from "@/assets/sig-truffle.jpg";
import portobello from "@/assets/sig-portobello.jpg";
import fries from "@/assets/side-fries.jpg";

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
  image?: string;
  imageAlt?: string;
  tag?: string;
  signature?: boolean;
};

// Official Burger Treats Food Menu. Keep source wording and prices unchanged.
// Only use existing photography that does not show conflicting ingredients.
export const menu: MenuItem[] = [
  { id: "og", category: "burgers", name: "Classic Cheeseburger", description: "A juicy beef patty, melted cheddar, pickles, lettuce, tomato, and creamy burger sauce in a soft, toasted bun.", price: 8.5, image: classic, imageAlt: "Beef cheeseburger with cheddar, pickles and burger sauce", signature: true },
  { id: "smokehouse", category: "burgers", name: "Smoky Bacon BBQ", description: "A beef patty, crispy bacon, cheddar, and caramelized onions, finished with smoky BBQ sauce in a buttery brioche bun.", price: 9.5, image: bbq, imageAlt: "Beef burger with crispy bacon, cheddar, caramelized onions and BBQ sauce on brioche", signature: true },
  { id: "inferno", category: "burgers", name: "Spicy Jalapeño Burger", description: "A beef patty topped with melted cheddar, fiery jalapeños, tomato, and spicy mayo, packing a kick into every bite.", price: 9, image: spicy, imageAlt: "Beef burger with cheddar, jalapeños, tomato and spicy mayo", signature: true },
  { id: "cluck", category: "burgers", name: "Crispy Chicken Burger", description: "Crispy breaded chicken breast, fresh lettuce, pickles, and herb mayo in a lightly toasted brioche bun.", price: 8.5, image: chicken, imageAlt: "Crispy breaded chicken burger with lettuce, pickles and herb mayo", signature: true },
  { id: "truffle", category: "burgers", name: "Truffle Mushroom Burger", description: "A juicy beef patty, sautéed mushrooms, smoked cheese, and truffle mayo, layered with rich flavor and earthy aromas.", price: 10, image: truffle, imageAlt: "Beef burger with sautéed mushrooms, smoked cheese and truffle mayo", signature: true },
  { id: "garden", category: "burgers", name: "Crispy Portobello Burger", description: "A crispy breaded portobello mushroom filled with melted cheddar, topped with lettuce, tomato, and creamy burger sauce.", price: 8.5, image: portobello, imageAlt: "Crispy breaded portobello burger with melted cheddar, lettuce, tomato and burger sauce", signature: true },
  { id: "fries", category: "sides", name: "Classic Crispy Fries", description: "Golden fries, crispy on the outside and fluffy on the inside, sprinkled with sea salt.", price: 3, image: fries, imageAlt: "Golden crispy fries" },
  { id: "loaded-fries", category: "sides", name: "Bacon & Cheddar Fries", description: "Crispy fries loaded with warm cheddar sauce, crispy bacon, and fresh spring onions.", price: 5.5 },
  { id: "chicken-bites", category: "sides", name: "Chicken Bites", description: "Juicy chicken breast bites in a crispy coating, served with sweet and tangy honey mustard sauce.", price: 5.5 },
  { id: "rings", category: "sides", name: "Crispy Onion Rings", description: "Sweet onion rings coated in a crispy, golden batter, served with smoky BBQ sauce on the side.", price: 4.5 },
  { id: "cola", category: "drinks", name: "Ice-Cold Cola", description: "330 ml", price: 2 },
  { id: "lemonade", category: "drinks", name: "Fresh Lemonade", description: "400 ml", price: 3.5 },
  { id: "ice-tea", category: "drinks", name: "Lemon Ice Tea", description: "400 ml", price: 3 },
  { id: "shake", category: "drinks", name: "Chocolate Milkshake", description: "400 ml", price: 5 },
];

export const sidekickItems = {
  sides: menu.filter((item) => item.category === "sides"),
  drinks: menu.filter((item) => item.category === "drinks"),
};
export const formatPrice = (p: number) => `€${p.toFixed(2)}`;
