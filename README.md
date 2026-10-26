# All Inclusive Construction & Building — Next.js rebuild

A responsive Next.js App Router website using TypeScript, Tailwind CSS and Sanity-ready content queries. Private contact inquiries use PostgreSQL through Drizzle ORM; public pages do not require a database to build or run.

## Quick start — Windows / VS Code

Use **Node.js 22.12 or newer**. Node.js 24 LTS is also suitable. Open the project root in VS Code: the folder containing `package.json`.

In the VS Code PowerShell terminal:

```powershell
node --version
npm install
npm run dev
```

Open **http://localhost:3000** in your browser. Keep that terminal running. Stop the development server with `Ctrl+C`.

**You do not need Sanity credentials or PostgreSQL just to preview the website.** Leave the Sanity project ID and `DATABASE_URL` unset until you are ready to configure those integrations. The site uses the local content fixtures, while `/studio` shows its setup screen. Unconfigured contact submissions return a clear unavailable message and are not silently accepted or saved.

If PowerShell blocks `npm.ps1`, use `npm.cmd install` and `npm.cmd run dev`, or select **Command Prompt** from VS Code's terminal menu. No execution-policy change is required.

### Production build on your computer

`npm run build` creates the production files; it does **not** start a server. Run these separately in order:

```powershell
npm run build
npm run start
```

Then open **http://localhost:3000**. If port 3000 is already in use, stop the other server or use `npm run dev -- --port 3001` for development and open http://localhost:3001.

### Optional local environment file

Create `.env.local` in the project root by copying the example:

```powershell
Copy-Item .env.example .env.local
```

If `.env.local` already exists, edit it rather than overwriting existing credentials. The example intentionally leaves optional credentials blank. Restart the local server after editing environment variables. Replace the local site origin with your real production origin for deployment.

`.env.local` is a private local file. Do not commit real credentials or share them in screenshots. Use environment variables in the hosting provider's settings for production.

## If your downloaded version says `DATABASE_URL is required`

The old database module checked configuration during import. Next.js imports API routes while collecting page data during `next build`, so an unset database URL caused the build to fail even though public pages do not use PostgreSQL.

This version defers database initialization until a request actually needs it. Both `next build` and the public site can run without `DATABASE_URL`.

1. Use the updated project export. The database fix changes `src/db/index.ts`, `src/app/api/leads/route.ts`, and `src/app/api/health/route.ts`. This update also fixes Sanity's client boundary in `sanity.config.ts`, `src/components/sanity-studio.tsx`, and the Studio catch-all route, so use those updated files too if applying changes manually.
2. Stop any existing local server with `Ctrl+C`.
3. If the error is from an older cached build, remove the generated output only:

   ```powershell
   Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
   ```

4. Run `npm install`, then `npm run dev` for development, or `npm run build` followed by `npm run start` for production mode.

Do not patch files inside `.next`; they are generated again on the next build.

## Enable contact inquiry storage — PostgreSQL

Sanity manages public/editorial content. It does not replace the PostgreSQL database used by the contact form.

1. Start a local PostgreSQL service, or provision a hosted PostgreSQL database and get its connection URL.
2. If using local PostgreSQL, create an empty database such as `allinclusive` using pgAdmin or `psql`. The app does not create a database server or a database automatically.
3. Set `DATABASE_URL` in `.env.local` to your real connection URL. For local PostgreSQL its shape is `postgresql://USER:PASSWORD@localhost:5432/DATABASE_NAME`. URL-encode special characters in usernames/passwords. For a hosted service, use the provider's supplied URL and TLS settings.
4. Apply the inquiry table schema from the project root:

   ```powershell
   npx drizzle-kit push
   ```

5. Restart the development server with `npm run dev`.
6. Open `/api/health`. A reachable database returns HTTP 200 with `ok: true` and `database: connected`.
7. Submit a test inquiry on `/contact/` and check the `contact_leads` table with pgAdmin or Drizzle Studio (`npx drizzle-kit studio`).

`drizzle.config.ts` reads `.env.local`, then `.env`, while preserving explicit shell environment variables. Remove the obsolete `drizzle.config.json` if you are copying only selected changes from an older export; otherwise the CLI may select the wrong configuration.

### What happens without a database?

- Public pages and production builds still work.
- Valid contact inquiries return HTTP 503 with `CONTACT_STORAGE_NOT_CONFIGURED` and an alternative phone/email contact. Nothing is saved.
- A configured but unreachable database returns `CONTACT_STORAGE_UNAVAILABLE` for inquiries.
- `/api/health` returns HTTP 503 with `database: not_configured` or `database: unavailable`. This is a database-readiness check; it does not prevent browsing the public site.
- No submissions are written to Sanity or to local files as a fallback.

Before public launch, add a server-side email notification provider, rate limiting or CAPTCHA/Turnstile, retention/access controls, and owner-approved privacy terms. The current form stores inquiries but does not send email notifications.

## Connect Sanity — optional for local preview

Set the real `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in `.env.local`, restart the server, then visit `/studio`. Do not use a made-up project ID: leave it empty while using local content.

The Studio schema registry is under `src/sanity/schemas/`, the Studio config is `sanity.config.ts`, and server-side GROQ helpers are under `src/sanity/lib/`. Published Sanity homepage, service, project, article and award records take precedence over their local fixtures once configured.

Draft Mode/Visual Editing and live subscriptions are described in the architecture but are not enabled in this preview. Configure the Sanity project/CORS origins and a least-privilege server-side Viewer token before adding preview features. Never put private tokens in `NEXT_PUBLIC_*` variables.

## Validation and regression checks

```powershell
node --test tests/database-startup.test.cjs
npx next typegen
npm exec tsc -- --noEmit --pretty false
npm run build
```

The regression tests check that importing database-backed routes works without a database URL, configuration checks happen only when needed, and unconfigured inquiries fail honestly instead of crashing or reporting success.

## Research and architecture

- [`architecture.yaml`](./architecture.yaml) — Next.js/Sanity/Drizzle architecture, route map, content model, SEO, security, migration phases and acceptance criteria.
- [`docs/source-audit.md`](./docs/source-audit.md) — public page/post sitemap inventory, source findings, content revision plan, competitor comparison and verification notes.
- [`docs/source-media-inventory.yaml`](./docs/source-media-inventory.yaml) — source gallery and page media URL checklist with rights and alt-text safeguards.

Existing high-value public paths are preserved. Legal copy, award details, service towns, current career status, registration/insurance claims and photo permissions marked for confirmation must be approved before production launch.

## Main routes

- `/` — home
- `/kitchen-remodels/`, `/bathroom-remodels/`, `/residential-additions/`, `/decks/` — core services
- `/your-trusted-general-contractor-in-central-nj/` — general contractor landing page
- `/portfolio/` — project gallery with category filters
- `/about/`, `/awards/`, `/careers/`, `/contact/`
- `/news/` and the eight discovered article slugs under `/news/[slug]/`
- `/home-remodeling-in-branchburg/` and `/home-remodeling-home-improvement-services-in-somerset-county-nj/`
- `/accessibility-statement/`, `/privacy-policy/`, `/terms-conditions/`, `/cookie-policy/`
- `/sitemap.xml`, `/robots.txt`, `/studio/`

## Pre-launch verification

- Re-crawl the live WordPress sitemap and validate every keep/redirect decision.
- Confirm phone, email, registrations/insurance, service coverage, affiliations and all awards (including the 2024 and 2026 homepage badges and NAHB Master Remodeler status shown on the current site).
- Confirm permission for photographs and quotes; add accurate project descriptions and image alt text.
- Import full approved legal content; legal pages remain draft/noindex until reviewed.
- Confirm whether the previous carpenter role is still open.
- Connect and test lead notifications, anti-spam protections, production database settings and Sanity publishing.
