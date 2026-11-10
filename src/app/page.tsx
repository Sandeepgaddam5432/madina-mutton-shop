import { HomeView } from "@/components/HomeView";
import { getRates, latestUpdate } from "@/lib/rates";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const rates = await getRates();
  return <HomeView rates={rates} updatedAt={latestUpdate(rates)} />;
}
