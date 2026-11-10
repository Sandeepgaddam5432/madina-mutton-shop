"use client";

import Link from "next/link";
import { formatDateTime, formatINR } from "@/lib/format";
import { productNameForItem, unitLabel } from "@/lib/i18n";
import type { Rate } from "@/lib/rates";
import { useLanguage } from "./LanguageProvider";

export function RateTicker({ rates, updatedAt }: { rates: Rate[]; updatedAt: string | null }) {
  const { lang, t } = useLanguage();

  if (rates.length === 0) {
    return (
      <div className="glass p-6 text-center text-titanium">{t("ratesEmpty")}</div>
    );
  }

  const loop = [...rates, ...rates];

  return (
    <section className="glass overflow-hidden" aria-label={t("tickerTitle")}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-neon" />
          </span>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-neon">{t("tickerTitle")}</h2>
          {updatedAt ? (
            <span className="hidden text-xs text-titanium sm:inline">
              {t("updatedOn", { time: formatDateTime(updatedAt) })}
            </span>
          ) : null}
        </div>
        <Link href="/rates" className="text-sm font-bold text-gold transition hover:text-amber-gold">
          {t("viewAllRates")}
        </Link>
      </div>

      <div className="relative overflow-hidden py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-obsidian to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-obsidian to-transparent" />
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {loop.map((rate, index) => (
            <div
              key={`${rate.id}-${index}`}
              className={`min-w-[230px] rounded-2xl border border-white/10 bg-obsidian-2/80 px-4 py-3 ${
                rate.isAvailable ? "" : "opacity-50"
              }`}
              aria-hidden={index >= rates.length}
            >
              <p className="truncate text-sm font-bold text-ink">{productNameForItem(rate.itemName, lang)}</p>
              <div className="mt-1.5 flex items-end justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-titanium">{t("retail")}</p>
                  <p className="text-lg font-black text-neon">{formatINR(rate.retailPrice)}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-wider text-titanium">{t("wholesale")}</p>
                  <p className="text-lg font-black text-gold">{formatINR(rate.wholesalePrice)}</p>
                </div>
              </div>
              <p className="mt-1 text-[11px] text-titanium">
                {rate.isAvailable ? unitLabel(rate.unit, lang) : t("soldOut")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
