import type { Metadata } from "next";

import { Entry } from "@/components/landing/Entry";

export const metadata: Metadata = {
  title: { absolute: "Ci Sto · Find your plans. Find your people." },
};

export default function LandingPage() {
  return <Entry />;
}
