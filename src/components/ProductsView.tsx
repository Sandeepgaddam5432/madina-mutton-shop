"use client";

import { useState } from "react";
import { formatINR } from "@/lib/format";
import { productCopy, unitLabel, type TranslationKey } from "@/lib/i18n";
import { PRODUCTS, type ProductCategory } from "@/lib/products";
import type { Rate } from "@/lib/rates";
import { waLink } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";
import { PageHeader } from "./Badges";
import { WhatsAppIcon } from "./Icons";

type Filter = "all" | ProductCategory;

const FILTERS: { id: Filter; key: TranslationKey }[] = [
  { id: "all", key: "catAll" },
  { id: "fresh", key: "catFresh" },
  { id: "live", key: "catLive" },
  { id: "offal", key: "catOffal" },
];

const CATEGORY_LABEL: Record<ProductCategory, TranslationKey> = {
  fresh: "catFresh",
  live: "catLive",
  offal: "catOffal",
};

export function ProductsView({ rates }: { rates: Rate[] }) {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");

  const visible = PRODUCTS.filter((product) => filter === "all" || product.category === filter);

  return (
    <>
      <PageHeader eyebrow={t("halalFull")} title={t("productsTitle")} subtitle={t("productsSubtitle")} />

      <section className="mx-auto max-w-7xl px-4 pb-8">
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label={t("productsTitle")}>
          {FILTERS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                filter === item.id
                  ? "border-neon bg-neon text-obsidian shadow-[0_0_22px_rgba(0,230,118,0.5)]"
                  : "border-white/15 bg-white/5 text-titanium hover:border-neon/50 hover:text-ink"
              }`}
            >
              {t(item.key)}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => {
            const copy = productCopy[product.id][lang];
            const rate = rates.find((r) => r.itemName === product.rateItem);
            return (
              <article key={product.id} className="glass glass-hover relative flex flex-col p-6">
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-gold/50 bg-gold/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-gold">
                  786 · {t("halal")}
                </span>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-obsidian-2 text-4xl">
                  {product.emoji}
                </div>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-neon">
                  {t(CATEGORY_LABEL[product.category])}
                </p>
                <h2 className="mt-1 text-xl font-black">{copy.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-titanium">{copy.desc}</p>

                <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-titanium">{t("todaysRate")}</p>
                    {rate && rate.isAvailable ? (
                      <p className="text-2xl font-black text-neon">
                        {formatINR(rate.retailPrice)}
                        <span className="ml-1 text-xs font-medium text-titanium">{unitLabel(rate.unit, lang)}</span>
                      </p>
                    ) : rate ? (
                      <p className="text-lg font-black text-amber-gold">{t("soldOut")}</p>
                    ) : (
                      <p className="text-sm font-bold text-amber-gold">{t("callForPrice")}</p>
                    )}
                  </div>
                  <a
                    href={waLink(t("productInquiryMsg", { item: copy.name }))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost !px-4 !py-2 text-sm"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-[#25d366]" />
                    {t("inquire")}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
