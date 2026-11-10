"use client";

import { SITE } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";
import { BookingForm } from "./BookingForm";
import { DoorstepBadge, HalalBadge, PageHeader } from "./Badges";
import { CheckIcon, PhoneIcon } from "./Icons";

export function ServicesView() {
  const { t } = useLanguage();

  const steps = [
    { title: t("step1Title"), desc: t("step1Desc"), icon: "📅" },
    { title: t("step2Title"), desc: t("step2Desc"), icon: "✅" },
    { title: t("step3Title"), desc: t("step3Desc"), icon: "🚚" },
    { title: t("step4Title"), desc: t("step4Desc"), icon: "🔪" },
  ];
  const tools = [t("tool1"), t("tool2"), t("tool3"), t("tool4"), t("tool5")];
  const hygiene = [t("hyg1"), t("hyg2"), t("hyg3"), t("hyg4")];
  const occasions = [t("occ1"), t("occ2"), t("occ3"), t("occ4")];

  return (
    <>
      <PageHeader eyebrow={t("vipBadge")} title={t("servicesTitle")} subtitle={t("servicesSubtitle")} />
      <div className="-mt-4 mb-10 flex flex-wrap justify-center gap-2 px-4">
        <HalalBadge />
        <DoorstepBadge />
      </div>

      <section className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black">
            <span className="gold-text">{t("howTitle")}</span>
          </h2>
        </div>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="glass glass-hover relative p-6">
              <span className="absolute right-5 top-4 text-5xl font-black text-white/5">{index + 1}</span>
              <span className="text-4xl">{step.icon}</span>
              <h3 className="mt-4 text-lg font-black">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-titanium">{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-5 px-4 lg:grid-cols-3">
        <div className="glass p-6">
          <h2 className="text-xl font-black text-neon">{t("toolsTitle")}</h2>
          <ul className="mt-4 space-y-3">
            {tools.map((tool) => (
              <li key={tool} className="flex items-start gap-3 text-sm text-ink">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                {tool}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass p-6">
          <h2 className="text-xl font-black text-gold">{t("hygieneTitle")}</h2>
          <ul className="mt-4 space-y-3">
            {hygiene.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass p-6">
          <h2 className="text-xl font-black text-ink">{t("occasionsTitle")}</h2>
          <ul className="mt-4 space-y-3">
            {occasions.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-8 px-4 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        <BookingForm />
        <aside className="glass p-6 lg:sticky lg:top-28">
          <h2 className="text-lg font-black">{t("callTitle")}</h2>
          <p className="mt-1 text-sm text-titanium">{t("callSub")}</p>
          <div className="mt-4 flex flex-col gap-3">
            {SITE.phones.map((phone) => (
              <a key={phone.tel} href={`tel:${phone.tel}`} className="btn btn-neon">
                <PhoneIcon className="h-4 w-4" />
                {phone.display}
              </a>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
