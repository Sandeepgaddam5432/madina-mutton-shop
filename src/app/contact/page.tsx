import type { Metadata } from "next";
import { ContactView } from "@/components/ContactView";

export const metadata: Metadata = {
  title: "Contact & Shop Location — Narmetta, Vellanda Road",
  description:
    "Madina Mutton Shop, Narmetta (Village), beside Bank of Baroda, Vellanda Road, Telangana. Call +91 9505477405 or +91 9505477401.",
};

export default function ContactPage() {
  return <ContactView />;
}
