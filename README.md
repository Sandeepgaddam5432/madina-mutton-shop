# Madina Mutton Shop (మదీనా మటన్ షాపు)

Full-stack website for **Madina Mutton Shop**, Narmetta, Telangana — 100% halal mutton, Mandya / Kubeek rams, live animals and **Doorstep Live Cutting for 15kg+ orders**.

**Stack:** Next.js 16.2.6 (App Router) · React 19.2.6 · TypeScript 5.9.3 · Tailwind CSS 4.1.17 · PostgreSQL + Drizzle ORM (`pg` 8.20.0) · Node 22 · ESLint 9

## Features

- Tri-language UI (English / తెలుగు / Tenglish) — dictionary in `src/lib/i18n.ts`, choice saved in a cookie
- Live daily rates (retail + wholesale) from the `daily_rates` table
- Doorstep live cutting booking form (min 15kg) → saved to `service_bookings` → opens WhatsApp with a pre-filled message
- Products catalogue with category filters and WhatsApp inquiry buttons
- Contact page with Google Maps embed, click-to-call buttons and shop timings
- Mobile-friendly rate editor at `/admin/rates` and PIN-protected API `POST /api/rates/update`

## Getting started

```bash
cp .env.example .env          # set DATABASE_URL and ADMIN_PIN
npm install
npx drizzle-kit push          # create tables
npx tsx src/db/seed.ts        # optional: seed initial rates (also auto-seeds on first page load)
npm run dev
```

## Updating rates

Open `/admin/rates` on your phone, enter the `ADMIN_PIN`, edit prices and save. Or call the API:

```bash
curl -X POST https://your-site/api/rates/update \
  -H "Content-Type: application/json" \
  -H "x-admin-pin: $ADMIN_PIN" \
  -d '{"rates":[{"itemName":"Goat Mutton","retailPrice":920,"wholesalePrice":880,"unit":"per kg","isAvailable":true}]}'
```

If `ADMIN_PIN` is not set the update endpoint is disabled (HTTP 503). Failed attempts are rate limited.

## Configuration

Phone numbers, address, shop hours and map query live in `src/lib/site.ts`.

## Scripts

`npm run dev` · `npm run build` · `npm run start` · `npm run lint` · `npm run typecheck`
