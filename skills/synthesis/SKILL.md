---
name: synthesis
description: Merge all Ci sto team deliverables into one version (deliverables/synthesis/synthesis.md), give final story IDs, and flag conflicts, gaps and new ideas without deciding them. Use when Max asks to combine the team's deliverables.
---

# Synthesis

## Goal

Combine every person's deliverable into one clear version for the team. Show where people agree, where they disagree, and what nobody covered. The team decides the conflicts. The synthesis only shows them.

Read [AGENTS.md](../../AGENTS.md), [skills/user-stories/SKILL.md](../user-stories/SKILL.md) and [deliverables/_template.md](../../deliverables/_template.md) first.

## Input and output

- Input: every `deliverables/<firstname>/deliverable.md` on `main`. Use only work that is merged into `main`.
- Ask Max for the list of people on the team, so that you can see who has not delivered yet.
- Output: `deliverables/synthesis/synthesis.md`, on a branch named `synthesis`, with a pull request to `main`.

## Steps

1. **Inventory.** Make a table: person, number of stories for each user type, number of frames, missing sections. List the people who have not delivered.
2. **Group.** Put every story under its user (Student, Organizer, Partner) and under a flow, for example: sign up, profile, find plans, join a plan, chat, Cerchia, recommendations, create a plan, trips, costs, photos, partner offers.
3. **Merge duplicates.** If two or more stories have the same user and the same need, merge them into one. Keep the clearest wording. Combine the acceptance criteria and remove repeats. List every source ID and author.
4. **Final IDs.** Give final IDs in the format `STU-01`, `ORG-01`, `PAR-01`. Order them by flow, then by priority. If the sources give different priorities, use the highest one and flag it as a conflict.
5. **Conflicts.** A conflict is when sources disagree: different rules, different flows, different priorities, or different words for the same thing. Do not choose. For each conflict, write the topic, each version with its author and ID, why it matters, and the question the team must answer.
6. **Gaps.** List what is missing:
   - Features in "What Ci sto already has" with no stories.
   - Flows with no stories, or a user with few stories.
   - Stories without acceptance criteria or without a screen.
   - Acceptance criteria that no frame shows.
   - Dependencies that nobody owns.
7. **New ideas.** List every story with the status `New idea`: what it is, who proposed it and how many people did. Do not change them to `Defined`. The team decides.
8. **Open questions.** Merge all open questions. Remove repeats. Keep the authors.
9. **First trip.** List the `Must` stories, as a view of what the app needs for the first trip (Amsterdam, 5–8 December, tentative).
10. Show the draft to Max before you open the pull request.

## Output format

```markdown
# Synthesis: <date>

| | |
|---|---|
| **Author** | <who ran the synthesis> |
| **Role** | Student, Organizer, Partner |
| **Date** | <YYYY-MM-DD> |
| **Type** | Synthesis |
| **Sources** | <list of deliverables, with author> |

## 1. Inventory
## 2. User stories
### Student
### Organizer
### Partner
## 3. Mockups
## 4. Conflicts
## 5. Gaps
## 6. New ideas
## 7. Open questions
## 8. Dependencies
## 9. First trip: Must stories
## 10. ID map
```

Under each merged story, add a line `Sources: STU-ELE-01 (Elena), STU-GIU-03 (Giulia)`.

Section 3 lists the best frame for each final story, with the link to the original image and its author. Do not redraw mockups.

Section 10 is a table with one row for every source story: source ID, author, final ID and what happened (`kept`, `merged` or `conflict`). Every source story must appear in this table. Do not drop a story without a trace.

## Do not

- Do not invent stories, criteria or decisions to fill a gap. List the gap.
- Do not resolve conflicts. Show them.
- Do not remove a person's work. Merge it and credit it.
- Do not change the files in other people's folders.
