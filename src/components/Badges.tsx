"use client";

import { useLanguage } from "./LanguageProvider";
import { CheckIcon, KnifeIcon } from "./Icons";

export function HalalBadge({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-neon/40 bg-neon/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neon ${className}`}
    >
      <CheckIcon className="h-3.5 w-3.5" />
      {t("halalFull")}
    </span>
  );
}

export function DoorstepBadge({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold ${className}`}
    >
      <KnifeIcon className="h-3.5 w-3.5" />
      {t("doorstepBadge")}
    </span>
  );
}

/** Round 786 / Halal seal used on cards and in the footer. */
export function HalalSeal({ size = 56 }: { size?: number }) {
  return (
    <div
      className="relative flex shrink-0 items-center justify-center rounded-full border-2 border-gold/70 bg-obsidian-2 text-gold shadow-[0_0_22px_rgba(212,175,55,0.35)]"
      style={{ width: size, height: size }}
      aria-label="786 Halal"
    >
      <div className="absolute inset-1 rounded-full border border-dashed border-gold/40" />
      <span className="text-center font-black leading-none" style={{ fontSize: size * 0.3 }}>
        786
      </span>
    </div>
  );
}

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <header className="relative mx-auto max-w-4xl px-4 pb-10 pt-14 text-center sm:pt-20">
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      ) : null}
      <h1 className="text-3xl font-black leading-tight sm:text-5xl">
        <span className="glow-text">{title}</span>
      </h1>
      {subtitle ? <p className="mx-auto mt-4 max-w-2xl text-base text-titanium sm:text-lg">{subtitle}</p> : null}
    </header>
  );
}
