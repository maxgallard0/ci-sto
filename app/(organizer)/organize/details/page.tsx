import type { Metadata } from "next";

import { Nav } from "@/components/Nav";
import { PlanDetailsForm } from "@/components/organizer/PlanDetailsForm";
import { StepChips } from "@/components/organizer/StepChips";

export const metadata: Metadata = { title: "Plan details" };

export default function PlanDetailsPage() {
  return (
    <>
      <Nav active="Organize" />
      <main className="page">
        <div className="page-head">
          <div>
            <p className="eyebrow">Organize a plan · step 1 of 3</p>
            <h1 className="title">Plan details</h1>
          </div>
          <StepChips current={1} />
        </div>
        <PlanDetailsForm />
      </main>
    </>
  );
}
