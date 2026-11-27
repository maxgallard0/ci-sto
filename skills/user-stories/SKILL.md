---
name: user-stories
description: Write, improve or check Ci sto user stories in the team format (ID per user type, "As a / I want / So that", Given/When/Then acceptance criteria, priority, status and screen). Use when a teammate wants to write user stories, or wants to check their stories before they deliver.
---

# User stories

## Goal

Help a teammate turn their ideas about Ci sto into clear user stories. The team must be able to compare, merge and draw them.

Read [AGENTS.md](../../AGENTS.md) first. It has the users, the words, the ID format and the rules. The list of what Ci sto already has is in [deliverables/README.md](../../deliverables/README.md).

## The format

Write every story exactly like this:

```markdown
#### ORG-ELE-02 · Split the costs of a trip

- **User:** Organizer
- **Status:** New idea
- **Priority:** Should
- **Screen:** `ORG-ELE-02-A`, `ORG-ELE-02-B`

**Story**
As an Organizer,
I want to add the shared costs of a trip and split them between the people who joined,
so that I do not have to chase each person for money after the trip.

**Acceptance criteria**
1. Given I manage a trip, when I add a cost with an amount and a description, then the app splits it equally between everyone who joined.
2. Given a cost is split, when a person opens the trip, then they see how much they owe and to whom.
3. Given a person has paid, when they mark the cost as paid, then the Organizer sees it as paid.
4. Given I add a cost without an amount, when I save, then the app asks me for the amount.

**Notes and questions**
- Does the money move inside Ci sto, or do people only keep track here?
```

## Rules for each field

| Field | Rule |
|---|---|
| ID | `<USER>-<ABC>-<NN>`, as in AGENTS.md. Example: `STU-ELE-01`. Numbers start at `01` for each user type. |
| Title | Short. Starts with a verb, for example "Join a trip a friend recommends". |
| User | Exactly one: Student, Organizer or Partner. If two users need the same thing, write two stories. |
| Status | `Defined` if the feature is in the list "What Ci sto already has". `New idea` for anything else. |
| Priority | `Must`: the first trip cannot happen without it. `Should`: important, but the first trip can happen without it. `Could`: nice to have. `Won't`: not now, keep it for later. |
| Screen | The frame name or names of the mockup. The frame name is the story ID. Add `-A`, `-B` if the story needs more than one screen. |
| Story | "As a … / I want … / so that …". The "so that" is the real benefit for the user, not a feature. |
| Acceptance criteria | 2 to 5 items. Each item uses "Given … when … then …". A person must be able to look at the mockup and say yes or no. Add at least one case where something goes wrong or is empty, if it makes sense. |
| Notes and questions | What is not clear yet. Write "None" if there is nothing. |

## A good story

Check each story against this list:

- One user and one need.
- Small enough to show in one to three screens.
- Says what the user needs, not how it looks. No colours, buttons or layout in the story. Those belong in the mockup.
- The benefit in "so that" is clear and real.
- Every acceptance criterion can be checked as yes or no.
- It follows the format and the ID rules above.

## How to help

1. Ask the person if they wrote user stories or acceptance criteria before. If not, teach the basics first with sections 1 and 2 of [deliverables/learn.md](../../deliverables/learn.md): one idea at a time, one short exercise, then check the answer.
2. Ask the person for their first name, so that you can build their IDs.
3. Ask which user they want to start with. Explain that everyone writes stories for all three users: Student, Organizer and Partner.
4. Ask about a real moment from their life, one question at a time. Use the starter questions in [deliverables/README.md](../../deliverables/README.md) if they do not know where to start.
5. From the answers, propose one story. Ask: "Is this right? What would you change?"
6. Write the acceptance criteria together. Ask "How do we know it works?" and "What can go wrong?"
7. Ask for the priority. Check the status against the list "What Ci sto already has".
8. Repeat for the next story. Suggest at least three stories for each user type.
9. When the person is done, check all stories against "A good story". Show the problems and suggest a fix. Do not change the meaning of a story without asking.
10. Give the final stories in the format above, grouped by user: Student, Organizer, Partner.

## Check mode

If the person asks you to check stories they already wrote, answer with a table:

| ID | Problem | Suggestion |
|---|---|---|

Then ask which suggestions they want to apply.

## Do not

- Do not invent research, numbers, partners or decisions.
- Do not put two users in one story.
- Do not describe the screen inside the story.
- Do not mark a feature as `Defined` if it is not in the list.
