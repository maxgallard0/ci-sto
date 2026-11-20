"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef, useState, type FormEvent } from "react";

import { Icon } from "@/components/Icon";
import { ConfirmBox } from "@/components/member/controls";
import { chatSections, goers, messages, otherChats, plans, type ChatRow } from "@/lib/member-data";
import { planHref, routes } from "@/lib/routes";

type Msg = (typeof messages)[number];

const FIRST = chatSections[0].rows[0].title;
const initialThreads: Record<string, Msg[]> = { [FIRST]: messages, ...otherChats };

function RowContent({ row, unread }: { row: ChatRow; unread?: number }) {
  return (
    <>
      <span
        className={row.photo ? `thumb ${row.photo}` : "thumb"}
        style={{ ...(row.background ? { background: row.background } : {}), width: 52, height: 52 }}
      ></span>
      <span className="t">
        <b>{row.title}</b>
        <span>{row.sub}</span>
      </span>
      <span className="when">
        {row.when}
        {unread ? (
          <span className="unread" aria-label={`${unread} unread`}>
            {unread}
          </span>
        ) : null}
      </span>
    </>
  );
}

/** Chats: pick a chat on the left, read and write on the middle, plan and people on the right. */
export function ChatsView() {
  const [current, setCurrent] = useState(FIRST);
  const [threads, setThreads] = useState(initialThreads);
  const [read, setRead] = useState<string[]>([FIRST]);
  const [left, setLeft] = useState<string[]>([]);
  const [allGoers, setAllGoers] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [draft, setDraft] = useState("");
  const body = useRef<HTMLDivElement>(null);

  const rows = chatSections.flatMap((s) => s.rows);
  const row = rows.find((r) => r.title === current) ?? rows[0];
  const plan = row.planId ? plans.find((p) => p.id === row.planId) : undefined;
  const thread = threads[row.title] ?? [];
  const isPitch = row.title === FIRST;

  useEffect(() => {
    body.current?.scrollTo({ top: body.current.scrollHeight });
  }, [current, thread.length]);

  const open = (title: string) => {
    setCurrent(title);
    setRead((r) => (r.includes(title) ? r : [...r, title]));
    setLeaving(false);
    setAllGoers(false);
  };

  const send = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setThreads((t) => ({ ...t, [row.title]: [...(t[row.title] ?? []), { mine: true, text }] }));
    setDraft("");
  };

  const leave = () => {
    setLeft((l) => [...l, row.title]);
    const next = rows.find((r) => r.title !== row.title && !left.includes(r.title) && !r.toWhoYouMet);
    if (next) open(next.title);
  };

  return (
    <main className="chat-layout">
      <nav className="stack" style={{ gap: 6 }} aria-label="Your chats">
        <h1 className="title-sm" style={{ fontSize: 34 }}>
          Chats
        </h1>
        <p className="helper" style={{ fontSize: 14 }}>
          One group chat per plan. It opens a few days before and is archived after.
        </p>
        {chatSections.map((s) => {
          const visible = s.rows.filter((r) => !left.includes(r.title));
          if (!visible.length) return null;
          return (
            <Fragment key={s.label}>
              <p className="eyebrow" style={{ fontSize: 12, paddingTop: 18 }}>
                {s.label}
              </p>
              {visible.map((r) =>
                r.toWhoYouMet ? (
                  <Link className="chat-row" href={routes.whoYouMet} key={r.title}>
                    <RowContent row={r} />
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="chat-row"
                    key={r.title}
                    aria-current={r.title === row.title ? "true" : undefined}
                    onClick={() => open(r.title)}
                    style={{ width: "100%", textAlign: "left", background: r.title === row.title ? undefined : "transparent", cursor: "pointer", font: "inherit" }}
                  >
                    <RowContent row={r} unread={read.includes(r.title) ? undefined : r.unread} />
                  </button>
                ),
              )}
            </Fragment>
          );
        })}
      </nav>

      <section className="conv" aria-label={`${row.title} chat`}>
        <div className="conv-head">
          <span
            className={row.photo ? `thumb ${row.photo}` : "thumb"}
            style={{ ...(row.background ? { background: row.background } : {}), width: 48, height: 48, borderRadius: 12 }}
          ></span>
          <div className="spacer">
            <b style={{ fontSize: 18 }}>{row.title}</b>
            <p className="muted" style={{ fontSize: 14 }}>
              {plan ? plan.when : row.sub}
            </p>
          </div>
          {plan && (
            <Link className="icon-btn" style={{ background: "var(--surface-2)" }} href={planHref(plan.id)} aria-label="Plan info">
              <Icon name="info" />
            </Link>
          )}
        </div>
        <div className="conv-body" ref={body}>
          {row.opensOn ? (
            <div className="ice" role="status">
              <p className="eyebrow" style={{ color: "var(--ink)", fontSize: 12 }}>
                Opening soon
              </p>
              <b style={{ fontSize: 17 }}>This chat opens on {row.opensOn}, a few days before the plan. We let you know.</b>
            </div>
          ) : (
            <>
              {isPitch && (
                <>
                  <div className="ice">
                    <p className="eyebrow" style={{ color: "var(--ink)", fontSize: 12 }}>
                      Ice-breaker
                    </p>
                    <b style={{ fontSize: 17 }}>Introduce yourself: your idea in one line, or what you want to learn.</b>
                  </div>
                  <ConfirmBox />
                  <div className="card card-line row" style={{ flexDirection: "row", padding: "14px 18px", borderRadius: 16 }}>
                    <Icon name="pin" />
                    <b style={{ fontWeight: 600 }}>Meet point: PoliHub, Via Durando 39, Bovisa. Doors 18:15, free entry with your Ci Sto pass.</b>
                  </div>
                </>
              )}
              {thread.map((m, i) =>
                m.mine ? (
                  <div className="msg mine" key={i}>
                    <div className="bubble">{m.text}</div>
                  </div>
                ) : (
                  <div className="msg" key={i}>
                    <span className={`avatar avatar-sm ${m.tone}`}>{m.initials}</span>
                    <div className="bubble">
                      <small>{m.author}</small>
                      {m.text}
                    </div>
                  </div>
                ),
              )}
            </>
          )}
        </div>
        {!row.opensOn && (
          <form className="composer" onSubmit={send}>
            <label className="sr-only" htmlFor="msg">
              Message
            </label>
            <input id="msg" placeholder={plan ? "Message the group" : `Message ${row.title}`} value={draft} onChange={(e) => setDraft(e.target.value)} autoComplete="off" />
            <button className="send" aria-label="Send" type="submit" disabled={!draft.trim()}>
              <Icon name="arrow" />
            </button>
          </form>
        )}
      </section>

      <aside className="stack">
        {plan && (
          <div className="plan-card">
            <div className={`photo ${plan.photo}`} style={{ height: 150 }}></div>
            <div className="body">
              <span className={`badge ${plan.badge}`}>{plan.kind}</span>
              <h3>{plan.title}</h3>
              <span className="info">
                <Icon name="clock" />
                {plan.when}
              </span>
              <span className="info">
                <Icon name="pin" />
                {plan.where}
              </span>
              <span className="info">
                <Icon name="euro" />
                {plan.price}
              </span>
              <Link className="btn-text" href={planHref(plan.id)} style={{ width: "fit-content" }}>
                See plan details
              </Link>
            </div>
          </div>
        )}
        {isPitch && (
          <div className="card card-line" style={{ gap: 12, padding: "18px 20px" }}>
            <b className="h-sec">Who&apos;s going · {goers.length}</b>
            {(allGoers ? goers : goers.slice(0, 4)).map((g) => (
              <div className="row" style={{ gap: 10 }} key={g.name}>
                <span className={`avatar ${g.tone}`} style={{ width: 36, height: 36, fontSize: 13 }}>
                  {g.initials}
                </span>
                <div className="spacer">
                  <b style={{ fontSize: 14 }}>{g.name}</b>
                  <p className="helper" style={{ fontSize: 12 }}>
                    {g.meta}
                  </p>
                </div>
                <span className={`badge ${g.confirmed ? "b-soft" : "b-surface"}`}>{g.confirmed ? "Confirmed" : "Not yet"}</span>
              </div>
            ))}
            <button type="button" className="btn-text" style={{ width: "fit-content" }} aria-expanded={allGoers} onClick={() => setAllGoers((v) => !v)}>
              {allGoers ? "Show fewer" : `See all ${goers.length}`}
            </button>
          </div>
        )}
        <Link className="row muted" href={plan ? `${routes.report}?plan=${plan.id}` : routes.report} style={{ fontWeight: 700, minHeight: 44 }}>
          <Icon name="flag" className="i-sm" />
          Report a problem
        </Link>
        {leaving ? (
          <div className="card card-line" style={{ gap: 10, padding: "16px 18px" }} role="alertdialog" aria-label="Leave this chat?">
            <b>{plan ? "Leave the chat and the plan?" : "Leave this chat?"}</b>
            <p className="helper">{plan ? "Your spot goes to the waiting list." : "You can message again from your Cerchia."}</p>
            <div className="row" style={{ gap: 10 }}>
              <button type="button" className="btn-main" onClick={leave}>
                Leave
              </button>
              <button type="button" className="btn-text" onClick={() => setLeaving(false)}>
                Stay
              </button>
            </div>
          </div>
        ) : (
          <button type="button" className="row muted btn-text" onClick={() => setLeaving(true)} style={{ fontWeight: 700, minHeight: 44, width: "fit-content" }}>
            <Icon name="x" className="i-sm" />
            Leave the chat
          </button>
        )}
      </aside>
    </main>
  );
}
