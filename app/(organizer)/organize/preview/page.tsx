import type { Metadata } from "next";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { Nav } from "@/components/Nav";
import { PreviewView } from "@/components/organizer/PreviewView";
import { StepChips } from "@/components/organizer/StepChips";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Check your plan" };

export default function PreviewPublishPage() {
  return (
    <>
      <Nav active="Organize" />
      <main className="page">
        <div className="page-head">
          <div>
            <Link className="back" href={routes.planDetails}>
              <Icon name="chevronLeft" className="i-sm" />
              Back to details
            </Link>
            <p className="eyebrow">Organize a plan · step 2 of 3</p>
            <h1 className="title">Check your plan</h1>
          </div>
          <StepChips current={2} />
        </div>
        <PreviewView />
      </main>
    </>
  );
}
