"use client";

import Link from "next/link";
import { useState } from "react";

import { Icon } from "@/components/Icon";
import { chatOpens, listWithAnd, priceLine, vibe, whenLine } from "@/lib/organizer-data";
import { routes } from "@/lib/routes";

import { TypeBadge } from "./TypeBadge";
import { useDraft } from "./useDraft";

export function PreviewView() {
  const { draft, persist, organizer } = useDraft();
  const [saved, setSaved] = useState(false);
  const v = vibe(draft);
  const priceCheck =
    draft.priceKind === "Set a price" ? priceLine(draft).replace(" · ", ", ") : draft.priceKind;

  return (
    <div className="cols" style={{ gridTemplateColumns: "1fr 420px" }}>
      <article
        className="card card-line"
        style={{ padding: 0, overflow: "hidden", gap: 0 }}
        aria-label="Your plan as members see it"
      >
        <div className="photo photo-hero">
          {draft.cover ? `Cover photo · ${draft.cover.name}` : "Cover photo"}
        </div>
        <div className="stack" style={{ padding: "28px 32px 32px" }}>
          <TypeBadge type={draft.type} />
          <h2 className="title-sm">{draft.title || "Your plan title"}</h2>
          <p className="lead" style={{ margin: 0 }}>
            {draft.description}
          </p>
          <div>
            <div className="detail">
              <span className="ic">
                <Icon name="calendar" />
              </span>
              <div>
                <small>When</small>
                <b>{whenLine(draft)}</b>
                <span>Members add it to their calendar after they join</span>
              </div>
            </div>
            <div className="detail">
              <span className="ic">
                <Icon name="pin" />
              </span>
              <div>
                <small>Where</small>
                <b>{draft.venue}</b>
                <span>Public venue · exact meeting point shown after approval</span>
              </div>
            </div>
            <div className="detail">
              <span className="ic">
                <Icon name="users" />
              </span>
              <div>
                <small>Group</small>
                <b>0 of {draft.size} going</b>
                <span>Small group, one chat</span>
              </div>
            </div>
            <div className="detail">
              <span className="ic">
                <Icon name="euro" />
              </span>
              <div>
                <small>Price</small>
                <b>{priceLine(draft, true)}</b>
                <span>No deposit</span>
              </div>
            </div>
          </div>
          <p className="notice">
            {v ? `Vibe: ${v}. ` : ""}Organized by {organizer.name}, {organizer.field}.
          </p>
          <div className="row">
            <span className="avatar">{organizer.name.slice(0, 2).toUpperCase()}</span>
            <div>
              <b>Organized by {organizer.name}</b>
              <p className="helper">{organizer.field} · first plan</p>
            </div>
          </div>
        </div>
      </article>

      <aside className="stack">
        <div className="card">
          <h2 className="h-card">Before you publish</h2>
          <p className="row">
            <span className="ic ic-soft">
              <Icon name="check" className="i-sm" />
            </span>
            <b>Public venue</b>
          </p>
          <p className="row">
            <span className="ic ic-soft">
              <Icon name={draft.cover ? "check" : "info"} className="i-sm" />
            </span>
            <b>{draft.cover ? "Cover photo added" : "No cover photo yet"}</b>
          </p>
          <p className="row">
            <span className="ic ic-soft">
              <Icon name="check" className="i-sm" />
            </span>
            <b>Price is clear: {priceCheck}</b>
          </p>
          <p className="row">
            <span className="ic ic-soft">
              <Icon name="check" className="i-sm" />
            </span>
            <b>Group size: {draft.size} people</b>
          </p>
        </div>
        <div className="card">
          <p className="row h-sec" style={{ gap: 10 }}>
            <Icon name="eye" className="i-muted" />
            Who can see it
          </p>
          <p className="muted">
            {draft.womenOnly ? "Verified women at Polimi only." : "All verified Polimi students."}
            {draft.audience.length > 0 &&
              ` Shown first to people looking for ${listWithAnd(draft.audience)} groups.`}
          </p>
        </div>
        <div className="card">
          <h2 className="h-sec">What happens next</h2>
          <p className="row" style={{ alignItems: "flex-start" }}>
            <span className="num">1</span>Students ask to join. You approve each request.
          </p>
          <p className="row" style={{ alignItems: "flex-start" }}>
            <span className="num">2</span>The group chat opens {chatOpens(draft)}, 3 days before.
          </p>
          <p className="row" style={{ alignItems: "flex-start" }}>
            <span className="num">3</span>Everyone confirms 24 hours before the plan.
          </p>
        </div>
        <Link className="btn-main btn-block" href={routes.planLive} onClick={() => persist(draft)}>
          <Icon name="check" />
          Publish plan
        </Link>
        <button
          type="button"
          className="btn-text"
          style={{ alignSelf: "center" }}
          onClick={() => {
            persist(draft);
            setSaved(true);
          }}
        >
          {saved ? "Draft saved" : "Save as draft"}
        </button>
      </aside>
    </div>
  );
}
