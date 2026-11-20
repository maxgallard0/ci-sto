"use client";

import Link from "next/link";
import { useState } from "react";

import { Icon } from "@/components/Icon";
import { outerRing } from "@/lib/member-data";
import { routes } from "@/lib/routes";

/** "See outer ring": shows the people met at one or two plans under the inner ring. */
export function OuterRing() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <>
          <p className="eyebrow" style={{ fontSize: 12, paddingTop: 16 }}>
            Outer ring · {outerRing.length}
          </p>
          {outerRing.map((p) => (
            <div className="person" key={p.initials}>
              <span className={`avatar ${p.tone}`}>{p.initials}</span>
              <div className="spacer">
                <b>{p.name}</b>
                <span className="meta">{p.meta}</span>
              </div>
              <span className={`badge ${p.kind === "Pro" ? "b-blue" : "b-soft"}`}>{p.kind}</span>
              <Link className="icon-btn" style={{ background: "var(--surface-2)" }} href={routes.chats} aria-label={`Message ${p.name}`}>
                <Icon name="chat" />
              </Link>
            </div>
          ))}
        </>
      )}
      <button type="button" className="btn-text" style={{ width: "fit-content" }} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        {open ? "Hide outer ring" : `See outer ring · ${outerRing.length}`}
      </button>
    </>
  );
}
