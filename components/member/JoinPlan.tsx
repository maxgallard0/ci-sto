"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { HandMark } from "@/components/Logo";
import { load, save } from "@/lib/demo-store";
import { routes } from "@/lib/routes";

// The landing page already stores the Dolomites plan under "dolomites"; keep both in step.
const storeKey = (id: string) => (id === "dolomites-seceda" ? "dolomites" : `plan:${id}`);

/** Ci sto toggle for one plan. Joining asks the organizer, then the group chat opens. */
export function JoinPlan({ id, title, fill, avatars }: { id: string; title: string; fill: number; avatars: string[] }) {
  const [joined, setJoined] = useState(false);
  useEffect(() => setJoined(load(storeKey(id)) === "1"), [id]);

  const toggle = () => {
    const next = !joined;
    setJoined(next);
    save(storeKey(id), next ? "1" : "0");
  };

  return (
    <div className="card card-line" style={{ gap: 14, padding: 22 }}>
      <div className="bar" style={{ height: 6 }}>
        <span style={{ width: `${fill}%` }}></span>
      </div>
      <div className="row" style={{ gap: 10 }}>
        <span className="stack-av">
          {avatars.map((a, i) => (
            <span className={`avatar avatar-sm a${i + 1}`} key={a}>{a}</span>
          ))}
        </span>
        <span className="helper">{fill}% full</span>
      </div>
      <button className={joined ? "btn-sec btn-block" : "btn-main btn-block"} aria-pressed={joined} onClick={toggle}>
        <HandMark closed={joined} style={{ width: 22, height: 22 }} />
        {joined ? "You're in · tap to leave" : "Ci sto"}
      </button>
      <p className="helper" role="status">
        {joined ? `The organizer approves you and the ${title} chat opens a few days before.` : "Say ci sto and the organizer sees your profile."}
      </p>
      {joined && (
        <Link className="btn-text" href={routes.chats} style={{ width: "fit-content" }}>
          Go to chats
        </Link>
      )}
    </div>
  );
}
