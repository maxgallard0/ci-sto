# Ci sto design system: mobile app

Use this page for every app mockup. One phone frame is **390 × 844 px**. The team designs the mobile app only. The website is frozen.

## Where the values come from

- The colour, font and radius tokens come from `styles/tokens.css` in the frozen web demo. Follow the component sizes on this page for mobile mockups.
- In Figma, create these colours and text styles once and reuse them. Use the token names on this page.
- Only Max changes this page or the tokens. If you need a value that is missing, write it as an open question in your deliverable.

## Brand

- **Name:** Ci sto. The main button says "Ci sto".
- **Logo:** a wordmark. A hand makes the "C" with an OK gesture, followed by "i STO". It is blue on light backgrounds and lime on dark backgrounds. The logo files are in [docs/brand/](brand/README.md): SVG for Figma, PNG for slides and chats.
- **Interface language:** English, with the Italian brand words "Ci sto" and "Cerchia".
- **Tone:** friendly and direct, student to student. Short sentences.

## Colour tokens

| Token | CSS variable | Hex | Use |
|---|---|---|---|
| blue | `--blue` | `#2347FF` | Links, secondary buttons, send button, focus ring, timeline dots |
| blue-dark | `--blue-dark` | `#1A33C2` | Pressed links, text on blue-tint |
| blue-tint | `--blue-tint` | `#E3E8FF` | Status messages, "vibe" note, info badges |
| lime | `--lime` | `#CBEF4A` | Accent badges, ice-breaker card, active tab icon, logo on dark |
| lime-tint | `--lime-tint` | `#EEF9C8` | Soft badges, with text in lime-ink |
| lime-ink | `--lime-ink` | `#3F5200` | Text on lime-tint |
| ci-sto-red | `--ci-sto-red` | `#D63A24` | The main action only, such as the "Ci sto" button |
| ink | `--ink` | `#16131D` | Main text, dark cards, selected chips |
| cream | `--cream` | `#FFF7F0` | Screen background |
| white | `--white` | `#FFFFFF` | Cards, tab bar, bottom bars |
| muted | `--muted` | `#5E5866` | Secondary text, labels, placeholders |
| line | `--line` | `#E4DCE6` | Dividers and card borders |
| surface-2 | `--surface-2` | `#F1ECF3` | Icon circles, back button on white |
| field-border | `--field-border` | `#8C8294` | Input and chip borders |
| success | `--success` | `#3F7A1F` | Positive status text, such as "Open until 19:30" |

Avatar and placeholder palette (`--avatar-1` to `--avatar-5`): `#F7B9A8`, `#FFD27A`, `#B9AEFF`, `#D9F27F`, `#9ED9C9`.

## Typography

Both fonts are free on Google Fonts.

- **Bricolage Grotesque** (weights 600 and 800) for screen titles and big numbers. Titles use weight 800 and letter-spacing −0.5px.
- **Figtree** (weights 400 to 800) for all other text.

| Role | Size | Weight |
|---|---|---|
| Screen title (Bricolage) | 28–30px | 800 |
| Big number (Bricolage) | 26px | 800 |
| Card title | 19px | 800 |
| Section title | 17–18px | 700–800 |
| Button | 16–17px | 800 |
| Body | 14–15px | 400–700 |
| Secondary text, chips, badges | 13px | 700 |
| Eyebrow label (uppercase, +0.3px tracking) | 12–13px | 800 |
| Tab bar label | 11px | 600, 800 when active |

## Radius and spacing

- **Pill, 999px** (`--radius-pill`): buttons, chips, badges, chat input.
- **22px** (`--radius-lg`): large cards, such as the member card or a featured place.
- **18–20px** (`--radius-md` is 20px): cards and sections.
- **14–16px** (`--radius-sm` is 16px): small cards, notices, square avatars, inputs.
- **Circle:** avatars and icon buttons.
- **Spacing:** 20px screen padding (16px in chat), 48px top inset for the status bar, gaps of 6, 8, 10, 12, 16 and 18px.

## Components

Use a touch target of at least 44 × 44 px for every control. Icons and avatars can be smaller within that area.

- **Main button ("Ci sto"):** 56px high, pill, ci-sto-red, white text 17px/800, check icon. Up to one per screen.
- **Secondary button:** 48px high, pill, blue, white text 15px/800.
- **Text button:** touch target at least 44 × 44 px, transparent, blue text 15px/700.
- **Filter chip:** at least 44 × 44 px, pill, 1.5px field-border, white. Selected: ink fill, white text.
- **Badge:** 13px/700, padding 6 × 10px, pill. Colour pairs: ink/white, lime/ink, blue-tint/blue-dark, lime-tint/lime-ink.
- **Card:** white, radius 18–22px, optional 1.5px line border. Highlighted card: 1.5px blue border.
- **Dark card:** ink background, white text, secondary text in line.
- **Info row:** 36px icon circle in surface-2, label 12px muted, value 15px/700, 1px line divider.
- **Notice:** blue-tint box, radius 14–16px, blue-dark text.
- **Back button:** 44px circle, white on cream, surface-2 on white.
- **Text input:** 48–52px high, 1.5px field-border, 16px text.
- **Chat bubble:** radius 18px, max width 260px. Other people's messages are white. Mine are blue with white text. Avatars 32px.
- **Avatar stack:** 40px circles with initials (800), overlap −10px, 2px cream border. If users can tap the stack, give it a touch target of at least 44 × 44 px.
- **Tab bar:** 84px, white, top line border, up to five tabs. Each tab has a touch target of at least 44 × 44 px. Icons 24px, label 11px. Active tab: ink text and lime icon fill. The old mockup used Plans, Chats, Host, Cerchia and Profile. The final tabs are not decided: propose yours in your deliverable.
- **Bottom action bar:** 100px, white, top line border, holds the main button.
- **Icons:** line icons, 24px, stroke 2, round caps and joins.

## Motion

Motion is optional in mockups. If you show it in a prototype or a video:

- Animate only position, scale and opacity.
- Easing: `--ease-out` is `cubic-bezier(.22, 1, .36, 1)` for most movement. `--ease-spring` is `cubic-bezier(.34, 1.56, .64, 1)` for small "pop" moments, such as tapping "Ci sto".
- Keep it short and calm. The app turns animation off when the phone asks for reduced motion.

## Accessibility

- Touch targets at least 44 × 44 px.
- Text needs a contrast of at least 4.5:1 with its background. The colour pairs in the components above meet this. If you combine colours in a new way, check the contrast.
- Icon-only buttons need a label for screen readers. Write it in your mockup brief.
- Focus ring for keyboard users: 3px blue outline, 2px offset.

## Not defined yet

- Dark mode.
- The final tabs of the tab bar.

If your work needs one of these, propose an option in your deliverable as an open question.

## Rules

- Use only the values on this page. Do not invent new colours, fonts or sizes.
- If something you need is missing, write it as an open question instead of inventing it.
- Use ci-sto-red only for the main action.
- Use these components before you design a new one. If you design a new one, say so in your deliverable.
