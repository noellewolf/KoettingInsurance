# Koetting Insurance

A responsive, single-page React + TypeScript mockup using Vite and plain CSS. There is no backend, tracking, storage, or deployment. The sample form validates inputs and shows an in-browser confirmation. It never sends or saves form details.

Verified with Vite 8.3.2, React 19.3.0, and TypeScript 5.9.3. TypeScript and the production build pass. Browser checks cover 1440px desktop, 768px tablet, 390px mobile, and 320px narrow mobile, with no horizontal overflow or uncaught runtime errors. Required-field validation, sample autofill, confirmation, and absence of submission requests were checked. Desktop and mobile screenshots were visually reviewed.

## Run locally

Install Node.js 22.12+ (or a newer supported LTS release), then open a terminal in this directory:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, usually http://127.0.0.1:5173. Stop the server with Ctrl+C.

```sh
npm run build
npm run preview
```

The build checks TypeScript and writes static assets to `dist/`. The preview command serves that production build locally.

This delivered checkout uses `pnpm-lock.yaml` because pnpm is available in the build environment. For a reproducible install with pnpm, use `pnpm install --frozen-lockfile`, `pnpm dev`, and `pnpm build`. npm commands also work; npm will create its own lockfile.

## Structure

- `src/App.tsx`: homepage sections.
- `src/components/`: navigation, icons, illustration, and mock quote form.
- `src/data.ts`: agency details, coverage categories, and fictional sample input.
- `src/styles.css`: theme and responsive styles.
- `public/koetting-logo.png`: official Koetting Insurance and Resource Agency logo sourced from the agency's public website.

## Content and placeholders

Agency name, location, phone, email, founding year, independent-agency model, coverage categories, and claims support are based on the agency's existing website, reviewed October 6, 2026:

- https://www.koettinginsurance.net/
- https://www.koettinginsurance.net/about/
- https://www.koettinginsurance.net/personal/
- https://www.koettinginsurance.net/business/
- https://www.koettinginsurance.net/contact/

Headlines, descriptions, colors, and the neighborhood illustration are newly written concept content for review. The header, footer, and favicon use the agency's current official logo. No testimonials, carrier logos, prices, or office hours are invented.

“Use sample details” fills the form with Alex Sample, alex@example.com, and a fictional 555 phone number. The form is labeled as a demo and requests fictional input. Coverage links scroll to the form. Phone/email links open your device's calling/email app; directions opens Google Maps.

Before launching a real site, approve the copy/branding and implement a secure submission workflow, agency integrations, privacy requirements, and production metadata. `noindex,nofollow` currently marks this as a prototype.
