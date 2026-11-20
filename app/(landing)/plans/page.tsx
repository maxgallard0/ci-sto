import type { Metadata } from "next";

import { PlansThisWeek } from "@/components/landing/PlansThisWeek";

export const metadata: Metadata = { title: "Plans this week" };

export default function PlansPage() {
  return <PlansThisWeek />;
}
