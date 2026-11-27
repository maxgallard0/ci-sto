---
name: problem-definition
description: Help a Ci sto teammate define the problem for each user (Student, Organizer, Partner) before they write user stories - context, proto-persona, job statement, frictions tagged by force and evidence, point of view and "How might we" questions. Use when a teammate starts their deliverable, or wants to check their problem definition.
---

# Problem definition

## Goal

Help a teammate agree on the problem before they design a solution. This is the Define step of the Double Diamond. The job statement and the forces come from Jobs to be Done.

The result is short: about one page for all three users. Every user story links later to one of these frictions.

Read [AGENTS.md](../../AGENTS.md) and section 1 of [deliverables/learn.md](../../deliverables/learn.md) first.

## The format

Write one block for each user: Student, Organizer and Partner.

```markdown
### Student

- **Context:** Milan, the first months of a master's degree. Free weekends and short trips. Plans start in WhatsApp groups and on Instagram.
- **Profile:** A master's student who moved to Milan this year. Knows few people outside class. Finds plans in WhatsApp groups and on Instagram. Wants to travel and meet people on a small budget.
- **Job:** When a free weekend comes, I want to join a trip with people I can trust, so I can see new places and meet people without risk.

| ID | Moment | Friction | Force | Evidence |
|---|---|---|---|---|
| `F-STU-ELE-01` | Before | I knew nobody in the ski group, so I stayed at home. | Anxiety | Observed |
| `F-STU-ELE-02` | Before | I scroll through many events that I cannot pay for. | Push | Observed |
| `F-STU-ELE-03` | After | After a trip we go back to the class WhatsApp group, and I lose contact with the new people. | Habit | Assumption |

- **Point of view:** A Student who is new in Milan needs a safe way to join plans with people they do not know yet, because the fear of a group of strangers is stronger than the wish to travel.
- **How might we:** How might we help a Student trust a group before they join it?
```

## Rules for each part

| Part | Rule |
|---|---|
| Context | One or two lines: the place, the time and the situation. |
| Profile | One typical user, as a proto-persona: who they are, what they use today and what they want. No real person. No numbers the person does not have. |
| Job | "When … I want to … so I can …". No product name and no feature. |
| Friction ID | `F-<USER>-<ABC>-<NN>`, for example `F-STU-ELE-01`. `<ABC>` is the same as in the person's story IDs. Numbers start at `01` for each user. |
| Moment | `Before` (find, decide, join), `During` or `After` the plan. |
| Friction | One sentence in the user's words. It says what happens today, not a solution. |
| Force | `Push`: a pain in how they do it today. `Pull`: something they want and cannot find or get today. `Anxiety`: a fear that stops them from trying something new. `Habit`: an old way that keeps them from changing. |
| Evidence | `Observed`: the person lived it or saw it. `Assumption`: the person thinks it is true but did not see it. |
| Frictions | 3 to 5 for each user. Use more than one force and more than one moment, if possible. |
| Point of view | "<User> needs <need> because <insight>." The need is a verb, not a feature. The insight comes from the frictions. |
| How might we | 1 to 3 questions. Not too wide ("make students happy") and not too narrow (a solution in disguise). |

## How to help

1. Ask the person if they know the Double Diamond or Jobs to be Done. If not, teach section 1 of [deliverables/learn.md](../../deliverables/learn.md). Explain one idea, give the exercise, then check the answer.
2. Ask for their first name, so that you can build their friction IDs.
3. Start from their notes from the questions in section 8 of [deliverables/README.md](../../deliverables/README.md). If they have no notes, ask about a real moment, one question at a time.
4. Work on one user at a time: Student, then Organizer, then Partner.
5. For each user, ask for the context and the profile. Then write the job together.
6. Find the frictions. Ask "What stopped you or slowed you?" for each moment: before, during and after. For each friction, ask which force it is and how they know it. If they did not live it or see it, mark it `Assumption`.
7. Write the point of view from the frictions. Then write 1 to 3 "How might we" questions.
8. Show a short draft. Ask "Is this right? What would you change?" Improve it.
9. When all three users are done, tell the person the next step: user stories. Every story links to at least one friction of the same user.

## Check mode

If the person asks you to check a problem definition, answer with a table:

| User | Part | Problem | Suggestion |
|---|---|---|---|

Check these things:

- Each user has all six parts: context, profile, job, frictions, point of view and how might we.
- Each user has 3 to 5 frictions with an ID, a moment, a force and evidence.
- Friction IDs follow the format and are not repeated.
- No friction describes a solution.
- Assumptions are marked `Assumption`, not `Observed`.
- The point of view follows from the frictions.

Then ask which suggestions they want to apply.

## Do not

- Do not invent research, numbers, quotes or users. If the person did not live it or see it, it is an `Assumption`.
- Do not change an `Assumption` to `Observed` to make the work look stronger.
- Do not write a solution or a feature in a friction, a job or a point of view.
- Do not write the problem definition for the person. Help them think, then show a draft.
