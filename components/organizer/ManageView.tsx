"use client";

import Link from "next/link";
import { useState } from "react";

import { Chips } from "@/components/organizer/Chips";
import { Icon } from "@/components/Icon";
import {
  ATTENDEES,
  REQUESTS,
  chatOpens,
  confirmBy,
  priceLine,
  shortDate,
  whenLine,
  type Attendee,
  type Person,
} from "@/lib/organizer-data";
import { routes } from "@/lib/routes";

import { TypeBadge } from "./TypeBadge";
import { useDraft } from "./useDraft";

type Decision = "approved" | "declined";
type Filter = "all" | "confirmed" | "waiting";

function Avatar({ p }: { p: Person }) {
  return (
    <span className="avatar" style={{ background: `var(--av${p.avatar})` }}>
      {p.initials}
    </span>
  );
}

export function ManageView() {
  const { draft } = useDraft();
  const [decisions, setDecisions] = useState<Record<string, Decision>>({});
  const [filter, setFilter] = useState<Filter>("all");
  const [cancel, setCancel] = useState<"" | "ask" | "done">("");

  // Approved requests join the Going list as waiting for confirmation.
  const going: Attendee[] = [
    ...ATTENDEES,
    ...REQUESTS.filter((r) => decisions[r.name] === "approved").map((r) => ({ ...r, confirmed: false })),
  ];
  const confirmed = going.filter((a) => a.confirmed).length;
  const waiting = going.length - confirmed;
  const pending = REQUESTS.filter((r) => !decisions[r.name]).length;
  const shown = going.filter((a) => filter === "all" || (filter === "confirmed") === a.confirmed);

  const labels: Record<Filter, string> = {
    all: `All ${going.length}`,
    confirmed: `Confirmed ${confirmed}`,
    waiting: `Waiting ${waiting}`,
  };
  const options = [labels.all, labels.confirmed, labels.waiting];
  const byLabel = (l: string) => (Object.keys(labels) as Filter[]).find((k) => labels[k] === l) ?? "all";

  return (
    <>
      <div className="page-head">
        <div>
          <Link className="back" href={routes.organize}>
            <Icon name="chevronLeft" className="i-sm" />
            My plans
          </Link>
          <p className="eyebrow">
            {shortDate(draft)} · {draft.start} · {draft.venue}
          </p>
          <div className="row" style={{ gap: 16 }}>
            <h1 className="title">{draft.title}</h1>
            <span className="badge b-soft" style={{ marginTop: 10 }}>
              Live
            </span>
          </div>
        </div>
        <div className="row" style={{ gap: 8 }}>
          <Link className="btn-text" href={routes.planDetails}>
            Edit plan
          </Link>
          <Link className="btn-sec" href={routes.previewPublish}>
            View as member
          </Link>
        </div>
      </div>

      <div className="cols" style={{ gridTemplateColumns: "1fr 400px" }}>
        <section className="stack" style={{ gap: 20 }}>
          <div className="card">
            <h2 className="h-card">
              {going.length} of {draft.size} joined · {confirmed} confirmed
            </h2>
            <div
              className="bar"
              role="progressbar"
              aria-valuenow={going.length}
              aria-valuemin={0}
              aria-valuemax={draft.size}
              aria-label="People joined"
            >
              <span style={{ width: `${Math.min(100, (going.length / draft.size) * 100)}%` }}></span>
            </div>
            <p className="muted" style={{ fontWeight: 500 }}>
              Mix: 5 nationalities, 3 fields. Group chat opens {chatOpens(draft)}.
            </p>
          </div>

          <div className="card">
            <div className="row" style={{ gap: 10 }}>
              <h2 className="h-card">Requests to join</h2>
              {pending > 0 && <span className="badge b-blue">{pending} new</span>}
            </div>
            <p className="helper">
              Check who they are, then approve or decline. They&apos;re told either way, and approved people join the
              group chat.
            </p>
            <div>
              {REQUESTS.map((r) => {
                const d = decisions[r.name];
                return (
                  <div className="person" key={r.name}>
                    <Avatar p={r} />
                    <div style={{ flex: 1 }}>
                      <b>{r.name}</b>
                      <p className="meta">{r.meta}</p>
                      <p className="extra">{r.extra}</p>
                    </div>
                    {d ? (
                      <span className={`badge ${d === "approved" ? "b-soft" : "b-surface"}`} role="status">
                        {d === "approved" ? "Approved" : "Declined"}
                      </span>
                    ) : (
                      <div className="row" style={{ gap: 8 }}>
                        <button
                          type="button"
                          className="btn-text"
                          onClick={() => setDecisions((s) => ({ ...s, [r.name]: "declined" }))}
                        >
                          Decline
                        </button>
                        <button
                          type="button"
                          className="btn-sec"
                          onClick={() => setDecisions((s) => ({ ...s, [r.name]: "approved" }))}
                        >
                          Approve
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card">
            <div className="row">
              <h2 className="h-card">Going</h2>
              <span className="spacer"></span>
              <Chips options={options} value={labels[filter]} onChange={(l) => setFilter(byLabel(l))} />
            </div>
            <div>
              {shown.map((a) => (
                <div className="person" key={a.name}>
                  <Avatar p={a} />
                  <div style={{ flex: 1 }}>
                    <b>{a.name}</b>
                    <p className="meta">{a.meta}</p>
                  </div>
                  {a.confirmed ? (
                    <span className="badge b-soft">Confirmed</span>
                  ) : (
                    <span className="badge b-surface">Confirms by {confirmBy(draft)}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="stack">
          <div className="card card-lime">
            <div className="row">
              <span className="ic ic-lime" style={{ width: 40, height: 40 }}>
                <Icon name="award" className="i-sm" />
              </span>
              <h2 className="h-sec">Organizer badge: 1 of 3 plans</h2>
            </div>
            <div className="dots">
              <i className="done" style={{ width: 96 }}></i>
              <i style={{ width: 96 }}></i>
              <i style={{ width: 96 }}></i>
            </div>
            <p>Organize 2 more plans with good show-up to earn it.</p>
          </div>
          <div className="card" style={{ padding: 16, gap: 12 }}>
            <div className="row" style={{ gap: 14 }}>
              <div className="photo" style={{ width: 72, height: 72, borderRadius: 12 }}>
                Photo
              </div>
              <div className="stack" style={{ gap: 4 }}>
                <TypeBadge type={draft.type} />
                <b>
                  {priceLine(draft)} · {draft.size} people
                </b>
              </div>
            </div>
            <p className="info">
              <Icon name="calendar" />
              {whenLine(draft)}
            </p>
            <p className="info">
              <Icon name="pin" />
              {draft.venue}
            </p>
          </div>
          <div className="card">
            <div className="row">
              <span className="ic ic-blue" style={{ width: 40, height: 40 }}>
                <Icon name="chat" className="i-sm" />
              </span>
              <h2 className="h-sec">Group chat opens {chatOpens(draft)}</h2>
            </div>
            <p className="muted">
              Everyone you approve joins it automatically. You can post a welcome message{" "}
              <Link href={routes.chats}>in Chats</Link> now.
            </p>
          </div>
          <div style={{ padding: "4px 8px 0" }}>
            {cancel === "done" ? (
              <p className="helper" role="status" style={{ fontWeight: 700 }}>
                Plan cancelled. Everyone going and on the waiting list got a message.{" "}
                <button type="button" className="btn-text" onClick={() => setCancel("")}>Undo</button>
              </p>
            ) : cancel === "ask" ? (
              <div className="row" style={{ gap: 12, flexWrap: "wrap" }} role="alertdialog" aria-label="Cancel this plan?">
                <b>Cancel this plan for everyone?</b>
                <button type="button" className="btn-main" onClick={() => setCancel("done")}>Yes, cancel it</button>
                <button type="button" className="btn-text" onClick={() => setCancel("")}>Keep it</button>
              </div>
            ) : (
              <button type="button" className="btn-text" onClick={() => setCancel("ask")}>
                Cancel plan
              </button>
            )}
            <p className="helper">Everyone is notified. Please cancel at least 24 hours before.</p>
          </div>
        </aside>
      </div>
    </>
  );
}
