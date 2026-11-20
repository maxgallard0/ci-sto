import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

import { Icon } from "@/components/Icon";
import { ConfirmBox, StaticForm } from "@/components/member/controls";
import { Nav } from "@/components/Nav";
import { chatSections, goers, messages, type ChatRow } from "@/lib/member-data";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Chats" };

function Row({ row }: { row: ChatRow }) {
  const content = (
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
        {row.unread ? (
          <span className="unread" aria-label={`${row.unread} unread`}>
            {row.unread}
          </span>
        ) : null}
      </span>
    </>
  );
  if (row.toWhoYouMet)
    return (
      <Link className="chat-row" href={routes.whoYouMet}>
        {content}
      </Link>
    );
  return (
    <a className="chat-row" href="#" aria-current={row.current ? "true" : undefined}>
      {content}
    </a>
  );
}

export default function ChatsPage() {
  return (
    <>
      <Nav active="Chats" />
      <main className="chat-layout">
        <nav className="stack" style={{ gap: 6 }} aria-label="Your chats">
          <h1 className="title-sm" style={{ fontSize: 34 }}>
            Chats
          </h1>
          <p className="helper" style={{ fontSize: 14 }}>
            One group chat per plan. It opens a few days before and is archived after.
          </p>
          {chatSections.map((s) => (
            <Fragment key={s.label}>
              <p className="eyebrow" style={{ fontSize: 12, paddingTop: 18 }}>
                {s.label}
              </p>
              {s.rows.map((r) => (
                <Row row={r} key={r.title} />
              ))}
            </Fragment>
          ))}
        </nav>
        <section className="conv" aria-label="Startup pitch night group chat">
          <div className="conv-head">
            <span className="thumb ph-pitch" style={{ width: 48, height: 48, borderRadius: 12 }}></span>
            <div className="spacer">
              <b style={{ fontSize: 18 }}>Startup pitch night · PoliHub</b>
              <p className="muted" style={{ fontSize: 14 }}>
                9 of 12 · Fri 21 Nov, 18:30
              </p>
            </div>
            <button className="icon-btn" style={{ background: "var(--surface-2)" }} aria-label="Plan info">
              <Icon name="info" />
            </button>
          </div>
          <div className="conv-body">
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
            {messages.map((m, i) =>
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
          </div>
          <StaticForm className="composer">
            <label className="sr-only" htmlFor="msg">
              Message
            </label>
            <input id="msg" placeholder="Message the group" />
            <button className="send" aria-label="Send">
              <Icon name="arrow" />
            </button>
          </StaticForm>
        </section>
        <aside className="stack">
          <div className="plan-card">
            <div className="photo ph-pitch" style={{ height: 150 }}></div>
            <div className="body">
              <span className="badge b-blue">Pro</span>
              <h3>Startup pitch night · PoliHub</h3>
              <span className="info">
                <Icon name="clock" />
                Fri 21 Nov · 18:30 to 21:00
              </span>
              <span className="info">
                <Icon name="pin" />
                PoliHub, Bovisa
              </span>
              <span className="info">
                <Icon name="users" />9 of 12 going
              </span>
              <span className="info">
                <Icon name="euro" />
                Free
              </span>
              <a className="btn-text" href="#" style={{ width: "fit-content" }}>
                See plan details
              </a>
            </div>
          </div>
          <div className="card card-line" style={{ gap: 12, padding: "18px 20px" }}>
            <b className="h-sec">Who&apos;s going · 9</b>
            {goers.map((g) => (
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
            <a className="btn-text" href="#" style={{ width: "fit-content" }}>
              See all 9
            </a>
          </div>
          <a className="row muted" href="#" style={{ fontWeight: 700, minHeight: 44 }}>
            <Icon name="flag" className="i-sm" />
            Report a problem · Leave the chat
          </a>
        </aside>
      </main>
    </>
  );
}
