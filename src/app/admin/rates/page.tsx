import type { Metadata } from "next";
import { AdminRatesEditor } from "@/components/AdminRatesEditor";

export const metadata: Metadata = {
  title: "Shop Admin — Update Daily Rates",
  robots: { index: false, follow: false },
};

export default function AdminRatesPage() {
  return (
    <>
      <header className="mx-auto max-w-4xl px-4 pb-8 pt-12 text-center">
        <h1 className="text-3xl font-black">
          <span className="glow-text">Update Today&apos;s Rates</span>
        </h1>
        <p className="mt-3 text-titanium">
          Change prices, then tap save. The website updates instantly — works great from your phone.
        </p>
      </header>
      <AdminRatesEditor />
    </>
  );
}
