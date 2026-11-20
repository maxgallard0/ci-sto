import Link from "next/link";

import { routes } from "@/lib/routes";

// Header and step tabs shared by the two profile setup steps (M1, M2).
export function OnbBar({ step }: { step: 1 | 2 }) {
  return (
    <header className="onb-bar">
      <Link className="logo" href={routes.plans}>
        <span className="logo-mark" aria-hidden="true"></span>Ci Sto
      </Link>
      <span className="spacer"></span>
      <div className="bar" role="progressbar" aria-valuenow={step} aria-valuemin={0} aria-valuemax={2} aria-label="Profile setup">
        <span style={{ width: step === 1 ? "50%" : "100%" }}></span>
      </div>
      <b>Step {step} of 2</b>
      <Link className="btn-text" href={routes.plans}>
        Finish later
      </Link>
    </header>
  );
}

export function StepTabs({ step }: { step: 1 | 2 }) {
  const style = { display: "inline-flex", alignItems: "center" } as const;
  return (
    <div className="pill-tab">
      <Link className="chip" style={style} aria-pressed={step === 1} href={routes.aboutYou}>
        1 · About you
      </Link>
      <Link className="chip" style={style} aria-pressed={step === 2} href={routes.interests}>
        2 · What you&apos;re into
      </Link>
    </div>
  );
}
