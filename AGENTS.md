<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project notes

- Bilingual (ar default / en) marketing site for 2nd Home Clinic (Dr. Nuran Jehad), Kazan Mall, Sheikh Zayed. Photos in `public/images` (compressed JPEGs). Routes: `/ar`, `/en`; `src/app/page.tsx` redirects `/` client-side by `navigator.language`.
- Node 22 required (`.nvmrc`): run `source ~/.nvm/nvm.sh && nvm use` before npm commands.
- Commands: `npm run dev`, `npm run build`, `npm run lint`, `npx tsc --noEmit`.
- All copy lives in `src/lib/i18n.ts`; clinic contact/hours/address in `src/lib/site.ts`.
- Static export (`output: "export"`) deployed to GitHub Pages via `.github/workflows/deploy.yml`. `NEXT_PUBLIC_BASE_PATH` / `NEXT_PUBLIC_SITE_URL` are injected by the workflow; every metadata route needs `dynamic = "force-static"`.
- Booking form has no backend: it opens WhatsApp with a pre-filled message.
- OG image (`src/app/[locale]/opengraph-image.tsx`) reverses Arabic word order manually because Satori lacks bidi support.
