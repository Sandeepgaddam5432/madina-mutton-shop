import type { Metadata } from "next";
import { RatesView } from "@/components/RatesView";
import { getRates, latestUpdate } from "@/lib/rates";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Today's Mutton Rates — Live Daily & Wholesale Prices",
  description:
    "Today's live retail and wholesale rates for mutton, Mandya rams, live goats, paya, liver and boti at Madina Mutton Shop, Narmetta.",
};

export default async function RatesPage() {
  const rates = await getRates();
  return <RatesView rates={rates} updatedAt={latestUpdate(rates)} />;
}
