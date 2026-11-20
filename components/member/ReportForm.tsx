"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

import { Icon } from "@/components/Icon";
import { plans } from "@/lib/member-data";
import { routes } from "@/lib/routes";

const REASONS = ["Someone made me uncomfortable", "The plan was not as described", "Safety problem at the venue", "Spam or fake profile", "Something else"];

/** Report a problem: reason, plan and details. Reports are anonymous to the person reported. */
export function ReportForm() {
  const params = useSearchParams();
  const [reason, setReason] = useState("");
  const [plan, setPlan] = useState(params.get("plan") ?? "");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const details = String(new FormData(e.currentTarget).get("details") ?? "").trim();
    if (!reason) return setError("Choose what happened.");
    if (details.length < 10) return setError("Tell us a bit more, at least a sentence.");
    setError("");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card card-line" role="status" style={{ gap: 14, padding: 28 }}>
        <span style={{ color: "var(--blue)" }}><Icon name="shield" /></span>
        <h1 className="title-sm">Thanks, we got it</h1>
        <p className="lead">The Ci Sto team reads every report within 24 hours. The person you reported is not told who sent it.</p>
        <div className="row" style={{ gap: 12 }}>
          <Link className="btn-main" href={routes.chats}>Back to chats</Link>
          <Link className="btn-text" href={routes.rules}>Community rules</Link>
        </div>
      </div>
    );
  }

  return (
    <form className="form" noValidate onSubmit={submit}>
      <p className="eyebrow">Safety</p>
      <h1 className="title">Report a problem</h1>
      <p className="lead">Only the Ci Sto team sees this. If you are in danger now, call 112.</p>
      <fieldset className="field" style={{ border: 0, padding: 0 }}>
        <legend className="label">What happened?</legend>
        <div className="chips">
          {REASONS.map((r) => (
            <button key={r} type="button" className="chip" aria-pressed={reason === r} onClick={() => setReason(r)}>{r}</button>
          ))}
        </div>
      </fieldset>
      <div className="field">
        <label htmlFor="r-plan">Which plan?</label>
        <select className="input" id="r-plan" value={plan} onChange={(e) => setPlan(e.target.value)}>
          <option value="">Not about a plan</option>
          {plans.map((p) => (
            <option key={p.id} value={p.id}>{p.title}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="r-details">Details</label>
        <textarea className="input" id="r-details" name="details" maxLength={600} placeholder="What happened, and who was involved?"></textarea>
      </div>
      <p className="error" role="alert" style={{ color: "var(--danger, #c0392b)", fontWeight: 700 }}>{error}</p>
      <div className="form-actions">
        <Link className="btn-text" href={routes.chats}>Cancel</Link>
        <span className="spacer"></span>
        <button className="btn-main" type="submit"><Icon name="flag" />Send report</button>
      </div>
    </form>
  );
}
