import type { Metadata } from "next";

import { Icon } from "@/components/Icon";
import { InterestsForm } from "@/components/member/InterestsForm";
import { OnbBar, StepTabs } from "@/components/member/Onboarding";
import { matchingPlans } from "@/lib/member-data";

export const metadata: Metadata = { title: "What you're into" };

export default function InterestsPage() {
  return (
    <>
      <OnbBar step={2} />
      <main className="page">
        <div className="page-head">
          <div>
            <p className="eyebrow">Set up your profile · step 2 of 2</p>
            <h1 className="title">What are you here for?</h1>
            <p className="lead">We use this to pick plans for you. Social and Pro plans sit in the same feed.</p>
          </div>
          <StepTabs step={2} />
        </div>
        <div className="cols-member">
          <InterestsForm />
          <aside className="stack">
            <p className="eyebrow">Plans that match, live</p>
            <div className="card card-blue">
              <div className="row" style={{ gap: 12, alignItems: "baseline" }}>
                <span className="big-blue">14</span>
                <b>plans this week match what you picked</b>
              </div>
              {matchingPlans.map((p) => (
                <div className="row" style={{ gap: 14 }} key={p.title}>
                  <span className={`thumb ${p.photo}`}></span>
                  <div className="stack" style={{ gap: 4 }}>
                    <span className={`badge ${p.badge}`}>{p.kind}</span>
                    <b>{p.title}</b>
                    <span className="helper">{p.meta}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="notice row">
              <Icon name="sparkle" />
              Your feed mixes Social and Pro plans. Filters never use nationality or appearance.
            </p>
          </aside>
        </div>
      </main>
    </>
  );
}
