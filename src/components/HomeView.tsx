"use client";

import Link from "next/link";
import type { Rate } from "@/lib/rates";
import { SITE } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";
import { DoorstepBadge, HalalBadge, HalalSeal } from "./Badges";
import { CheckIcon, KnifeIcon, PhoneIcon } from "./Icons";
import { RamIllustration } from "./RamIllustration";
import { RateTicker } from "./RateTicker";
import { ShopStatus } from "./ShopStatus";
import { WhatsAppQuick } from "./WhatsAppQuick";

export function HomeView({ rates, updatedAt }: { rates: Rate[]; updatedAt: string | null }) {
  const { t } = useLanguage();

  const offers = [
    { emoji: "🐐", title: t("offer1Title"), desc: t("offer1Desc") },
    { emoji: "🐏", title: t("offer2Title"), desc: t("offer2Desc") },
    { emoji: "🐑", title: t("offer3Title"), desc: t("offer3Desc") },
    { emoji: "🥩", title: t("offer4Title"), desc: t("offer4Desc") },
  ];

  const trust = [
    { title: t("trust1Title"), desc: t("trust1Desc") },
    { title: t("trust2Title"), desc: t("trust2Desc") },
    { title: t("trust3Title"), desc: t("trust3Desc") },
    { title: t("trust4Title"), desc: t("trust4Desc") },
  ];

  const stats = [
    { value: t("heroStat1Value"), label: t("heroStat1Label") },
    { value: t("heroStat2Value"), label: t("heroStat2Label") },
    { value: t("heroStat3Value"), label: t("heroStat3Label") },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 animate-glow rounded-full bg-neon/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 animate-glow rounded-full bg-gold/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <HalalBadge />
              <DoorstepBadge />
            </div>
            <ShopStatus className="mb-5" />
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-gold">{t("heroBadge")}</p>
            <h1 className="text-4xl font-black leading-[1.1] sm:text-5xl lg:text-6xl">
              <span className="block text-ink">{t("heroTitleA")}</span>
              <span className="glow-text block">{t("heroTitleB")}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-titanium sm:text-lg">{t("heroSubtitle")}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/rates" className="btn btn-neon">
                {t("heroCtaRates")}
              </Link>
              <Link href="/services" className="btn btn-gold">
                <KnifeIcon className="h-5 w-5" />
                {t("heroCtaBook")}
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass px-3 py-4 text-center">
                  <dt className="text-xl font-black text-neon sm:text-2xl">{stat.value}</dt>
                  <dd className="mt-1 text-[11px] leading-tight text-titanium sm:text-xs">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <RamIllustration className="animate-float h-auto w-full drop-shadow-[0_0_40px_rgba(0,230,118,0.35)]" />
            <div className="glass absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap px-4 py-2 text-sm font-bold">
              <HalalSeal size={38} />
              {t("ramCaption")}
            </div>
          </div>
        </div>
      </section>

      {/* LIVE RATES */}
      <section className="mx-auto max-w-7xl px-4 py-6">
        <RateTicker rates={rates} updatedAt={updatedAt} />
      </section>

      {/* OFFERS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{t("offerTitle")}</p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">{t("offerSubtitle")}</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer) => (
            <Link key={offer.title} href="/products" className="glass glass-hover block p-6">
              <span className="text-4xl">{offer.emoji}</span>
              <h3 className="mt-4 text-lg font-black">{offer.title}</h3>
              <p className="mt-2 text-sm text-titanium">{offer.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/products" className="font-bold text-neon transition hover:text-gold">
            {t("exploreProducts")}
          </Link>
        </div>
      </section>

      {/* VIP DOORSTEP BANNER */}
      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/50 bg-gradient-to-br from-[#1a1606] via-obsidian-2 to-[#04170d] p-8 shadow-[0_0_80px_-20px_rgba(212,175,55,0.45)] sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-gold/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-neon/15 blur-[90px]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-xs font-black uppercase tracking-widest text-obsidian">
                ★ {t("vipBadge")}
              </span>
              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
                <span className="gold-text">{t("vipTitle")}</span>
              </h2>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-neon">{t("vipSubtitle")}</p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-titanium sm:text-lg">{t("vipDesc")}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/services" className="btn btn-gold">
                  <KnifeIcon className="h-5 w-5" />
                  {t("heroCtaBook")}
                </Link>
                <a href={`tel:${SITE.phones[0].tel}`} className="btn btn-ghost">
                  <PhoneIcon className="h-4 w-4" />
                  {SITE.phones[0].display}
                </a>
              </div>
            </div>
            <ul className="space-y-3">
              {[t("vipPoint1"), t("vipPoint2"), t("vipPoint3"), t("vipPoint4")].map((point) => (
                <li key={point} className="glass flex items-center gap-3 px-4 py-3 text-sm font-semibold">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neon text-obsidian">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* QUICK WHATSAPP */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <WhatsAppQuick rates={rates} />
      </section>

      {/* FOUNDERS & TRUST */}
      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            <span className="glow-text">{t("foundersTitle")}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-titanium">{t("foundersDesc")}</p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
          {[t("founderName1"), t("founderName2")].map((name, index) => (
            <div key={SITE.founders[index]} className="glass glass-hover flex items-center gap-4 p-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-neon/60 bg-obsidian-2 text-2xl font-black text-neon shadow-[0_0_22px_rgba(0,230,118,0.35)]">
                {SITE.founders[index].charAt(0)}
              </div>
              <div>
                <p className="text-lg font-black">{name}</p>
                <p className="text-sm text-gold">{t("founderRole")}</p>
                <a
                  href={`tel:${SITE.phones[index].tel}`}
                  className="mt-1 inline-flex items-center gap-1.5 text-sm text-titanium transition hover:text-neon"
                >
                  <PhoneIcon className="h-3.5 w-3.5" />
                  {SITE.phones[index].display}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((item) => (
            <div key={item.title} className="glass p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-neon/15 text-neon">
                <CheckIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-black">{item.title}</h3>
              <p className="mt-2 text-sm text-titanium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
