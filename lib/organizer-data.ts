// Organizer area (Melis): demo data and the plan draft model.
// No backend yet. The draft lives in the browser through lib/demo-store.

/**
 * Group size limits. The team still has to pick one range:
 * the app mockup and this flow use 6 to 12, the team report says 3 to 8.
 */
export const GROUP_MIN = 6;
export const GROUP_MAX = 12;

export const PLAN_TYPES = ["Social", "Pro", "Both"] as const;
export type PlanType = (typeof PLAN_TYPES)[number];

export const PRICE_KINDS = ["Free", "Under €10", "Set a price"] as const;
export type PriceKind = (typeof PRICE_KINDS)[number];

export const AUDIENCES = [
  "Very mixed",
  "Practise Italian",
  "English",
  "Design",
  "Engineering",
  "Beginners welcome",
  "Foodies",
] as const;

export interface Cover {
  name: string;
  sizeMb: number;
}

export interface PlanDraft {
  type: PlanType;
  title: string;
  description: string;
  date: string; // free text for the demo, e.g. "Sun 30 Nov 2026"
  start: string;
  end: string;
  venue: string;
  neighbourhood: string;
  size: number;
  priceKind: PriceKind;
  amount: string;
  payment: string;
  audience: string[];
  womenOnly: boolean;
  cover: Cover | null;
}

export const DEFAULT_DRAFT: PlanDraft = {
  type: "Social",
  title: "Sunday market and brunch",
  description:
    "Stroll the stalls together, then brunch at the market. Come hungry, leave with new friends. Italian and English welcome.",
  date: "Sun 30 Nov 2026",
  start: "11:00",
  end: "13:00",
  venue: "Mercato di Porta Genova",
  neighbourhood: "Porta Genova",
  size: 8,
  priceKind: "Set a price",
  amount: "€12",
  payment: "Pay on site, at the stall",
  audience: ["Very mixed", "Practise Italian"],
  womenOnly: false,
  cover: { name: "market-brunch.jpg", sizeMb: 2.4 },
};

export const ORGANIZER = { name: "Camila", field: "Design" };

export interface Person {
  initials: string;
  name: string;
  meta: string;
  avatar: 1 | 2 | 3 | 4 | 5;
}

export interface Request extends Person {
  extra: string;
}

export interface Attendee extends Person {
  confirmed: boolean;
}

export const REQUESTS: Request[] = [
  {
    initials: "MR",
    name: "Marta R.",
    meta: "Economics · Lisbon",
    extra: "Speaks Portuguese and English · learning Italian · 4 plans joined",
    avatar: 2,
  },
  {
    initials: "YT",
    name: "Yuki T.",
    meta: "Design · Osaka",
    extra: "Speaks Japanese and English · learning Italian · first plan",
    avatar: 5,
  },
];

export const ATTENDEES: Attendee[] = [
  { initials: "SC", name: "Sofia C.", meta: "Design · Bogotá", avatar: 3, confirmed: true },
  { initials: "AK", name: "Ahmed K.", meta: "Computer Eng. · Cairo", avatar: 2, confirmed: true },
  { initials: "LM", name: "Luca M.", meta: "Management · Palermo", avatar: 4, confirmed: true },
  { initials: "HW", name: "Hana W.", meta: "Architecture · Seoul", avatar: 5, confirmed: false },
  { initials: "JD", name: "Jonas D.", meta: "Physics · Hamburg", avatar: 1, confirmed: false },
];

/* ---------- Formatting helpers ---------- */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Parses "Sun 30 Nov 2026" (weekday optional). Returns null when it can't. */
export function parseDate(text: string): Date | null {
  const m = text.match(/(\d{1,2})\s+([A-Za-z]{3})[a-z]*\.?\s*(\d{4})?/);
  if (!m) return null;
  const month = MONTHS.findIndex((x) => x.toLowerCase() === m[2].toLowerCase());
  if (month < 0) return null;
  return new Date(m[3] ? Number(m[3]) : new Date().getFullYear(), month, Number(m[1]));
}

function fmt(d: Date) {
  return `${DAYS[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]}`;
}

function daysBefore(text: string, n: number): Date | null {
  const d = parseDate(text);
  if (!d) return null;
  d.setDate(d.getDate() - n);
  return d;
}

/** "Sun 30 Nov" without the year. */
export function shortDate(draft: PlanDraft) {
  const d = parseDate(draft.date);
  return d ? fmt(d) : draft.date;
}

export function whenLine(draft: PlanDraft) {
  return `${shortDate(draft)} · ${draft.start} to ${draft.end}`;
}

/** The group chat opens 3 days before the plan. */
export function chatOpens(draft: PlanDraft) {
  const d = daysBefore(draft.date, 3);
  return d ? fmt(d) : "3 days before the plan";
}

/** Everyone confirms 24 hours before: "Sat 29, 11:00". */
export function confirmBy(draft: PlanDraft) {
  const d = daysBefore(draft.date, 1);
  return d ? `${DAYS[d.getDay()]} ${d.getDate()}, ${draft.start}` : `24 hours before`;
}

function lowerFirst(s: string) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

/** "€12 · pay on site" (short) or "€12 · pay on site, at the stall" (full). */
export function priceLine(draft: PlanDraft, full = false) {
  if (draft.priceKind !== "Set a price") return draft.priceKind;
  const pay = full ? draft.payment : draft.payment.split(",")[0];
  return pay ? `${draft.amount} · ${lowerFirst(pay)}` : draft.amount;
}

export function vibe(draft: PlanDraft) {
  return draft.audience.map(lowerFirst).join(", ");
}

export function listWithAnd(items: string[]) {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

export function slug(title: string) {
  return (
    title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "my-plan"
  );
}
