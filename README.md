# Ci Sto

**Make a plan. Or just say Ci sto.**

Ci Sto (Italian for "I'm in") is an activity-first app for students who moved to Milan. You don't swipe on people: you swipe on activities. Swipe right on a plan, join its group chat, meet in real life.

## The problem

Milan is the loneliest city in Italy (Unobravo, 2025) and the most expensive one for students. Around 20,000 Polimi students moved here to study, and events are scattered across Instagram pages and WhatsApp groups. Nobody wants to go alone.

## How it works

1. Swipe right on an activity = "I'm in"
2. Join that activity's group chat and introduce yourself
3. Meet in real life and keep the connections you like

Social and professional plans live in one feed, from aperitivo to startup nights. Filters cover budget, language, field of study and "meet locals". Anyone can post a plan: students, partners, venues and companies.

## Business model

Free for students. Partners pay through sponsored activity cards, guaranteed attendance at brand events, commissions on tickets and merch, and anonymous insight reports.

## Project

Group startup concept for the Pitch & Presentation Strategies course, Strategic Design Master, POLI.design (2026).

## Website structure

Next.js app (App Router, TypeScript). Demo only: all data lives in the front end and in the browser (localStorage), no backend yet.

| Path | What | Owner |
|---|---|---|
| `app/(landing)/` | Landing (`/`), sign up / log in, Plans this week (`/plans`) | Cami |
| `app/(member)/` | Become a member (`/join/...`), all plans with filters (`/plans/all`), chats, Cerchia | Elena |
| `app/(organizer)/` | Organize a plan (`/organize/...`) | Melis |
| `components/` | Shared navigation and icons | team |
| `lib/` | Routes, mock data, fonts, demo storage | team |
| `styles/` | `tokens.css` (shared colours, type, radii) and one stylesheet per area | team |
| `design/`, `landing/` | Original static HTML mockups, kept as reference | team |

Each area is its own root layout, so an area stylesheet never affects the others. All links use `lib/routes.ts`.

Terminology: a student who creates a plan is an **Organizer**. **Host** is only for partners (venues, brands, associations).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy on Vercel

`vercel.json` sets the framework to Next.js, so Vercel runs `next build` on every push to `main`. If the Vercel project was created with the "Other" preset, open Project Settings, Build and Deployment, set Framework Preset to Next.js and clear any custom build or output settings.
