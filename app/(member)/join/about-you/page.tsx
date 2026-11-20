import type { Metadata } from "next";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { StaticForm } from "@/components/member/controls";
import { LanguageChips, PhotoUpload } from "@/components/member/ProfileBits";
import { OnbBar, StepTabs } from "@/components/member/Onboarding";
import { languages } from "@/lib/member-data";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "About you" };

const BIO = "Industrial designer from Buenos Aires. Into ceramics, murals and long walks. Happy to help with Spanish.";

export default function AboutYouPage() {
  return (
    <>
      <OnbBar step={1} />
      <main className="page">
        <div className="page-head">
          <div>
            <p className="eyebrow">Set up your profile · step 1 of 2</p>
            <h1 className="title">Tell us about you</h1>
            <p className="lead">Organizers see this when you say ci sto. Like LinkedIn, but friendlier. You can change it any time.</p>
          </div>
          <StepTabs step={1} />
        </div>
        <div className="cols-member">
          <StaticForm className="form">
            <p className="notice row" role="status">
              <Icon name="check" />
              Verified Polimi student · camila.s@mail.polimi.it. Your email is never shown to others.
            </p>
            <PhotoUpload initials="CA" />
            <div className="grid-2">
              <div className="field">
                <label htmlFor="f-name">Name</label>
                <input className="input" id="f-name" defaultValue="Camila S." />
                <span className="helper">Others see your first name and initial.</span>
              </div>
              <div className="field">
                <label htmlFor="f-pron">Pronouns (optional)</label>
                <input className="input" id="f-pron" defaultValue="she/her" />
              </div>
            </div>
            <div className="grid-study">
              <div className="field">
                <label htmlFor="f-deg">Degree programme</label>
                <input className="input" id="f-deg" defaultValue="MSc Strategic Design" />
                <span className="helper">As on your Polimi enrolment.</span>
              </div>
              <div className="field">
                <label htmlFor="f-year">Year</label>
                <input className="input" id="f-year" defaultValue="1st year" />
              </div>
            </div>
            <div className="grid-2">
              <div className="field">
                <label htmlFor="f-from">Where you&apos;re from</label>
                <input className="input" id="f-from" defaultValue="Buenos Aires, Argentina" />
                <span className="helper">Helps people find others from home, or meet locals.</span>
              </div>
              <div className="field">
                <label htmlFor="f-since">In Milan since</label>
                <input className="input" id="f-since" defaultValue="September 2026" />
              </div>
            </div>
            <div className="field">
              <span className="label">Languages you speak</span>
              <span className="helper">Add a level so organizers can mix the group well.</span>
              <LanguageChips initial={languages} />
            </div>
            <div className="field">
              <label htmlFor="f-bio">A line about you</label>
              <textarea className="input" id="f-bio" maxLength={160} defaultValue={BIO}></textarea>
              <div className="row">
                <span className="helper spacer">Keep it short and true. No contact details here.</span>
                <span className="helper">{BIO.length} / 160</span>
              </div>
            </div>
            <div className="form-actions">
              <Link className="btn-text" href={routes.landing}>
                Back
              </Link>
              <span className="spacer"></span>
              <Link className="btn-main" href={routes.interests}>
                <Icon name="check" />
                Continue
              </Link>
            </div>
          </StaticForm>
          <aside className="stack">
            <p className="eyebrow">How organizers see you</p>
            <div className="card card-blue" style={{ gap: 18, padding: 28 }}>
              <div className="row" style={{ gap: 16 }}>
                <span className="avatar avatar-md a3">CA</span>
                <div>
                  <h2 className="title-card">Camila S.</h2>
                  <p className="muted" style={{ fontWeight: 600 }}>
                    MSc Strategic Design · 1st year
                  </p>
                </div>
              </div>
              <div className="chips">
                <span className="badge b-blue">Verified Polimi</span>
                <span className="badge b-surface">From Buenos Aires</span>
                <span className="badge b-lime">New in Milan</span>
              </div>
              <hr style={{ border: 0, borderTop: "1px solid var(--line)" }} />
              <div>
                <p className="eyebrow" style={{ fontSize: 12 }}>
                  Speaks
                </p>
                <b>Spanish (native) · English (fluent) · Italian (learning)</b>
              </div>
              <p className="muted">“{BIO}”</p>
            </div>
            <div className="card card-line row" style={{ flexDirection: "row", padding: "16px 18px" }}>
              <span style={{ color: "var(--blue)" }}>
                <Icon name="shield" />
              </span>
              <p className="helper" style={{ fontSize: 14 }}>
                Only verified Polimi students can see your profile. You choose what to show, and you can block or report anyone.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
