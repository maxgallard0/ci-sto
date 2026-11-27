# Start here: your Ci sto deliverable

This page explains what you deliver, how to start, and how to upload your work. Read it from top to bottom once. It takes about 15 minutes.

You do not need work experience, design software or coding skills. You need your own experience as a student, a pen, and an AI assistant (ChatGPT, Claude, Gemini or another one).

## 1. What Ci sto is

Ci sto (Italian for "I'm in") is an app to find plans and people: trips and events, with recommendations from people you trust. These people are your friends, friends of your friends, and locals. Ci sto starts with students in Milan.

The website is frozen. We now design the **mobile app** only. You can see the old web demo at https://ci-sto-sigma.vercel.app for ideas, but do not copy its layout: it is a website, not an app.

## 2. What you deliver, and when

Every person delivers **one file** with their work, plus their mockup images, by **Wednesday 2 December 2026**. The team presents on **Thursday 3 December 2026**.

Your file has:

- **User stories** for all three users: Student, Organizer and Partner. Write at least three stories for each user. Everyone does all three users for now.
- **App mockups** for your stories: one phone screen or more for each story.
- **Open questions:** what is not clear or not decided yet.
- **Dependencies:** what your work needs from other people, from partners or from team decisions.

New ideas are welcome. If you think Ci sto needs something that is not in the list in section 4, for example splitting expenses or a shared photo library in the cloud, write it as a story with the status `New idea`.

## 3. The three users

| User | ID | Who |
|---|---|---|
| Student | `STU` | A university student who uses Ci sto to find plans and people. |
| Organizer | `ORG` | A student who creates and runs a plan. Every Organizer is a Student. Not every Student is an Organizer. |
| Partner | `PAR` | A business or group that works with Ci sto: a venue, hostel, ski school, brand, association or event team. |

Some words we use:

- **Plan:** a trip or an event that people can join.
- **"Ci sto":** the main button. The Student taps it to ask to join a plan.
- **Cerchia** (plural **Cerchie**): your circle of trusted people. It grows plan by plan.

## 4. What Ci sto already has

These features are **Defined**. Stories about them get the status `Defined`. Everything else is a `New idea`.

- Sign up and log in. Students use their university email. Partners have their own account.
- Student profile, with interests.
- Plans feed with trips and events, and filters.
- Plan page with the "Ci sto" button to join.
- Group chat for each plan.
- Cerchia: your circle of trusted people.
- Recommendations from trusted people: friends, friends of friends and locals.
- Organizer: create a plan, preview it, publish it and manage it.
- Partner: sign up, business profile and offers for students.
- Report a problem, and community rules.

You can write new stories about these features too. For example, how the chat works during a trip.

## 5. An example user story

```markdown
#### STU-ELE-01 · Join a trip a friend recommends

- **User:** Student
- **Status:** Defined
- **Priority:** Must
- **Screen:** `STU-ELE-01-A`, `STU-ELE-01-B`

**Story**
As a Student,
I want to see which friends recommend a trip,
so that I can decide to join even if I do not know the Organizer.

**Acceptance criteria**
1. Given a friend in my Cerchia went on this trip, when I open the trip, then I see their name and their recommendation.
2. Given I decide to join, when I tap "Ci sto", then the Organizer gets my request and I see that it was sent.
3. Given nobody in my Cerchia knows this trip, when I open it, then I see recommendations from locals, if there are any.

**Notes and questions**
- Do we show the price before the Student joins?
```

`ELE` are the first three letters of the author's first name (Elena). Use your own three letters. The full rules are in [skills/user-stories/SKILL.md](../skills/user-stories/SKILL.md).

## 6. Mockup rules

- App only. One phone frame is **390 × 844 px**.
- Name each frame with the ID of its story, for example `STU-ELE-01`. If a story needs more than one screen, add a letter: `STU-ELE-01-A`, `STU-ELE-01-B`.
- Use the colours, fonts and components in [docs/design-system.md](../docs/design-system.md).
- Paper sketches, Figma and AI-generated screens are all fine. A clear photo of a paper sketch is OK.
- Small images go in your folder: PNG or JPG, under 2 MB each, named like the frame, for example `STU-ELE-01-A.png`.
- Videos, renders, PDFs and Figma files go on a shared drive or in Figma. Add the link to your file. Check that the team can open it.

## 7. Your steps

1. **Get access.** Make a GitHub account if you do not have one. Send your GitHub username to Max. Accept the invitation email from GitHub.
2. **Create your branch** `team/<firstname>`, for example `team/elena`. See section 10, step A.
3. **Think on your own first.** Spend 20 minutes with the questions in section 8. Write short notes in any language.
4. **Talk with your AI.** Copy the prompt in section 9. Write your stories for all three users together with the AI.
5. **Draw your mockups.** One frame or more for each story. Your AI can help you describe each screen first, with [skills/mockup-brief/SKILL.md](../skills/mockup-brief/SKILL.md).
6. **Build your file.** Ask your AI to build your deliverable with [skills/deliverable/SKILL.md](../skills/deliverable/SKILL.md), or fill in [the template](_template.md) yourself.
7. **Upload and open a pull request** before Wednesday 2 December 2026. See section 10, steps B to D.

## 8. Questions to start with

Pick the questions that speak to you. You do not need to answer all of them. Your answers are the raw material for your stories.

**Warm-up**

- Think of the last trip or event you went to with other people. How did you find it? Who organised it?
- What almost stopped you from going?
- Who do you trust when you choose a plan: friends, friends of friends, locals, online reviews? Why?

**Student**

- How do you find plans today? Which apps, websites or group chats do you use?
- What do you need to know before you say "I'm in" to a plan?
- How do you feel about joining a plan where you know only one person, or nobody?
- What do you do after you join: chat, pay, pack, invite a friend?
- What makes you trust a recommendation from someone you do not know well?

**Organizer**

- Have you ever organised a trip or an event? What was the hardest part?
- How do you find people to join? How do you choose who can join?
- How do you collect money and keep track of who paid?
- What do you need to tell people before, during and after the plan?
- What happens when someone drops out at the last minute?

**Partner**

- Think of a hostel, a ski school or a bar near your university. Why would they work with Ci sto?
- What does a Partner need to show students: offers, prices, dates, photos?
- How does a Partner know that a group is real and will come?
- What does a Partner want to know after the plan?

**Our trips**

- Imagine our Amsterdam trip (5–8 December, tentative) planned in Ci sto. What happens first? What happens last?
- What must the app have so that the ski trip (8–10 January) can happen with it?
- During a trip we make short videos and photos for Instagram. How can the app help?

**New ideas**

- What do you do in other apps around a trip that Ci sto could do? For example splitting expenses or sharing photos.
- What annoys you most in group chats when you plan something?
- If you could add one feature to Ci sto, what would it be, and why?

## 9. A prompt to start with your AI

1. Download these files from the repository: [AGENTS.md](../AGENTS.md), this page, [_template.md](_template.md), the three skills ([user-stories](../skills/user-stories/SKILL.md), [mockup-brief](../skills/mockup-brief/SKILL.md), [deliverable](../skills/deliverable/SKILL.md)) and [docs/design-system.md](../docs/design-system.md). On each file page, use the download button ("Download raw file") at the top right of the file.
2. Open a new chat with your AI and attach the files.
3. Copy the prompt below, change the parts in `< >`, and send it.

```text
Hi. I am <first name>, a Strategic Design student on the Ci sto team.
I attached our project files: AGENTS.md, deliverables/README.md, deliverables/_template.md,
the skills user-stories, mockup-brief and deliverable, and docs/design-system.md.
Read them first and follow them.

Help me write my deliverable for Wednesday 2 December 2026:
- Ask me one question at a time. Use the questions in section 8 of deliverables/README.md.
- Do not invent facts. Write what we do not know as open questions.
- I write stories for all three users: Student, Organizer and Partner.
  Let's start with the <Student / Organizer / Partner>.
- My story IDs use the first three letters of my first name: <ABC>.
- Show me each story as a draft and wait for my OK before the next one.
- When my stories are ready, help me describe my mockups with the mockup brief.
- At the end, build my deliverable file from the template, in English.

I may write to you in <language>. Answer me in my language,
but write the final stories, briefs and file in English.
```

If your AI can open this repository by itself (for example Claude Code, Codex or Cursor), you do not need to attach the files. It reads `AGENTS.md` on its own.

## 10. Branches and pull requests

**Why branches?** Think of `main` as the team's shared binder. A **branch** is your own copy of the binder. You add your pages there without touching the shared binder. A **pull request** asks Max to add your pages to the shared binder. Max checks it and merges it. Nobody else writes in `main`.

You can do everything on the GitHub website. The repository is https://github.com/maxgallard0/ci-sto. In the steps below, change `elena` to your first name, in lowercase.

### A. Create your branch (once)

1. Open the repository on GitHub.
2. Above the list of files, click the branch menu. It says `main`.
3. Type `team/elena`.
4. Click **Create branch team/elena from main**.
5. Check that the branch menu now shows `team/elena`.

### B. Create your deliverable file

1. Check that the branch menu shows `team/elena`.
2. Click **Add file**, then **Create new file**.
3. In the name box, type `deliverables/elena/deliverable.md`. When you type `/`, GitHub creates the folder.
4. Paste the file your AI built, or paste [the template](_template.md) and fill it in.
5. Click **Commit changes**. Choose **Commit directly to the team/elena branch**. Write a short message, for example `Add Elena's deliverable`. Click **Commit changes** again.

### C. Upload your images

1. On your branch, open your folder `deliverables/elena/`.
2. Click **Add file**, then **Upload files**. Drag your images in. Each name must match its frame, for example `STU-ELE-01-A.png`.
3. Commit directly to the `team/elena` branch.

### D. Open a pull request

1. Click **Pull requests**, then **New pull request**.
2. Set **base** to `main` and **compare** to `team/elena`.
3. Click **Create pull request**. Title: `Deliverable: Elena`. In the description, write one line about what is inside.
4. Click **Create pull request** again.
5. Do not merge it yourself. Max merges it.

While your pull request is open, it updates by itself when you add or change files on your branch.

### E. Change your file later

Switch to your branch in the branch menu. Open your file, click the pencil icon, make your changes and commit directly to your branch.

If Max already merged your pull request, open a new pull request from your branch. Follow step D again.

### Common problems

- **I committed to `main` by mistake.** Tell Max right away. Do not try to fix it yourself.
- **I do not see "Create branch".** You do not have access yet. Send your GitHub username to Max and accept the invitation email.
- **I do not see my file.** Check the branch menu. Your work is on `team/<firstname>`, not on `main`, until Max merges it.

### Optional: the command line

Only if you already use Git. First check that it is installed:

```bash
git --version
```

If you see an error, use the website steps above. Otherwise:

```bash
git clone https://github.com/maxgallard0/ci-sto.git
cd ci-sto
git switch -c team/elena
```

Add your files in `deliverables/elena/`, then:

```bash
git add deliverables/elena
git commit -m "Add Elena's deliverable"
git push -u origin team/elena
```

Then open the pull request on GitHub, as in step D.

## 11. Before you deliver

- [ ] My file is `deliverables/<firstname>/deliverable.md`, on my branch `team/<firstname>`.
- [ ] The header has my name, role, date and type.
- [ ] The file has all five sections.
- [ ] I have at least three stories each for Student, Organizer and Partner.
- [ ] Every story has an ID, user, status, priority, screen, the story and 2 to 5 acceptance criteria.
- [ ] Every story has at least one frame, and every frame is named like its story.
- [ ] My images are under 2 MB and named like their frames. Big files are links that the team can open.
- [ ] My new ideas have the status `New idea`.
- [ ] No personal data of real people.
- [ ] Everything is in English.
- [ ] My pull request to `main` is open.

## 12. Help

- Questions about the brief or the project: ask Max.
- Questions about GitHub: ask in the team group chat, or ask Max.
- If your AI tells you something different from this page or [AGENTS.md](../AGENTS.md), follow this page.
