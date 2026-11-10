"use client";

import { SITE, mapEmbedUrl, mapLinkUrl, waLink } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";
import { PageHeader } from "./Badges";
import { ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { ShopStatus } from "./ShopStatus";

export function ContactView() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader eyebrow={t("proprietors")} title={t("contactTitle")} subtitle={t("contactSubtitle")} />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-5">
          <div className="glass p-6">
            <div className="mb-3 flex items-center gap-3">
              <PinIcon className="h-6 w-6 text-neon" />
              <h2 className="text-lg font-black">{t("addressTitle")}</h2>
            </div>
            <p className="text-titanium">{t("addressValue")}</p>
          </div>

          <div className="glass p-6">
            <div className="mb-1 flex items-center gap-3">
              <PhoneIcon className="h-6 w-6 text-neon" />
              <h2 className="text-lg font-black">{t("callTitle")}</h2>
            </div>
            <p className="mb-4 text-sm text-titanium">
              {t("callSub")} · {t("proprietors")}
            </p>
            <div className="flex flex-col gap-3">
              {SITE.phones.map((phone) => (
                <a key={phone.tel} href={`tel:${phone.tel}`} className="btn btn-neon">
                  <PhoneIcon className="h-4 w-4" />
                  {phone.display}
                </a>
              ))}
              <a
                href={waLink(t("floatMsg"))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#25d366] text-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {t("whatsappUs")}
              </a>
            </div>
          </div>

          <div className="glass p-6">
            <div className="mb-3 flex items-center gap-3">
              <ClockIcon className="h-6 w-6 text-gold" />
              <h2 className="text-lg font-black">{t("hoursTitle")}</h2>
            </div>
            <p className="text-lg font-bold text-ink">
              {t("hoursValue", { open: SITE.hours.openLabel, close: SITE.hours.closeLabel })}
            </p>
            <p className="mt-2 text-sm text-titanium">{t("hoursNote")}</p>
            <ShopStatus className="mt-4" />
          </div>
        </div>

        <div className="glass flex flex-col overflow-hidden">
          <iframe
            title="Madina Mutton Shop location — Narmetta, beside Bank of Baroda, Vellanda Road"
            src={mapEmbedUrl()}
            className="h-[380px] w-full flex-1 border-0 lg:min-h-[480px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="border-t border-white/10 p-6">
            <h2 className="text-lg font-black">{t("directionsTitle")}</h2>
            <p className="mt-1 text-sm text-titanium">{t("directionsDesc")}</p>
            <a
              href={mapLinkUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold mt-4"
            >
              <PinIcon className="h-4 w-4" />
              {t("getDirections")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
