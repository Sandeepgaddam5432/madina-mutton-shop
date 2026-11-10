import type { ProductId } from "./i18n";

export type ProductCategory = "fresh" | "live" | "offal";

export type Product = {
  id: ProductId;
  category: ProductCategory;
  /** Matches `daily_rates.item_name` so today's price can be shown. */
  rateItem: string;
  emoji: string;
};

export const PRODUCTS: Product[] = [
  { id: "goat", category: "fresh", rateItem: "Goat Mutton", emoji: "🐐" },
  { id: "sheep", category: "fresh", rateItem: "Sheep Mutton", emoji: "🐑" },
  { id: "boneless", category: "fresh", rateItem: "Boneless Mutton", emoji: "🥩" },
  { id: "mandya", category: "live", rateItem: "Mandya Ram (Kubeek)", emoji: "🐏" },
  { id: "liveGoat", category: "live", rateItem: "Live Goat", emoji: "🐐" },
  { id: "liveSheep", category: "live", rateItem: "Live Sheep", emoji: "🐑" },
  { id: "paya", category: "offal", rateItem: "Paya (Trotters)", emoji: "🦴" },
  { id: "liver", category: "offal", rateItem: "Liver", emoji: "🫀" },
  { id: "boti", category: "offal", rateItem: "Boti", emoji: "🍖" },
  { id: "brain", category: "offal", rateItem: "Brain", emoji: "🧠" },
  { id: "head", category: "offal", rateItem: "Head Meat", emoji: "💀" },
];
