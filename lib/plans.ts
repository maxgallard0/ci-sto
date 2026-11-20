// Demo plans shown on "Plans this week". No backend yet: this file is the data source.

export type PlanTag = "social" | "pro" | "outdoor" | "cheap";
export type PlanKind = "Social" | "Pro" | "Partner" | "Outdoor";

export type Plan = {
  id: string;
  title: string;
  kind: PlanKind;
  when: string;
  price: string;
  going: number;
  capacity: number;
  image: string;
  tags: PlanTag[];
};

export const featuredPlan = {
  id: "dolomites-seceda",
  title: "Weekend in the Dolomites · Seceda",
  kind: "Outdoor" as PlanKind,
  reason: "For you · you like trekking",
  price: "€95 · train + rifugio",
  when: "Sat 22 – Sun 23 Nov",
  meet: "Meet at Milano Centrale · 7:10",
  going: 5,
  capacity: 8,
  image: "/landing/dolomites.jpg",
  imageAlt: "Students hiking on the Seceda ridge in the Dolomites",
  vibe: "Vibe: hikers of every level, 4 nationalities, English and Italian. Hosted by Marco, Engineering.",
  organizer: "Marco",
  tags: ["outdoor"] as PlanTag[],
  people: [
    { initials: "MA", tone: 2 },
    { initials: "EL", tone: 5 },
    { initials: "JO", tone: 1 },
    { initials: "IR", tone: 4 },
  ],
};

export const plansThisWeek: Plan[] = [
  {
    id: "aperitivo-navigli",
    title: "Aperitivo on the Navigli",
    kind: "Social",
    when: "Today · 19:00",
    price: "Under €10",
    going: 7,
    capacity: 10,
    image: "/landing/aperitivo.jpg",
    tags: ["social", "cheap"],
  },
  {
    id: "pitch-night-polihub",
    title: "Startup pitch night · PoliHub",
    kind: "Pro",
    when: "Fri 21 Nov · 18:30",
    price: "Free",
    going: 9,
    capacity: 12,
    image: "/landing/pitch-night.jpg",
    tags: ["pro"],
  },
  {
    id: "language-swap-lumen",
    title: "Language swap at Bar Lumen",
    kind: "Partner",
    when: "Sun 23 Nov · 17:00",
    price: "Spritz €5",
    going: 4,
    capacity: 10,
    image: "/landing/language-swap.jpg",
    tags: ["social", "cheap"],
  },
];

export const kindBadge: Record<PlanKind, string> = {
  Social: "badge-ink",
  Outdoor: "badge-ink",
  Pro: "badge-info",
  Partner: "badge-soft",
};
