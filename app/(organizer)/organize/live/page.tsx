import type { Metadata } from "next";

import { Nav } from "@/components/Nav";
import { LiveView } from "@/components/organizer/LiveView";

export const metadata: Metadata = { title: "Your plan is live" };

export default function PlanLivePage() {
  return (
    <>
      <Nav active="Organize" />
      <main className="page" style={{ alignItems: "center", paddingTop: 72 }}>
        <LiveView />
      </main>
    </>
  );
}
