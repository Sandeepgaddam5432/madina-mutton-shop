"use client";

import { useMemo, useState } from "react";
import { productNameForItem } from "@/lib/i18n";
import type { Rate } from "@/lib/rates";
import { SITE, waLink } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";
import { WhatsAppIcon } from "./Icons";

type Purpose = "home" | "function" | "shop";

export function WhatsAppQuick({ rates }: { rates: Rate[] }) {
  const { lang, t } = useLanguage();
  const [name, setName] = useState("");
  const [itemId, setItemId] = useState<number | null>(rates[0]?.id ?? null);
  const [qty, setQty] = useState(5);
  const [purpose, setPurpose] = useState<Purpose>("home");

  const item = rates.find((rate) => rate.id === itemId) ?? rates[0];
  const isWeight = item ? item.unit.toLowerCase().includes("kg") : true;

  const message = useMemo(() => {
    if (!item) return "";
    const purposeLabel =
      purpose === "home"
        ? t("waPurposeHome")
        : purpose === "function"
          ? t("waPurposeFunction")
          : t("waPurposeShop");
    return t("waMsg", {
      name: name.trim() || t("waCustomer"),
      qty: `${qty} ${isWeight ? "kg" : "pcs"}`,
      item: productNameForItem(item.itemName, lang),
      purpose: purposeLabel,
    });
  }, [item, qty, purpose, name, isWeight, lang, t]);

  const qualifiesDoorstep = isWeight && qty >= SITE.minDoorstepKg;

  return (
    <section className="glass p-6 sm:p-8" aria-labelledby="wa-quick-title">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25d366] text-white">
          <WhatsAppIcon className="h-6 w-6" />
        </span>
        <div>
          <h2 id="wa-quick-title" className="text-xl font-black">
            {t("waTitle")}
          </h2>
          <p className="text-sm text-titanium">{t("waDesc")}</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-titanium">
          {t("waName")}
          <input
            className="field mt-1.5"
            value={name}
            maxLength={60}
            onChange={(event) => setName(event.target.value)}
            placeholder={t("waNamePlaceholder")}
          />
        </label>
        <label className="block text-sm font-semibold text-titanium">
          {t("waItem")}
          <select
            className="field mt-1.5"
            value={item?.id ?? ""}
            onChange={(event) => setItemId(Number(event.target.value))}
          >
            {rates.map((rate) => (
              <option key={rate.id} value={rate.id}>
                {productNameForItem(rate.itemName, lang)}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-titanium">
          {t("waQty")} ({isWeight ? "kg" : "pcs"})
          <input
            className="field mt-1.5"
            type="number"
            min={1}
            max={500}
            value={qty}
            onChange={(event) => setQty(Math.max(1, Math.min(500, Number(event.target.value) || 1)))}
          />
        </label>
        <label className="block text-sm font-semibold text-titanium">
          {t("waPurpose")}
          <select className="field mt-1.5" value={purpose} onChange={(event) => setPurpose(event.target.value as Purpose)}>
            <option value="home">{t("waPurposeHome")}</option>
            <option value="function">{t("waPurposeFunction")}</option>
            <option value="shop">{t("waPurposeShop")}</option>
          </select>
        </label>
      </div>

      {qualifiesDoorstep || purpose === "function" ? (
        <p className="mt-4 rounded-xl border border-gold/40 bg-gold/10 px-4 py-2.5 text-sm font-semibold text-gold">
          🔪 {t("waDoorstepHint")}
        </p>
      ) : null}

      <div className="mt-5 rounded-2xl border border-white/10 bg-obsidian/70 p-4">
        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-titanium">{t("waPreview")}</p>
        <p className="whitespace-pre-line text-sm text-ink">{message}</p>
      </div>

      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn mt-5 w-full bg-[#25d366] text-white shadow-[0_0_24px_rgba(37,211,102,0.45)] sm:w-auto"
      >
        <WhatsAppIcon className="h-5 w-5" />
        {t("waSend")}
      </a>
    </section>
  );
}
