# Learn the basics: user stories, acceptance criteria and mockups

Your deliverable has three new things in it: user stories, acceptance criteria and mockups. This page teaches them from zero. You do not need work experience.

Read it once before you start. It takes about 20 minutes. Your AI can also teach you this page step by step: see the prompt in section 9 of [the brief](README.md).

1. [User stories](#1-user-stories)
2. [Acceptance criteria](#2-acceptance-criteria)
3. [Mockups](#3-mockups)
4. [Three full examples](#4-three-full-examples)
5. [Words you will see](#5-words-you-will-see)

## 1. User stories

### What a user story is

A user story is a short text that says **who** needs something, **what** they need and **why**. It describes a need, not a solution. Teams write stories first, so that everybody agrees on the need before anybody designs a screen.

Think of each story as a card:

| Part | What it is | Example |
|---|---|---|
| Title | A short name that starts with a verb | Join a trip a friend recommends |
| User | Who has the need: Student, Organizer or Partner | Student |
| Priority | How important it is: Must, Should, Could or Won't | Must |
| Story | "As a … I want … so that …" | See below |
| Acceptance criteria | How we know that the story works | See section 2 |

Our format also has an ID, a status and a screen. [The user stories skill](../skills/user-stories/SKILL.md) explains them.

### The three parts of the sentence

```text
As a <user>,            who has the need
I want <something>,     what the user wants to do or to get
so that <benefit>.      why it matters to the user
```

The "so that" is the most important part. It is the real reason. To find it, ask "Why?" after "I want". Your answer is the "so that".

### From a real moment to a story

1. **Remember a real moment.** "Last winter I wanted to go on a ski trip. I knew nobody in the group, so I stayed at home."
2. **Find the user.** I was a Student.
3. **Find the problem.** I did not trust a group of strangers.
4. **Find what would help.** To see that someone I trust knows the trip or the Organizer.
5. **Write the story.**

```text
As a Student,
I want to see which friends know a trip or its Organizer,
so that I can join a group even if I do not know anybody in it.
```

### Common mistakes

| Mistake | Bad | Better |
|---|---|---|
| The "so that" repeats the feature | As a Student, I want filters, so that I can filter plans. | As a Student, I want to see only plans that fit my budget, so that I do not waste time on plans I cannot pay for. |
| The story describes the screen | As a Student, I want a red button at the bottom of the trip page, so that I can join. | As a Student, I want to ask to join a trip in one step, so that joining is fast when I already know I want to go. |
| Two users in one story | As a Student and an Organizer, I want to chat, so that we can plan. | Two stories. As a Student, I want to ask the Organizer a question before I join, so that I know if the trip is right for me. As an Organizer, I want to send one message to everyone who joined, so that nobody misses a change. |
| Too big | As an Organizer, I want to manage my trip, so that it goes well. | Split it. As an Organizer, I want to accept or decline each request to join, so that I choose who comes on the trip. |
| The user is the company | As Ci sto, I want more Partners, so that we earn money. | Find the real person. As a Partner, I want to see how many students saved my offer, so that I know if Ci sto brings me customers. |

### Priority

- **Must:** the first trip cannot happen without it.
- **Should:** important, but the first trip can happen without it.
- **Could:** nice to have.
- **Won't:** not now. Keep it for later.

### Exercise

Fix this story: "As a user, I want a map, so that I can see a map."

Hints: Who is the user? Why do they want a map?

One possible answer: "As a Student, I want to see this week's events on a map, so that I can choose plans near where I live."

## 2. Acceptance criteria

### What they are

Acceptance criteria are the checks that say when a story works. They turn a wish into tests. Later, someone looks at your mockup and answers each criterion with yes or no.

### Given, when, then

Every criterion has three parts:

| Part | Meaning | Example |
|---|---|---|
| **Given** | The situation before. What is already true. | Given two friends from my Cerchia went on this trip, |
| **When** | The action. What the user does. | when I open the trip page, |
| **Then** | The result. What the user sees or gets. | then I see their names and their recommendations. |

### Rules

- Write **2 to 5** criteria for each story.
- Each criterion is **yes or no**. A person can look at the mockup and check it.
- Write one **normal case**: everything works.
- Write at least one **problem case**, if it makes sense: something is missing, empty, full or wrong.
- Write what the user **sees and does**. Do not write about code, servers or databases.
- **No vague words:** fast, easy, nice, simple, clear, user-friendly, intuitive. Write what the user sees instead.
- One criterion, one check. If a criterion has many "and", split it.

### Common mistakes

| Bad | Why it is bad | Better |
|---|---|---|
| The trip page is easy to use. | "Easy" is not yes or no. There is no given, when or then. | Given I open a trip, when the page loads, then I see the dates, the meeting place and the spots left at the top of the screen. |
| Given I tap "Ci sto", then it works. | "It works" is not something you can see. | Given the trip has free spots, when I tap "Ci sto", then I see "Request sent". |
| When I search, the results load in less than one second. | You cannot check time on a mockup. | Given I type "ski" in the search, when I tap search, then I see only plans with "ski" in the title or the description. |
| Only normal cases. | Nobody thought about what can go wrong. | Add: Given the trip is full, when I open it, then I see "This trip is full" and I cannot tap "Ci sto". |

### From a story to criteria

Ask yourself two questions:

1. **What must the user see or do, so that the story works?** This gives you the normal cases.
2. **What can go wrong, or what if there is nothing yet?** This gives you the problem cases.

Then check: can you draw each criterion on a screen? If not, change it.

### Exercise

Story: "As a Student, I want to save a plan for later, so that I do not forget it while I decide."

Write two criteria: one normal case and one empty case.

One possible answer:

1. Given I see a plan in the feed, when I tap "Save", then the plan shows in my saved plans.
2. Given I have not saved any plan yet, when I open my saved plans, then I see a short message that explains how to save a plan.

## 3. Mockups

### What a mockup is

A mockup is a picture of one app screen. It shows what the user sees: text, images, buttons and where they are. It is **not** a working app. You do not need to write code.

- A **frame** is one phone screen. Our frames are 390 × 844 px.
- A **flow** is a group of frames in order, for example trip page, then "Request sent".

### How detailed

| Level | What it looks like | Tool | Good for |
|---|---|---|---|
| Sketch | Pen on paper: boxes, words and arrows | Paper and your phone camera | First ideas. Fast and cheap. |
| Wireframe | Grey boxes and real text, no colours | Figma, or paper with a ruler | Agreeing on what is on each screen. |
| Mockup | The colours, fonts and components of the design system | Figma, or an AI tool with a mockup brief | Final frames. |

You can deliver a sketch or wireframe as a draft frame. You can deliver a mockup as a final frame. Each frame is 390 × 844 px and shows one story. Name each frame with its story ID. Only final mockups must use the design system colours, fonts and components.

### From a story to frames

1. **Read the story and its acceptance criteria.**
2. **List the frames.** What does the user go through? Use up to one main action per frame. Most stories need one to three frames.
3. **Plan each frame from top to bottom.** Start with the most important thing. Write the real text, in English.
4. **Name each frame** with the story ID. Add a letter if there is more than one frame: `STU-ELE-01-A`, `STU-ELE-01-B`.
5. **Check the criteria.** Every acceptance criterion must show in at least one frame. If a criterion is a problem case, draw that state too, for example an empty list.
6. **Draw.** For a final mockup, use only the colours, fonts and components in [docs/design-system.md](../docs/design-system.md). Compare every frame with the criteria again.

Your AI can do steps 2 to 5 with you and write a mockup brief: a text description of each frame. See [the mockup brief skill](../skills/mockup-brief/SKILL.md).

### Tools

- **Paper.** Draw a phone rectangle about 6 cm wide and 13 cm tall. Use a dark pen. Take the photo from above, in good light. Put the photo in a 390 × 844 px frame.
- **Figma** (free account). Draw a frame and set its width to 390 and its height to 844 in the panel on the right. For a final mockup, use the colours, fonts and components in the design system.
- **An AI that makes images or screens.** Give it your mockup brief, the design system and the prompt in the mockup brief skill. AI tools often add things that are not in the brief. Check the result and remove them.

### Common mistakes

- A website or desktop layout. We design the mobile app only.
- Many main actions on one frame. Use up to one main action per frame. In a final mockup, use ci-sto-red for the main button if there is one.
- "Lorem ipsum" text. Use real example text in English.
- Colours, fonts or components in a final mockup that are missing from the design system.
- An acceptance criterion that no frame shows.
- A frame name that does not match the story ID.
- Photos or names of real people who did not agree. Use invented names.

### Checklist for each frame

- [ ] 390 × 844 px, mobile app.
- [ ] The frame shows one story.
- [ ] The name is the story ID, plus a letter if the story has more than one frame.
- [ ] Up to one main action. In a final mockup, the main button is ci-sto-red if there is one.
- [ ] Real example text in English.
- [ ] If this is a final mockup, it uses only colours, fonts and components from the design system.
- [ ] It shows the acceptance criteria it is for.
- [ ] The image is PNG or JPG, under 2 MB, named like the frame.

## 4. Three full examples

Each example goes from a real moment to a story, its criteria and its frames. Elena (`ELE`) is an invented author.

### Student

**Moment:** "At the end of the month I have little money. I scroll through many events that I cannot pay for."

```markdown
#### STU-ELE-02 · Find plans that fit my budget

- **User:** Student
- **Status:** Defined
- **Priority:** Should
- **Screen:** `STU-ELE-02-A`, `STU-ELE-02-B`, `STU-ELE-02-C`

**Story**
As a Student,
I want to see only plans under a price that I choose,
so that I do not waste time on plans I cannot pay for.

**Acceptance criteria**
1. Given I am on the plans feed, when I set a maximum price of 30 €, then I see only plans that cost 30 € or less.
2. Given a price filter is on, when I look at the feed, then I see which filter is on and I can remove it.
3. Given no plan costs 30 € or less, when I apply the filter, then I see "No plans under 30 €" and a button to change the filter.

**Notes and questions**
- Is the price per person or for the whole plan?
```

**Frames:** `STU-ELE-02-A` filter panel with the price, `STU-ELE-02-B` feed with the filtered plans, `STU-ELE-02-C` feed with no results.

### Organizer

**Moment:** "I organised a weekend at Lake Como. Two people I did not know asked to come. I knew nothing about them."

```markdown
#### ORG-ELE-01 · Decide who can join my trip

- **User:** Organizer
- **Status:** Defined
- **Priority:** Must
- **Screen:** `ORG-ELE-01-A`, `ORG-ELE-01-B`, `ORG-ELE-01-C`

**Story**
As an Organizer,
I want to see who asks to join my trip and which friends we have in common,
so that I can decide with confidence who comes.

**Acceptance criteria**
1. Given a Student taps "Ci sto" on my trip, when I open my trip, then I see their request with their name, their interests and our friends in common.
2. Given I see a request, when I tap "Accept", then the person moves to the list of people who joined and the spots left go down by one.
3. Given I see a request, when I tap "Decline", then the request leaves the list.
4. Given my trip is full, when I open a new request, then I see "Trip full" and I cannot accept it.

**Notes and questions**
- Can the Organizer write a reason when they decline?
```

**Frames:** `ORG-ELE-01-A` list of requests with spots left. In the "After Decline" state, the request is gone. `ORG-ELE-01-B` request with the person's name, interests and friends in common. It has "Accept" and "Decline" buttons. In the "Trip full" state, it shows "Trip full" and the "Accept" button is disabled. `ORG-ELE-01-C` list of people who joined. After you tap "Accept", the person is on the list and there is one fewer spot left.

### Partner

**Moment:** Imagine a small ski school near Bormio. In January it has free places on weekdays.

```markdown
#### PAR-ELE-01 · Publish an offer for student groups

- **User:** Partner
- **Status:** Defined
- **Priority:** Should
- **Screen:** `PAR-ELE-01-A`, `PAR-ELE-01-B`, `PAR-ELE-01-C`

**Story**
As a Partner,
I want to publish an offer for student groups with dates and a price,
so that I fill my free places on weekdays.

**Acceptance criteria**
1. Given I am logged in as a Partner, when I fill in the title, dates, description and price of an offer, then I see a preview of the offer as students will see it.
2. Given my offer is ready, when I tap "Publish", then the offer shows in my list of active offers.
3. Given I did not add the dates, when I tap "Publish", then I see "Add the dates of your offer" and the offer is not published.

**Notes and questions**
- Does Ci sto check a Partner before their first offer goes live?
```

**Frames:** `PAR-ELE-01-A` offer form with a "Missing dates" state. If you tap "Publish" without dates, the form shows "Add the dates of your offer". The offer stays unpublished. `PAR-ELE-01-B` preview as students will see it. `PAR-ELE-01-C` list of active offers with the new offer after you tap "Publish".

## 5. Words you will see

| Word | Meaning |
|---|---|
| Acceptance criteria | The yes-or-no checks that say when a story works. One is an acceptance criterion. |
| Component | A piece of a screen that you use again and again, for example a button or a card. Ours are in the design system. |
| Design system | Our colours, fonts, components and rules: [docs/design-system.md](../docs/design-system.md). |
| Empty state | What a screen shows when there is no content yet, for example no saved plans. |
| Flow | A group of frames in the order the user sees them. |
| Frame | One phone screen in a mockup: 390 × 844 px. |
| Happy path | The normal case, when everything works. |
| Mockup | A picture of an app screen. Not a working app. |
| Mockup brief | A text description of each frame, so that you or another AI can draw it. |
| Priority | Must, Should, Could or Won't. Some teams call this "MoSCoW". |
| Sketch | A quick drawing on paper. |
| Status | `Defined` if the feature is in the list in section 4 of the brief. `New idea` for anything else. |
| Story ID | The name of a story, for example `STU-ELE-01`. The rules are in [AGENTS.md](../AGENTS.md). |
| User story | A short text: who needs what, and why. |
| Wireframe | A simple screen with grey boxes and real text, without colours. |

## Next step

Open section 9 of [the brief](README.md), copy the coach prompt and start with your AI.
