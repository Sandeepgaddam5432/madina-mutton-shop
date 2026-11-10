"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import type { Rate } from "@/lib/rates";

type Row = {
  key: string;
  itemName: string;
  retailPrice: string;
  wholesalePrice: string;
  unit: string;
  isAvailable: boolean;
};

let rowCounter = 0;
const nextKey = () => `row-${rowCounter++}`;

function toRow(rate: Rate): Row {
  return {
    key: nextKey(),
    itemName: rate.itemName,
    retailPrice: String(rate.retailPrice),
    wholesalePrice: String(rate.wholesalePrice),
    unit: rate.unit,
    isAvailable: rate.isAvailable,
  };
}

/** Mobile friendly editor for the daily rates. Saves via POST /api/rates/update. */
export function AdminRatesEditor() {
  const [pin, setPin] = useState("");
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "ok" | "error"; text: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/rates", { cache: "no-store" })
      .then((response) => response.json() as Promise<{ rates: Rate[] }>)
      .then((data) => {
        if (!cancelled) setRows(data.rates.map(toRow));
      })
      .catch(() => {
        if (!cancelled) setMessage({ type: "error", text: "Could not load current rates." });
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const patch = (key: string, changes: Partial<Row>) =>
    setRows((current) => current.map((row) => (row.key === key ? { ...row, ...changes } : row)));

  const addRow = () =>
    setRows((current) => [
      ...current,
      { key: nextKey(), itemName: "", retailPrice: "0", wholesalePrice: "0", unit: "per kg", isAvailable: true },
    ]);

  const removeRow = (key: string) => setRows((current) => current.filter((row) => row.key !== key));

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);

    const payload = rows
      .filter((row) => row.itemName.trim())
      .map((row) => ({
        itemName: row.itemName.trim(),
        retailPrice: Number(row.retailPrice),
        wholesalePrice: Number(row.wholesalePrice),
        unit: row.unit.trim() || "per kg",
        isAvailable: row.isAvailable,
      }));

    if (payload.some((r) => !Number.isInteger(r.retailPrice) || !Number.isInteger(r.wholesalePrice))) {
      setMessage({ type: "error", text: "Prices must be whole numbers." });
      return;
    }

    setSaving(true);
    try {
      const response = await fetch("/api/rates/update", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-pin": pin },
        body: JSON.stringify({ rates: payload }),
      });
      const data = (await response.json()) as { ok?: boolean; updated?: number; error?: string };
      if (!response.ok) {
        setMessage({ type: "error", text: data.error ?? "Update failed." });
      } else {
        setMessage({ type: "ok", text: `Saved ${data.updated} rates. Live on the website now.` });
      }
    } catch {
      setMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-4xl space-y-6 px-4 pb-16">
      <div className="glass p-5">
        <label className="block text-sm font-semibold text-titanium">
          Admin PIN
          <input
            className="field mt-1.5"
            type="password"
            inputMode="numeric"
            autoComplete="current-password"
            value={pin}
            onChange={(event) => setPin(event.target.value)}
            placeholder="Enter secret PIN"
            required
          />
        </label>
      </div>

      {loading ? (
        <p className="text-center text-titanium">Loading current rates…</p>
      ) : (
        <div className="space-y-4">
          {rows.map((row) => (
            <div key={row.key} className="glass grid gap-3 p-4 sm:grid-cols-[2fr_1fr_1fr_1fr_auto] sm:items-end">
              <label className="block text-xs font-semibold text-titanium">
                Item
                <input
                  className="field mt-1"
                  value={row.itemName}
                  onChange={(event) => patch(row.key, { itemName: event.target.value })}
                  maxLength={120}
                  required
                />
              </label>
              <label className="block text-xs font-semibold text-titanium">
                Retail ₹
                <input
                  className="field mt-1"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  value={row.retailPrice}
                  onChange={(event) => patch(row.key, { retailPrice: event.target.value })}
                />
              </label>
              <label className="block text-xs font-semibold text-titanium">
                Wholesale ₹
                <input
                  className="field mt-1"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  value={row.wholesalePrice}
                  onChange={(event) => patch(row.key, { wholesalePrice: event.target.value })}
                />
              </label>
              <label className="block text-xs font-semibold text-titanium">
                Unit
                <select
                  className="field mt-1"
                  value={row.unit}
                  onChange={(event) => patch(row.key, { unit: event.target.value })}
                >
                  <option value="per kg">per kg</option>
                  <option value="per piece">per piece</option>
                  <option value="per set">per set</option>
                </select>
              </label>
              <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
                <label className="flex items-center gap-2 text-xs font-semibold text-titanium">
                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-[#00e676]"
                    checked={row.isAvailable}
                    onChange={(event) => patch(row.key, { isAvailable: event.target.checked })}
                  />
                  In stock
                </label>
                <button
                  type="button"
                  onClick={() => removeRow(row.key)}
                  className="text-xs font-semibold text-red-400 hover:text-red-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={addRow} className="btn btn-ghost">
          + Add item
        </button>
        <button type="submit" disabled={saving || loading} className="btn btn-neon">
          {saving ? "Saving…" : "Save today's rates"}
        </button>
      </div>

      {message ? (
        <p
          role="status"
          className={`rounded-2xl border p-4 text-sm font-semibold ${
            message.type === "ok"
              ? "border-neon/40 bg-neon/10 text-neon"
              : "border-red-500/40 bg-red-500/10 text-red-300"
          }`}
        >
          {message.text}
        </p>
      ) : null}
      <p className="text-xs text-titanium">
        Removing a row only hides it from this form — items stay in the database. Mark an item
        &quot;In stock&quot; off to show it as sold out.
      </p>
    </form>
  );
}
