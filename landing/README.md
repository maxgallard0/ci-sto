# Landing (Cami · `feature/landing`)

Static HTML/CSS/JS version of the Figma mockup "03 · Web v2": entry page with sign up / log in, and the member home "Plans this week".

- `index.html`: entry. Become a member (needs an `@mail.polimi.it` email), Become a host, Log in.
- `home.html`: personalised home with the featured "For you" plan, filters, "Ci sto" and more plans this week.
- `styles.css`: styles. The `:root` tokens follow the team report design system; move them to the shared tokens file once the team agrees on it.
- `app.js`: demo interactions (no backend yet; state is kept in the browser).
- `assets/`: photos (AI-generated placeholders, replace with real ones).

## Run it

Open `landing/index.html` in the browser, or serve the folder:

```bash
npx serve landing
```

Desktop and tablet layouts are not defined in the report yet: the breakpoints in `styles.css` are a proposal to agree with the team.
