"use client";

import { useSyncExternalStore } from "react";
import { istDecimalHour } from "@/lib/format";
import { SITE } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 60_000);
  return () => clearInterval(id);
}

/** Minute-resolution clock; `-1` on the server so hydration stays consistent. */
function getSnapshot() {
  return Math.floor(Date.now() / 60_000);
}

function getServerSnapshot() {
  return -1;
}

export function ShopStatus({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  const tick = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (tick === -1) {
    return <span className={`inline-block h-6 ${className}`} aria-hidden="true" />;
  }

  const hour = istDecimalHour(new Date(tick * 60_000));
  const open = hour >= SITE.hours.open && hour < SITE.hours.close;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${
        open
          ? "border-neon/40 bg-neon/10 text-neon"
          : "border-amber-gold/40 bg-amber-gold/10 text-amber-gold"
      } ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
            open ? "bg-neon" : "bg-amber-gold"
          }`}
        />
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${open ? "bg-neon" : "bg-amber-gold"}`} />
      </span>
      {open ? t("shopOpen") : t("shopClosed", { time: SITE.hours.openLabel })}
    </span>
  );
}
