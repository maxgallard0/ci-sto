import type { Metadata } from "next";

import { Nav } from "@/components/Nav";
import { ManageView } from "@/components/organizer/ManageView";

export const metadata: Metadata = { title: "Manage plan" };

export default function ManagePlanPage() {
  return (
    <>
      <Nav active="Organize" />
      <main className="page">
        <ManageView />
      </main>
    </>
  );
}
