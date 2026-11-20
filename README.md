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

Static HTML, CSS and JavaScript, no build step.

| Path | What | Owner |
|---|---|---|
| `index.html` | Sends visitors to the landing | team |
| `landing/` | Landing, sign up / log in, Plans this week | Cami |
| `design/member/` | Become a member: onboarding, filters, chats, Cerchia | Elena |
| `design/organizer/` | Organize a plan | Melis |

Flow: landing → "Become a member" → `design/member/m1-about-you.html` → profile setup → Plans this week (`landing/home.html`). "Log in" goes straight to Plans this week.

## Deploy on Vercel

1. Merge the area pull requests into `main`.
2. In Vercel: Add New → Project → import `melisabaci5-ui/ci-sto`.
3. Framework preset: **Other**. Root directory: `./`. No build command, no output directory.
4. Deploy. Every merge into `main` publishes again automatically.
