"use client";

import { formatDateTime, formatINR } from "@/lib/format";
import { productNameForItem, unitLabel } from "@/lib/i18n";
import type { Rate } from "@/lib/rates";
import { SITE } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";
import { PageHeader } from "./Badges";
import { PhoneIcon } from "./Icons";

export function RatesView({ rates, updatedAt }: { rates: Rate[]; updatedAt: string | null }) {
  const { lang, t } = useLanguage();

  const tiers = [
    { range: t("tier1Range"), title: t("tier1Title"), desc: t("tier1Desc"), accent: "text-titanium" },
    { range: t("tier2Range"), title: t("tier2Title"), desc: t("tier2Desc"), accent: "text-neon" },
    { range: t("tier3Range"), title: t("tier3Title"), desc: t("tier3Desc"), accent: "text-gold" },
  ];

  return (
    <>
      <PageHeader eyebrow={t("tickerTitle")} title={t("ratesTitle")} subtitle={t("ratesSubtitle")} />

      <section className="mx-auto max-w-6xl px-4">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-neon">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neon" />
            </span>
            {updatedAt ? t("lastUpdated", { time: formatDateTime(updatedAt) }) : t("tickerTitle")}
          </span>
          <a href={`tel:${SITE.phones[0].tel}`} className="btn btn-neon !px-4 !py-2 text-sm">
            <PhoneIcon className="h-4 w-4" />
            {t("ratesCallCta")}
          </a>
        </div>

        {rates.length === 0 ? (
          <div className="glass p-8 text-center text-titanium">{t("ratesEmpty")}</div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="glass hidden overflow-hidden md:block">
              <table className="w-full text-left">
                <thead className="bg-white/5 text-xs uppercase tracking-wider text-titanium">
                  <tr>
                    <th className="px-6 py-4">{t("colItem")}</th>
                    <th className="px-6 py-4">{t("colRetail")}</th>
                    <th className="px-6 py-4">{t("colWholesale")}</th>
                    <th className="px-6 py-4">{t("colUnit")}</th>
                    <th className="px-6 py-4">{t("colStatus")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {rates.map((rate) => (
                    <tr key={rate.id} className="transition hover:bg-white/5">
                      <td className="px-6 py-4 font-bold">{productNameForItem(rate.itemName, lang)}</td>
                      <td className="px-6 py-4 text-lg font-black text-neon">{formatINR(rate.retailPrice)}</td>
                      <td className="px-6 py-4">
                        <span className="text-lg font-black text-gold">{formatINR(rate.wholesalePrice)}</span>
                        {rate.retailPrice > rate.wholesalePrice ? (
                          <span className="ml-2 rounded-full bg-gold/10 px-2 py-0.5 text-[11px] font-bold text-gold">
                            {t("saveLabel", { amount: formatINR(rate.retailPrice - rate.wholesalePrice) })}
                          </span>
                        ) : null}
                      </td>
                      <td className="px-6 py-4 text-sm text-titanium">{unitLabel(rate.unit, lang)}</td>
                      <td className="px-6 py-4">
                        <StatusPill available={rate.isAvailable} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="grid gap-4 md:hidden">
              {rates.map((rate) => (
                <div key={rate.id} className="glass p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-black">{productNameForItem(rate.itemName, lang)}</h2>
                      <p className="text-xs text-titanium">{unitLabel(rate.unit, lang)}</p>
                    </div>
                    <StatusPill available={rate.isAvailable} />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-obsidian/70 p-3">
                      <p className="text-[11px] uppercase tracking-wider text-titanium">{t("retail")}</p>
                      <p className="text-xl font-black text-neon">{formatINR(rate.retailPrice)}</p>
                    </div>
                    <div className="rounded-xl bg-obsidian/70 p-3">
                      <p className="text-[11px] uppercase tracking-wider text-titanium">{t("wholesale")}</p>
                      <p className="text-xl font-black text-gold">{formatINR(rate.wholesalePrice)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <p className="mt-4 text-center text-sm text-titanium">{t("ratesNote")}</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black">
            <span className="gold-text">{t("wholesaleTitle")}</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-titanium">{t("wholesaleDesc")}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={tier.title}
              className={`glass glass-hover p-6 ${index === 1 ? "border-neon/40 shadow-[0_0_40px_-12px_rgba(0,230,118,0.5)]" : ""}`}
            >
              <p className={`text-3xl font-black ${tier.accent}`}>{tier.range}</p>
              <h3 className="mt-3 text-lg font-black">{tier.title}</h3>
              <p className="mt-2 text-sm text-titanium">{tier.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function StatusPill({ available }: { available: boolean }) {
  const { t } = useLanguage();
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
        available ? "bg-neon/10 text-neon" : "bg-red-500/10 text-red-400"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${available ? "bg-neon" : "bg-red-400"}`} />
      {available ? t("inStock") : t("soldOut")}
    </span>
  );
}
