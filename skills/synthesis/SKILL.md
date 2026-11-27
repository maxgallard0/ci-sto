---
name: synthesis
description: Merge all Ci sto team deliverables into one version (deliverables/synthesis/synthesis.md), give final story IDs, and flag conflicts, gaps and new ideas without deciding them. Use when Max asks to combine the team's deliverables.
---

# Synthesis

## Goal

Combine every person's deliverable into one clear version for the team. Show where people agree, where they disagree, and what nobody covered. The team decides the conflicts. The synthesis only shows them.

Read [AGENTS.md](../../AGENTS.md), [skills/user-stories/SKILL.md](../user-stories/SKILL.md) and [deliverables/_template.md](../../deliverables/_template.md) first.

## Input and output

- Input: every teammate's `deliverable.md` in their own folder under `deliverables/` on `main`. Use only work that is merged into `main`.
- Ask Max for the list of people on the team, so that you can see who has not delivered yet.
- Output: `deliverables/synthesis/synthesis.md`. Run the synthesis only when Max asks. Follow the shared-file branch rule in [AGENTS.md](../../AGENTS.md#rules-for-the-repository). Use `team/<name>-synthesis`, for example `team/elena-synthesis`. Open a separate pull request to `main`. Max reviews and merges it.

## Steps

1. **Inventory.** Make a table: person, number of stories for each user type, number of frames, missing sections. List the people who have not delivered.
2. **Group.** Put every story under its user (Student, Organizer, Partner) and under a flow, for example: sign up, profile, find plans, join a plan, chat, Cerchia, recommendations, create a plan, trips, costs, photos, partner offers.
3. **Merge duplicates.** Merge stories with the same user and need only if all their acceptance criteria can work together. Keep the clearest wording. Combine the criteria and remove repeats. List every source ID and author. If criteria disagree, keep the stories separate and record each version in step 5.
4. **Final IDs.** Give final IDs in the format `STU-01`, `ORG-01`, `PAR-01`. Order stories by flow, then by priority. If versions of the same story give different priorities, mark their final stories as `Priority conflict` until the team decides. Keep every priority with its source ID and author on those stories. Record the conflict in step 5. Put stories with a priority conflict last in their flow. Find the first source ID in alphabetical order for each of these stories. Use those IDs to sort them.
5. **Conflicts.** A conflict is when sources disagree: different rules, acceptance criteria, flows, priorities, or words for the same thing. Do not choose. For each conflict, write the topic, each version with its source ID and author, why it matters, and the question the team must answer.
6. **Gaps.** List what is missing:
   - Features in "What Ci sto already has" with no stories.
   - Flows with no stories, or a user with few stories.
   - Stories without acceptance criteria or without a screen.
   - Acceptance criteria that no frame shows.
   - Dependencies that nobody owns.
7. **New ideas.** List every story with the status `New idea`: what it is, who proposed it and how many people did. Do not change them to `Defined`. The team decides.
8. **Open questions.** Merge all open questions. Remove repeats. Keep the authors.
9. **First trip.** List the stories with an agreed `Must` priority. This shows what the app needs for the first trip (Amsterdam, 5–8 December, tentative).
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

Section 3 lists every distinct screen each final story needs, in flow order (`A`, `B`, and so on). Show one original frame for each screen. Include its link and author. If other authors drew the same screen, link their frames as alternatives and name their authors. Do not redraw mockups.

Section 10 is a table with one row for every source story: source ID, author, final ID and what happened (`kept`, `merged` or `conflict`). Every source story must appear in this table. Do not drop a story without a trace.

## Do not

- Do not invent stories, criteria or decisions to fill a gap. List the gap.
- Do not resolve conflicts. Show them.
- Do not remove a person's work. Merge it and credit it.
- Do not change the files in other people's folders.
