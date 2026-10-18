import { describe, expect, it } from "vitest";
import { formatPrice, menu, sidekickItems } from "@/data/menu";

const officialItems = [
  ["Classic Cheeseburger", "burgers", 8.5, "A juicy beef patty, melted cheddar, pickles, lettuce, tomato, and creamy burger sauce in a soft, toasted bun."],
  ["Smoky Bacon BBQ", "burgers", 9.5, "A beef patty, crispy bacon, cheddar, and caramelized onions, finished with smoky BBQ sauce in a buttery brioche bun."],
  ["Spicy Jalapeño Burger", "burgers", 9, "A beef patty topped with melted cheddar, fiery jalapeños, tomato, and spicy mayo, packing a kick into every bite."],
  ["Crispy Chicken Burger", "burgers", 8.5, "Crispy breaded chicken breast, fresh lettuce, pickles, and herb mayo in a lightly toasted brioche bun."],
  ["Truffle Mushroom Burger", "burgers", 10, "A juicy beef patty, sautéed mushrooms, smoked cheese, and truffle mayo, layered with rich flavor and earthy aromas."],
  ["Crispy Portobello Burger", "burgers", 8.5, "A crispy breaded portobello mushroom filled with melted cheddar, topped with lettuce, tomato, and creamy burger sauce."],
  ["Classic Crispy Fries", "sides", 3, "Golden fries, crispy on the outside and fluffy on the inside, sprinkled with sea salt."],
  ["Bacon & Cheddar Fries", "sides", 5.5, "Crispy fries loaded with warm cheddar sauce, crispy bacon, and fresh spring onions."],
  ["Chicken Bites", "sides", 5.5, "Juicy chicken breast bites in a crispy coating, served with sweet and tangy honey mustard sauce."],
  ["Crispy Onion Rings", "sides", 4.5, "Sweet onion rings coated in a crispy, golden batter, served with smoky BBQ sauce on the side."],
  ["Ice-Cold Cola", "drinks", 2, "330 ml"],
  ["Fresh Lemonade", "drinks", 3.5, "400 ml"],
  ["Lemon Ice Tea", "drinks", 3, "400 ml"],
  ["Chocolate Milkshake", "drinks", 5, "400 ml"],
] as const;

describe("Official food menu", () => {
  it.each(officialItems)("preserves %s exactly", (name, category, price, description) => {
    expect(menu.find((item) => item.name === name)).toMatchObject({ name, category, price, description });
  });
  it("contains only the 14 official products", () => {
    expect(menu.map((item) => item.name)).toEqual(officialItems.map(([name]) => name));
    expect(new Set(menu.map((item) => item.id)).size).toBe(14);
  });
  it("features all six official burgers without duplicate products", () => {
    expect(menu.filter((item) => item.signature).map((item) => item.name)).toEqual(officialItems.slice(0, 6).map(([name]) => name));
  });
  it("uses the official sides and drinks for homepage selections", () => {
    expect(sidekickItems.sides.map((item) => item.name)).toEqual(officialItems.slice(6, 10).map(([name]) => name));
    expect(sidekickItems.drinks.map((item) => item.name)).toEqual(officialItems.slice(10).map(([name]) => name));
  });
  it("formats prices in euros without changing their values", () => {
    expect(formatPrice(8.5)).toBe("€8.50");
    expect(formatPrice(3)).toBe("€3.00");
  });
});