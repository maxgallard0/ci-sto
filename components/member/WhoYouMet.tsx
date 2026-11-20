"use client";

import Link from "next/link";
import { useState } from "react";

import { Icon } from "@/components/Icon";
import { Stars } from "@/components/member/controls";
import { initialRating, metPeople } from "@/lib/member-data";
import { routes } from "@/lib/routes";

// M5 main column: Add/Added toggles drive the "Add N to my Cerchia" count.
export function WhoYouMet() {
  const [added, setAdded] = useState(() => metPeople.map((p) => p.added));
  const count = added.filter(Boolean).length;
  const toggle = (i: number) => setAdded((prev) => prev.map((v, j) => (j === i ? !v : v)));

  return (
    <section className="stack" style={{ gap: 20 }}>
      <div>
        <p className="eyebrow">After the plan</p>
        <h1 className="title">Who did you click with?</h1>
        <p className="lead">Add them to your Cerchia. They only see it if they add you too.</p>
      </div>
      <div className="people-grid">
        {metPeople.map((p, i) => (
          <div className={`person-card${added[i] ? " added" : ""}`} key={p.name}>
            <span className={`avatar ${p.tone}`} style={{ width: 56, height: 56, fontSize: 18 }}>
              {p.initials}
            </span>
            <div className="t">
              <b>{p.name}</b>
              <p className="muted" style={{ fontSize: 14 }}>
                {p.meta}
              </p>
              <p className="helper" style={{ fontSize: 12, fontWeight: 700 }}>
                {p.shared}
              </p>
            </div>
            <button
              className="toggle-add"
              aria-pressed={added[i]}
              aria-label={added[i] ? `Added ${p.name}` : `Add ${p.name}`}
              onClick={() => toggle(i)}
            >
              {added[i] ? (
                <>
                  <Icon name="check" className="i-sm" />
                  Added
                </>
              ) : (
                <>
                  <Icon name="plus" className="i-sm" />
                  Add
                </>
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="card" style={{ background: "var(--blue-tint)", color: "var(--blue-dark)" }}>
        <div className="row">
          <b className="h-card spacer">Rate the plan</b>
          <Stars initial={initialRating} />
        </div>
        <p>
          Anonymous. It helps organizers and partners improve. Something wrong?{" "}
          <a href="#" style={{ textDecoration: "underline" }}>
            Report it here.
          </a>
        </p>
      </div>
      <div className="row" style={{ gap: 16 }}>
        <Link className="btn-main" href={routes.cerchia}>
          <Icon name="check" />
          <span id="add-count">Add {count} to my Cerchia</span>
        </Link>
        <Link className="btn-text" href={routes.chats}>
          Skip for now
        </Link>
      </div>
    </section>
  );
}
