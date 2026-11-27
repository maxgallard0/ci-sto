---
name: deliverable
description: Build a teammate's Ci sto deliverable file (deliverables/<firstname>/deliverable.md) from the team template, with the fixed header and sections. Use when a teammate has stories, mockups and questions and needs to put them together before they deliver.
---

# Deliverable

## Goal

Put a teammate's work into one Markdown file that follows the template. Every deliverable has the same shape, so the synthesis can merge them.

Read [AGENTS.md](../../AGENTS.md) and [deliverables/_template.md](../../deliverables/_template.md) first.

## The file

- Path: `deliverables/<firstname>/deliverable.md`, with the first name in lowercase. Example: `deliverables/elena/deliverable.md`.
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

Keep these five sections, in this order, with these titles. If a section has nothing yet, write "None yet." Do not add other top-level sections.

1. **Role or flow.** For each user (Student, Organizer, Partner), the flows the person covers and their main idea, in a few lines. Then a short list of their new ideas.
2. **User stories.** All stories in the format of [skills/user-stories/SKILL.md](../user-stories/SKILL.md), grouped under `### Student`, `### Organizer` and `### Partner`.
3. **Mockups.** A table with one row per frame: frame name, story ID, image or link, notes. Then the link to the Figma file and to other files. Mockup briefs can go at the end of this section.
4. **Open questions.** Everything that is not clear or not decided. Write who must answer, if the person knows.
5. **Dependencies.** What the work needs from other people, from partners or from team decisions.

## How to help

1. Ask the person for their stories and notes, and an image or link for each drawn frame.
2. Ask for the header fields one at a time, if you do not have them.
3. Check the work before you build the file:
   - Every story has all fields and 2 to 5 acceptance criteria.
   - There are at least three stories for each user type (Student, Organizer and Partner).
   - IDs follow the format in AGENTS.md and are not repeated.
   - Every story has at least one drawn frame, and every frame name matches a story ID.
   - New ideas have the status `New idea`.
   - Image file names match the frame names. Images are under 2 MB.
   - Links: ask the person to check that the team can open them.
   - No personal data of real people.
   - Everything is in English.
4. Tell the person what is missing or wrong. Let them decide how to fix it. Do not invent missing content.
5. Build the file from the template. Give it as one Markdown block, ready to paste.
6. Remind the person of the last steps:
   - Save it as `deliverables/<firstname>/deliverable.md` on their branch `team/<firstname>`.
   - Upload the images to the same folder.
   - Open a pull request to `main` before Wednesday 2 December 2026.
   - The steps are in [deliverables/README.md](../../deliverables/README.md).
