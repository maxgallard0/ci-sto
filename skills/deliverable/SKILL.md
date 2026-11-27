---
name: deliverable
description: Build a teammate's Ci sto deliverable file from the team template, with the fixed header and sections. Use when a teammate has a problem definition, stories, mockups and questions and needs to put them together before they deliver.
---

# Deliverable

## Goal

Put a teammate's work into one Markdown file that follows the template. Every deliverable has the same shape, so the synthesis can merge them.

Read [AGENTS.md](../../AGENTS.md) and [deliverables/_template.md](../../deliverables/_template.md) first.

## The file

- Save `deliverables/<name>/deliverable.md` on `team/<name>`. Use the person's first name in lowercase for `<name>`. If a teammate already uses that first name, add a hyphen and the first letter of the person's last name in lowercase. For example, use `team/elena-b` and `deliverables/elena-b/`. If that name is also in use, ask Max which name to use.
- Images go in the same folder, named like their frame. Example: `deliverables/elena/STU-ELE-01-A.png`.
- Videos, renders, PDFs and Figma files are links, not files.

## Header

| Field | What to write |
|---|---|
| Author | Use the name you want to show in this public repository. You can use your first name, a chosen name or your GitHub username. A last name is optional. |
| Role | The user types this deliverable covers. For now everyone covers all three: Student, Organizer, Partner. |
| Date | The delivery date, as `YYYY-MM-DD`. |
| Type | `User stories and mockups` for team deliverables. `Synthesis` for the merged version. Otherwise `Other:` and what it is. |

## Sections

Keep these six sections, in this order, with these titles. If a section has nothing yet, write "None yet." Do not add other top-level sections.

1. **Role or flow.** For each user (Student, Organizer, Partner), the flows the person covers and their main idea, in a few lines. Then a short list of their new ideas.
2. **Problem definition.** For each user: context, profile, job, 3 to 5 frictions, point of view and "How might we", in the format of [skills/problem-definition/SKILL.md](../problem-definition/SKILL.md), grouped under `### Student`, `### Organizer` and `### Partner`.
3. **User stories.** All stories in the format of [skills/user-stories/SKILL.md](../user-stories/SKILL.md), grouped under `### Student`, `### Organizer` and `### Partner`.
4. **Mockups.** A table with one row per frame: frame name, story ID, image or link, notes. Then the link to the Figma file and to other files. Mockup briefs can go at the end of this section.
5. **Open questions.** Everything that is not clear or not decided. Write who must answer, if the person knows.
6. **Dependencies.** What the work needs from other people, from partners or from team decisions.

## How to help

1. Ask the person for their problem definition, stories and notes, and an image or link for each drawn frame.
2. Ask for the header fields one at a time, if you do not have them.
3. Check the work before you build the file:
   - Each user has a problem definition with 3 to 5 frictions. Each friction has an ID, a moment, a force and `Observed` or `Assumption`.
   - Every story has all fields and 2 to 5 acceptance criteria. Its friction exists in the problem definition of the same user.
   - There are at least three stories for each user type (Student, Organizer and Partner).
   - IDs follow the format in AGENTS.md and are not repeated.
   - Every story has at least one frame. Each frame is 390 × 844 px and shows one story. The frame name follows the story ID rules.
   - Sketches and wireframes can be draft frames. Final mockups use the colours, fonts and components from [docs/design-system.md](../../docs/design-system.md).
   - New ideas have the status `New idea`.
   - Image file names match the frame names. Images are under 2 MB.
   - Links: ask the person to check that the team can open them.
   - No personal data of real people.
   - Everything is in English.
4. Tell the person what is missing or wrong. Let them decide how to fix it. Do not invent missing content.
5. Build the file from the template. Give it as one Markdown block, ready to paste.
6. Remind the person of the last steps:
   - Save it in their own folder on their own branch `team/<name>`. Use the name rules above.
   - Upload the images to the same folder.
   - If their pull request to `main` is not open yet, open it now. Keep committing progress to the branch until Wednesday 2 December 2026.
   - The steps are in [deliverables/README.md](../../deliverables/README.md).
