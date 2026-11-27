# AGENTS.md

These are the rules for every AI assistant that works on Ci sto: Claude, ChatGPT, Codex, Cursor, Gemini and others. People on the team can read them too.

If you are a person on the team, start with [deliverables/README.md](deliverables/README.md).

## The project

Ci sto (Italian for "I'm in") is an app to find plans and people: trips and events, with recommendations from people you trust (friends, friends of friends and locals). It starts with students in Milan.

The team is about 12 Strategic Design master's students at POLI.design, Milan. Max coordinates the work.

## Current phase: user stories and app mockups

- The team designs the **mobile app** only. Each person writes user stories and draws app mockups.
- The **website is frozen.** The web demo stays in this repository as a reference. It is live at https://ci-sto-sigma.vercel.app. Do not change it, and do not write new app or web code, unless Max asks for it.
- Every person delivers on **Wednesday 2 December 2026**. The team presents on **Thursday 3 December 2026**.

## Users

Ci sto has three types of user. Use these names and IDs everywhere.

| User | ID | Who |
|---|---|---|
| Student | `STU` | A university student who uses Ci sto to find plans and people. |
| Organizer | `ORG` | A student who creates and runs a plan. Every Organizer is a Student. Not every Student is an Organizer. |
| Partner | `PAR` | A business or group that works with Ci sto, for example a venue, hostel, ski school, brand, association or event team. |

"Host" is an old word for Partner. Use "Partner" in new work.

Other words:

- **Plan:** a trip or an event that people can join.
- **"Ci sto":** the main button. It means "I'm in": the Student asks to join a plan.
- **Cerchia** (plural **Cerchie**): your circle of trusted people. It grows plan by plan.
- **Defined:** a feature that is already in the list "What Ci sto already has" in [deliverables/README.md](deliverables/README.md).
- **New idea:** a feature that is not in that list yet, for example splitting expenses or a shared photo library in the cloud.

## Agreements from the kickoff (26 November 2026)

- The team plans its own trips in the app: Amsterdam 5–8 December (tentative), ski 8–10 January and Dolomites 20–28 March.
- Nothing goes to Polimi until the team has made at least one trip with the app.
- Each trip feeds the brand: short videos and Instagram content.
- Possible partners, not confirmed: Panto (partner connections) and Eterna (people, events and know-how).

## Where things are

| Path | What |
|---|---|
| `AGENTS.md` | These rules. |
| `CLAUDE.md` | Tells Claude Code to read this file. |
| `skills/` | Step-by-step instructions for AI assistants. One folder per task, each with a `SKILL.md`. |
| `deliverables/README.md` | The brief for the team: what to deliver, how, and questions to start with. |
| `deliverables/_template.md` | The template for each person's deliverable. |
| `deliverables/<firstname>/` | One folder per person, with their deliverable and small images. |
| `deliverables/synthesis/` | The merged version of all deliverables. |
| `docs/design-system.md` | Colours, type, components and rules for the app mockups. |
| Everything else | The frozen web demo. Reference only. |

## Skills

Read the skill before you do the task. If you cannot open files in this repository, ask the person to attach or paste the skill.

| Task | Skill |
|---|---|
| Write or check user stories | [skills/user-stories/SKILL.md](skills/user-stories/SKILL.md) |
| Describe screens and flows in text, so that a person or another AI can draw them | [skills/mockup-brief/SKILL.md](skills/mockup-brief/SKILL.md) |
| Build a person's deliverable file | [skills/deliverable/SKILL.md](skills/deliverable/SKILL.md) |
| Merge everyone's deliverables into one version | [skills/synthesis/SKILL.md](skills/synthesis/SKILL.md) |

## How to help a teammate

Most teammates are students with little or no work experience. Many are new to user stories, GitHub and design tools.

- Ask one question at a time. Wait for the answer before you ask the next one.
- Use plain English and short sentences. Explain a term the first time you use it.
- Start from the person's own experience and ideas. Help them think. Do not write everything for them.
- Do not invent facts: users, research results, numbers, partners, prices, dates or decisions. If something is missing, ask. If nobody knows yet, write it as an open question.
- Show a short draft, ask for feedback, then improve it.
- When the person is happy, give the final text in the format of the skill, ready to paste.
- The person can talk to you in any language. Write the final texts in English.

## Rules for the repository

- Write everything in this repository in English.
- Each person works on their own branch, `team/<firstname>`, in lowercase. Example: `team/elena`. Never commit or push to `main`.
- Each person changes only their own folder, `deliverables/<firstname>/`. Do not edit another person's folder.
- These files are shared: `AGENTS.md`, `CLAUDE.md`, `skills/`, `docs/`, `deliverables/README.md`, `deliverables/_template.md`, `deliverables/synthesis/` and all web demo files. Change them only when Max asks, in a separate pull request.
- To add work to `main`, open a pull request from your branch to `main`. Max reviews and merges it. Do not merge your own pull request.
- Put only small images in the repository: PNG or JPG, under 2 MB each, in your own folder. Name each image like its frame, for example `STU-ELE-01-A.png`.
- Put videos, renders, PDFs and Figma files on a shared drive or in Figma. Add the link to the deliverable. Make sure the team can open the link.
- The repository is public. Do not add personal data: phone numbers, private email addresses, home addresses, ID documents, or photos of people who did not agree. Use invented names in examples.
- Write short commit messages in English, for example `Add Elena's user stories`.

## Story IDs

- Format: `<USER>-<ABC>-<NN>`. Example: `STU-ELE-01`.
- `<USER>` is `STU`, `ORG` or `PAR`.
- `<ABC>` is the first three letters of the author's first name, in capitals. If a teammate already uses the same three letters, add the first letter of the last name, for example `ELEB`.
- `<NN>` is a two-digit number that starts at `01` for each user type.
- The synthesis gives the final IDs later (`STU-01`, `ORG-01`, `PAR-01`) and keeps a map to the original IDs.

## Mockups

- App only. One phone frame is **390 × 844 px**.
- The frame name is the ID of the user story it shows, for example `STU-ELE-01`. If one story needs more than one screen, add a letter: `STU-ELE-01-A`, `STU-ELE-01-B`.
- Use the colours, type and components in [docs/design-system.md](docs/design-system.md). Do not invent new ones. If something is missing, write it as an open question.
- Paper sketches, Figma and AI-generated screens are all fine if they follow these rules.

## When you are not sure

Stop and ask the person. If the person is not sure either, tell them to ask Max.
