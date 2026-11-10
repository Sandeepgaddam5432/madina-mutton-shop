import type { Metadata } from "next";
import { ProductsView } from "@/components/ProductsView";
import { getRates } from "@/lib/rates";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Products — Fresh Mutton, Live Animals & Special Cuts",
  description:
    "Halal goat & sheep mutton, Mandya / Kubeek breed rams, live goats and sheep, paya, liver, boti, brain, head meat and boneless cuts in Narmetta.",
};

export default async function ProductsPage() {
  const rates = await getRates();
  return <ProductsView rates={rates} />;
}
