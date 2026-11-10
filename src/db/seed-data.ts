export type SeedRate = {
  itemName: string;
  retailPrice: number;
  wholesalePrice: number;
  unit: string;
  isAvailable: boolean;
};

/** Initial realistic rates (INR). The shop overrides these daily. */
export const seedRates: SeedRate[] = [
  { itemName: "Goat Mutton", retailPrice: 900, wholesalePrice: 860, unit: "per kg", isAvailable: true },
  { itemName: "Sheep Mutton", retailPrice: 820, wholesalePrice: 780, unit: "per kg", isAvailable: true },
  { itemName: "Boneless Mutton", retailPrice: 1100, wholesalePrice: 1050, unit: "per kg", isAvailable: true },
  { itemName: "Mandya Ram (Kubeek)", retailPrice: 24000, wholesalePrice: 22500, unit: "per piece", isAvailable: true },
  { itemName: "Live Goat", retailPrice: 15000, wholesalePrice: 14000, unit: "per piece", isAvailable: true },
  { itemName: "Live Sheep", retailPrice: 12000, wholesalePrice: 11200, unit: "per piece", isAvailable: true },
  { itemName: "Paya (Trotters)", retailPrice: 120, wholesalePrice: 100, unit: "per set", isAvailable: true },
  { itemName: "Liver", retailPrice: 900, wholesalePrice: 850, unit: "per kg", isAvailable: true },
  { itemName: "Boti", retailPrice: 700, wholesalePrice: 660, unit: "per kg", isAvailable: true },
  { itemName: "Brain", retailPrice: 120, wholesalePrice: 100, unit: "per piece", isAvailable: true },
  { itemName: "Head Meat", retailPrice: 500, wholesalePrice: 460, unit: "per kg", isAvailable: true },
];
