"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LANGUAGES } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";
import { ChevronIcon, GlobeIcon, MenuIcon, PhoneIcon } from "./Icons";
import { ShopStatus } from "./ShopStatus";

const LINKS = [
  { href: "/", key: "navHome" },
  { href: "/products", key: "navProducts" },
  { href: "/rates", key: "navRates" },
  { href: "/services", key: "navServices" },
  { href: "/contact", key: "navContact" },
] as const;

function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("language")}
        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-ink transition hover:border-neon/60"
      >
        <GlobeIcon className="h-4 w-4 text-neon" />
        <span>{current.label}</span>
        <ChevronIcon className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? (
        <ul
          role="listbox"
          aria-label={t("language")}
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-obsidian-2/95 p-1 shadow-2xl backdrop-blur-md"
        >
          {LANGUAGES.map((option) => (
            <li key={option.code} role="option" aria-selected={option.code === lang}>
              <button
                type="button"
                onClick={() => {
                  setLang(option.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition hover:bg-white/10 ${
                  option.code === lang ? "bg-neon/10 font-bold text-neon" : "text-ink"
                }`}
              >
                {option.label}
                <span className="text-xs text-titanium">{option.short}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-obsidian/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 bg-obsidian-2 text-sm font-black text-gold shadow-[0_0_18px_rgba(212,175,55,0.35)]">
            786
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black tracking-tight text-ink sm:text-lg">{t("brandName")}</span>
            <span className="block text-[11px] font-medium text-neon">{t("brandAlt")}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive(link.href)
                  ? "bg-neon/10 text-neon shadow-[inset_0_0_0_1px_rgba(0,230,118,0.4)]"
                  : "text-titanium hover:text-ink"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ShopStatus className="hidden xl:inline-flex" />
          <LanguageSwitcher />
          <a
            href={`tel:${SITE.phones[0].tel}`}
            className="btn btn-neon hidden !px-4 !py-2 text-sm md:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {t("callNow")}
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={t("menu")}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-obsidian/95 px-4 pb-6 pt-3 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-base font-semibold ${
                  isActive(link.href) ? "bg-neon/10 text-neon" : "text-ink hover:bg-white/5"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <ShopStatus />
            <a href={`tel:${SITE.phones[0].tel}`} className="btn btn-neon">
              <PhoneIcon className="h-4 w-4" />
              {t("callNow")} · {SITE.phones[0].display}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
