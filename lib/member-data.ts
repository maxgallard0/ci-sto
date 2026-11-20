// Demo data for the member area (Elena / Camila's view). No backend yet: this file is the data source.

export type ChipItem = { label: string; pressed: boolean; static?: boolean };

export type AvatarTone = "a1" | "a2" | "a3" | "a4" | "a5" | "aw";

export type PhotoClass = "ph-ap" | "ph-pitch" | "ph-dol" | "ph-lumen" | "ph-jazz" | "ph-bike";

export type BadgeClass = "b-ink" | "b-blue" | "b-lime" | "b-soft" | "b-surface";

// M1 · About you
export const languages: ChipItem[] = [
  { label: "Spanish · Native", pressed: true },
  { label: "English · Fluent", pressed: true },
  { label: "Italian · Learning", pressed: true },
  { label: "Portuguese", pressed: false },
  { label: "French", pressed: false },
];

// M2 · What you're into
export const goals: ChipItem[] = [
  { label: "Make friends", pressed: true },
  { label: "Networking", pressed: true },
  { label: "Activity partners", pressed: false },
  { label: "Practise Italian", pressed: true },
  { label: "Meet locals", pressed: false },
];

export const fieldsOfStudy: ChipItem[] = [
  { label: "Design", pressed: true },
  { label: "Engineering", pressed: false },
  { label: "Architecture", pressed: false },
  { label: "Management", pressed: false },
  { label: "Data Science", pressed: false },
];

export const interests: ChipItem[] = [
  { label: "Aperitivo", pressed: true },
  { label: "Hikes", pressed: true },
  { label: "Startup nights", pressed: true },
  { label: "Sport", pressed: false },
  { label: "Culture", pressed: false },
  { label: "Company visits", pressed: false },
  { label: "Food", pressed: true },
  { label: "Music", pressed: false },
  { label: "Ceramics", pressed: true },
];

export const levels: { activity: string; chips: ChipItem[] }[] = [
  {
    activity: "Hikes",
    chips: [
      { label: "Beginner", pressed: false },
      { label: "Intermediate", pressed: true },
      { label: "Advanced", pressed: false },
    ],
  },
  {
    activity: "Ceramics",
    chips: [
      { label: "Beginner", pressed: false },
      { label: "Intermediate", pressed: false },
      { label: "Advanced", pressed: true },
    ],
  },
];

export const budgets: ChipItem[] = [
  { label: "Free", pressed: true },
  { label: "Under €10", pressed: true },
  { label: "Under €25", pressed: false },
  { label: "Any price", pressed: false },
];

export const matchingPlans: { photo: PhotoClass; badge: BadgeClass; kind: string; title: string; meta: string }[] = [
  { photo: "ph-dol", badge: "b-ink", kind: "Outdoor", title: "Weekend in the Dolomites · Seceda", meta: "Sat 22 – Sun 23 Nov · €95" },
  { photo: "ph-ap", badge: "b-ink", kind: "Social", title: "Aperitivo on the Navigli", meta: "Today · 19:00 · under €10" },
  { photo: "ph-pitch", badge: "b-blue", kind: "Pro", title: "Startup pitch night · PoliHub", meta: "Fri 21 Nov · 18:30 · free" },
];

// M3 · Find your plans
export const filterGroups: { legend: string; chips: ChipItem[] }[] = [
  { legend: "Type", chips: [{ label: "Social", pressed: true }, { label: "Pro", pressed: true }, { label: "Outdoor", pressed: false }] },
  { legend: "Budget", chips: [{ label: "Free", pressed: true }, { label: "Under €10", pressed: true }, { label: "Any price", pressed: false }] },
  {
    legend: "When",
    chips: [
      { label: "Today", pressed: false },
      { label: "This week", pressed: true },
      { label: "Weekend", pressed: false },
      { label: "Pick a date", pressed: false },
    ],
  },
  { legend: "Language", chips: [{ label: "English", pressed: true }, { label: "Italian", pressed: true }, { label: "Spanish", pressed: false }] },
  {
    legend: "Field of study",
    chips: [
      { label: "Any", pressed: true },
      { label: "Design", pressed: false },
      { label: "Engineering", pressed: false },
      { label: "Architecture", pressed: false },
    ],
  },
  {
    legend: "Neighbourhood",
    chips: [
      { label: "Bovisa", pressed: true },
      { label: "Isola", pressed: true },
      { label: "Navigli", pressed: false },
      { label: "Città Studi", pressed: false },
    ],
  },
  { legend: "Group size", chips: [{ label: "3 to 5", pressed: false }, { label: "6 to 8", pressed: true }, { label: "9 or more", pressed: false }] },
];

export const filterSwitches: { title: string; helper: string; on: boolean }[] = [
  { title: "Meet locals", helper: "Plans with Italian students who live here", on: true },
  { title: "Only plans with spots left", helper: "Hide full plans", on: true },
];

export const activeFilters = ["Under €10", "Bovisa", "Isola", "6 to 8"];

export type MemberPlan = {
  id: string;
  about: string;
  host: string;
  photo: PhotoClass;
  badge: BadgeClass;
  kind: string;
  title: string;
  when: string;
  where: string;
  fill: number;
  avatars: string[];
  price: string;
};

export const plans: MemberPlan[] = [
  { id: "aperitivo-navigli", about: "Spritz and stuzzichini by the canal. Small group, half Italian and half international, so everyone practises a bit.", host: "Lucía P., Design", photo: "ph-ap", badge: "b-ink", kind: "Social", title: "Aperitivo on the Navigli", when: "Today · 19:00", where: "Alzaia Naviglio Grande", fill: 70, avatars: ["LU", "MA", "SO"], price: "Under €10 · 7 of 10 going" },
  { id: "pitch-night-polihub", about: "Five student teams pitch in 5 minutes each, then questions and drinks on the terrace. Good first look at how startups present.", host: "Giulia R., Civil Engineering", photo: "ph-pitch", badge: "b-blue", kind: "Pro", title: "Startup pitch night · PoliHub", when: "Fri 21 Nov · 18:30", where: "PoliHub, Bovisa", fill: 75, avatars: ["JO", "IR", "AK"], price: "Free · 9 of 12 going" },
  { id: "dolomites-seceda", about: "Train to Ortisei, cable car up and the ridge walk to Seceda. One night in a rifugio. Hikers of every level.", host: "Marco R., Engineering", photo: "ph-dol", badge: "b-ink", kind: "Outdoor", title: "Weekend in the Dolomites · Seceda", when: "Sat 22 – Sun 23 Nov", where: "Milano Centrale · 7:10", fill: 62, avatars: ["MA", "EL", "JO"], price: "€95 · 5 of 8 going" },
  { id: "language-swap-lumen", about: "Half an hour in Italian, half an hour in English, then whatever you like. Partner venue: Ci Sto members get the spritz for €5.", host: "Bar Lumen · partner", photo: "ph-lumen", badge: "b-lime", kind: "Partner", title: "Language swap at Bar Lumen", when: "Sun 23 Nov · 17:00", where: "Bar Lumen, Isola", fill: 40, avatars: ["SC", "TB"], price: "Spritz €5 · 4 of 10 going" },
  { id: "jazz-isola", about: "Live trio in a small club in Isola. Free entry before 22:00. We meet outside and go in together.", host: "Priya J., Data Science", photo: "ph-jazz", badge: "b-ink", kind: "Social", title: "Free jazz night in Isola", when: "Thu 27 Nov · 21:00", where: "Via Borsieri, Isola", fill: 50, avatars: ["PJ", "LM"], price: "Free · 3 of 6 going" },
  { id: "bike-martesana", about: "Easy 25 km along the canal to Cassina de' Pomm and back. BikeMi or your own bike. Coffee stop halfway.", host: "Ahmed K., Computer Engineering", photo: "ph-bike", badge: "b-ink", kind: "Outdoor", title: "Bike ride along the Martesana", when: "Sat 29 Nov · 10:00", where: "Bovisa campus gate", fill: 25, avatars: ["AK"], price: "Free · 2 of 8 going" },
];

// M4 · Chats
export type ChatRow = {
  title: string;
  sub: string;
  when: string;
  photo?: PhotoClass;
  background?: string;
  unread?: number;
  current?: boolean;
  toWhoYouMet?: boolean;
  /** Plan behind the chat, for "See plan details". */
  planId?: string;
  /** The chat is not open yet: shows when it opens instead of the composer. */
  opensOn?: string;
};

export const chatSections: { label: string; rows: ChatRow[] }[] = [
  {
    label: "Open now",
    rows: [
      { photo: "ph-pitch", title: "Startup pitch night · PoliHub", sub: "Confirm by today 18:30", when: "18:42", current: true, planId: "pitch-night-polihub" },
      { photo: "ph-ap", title: "Aperitivo on the Navigli", sub: "Luca: Happy to help with the Italian", when: "18:20", unread: 3, planId: "aperitivo-navigli" },
      { photo: "ph-dol", title: "Weekend in the Dolomites", sub: "Marco: train tickets are in the plan", when: "Yesterday", planId: "dolomites-seceda" },
    ],
  },
  {
    label: "Opening soon",
    rows: [
      { photo: "ph-jazz", title: "Free jazz night in Isola", sub: "3 going · chat opens Mon 24 Nov", when: "Thu", planId: "jazz-isola", opensOn: "Mon 24 Nov" },
      { photo: "ph-bike", title: "Bike ride along the Martesana", sub: "2 going · chat opens Wed 26 Nov", when: "Sat", planId: "bike-martesana", opensOn: "Wed 26 Nov" },
    ],
  },
  {
    label: "Your Cerchia",
    rows: [{ background: "var(--av2)", title: "Ahmed K.", sub: "Met in the Dolomites", when: "Mon" }],
  },
  {
    label: "Archived",
    rows: [{ background: "var(--surface-2)", title: "Dolomites weekend · 12 Oct", sub: "Who did you click with? Pick them now", when: "Done", toWhoYouMet: true }],
  },
];

export const messages: { initials?: string; tone?: AvatarTone; author?: string; text: string; mine?: boolean }[] = [
  { initials: "GR", tone: "a1", author: "Giulia R. · organizer", text: "Hi all! Five teams pitch, then drinks on the terrace. Bring questions, not business cards." },
  { initials: "AK", tone: "a2", author: "Ahmed K.", text: "Ahmed, Computer Engineering. I'm building a tool for student housing, happy to get feedback." },
  { initials: "SC", tone: "a3", author: "Sofia C.", text: "Sofia, Design. Here to learn how pitches work. And to practise my Italian!" },
  { mine: true, text: "Camila, Strategic Design. I want to see how design fits early-stage startups. See you tomorrow!" },
];

export const goers: { initials: string; tone: AvatarTone; name: string; meta: string; confirmed: boolean }[] = [
  { initials: "GR", tone: "a1", name: "Giulia R.", meta: "Civil Engineering · organizer", confirmed: true },
  { initials: "AK", tone: "a2", name: "Ahmed K.", meta: "Computer Engineering", confirmed: true },
  { initials: "SC", tone: "a3", name: "Sofia C.", meta: "Design", confirmed: false },
  { initials: "LM", tone: "a4", name: "Luca M.", meta: "Management", confirmed: true },
  { initials: "DV", tone: "a3", name: "Dev V.", meta: "Computer Science", confirmed: true },
  { initials: "JO", tone: "a2", name: "Jonas O.", meta: "Mechanical Engineering", confirmed: false },
  { initials: "IR", tone: "a5", name: "Irene B.", meta: "Management Engineering", confirmed: true },
  { initials: "PJ", tone: "a1", name: "Priya J.", meta: "Data Science", confirmed: false },
  { initials: "CA", tone: "a3", name: "Camila S.", meta: "Strategic Design · you", confirmed: true },
];

// First messages of the other open chats, so switching chats shows a real conversation.
export const otherChats: Record<string, { initials?: string; tone?: AvatarTone; author?: string; text: string; mine?: boolean }[]> = {
  "Aperitivo on the Navigli": [
    { initials: "LU", tone: "a4", author: "Lucía P. · organizer", text: "Table is booked at 19:00 by the second bridge. Look for the yellow umbrella." },
    { initials: "LM", tone: "a4", author: "Luca M.", text: "Happy to help with the Italian" },
  ],
  "Weekend in the Dolomites": [
    { initials: "MR", tone: "a5", author: "Marco R. · organizer", text: "Train tickets are in the plan. Bring layers, it is cold on the ridge." },
  ],
  "Ahmed K.": [{ initials: "AK", tone: "a2", author: "Ahmed K.", text: "Great hike! Up for the bike ride on the Martesana?" }],
};

// M5 · Who did you click with
export type MetPerson = { initials: string; tone: AvatarTone; name: string; meta: string; shared: string; added: boolean };

export const metPeople: MetPerson[] = [
  { initials: "AK", tone: "a2", name: "Ahmed K.", meta: "Computer Engineering · Cairo", shared: "Shared 3 plans", added: true },
  { initials: "SC", tone: "a3", name: "Sofia C.", meta: "Design · Bogotá", shared: "Shared 2 plans", added: true },
  { initials: "LM", tone: "a4", name: "Luca M.", meta: "Management · Palermo", shared: "First plan together", added: false },
  { initials: "TB", tone: "a5", name: "Tomás B.", meta: "Architecture · Lisbon", shared: "First plan together", added: false },
  { initials: "PJ", tone: "a1", name: "Priya J.", meta: "Data Science · Pune", shared: "First plan together", added: false },
  { initials: "MR", tone: "a5", name: "Marco R.", meta: "Engineering · organizer", shared: "Shared 2 plans", added: false },
];

export const initialRating = 4;

// M6 · Your Cerchia
export const ringAvatars: { initials: string; tone: AvatarTone; left: number; top: number; inner: boolean }[] = [
  { initials: "AK", tone: "a2", left: 310, top: 140, inner: true },
  { initials: "SC", tone: "a3", left: 457, top: 225, inner: true },
  { initials: "MR", tone: "a5", left: 457, top: 395, inner: true },
  { initials: "GR", tone: "a1", left: 310, top: 480, inner: true },
  { initials: "LU", tone: "a4", left: 163, top: 395, inner: true },
  { initials: "EL", tone: "a5", left: 163, top: 225, inner: true },
  { initials: "LM", tone: "a4", left: 445, top: 76, inner: false },
  { initials: "TB", tone: "aw", left: 564, top: 218, inner: false },
  { initials: "PJ", tone: "a1", left: 564, top: 402, inner: false },
  { initials: "JO", tone: "a2", left: 445, top: 544, inner: false },
  { initials: "IR", tone: "a3", left: 263, top: 576, inner: false },
  { initials: "KE", tone: "a4", left: 103, top: 484, inner: false },
  { initials: "SO", tone: "a5", left: 40, top: 310, inner: false },
  { initials: "MA", tone: "a2", left: 103, top: 136, inner: false },
  { initials: "DV", tone: "a3", left: 263, top: 44, inner: false },
];

export const addedYou: { initials: string; tone: AvatarTone; name: string; from: string }[] = [
  { initials: "LM", tone: "a4", name: "Luca M.", from: "From Aperitivo on the Navigli" },
  { initials: "DV", tone: "a3", name: "Dev V.", from: "From Startup pitch night" },
];

export const innerRing: { initials: string; tone: AvatarTone; name: string; meta: string; kind: "Social" | "Pro" }[] = [
  { initials: "AK", tone: "a2", name: "Ahmed K.", meta: "3 plans together · last: Dolomites", kind: "Social" },
  { initials: "SC", tone: "a3", name: "Sofia C.", meta: "2 plans · practising Italian", kind: "Social" },
  { initials: "MR", tone: "a5", name: "Marco R.", meta: "3 plans · hikes, Engineering", kind: "Social" },
  { initials: "GR", tone: "a1", name: "Giulia R.", meta: "3 plans · startup nights", kind: "Pro" },
  { initials: "LU", tone: "a4", name: "Lucía P.", meta: "4 plans · aperitivo, Design", kind: "Social" },
];

export const outerRing: { initials: string; tone: AvatarTone; name: string; meta: string; kind: "Social" | "Pro" }[] = [
  { initials: "LM", tone: "a4", name: "Luca M.", meta: "1 plan · Aperitivo on the Navigli", kind: "Social" },
  { initials: "TB", tone: "aw", name: "Tomás B.", meta: "1 plan · Dolomites", kind: "Social" },
  { initials: "PJ", tone: "a1", name: "Priya J.", meta: "2 plans · jazz, Data Science", kind: "Social" },
  { initials: "JO", tone: "a2", name: "Jonas O.", meta: "1 plan · Startup pitch night", kind: "Pro" },
  { initials: "IR", tone: "a3", name: "Irene B.", meta: "2 plans · pitch nights", kind: "Pro" },
  { initials: "KE", tone: "a4", name: "Kenji E.", meta: "1 plan · Language swap", kind: "Social" },
  { initials: "SO", tone: "a5", name: "Sophie L.", meta: "1 plan · Aperitivo", kind: "Social" },
  { initials: "MA", tone: "a2", name: "Mateo A.", meta: "2 plans · Dolomites, bike", kind: "Social" },
  { initials: "DV", tone: "a3", name: "Dev V.", meta: "1 plan · Startup pitch night", kind: "Pro" },
];

export const notifications: { text: string; when: string; href: string }[] = [
  { text: "Giulia approved you for Startup pitch night. Confirm by 18:30.", when: "18:42", href: "/chats" },
  { text: "3 new messages in Aperitivo on the Navigli.", when: "18:20", href: "/chats" },
  { text: "Luca M. added you to his Cerchia.", when: "Mon", href: "/cerchia" },
];
