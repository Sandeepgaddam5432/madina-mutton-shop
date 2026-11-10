"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { istTodayISO } from "@/lib/format";
import type { TranslationKey } from "@/lib/i18n";
import { SITE, waLink } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";
import { KnifeIcon, WhatsAppIcon } from "./Icons";

type FieldName = "customerName" | "phoneNumber" | "eventDate" | "location" | "estimatedKg";
type Errors = Partial<Record<FieldName, TranslationKey>>;

const FIELD_ERRORS: Record<FieldName, TranslationKey> = {
  customerName: "errName",
  phoneNumber: "errPhone",
  eventDate: "errDate",
  location: "errLocation",
  estimatedKg: "errKg",
};

function cleanPhone(raw: string): string | null {
  let digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

export function BookingForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    customerName: "",
    phoneNumber: "",
    eventDate: "",
    location: "",
    estimatedKg: "15",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [failed, setFailed] = useState(false);
  const [result, setResult] = useState<{ id: number; link: string } | null>(null);

  const update = (field: FieldName, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (form.customerName.trim().length < 2) next.customerName = FIELD_ERRORS.customerName;
    if (!cleanPhone(form.phoneNumber)) next.phoneNumber = FIELD_ERRORS.phoneNumber;
    if (!form.eventDate || form.eventDate < istTodayISO()) next.eventDate = FIELD_ERRORS.eventDate;
    if (form.location.trim().length < 3) next.location = FIELD_ERRORS.location;
    const kg = Number(form.estimatedKg);
    if (!Number.isInteger(kg) || kg < SITE.minDoorstepKg) next.estimatedKg = FIELD_ERRORS.estimatedKg;
    return next;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFailed(false);
    setResult(null);

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    // Open the tab synchronously (inside the click gesture) so popup blockers allow it.
    const popup = window.open("", "_blank");

    try {
      const phone = cleanPhone(form.phoneNumber) as string;
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: form.customerName.trim(),
          phoneNumber: phone,
          eventDate: form.eventDate,
          location: form.location.trim(),
          estimatedKg: Number(form.estimatedKg),
        }),
      });

      if (!response.ok) throw new Error(`Request failed with ${response.status}`);
      const data = (await response.json()) as { id: number };

      const message = t("waBookingMsg", {
        id: data.id,
        name: form.customerName.trim(),
        phone,
        date: form.eventDate,
        location: form.location.trim(),
        kg: Number(form.estimatedKg),
      });
      const link = waLink(message, SITE.whatsapp);
      setResult({ id: data.id, link });

      if (popup) {
        popup.location.href = link;
      }
      setForm({ customerName: "", phoneNumber: "", eventDate: "", location: "", estimatedKg: "15" });
    } catch {
      popup?.close();
      setFailed(true);
    } finally {
      setSubmitting(false);
    }
  };

  const fieldError = (field: FieldName) =>
    errors[field] ? (
      <span role="alert" className="mt-1 block text-xs font-semibold text-red-400">
        {t(errors[field] as TranslationKey)}
      </span>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="glass relative overflow-hidden p-6 sm:p-8">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/20 blur-[70px]" />
      <div className="relative">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
            <KnifeIcon className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-xl font-black sm:text-2xl">{t("formTitle")}</h2>
            <p className="text-sm text-titanium">{t("formSubtitle")}</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-titanium">
            {t("fName")}
            <input
              className="field mt-1.5"
              value={form.customerName}
              onChange={(e) => update("customerName", e.target.value)}
              maxLength={120}
              autoComplete="name"
              aria-invalid={Boolean(errors.customerName)}
            />
            {fieldError("customerName")}
          </label>
          <label className="block text-sm font-semibold text-titanium">
            {t("fPhone")}
            <input
              className="field mt-1.5"
              type="tel"
              inputMode="tel"
              value={form.phoneNumber}
              onChange={(e) => update("phoneNumber", e.target.value)}
              placeholder="98XXXXXXXX"
              maxLength={16}
              autoComplete="tel"
              aria-invalid={Boolean(errors.phoneNumber)}
            />
            {fieldError("phoneNumber")}
          </label>
          <label className="block text-sm font-semibold text-titanium">
            {t("fDate")}
            <input
              className="field mt-1.5"
              type="date"
              min={istTodayISO()}
              value={form.eventDate}
              onChange={(e) => update("eventDate", e.target.value)}
              aria-invalid={Boolean(errors.eventDate)}
            />
            {fieldError("eventDate")}
          </label>
          <label className="block text-sm font-semibold text-titanium">
            {t("fKg")}
            <input
              className="field mt-1.5"
              type="number"
              inputMode="numeric"
              min={SITE.minDoorstepKg}
              max={5000}
              step={1}
              value={form.estimatedKg}
              onChange={(e) => update("estimatedKg", e.target.value)}
              aria-invalid={Boolean(errors.estimatedKg)}
            />
            <span className="mt-1 block text-xs font-normal text-titanium">{t("fKgHint")}</span>
            {fieldError("estimatedKg")}
          </label>
          <label className="block text-sm font-semibold text-titanium sm:col-span-2">
            {t("fLocation")}
            <textarea
              className="field mt-1.5 min-h-24 resize-y"
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              placeholder={t("fLocationPlaceholder")}
              maxLength={500}
              aria-invalid={Boolean(errors.location)}
            />
            {fieldError("location")}
          </label>
        </div>

        <button type="submit" disabled={submitting} className="btn btn-gold mt-6 w-full sm:w-auto">
          <WhatsAppIcon className="h-5 w-5" />
          {submitting ? t("fSubmitting") : t("fSubmit")}
        </button>

        {result ? (
          <div role="status" className="mt-5 rounded-2xl border border-neon/40 bg-neon/10 p-4 text-sm">
            <p className="font-bold text-neon">{t("fSuccess", { id: result.id })}</p>
            <a
              href={result.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-3 bg-[#25d366] !py-2 text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t("fOpenWhatsApp")}
            </a>
          </div>
        ) : null}

        {failed ? (
          <p role="alert" className="mt-5 rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-sm font-semibold text-red-300">
            {t("fError")}
          </p>
        ) : null}
      </div>
    </form>
  );
}
