"use client";

import Link from "next/link";
import { SITE, mapLinkUrl } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";
import { HalalBadge, HalalSeal } from "./Badges";
import { PhoneIcon, PinIcon } from "./Icons";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { href: "/", label: t("navHome") },
    { href: "/products", label: t("navProducts") },
    { href: "/rates", label: t("navRates") },
    { href: "/services", label: t("navServices") },
    { href: "/contact", label: t("navContact") },
  ];

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-obsidian-2/80 pb-28 pt-14 sm:pb-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-4">
            <HalalSeal size={64} />
            <div>
              <p className="text-xl font-black">{t("brandName")}</p>
              <p className="text-sm text-neon">{t("brandAlt")}</p>
            </div>
          </div>
          <p dir="rtl" lang="ar" className="mt-5 text-2xl text-gold">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
          <p className="mt-3 max-w-sm text-sm text-titanium">{t("footerAbout")}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <HalalBadge />
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-gold">{t("footerLinks")}</h2>
          <ul className="space-y-2.5">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-titanium transition hover:text-neon">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/admin/rates" className="text-xs text-titanium/60 transition hover:text-neon">
                {t("shopAdmin")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-gold">{t("footerContact")}</h2>
          <p className="mb-3 text-sm font-semibold text-ink">
            {SITE.founders[0]} &amp; {SITE.founders[1]}
          </p>
          <ul className="space-y-3 text-sm text-titanium">
            {SITE.phones.map((phone) => (
              <li key={phone.tel}>
                <a href={`tel:${phone.tel}`} className="inline-flex items-center gap-2 transition hover:text-neon">
                  <PhoneIcon className="h-4 w-4 text-neon" />
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a
                href={mapLinkUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 transition hover:text-neon"
              >
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                {SITE.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-white/10 px-4 pt-6 text-xs text-titanium sm:flex-row">
        <p>{t("footerRights", { year })}</p>
        <p className="font-semibold text-gold">786 · {t("footerHalalNote")}</p>
      </div>
    </footer>
  );
}
