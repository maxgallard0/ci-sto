"use client";

import Link from "next/link";
import { useState } from "react";

import { Icon } from "@/components/Icon";
import { chatOpens, shortDate, slug } from "@/lib/organizer-data";
import { routes } from "@/lib/routes";

import { TypeBadge } from "./TypeBadge";
import { useDraft } from "./useDraft";

export function LiveView() {
  const { draft } = useDraft();
  const [copied, setCopied] = useState(false);
  const link = `cisto.app/p/${slug(draft.title)}`;
  const price = draft.priceKind === "Set a price" ? draft.amount : draft.priceKind;

  const copy = async () => {
    try {
      await navigator.clipboard?.writeText(link);
    } catch {
      /* Clipboard blocked: still show the confirmation, the link is visible. */
    }
    setCopied(true);
  };

  return (
    <div className="stack" style={{ width: 640, maxWidth: "100%", alignItems: "center", gap: 24, textAlign: "center" }}>
      <span className="ic ic-lime" style={{ width: 88, height: 88 }} role="img" aria-label="Published">
        <Icon name="check" className="i-xl" />
      </span>
      <div>
        <p className="eyebrow">Step 3 of 3 · published</p>
        <h1 className="title">Your plan is live</h1>
        <p className="lead">
          We&apos;ll tell you when someone asks to join. The group chat opens {chatOpens(draft)}, 3 days before the plan.
        </p>
      </div>

      <div
        className="card"
        style={{ flexDirection: "row", alignItems: "center", gap: 16, padding: 12, width: "100%", textAlign: "left", borderRadius: 20 }}
      >
        <div className="photo" style={{ width: 112, height: 112 }}>
          Photo
        </div>
        <div className="stack" style={{ gap: 6 }}>
          <div className="row" style={{ gap: 6 }}>
            <TypeBadge type={draft.type} />
            <span className="badge b-soft">Live</span>
          </div>
          <b style={{ fontSize: 19 }}>{draft.title}</b>
          <span className="helper" style={{ fontSize: 14 }}>
            {shortDate(draft)} · {draft.start} · {draft.venue}
          </span>
          <span className="helper">
            {price} · 0 of {draft.size} going
          </span>
        </div>
      </div>

      <div className="card" style={{ width: "100%", textAlign: "left", gap: 12 }}>
        <p className="row h-sec" style={{ gap: 10 }}>
          <Icon name="link" className="i-muted" />
          Invite friends from Polimi
        </p>
        <div className="row" style={{ alignItems: "flex-end", gap: 12 }}>
          <div className="field" style={{ flex: 1 }}>
            <label htmlFor="plan-link">Plan link</label>
            <input id="plan-link" className="input" value={link} readOnly />
          </div>
          <button type="button" className="btn-sec" style={{ height: 52 }} onClick={copy}>
            {copied ? "Copied" : "Copy link"}
          </button>
        </div>
        <p className="helper">Only verified Polimi students can open the link and ask to join.</p>
      </div>

      <div className="row" style={{ gap: 16 }}>
        <Link className="btn-main" href={routes.managePlan}>
          Manage your plan
        </Link>
        <Link className="btn-text" href={routes.planDetails}>
          Organize another plan
        </Link>
      </div>
    </div>
  );
}
