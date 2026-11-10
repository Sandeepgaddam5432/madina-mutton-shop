import type { Metadata } from "next";
import { ServicesView } from "@/components/ServicesView";

export const metadata: Metadata = {
  title: "Doorstep Live Cutting — 15kg+ Function & Wedding Orders",
  description:
    "For orders of 15kg or more, our master butchers come to your home or venue and cut fresh halal mutton live on the spot. Book weddings, functions and bulk orders in Narmetta.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
