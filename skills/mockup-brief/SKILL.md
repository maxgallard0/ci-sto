---
name: mockup-brief
description: Describe Ci sto app screens and flows in text (mobile frame 390 x 844, frame name = story ID), so that the person or another AI can draw them the same way. Use when a teammate has user stories and needs to plan or explain their mockups.
---

# Mockup brief

## Goal

Turn user stories into a clear text description of each app screen. With the brief, the person can draw the screens in Figma or on paper, or give the brief to another AI that draws them.

Read [AGENTS.md](../../AGENTS.md) and [docs/design-system.md](../../docs/design-system.md) first.

## Rules

- App only. No website and no desktop screens.
- Every frame is **390 × 844 px**.
- The frame name is the story ID, for example `STU-ELE-01`. If one story needs more than one screen, add a letter: `STU-ELE-01-A`, `STU-ELE-01-B`.
- Use only the colours, type and components in the design system, by their names. If something is missing, write it as an open question. Do not invent a new colour or component.
- One main action per screen, with the main button in ci-sto-red.
- Use real example text, not "lorem ipsum". Write it in English, with the brand words "Ci sto" and "Cerchia". Use invented names for people.
- Every acceptance criterion of the story must be visible in at least one frame.
- Do not decide product questions. Write them as open questions.

## The format

Write one brief for each flow. A flow is a group of screens that the user goes through for one or more stories.

```markdown
## Flow: Join a trip a friend recommends

- **Stories:** STU-ELE-01
- **User:** Student
- **Screens in order:** `STU-ELE-01-A` (trip page), then `STU-ELE-01-B` (request sent)

### Frame `STU-ELE-01-A` · Trip page with recommendations

- **Frame:** 390 × 844 px, mobile app.
- **Story:** STU-ELE-01
- **Goal of the screen:** the Student sees who recommends the trip and decides to join.
- **Comes from:** a trip card in the plans feed.
- **Layout, top to bottom:**
  1. Status bar area (48 px top inset), cream background.
  2. Back button (44 px circle, white) and the title "Amsterdam, 5–8 Dec" (screen title).
  3. Photo of the city, large card, radius 22 px.
  4. "Recommended by your Cerchia": avatar stack with 2 friends, text "Giulia and Marco went in 2025".
  5. Info rows: dates, price per person, spots left.
  6. Bottom action bar with the main button "Ci sto".
- **Main action:** "Ci sto" (main button). Leads to `STU-ELE-01-B`.
- **Other actions:** tap the avatar stack to read the recommendations; back button returns to the feed.
- **States:** no recommendations from the Cerchia: show recommendations from locals, or hide the block if there are none.
- **Design system:** cream background, large card, avatar stack, info rows, bottom action bar, main button.
- **Accessibility:** touch targets at least 44 × 44 px, aria-label on the back button.
- **Open questions:** do we show the price before the Student joins?
```

Keep every field. Write "None" if a field does not apply.

## How to help

1. Ask the person if they made mockups before. If not, teach the basics first with section 3 of [deliverables/learn.md](../../deliverables/learn.md): what a frame and a flow are, how detailed a mockup must be, and how to go from a story to frames.
2. Ask which stories the person wants to show. Read their acceptance criteria.
3. Ask the person to describe the screen, or to share a photo of a paper sketch.
4. Ask one question at a time, for example:
   - What is the first thing the user must see on this screen?
   - What is the one main action?
   - What happens after the user taps it?
   - What does the screen show when there is no content yet, or when something goes wrong?
5. Write the brief in the format above. Show it and ask for changes.
6. Check that every acceptance criterion is visible in a frame. Tell the person if one is missing.
7. Give the final brief, ready to paste into the deliverable.

## Give the brief to another AI

If the person wants another AI to draw the screen, give them this prompt to paste, together with the brief and `docs/design-system.md`:

```text
Draw this mobile app screen exactly as described in the brief.
Frame: 390 x 844 px. Name the frame with the ID in the brief.
Use only the colours, fonts and components in the design system I attached.
Use the text in the brief exactly. Do not add features, text or colours that are not in the brief.
If something is not clear, ask me before you draw.
```

After the AI draws the screen, the person checks it against the brief and the design system.
