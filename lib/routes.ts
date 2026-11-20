// Every page of the platform in one place. Link with these, never with hard-coded paths.
export const routes = {
  landing: "/",
  plans: "/plans", // Plans this week (home after log in)
  howItWorks: "/how-it-works",
  signup: "/signup", // Become a member: email, then a code
  host: "/host", // Become a host: venue sign-up
  login: "/login",
  // Member area (Elena)
  aboutYou: "/join/about-you",
  interests: "/join/interests",
  findPlans: "/plans/all",
  chats: "/chats",
  whoYouMet: "/chats/who-you-met",
  cerchia: "/cerchia",
  report: "/report", // Report a problem with a plan or a person
  rules: "/rules", // Community rules
  // Organizer area (Melis)
  organize: "/organize",
  planDetails: "/organize/details",
  previewPublish: "/organize/preview",
  planLive: "/organize/live",
  managePlan: "/organize/manage",
} as const;

/** Detail page of one plan, by its id in lib/member-data.ts. */
export const planHref = (id: string) => `/plan/${id}`;
