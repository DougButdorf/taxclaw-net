# AGENTS.md

## Project
taxclaw-net — Marketing website for TaxClaw tax extraction tool
Live at: taxclaw.net
Deploy platform: Vercel

## Architecture
- Next.js 15 App Router with React 19
- Tailwind CSS 4
- TypeScript
- Static marketing pages (landing, FAQ, privacy, terms, digital assets)

## Build & Test
```bash
npm install
npm run build
npm run lint
```

## Environment
No environment variables required for this static marketing site.
See .env.example for optional variables.
Vercel project: taxclaw-net

## Branching
- main → production
- feat/* → feature branches
- All PRs target main

## What NOT to touch
- `vercel.json` — Contains security headers
- Public assets in `public/`

## Key integrations
None — static marketing site only

## Mac-mini dependencies
None — fully cloud-native

Note: The TaxClaw app itself (referenced in documentation) runs locally via OpenClaw skill, but this marketing site has no dependency on that.
