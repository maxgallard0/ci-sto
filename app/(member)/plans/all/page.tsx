import type { Metadata } from "next";

import { FindPlansView } from "@/components/member/FindPlansView";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = { title: "Find your plans" };

export default function FindPlansPage() {
  return (
    <>
      <Nav active="Find your plans" />
      <FindPlansView />
    </>
  );
}
