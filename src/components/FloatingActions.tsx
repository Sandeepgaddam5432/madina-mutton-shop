"use client";

import { SITE, waLink } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

/** Sticky Quick Call + WhatsApp buttons shown on every page. */
export function FloatingActions() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={waLink(t("floatMsg"))}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("floatWhatsApp")}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_0_28px_rgba(37,211,102,0.6)] transition hover:scale-110"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      <a
        href={`tel:${SITE.phones[0].tel}`}
        aria-label={t("floatCall")}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-neon to-emerald-deep text-obsidian shadow-[0_0_28px_rgba(0,230,118,0.6)] transition hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-neon/30" />
        <PhoneIcon className="relative h-6 w-6" />
      </a>
    </div>
  );
}
