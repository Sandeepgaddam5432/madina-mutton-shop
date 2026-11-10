import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import type { ReactNode } from "react";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { LANG_COOKIE, normalizeLang } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Madina Mutton Shop (మదీనా మటన్ షాపు) — Halal Mutton & Doorstep Live Cutting, Narmetta",
    template: "%s | Madina Mutton Shop",
  },
  description:
    "100% halal fresh goat & sheep mutton, Mandya / Kubeek breed rams and live animals in Narmetta, Telangana. Doorstep live cutting for 15kg+ function orders. Call +91 9505477405.",
  keywords: [
    "Madina Mutton Shop",
    "మదీనా మటన్ షాపు",
    "halal mutton Narmetta",
    "doorstep live cutting",
    "Mandya ram",
    "Kubeek ram",
    "mutton rate today",
  ],
  openGraph: {
    title: "Madina Mutton Shop — Halal Mutton & Doorstep Live Cutting",
    description: "Fresh halal mutton, live Mandya rams and doorstep live cutting for 15kg+ orders in Narmetta.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#070b09",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const initialLang = normalizeLang(cookieStore.get(LANG_COOKIE)?.value);

  return (
    <html lang={initialLang === "te" ? "te" : "en"}>
      <body className="min-h-screen bg-obsidian text-ink antialiased">
        <LanguageProvider initialLang={initialLang}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
