"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Nav } from "@/components/Nav";
import { load, save } from "@/lib/demo-store";
import { featuredPlan, kindBadge, plansThisWeek, type PlanTag } from "@/lib/plans";
import { routes } from "@/lib/routes";

import { LogoMark, Sprite, Use } from "./Sprite";
import { useToast } from "./Toast";

type Filter = "all" | PlanTag;

const chips: { filter: Filter; label: string }[] = [
  { filter: "all", label: "For you" },
  { filter: "social", label: "Social" },
  { filter: "pro", label: "Pro" },
  { filter: "outdoor", label: "Outdoor" },
  { filter: "cheap", label: "Under €10" },
];

// Labels used in the "X opens in the app" toast, as in the mockup.
const soonLabel: Record<string, string> = {
  "aperitivo-navigli": "Aperitivo on the Navigli",
  "pitch-night-polihub": "Startup pitch night",
  "language-swap-lumen": "Language swap",
};

/** "Plans this week": featured plan with the Ci sto toggle, plus a filterable list. */
export function PlansThisWeek() {
  const { toast, el: toastEl } = useToast();
  const [filter, setFilter] = useState<Filter>("all");
  const [joined, setJoined] = useState(false);
  const [initials, setInitials] = useState("CA");

  // Read the demo store after mount so server and client render the same markup first.
  useEffect(() => {
    setJoined(load("dolomites") === "1");
    const name = load("name");
    if (name) setInitials(name.slice(0, 2).toUpperCase());
  }, []);

  const soon = (label: string) => toast(`${label} opens in the app`);

  const visible = plansThisWeek.filter((p) => filter === "all" || p.tags.includes(filter));
  const n = featuredPlan.going + (joined ? 1 : 0);
  const cap = featuredPlan.capacity;

  const toggle = () => {
    const next = !joined;
    setJoined(next);
    save("dolomites", next ? "1" : "0");
    toast(next ? `Ci sto! ${featuredPlan.organizer} will approve you and the group chat opens.` : "You left the plan.");
  };

  return (
    <>
      <Sprite />
      <Nav active="Find your plans" />

      <main className="home">
        <div className="home-head">
          <div>
            <p className="eyebrow">This week · 17 – 23 Nov</p>
            <h1 className="home-title">Plans this week</h1>
            <p className="home-sub">Picked for you from your profile: trekking, design, aperitivo, English and Italian.</p>
          </div>
          <div className="chips" role="group" aria-label="Filter plans">
            {chips.map((c) => (
              <button key={c.filter} className="chip" aria-pressed={filter === c.filter} onClick={() => setFilter(c.filter)}>
                {c.filter === "all" && <Use id="i-star" size="xs" />}
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid">
          <article className="featured" aria-labelledby="ft-title">
            <div className="featured-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={featuredPlan.image} alt={featuredPlan.imageAlt} />
              <span className="badge badge-lime tl"><Use id="i-star" size="xs" />{featuredPlan.reason}</span>
              <span className="badge badge-ink tr">{featuredPlan.kind}</span>
              <span className="badge badge-white br">{featuredPlan.price}</span>
            </div>
            <div className="featured-body">
              <h2 id="ft-title">{featuredPlan.title}</h2>
              <div className="info">
                <span className="row"><Use id="i-clock" size="sm" />{featuredPlan.when}</span>
                <span className="row"><Use id="i-pin" size="sm" />{featuredPlan.meet}</span>
                <span className="row"><Use id="i-users" size="sm" /><span id="going">{`${n} of ${cap} going · ${cap - n} spots left`}</span></span>
              </div>
              <div className="progress" role="progressbar" aria-label="Spots taken" aria-valuemin={0} aria-valuemax={cap} aria-valuenow={n}>
                <span style={{ width: `${(n / cap) * 100}%` }} />
              </div>
              <div className="notice">{featuredPlan.vibe}</div>
              <div className="actions">
                <div className="avatars" id="ft-avatars">
                  {featuredPlan.people.map((p) => (
                    <span key={p.initials} className={`avatar a${p.tone}`}>{p.initials}</span>
                  ))}
                  {joined && <span className="avatar a3" id="av-me">{initials}</span>}
                  <span className="avatar a3">+1</span>
                </div>
                <span className="spacer" />
                <button className="icon-btn lg ring" aria-label="Skip this plan" id="skip" onClick={() => toast("Skipped. We'll show you fewer plans like this.")}>
                  <Use id="i-x" />
                </button>
                <button className="icon-btn lg soft" aria-label="Plan details" onClick={() => soon("Plan details")}>
                  <Use id="i-info" />
                </button>
                <button className={`btn btn-main${joined ? " is-in" : ""}`} id="cisto" aria-pressed={joined} onClick={toggle}>
                  <Use id="i-check" />
                  <span>{joined ? "You're in" : "Ci sto"}</span>
                </button>
              </div>
            </div>
          </article>

          <aside className="side" aria-labelledby="more-title">
            <div className="side-head">
              <h2 id="more-title">More plans this week</h2>
              <Link className="btn btn-text" href={routes.findPlans}>See all</Link>
            </div>

            {visible.map((p) => (
              <a
                key={p.id}
                className="plan-row"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  soon(soonLabel[p.id] ?? p.title);
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="thumb" src={p.image} alt="" />
                <div>
                  <span className={`badge ${kindBadge[p.kind]}`}>{p.kind}</span>
                  <h3>{p.title}</h3>
                  <p>{p.when}</p>
                  <p className="muted">{`${p.price} · ${p.going} of ${p.capacity} going`}</p>
                </div>
              </a>
            ))}
            <p className="empty" id="empty" hidden={visible.length > 0}>No more plans with this filter this week. Try another one.</p>

            <div className="plus">
              <div className="plus-top"><LogoMark color="var(--lime)" />Plus member<span className="badge badge-lime">Active</span></div>
              <div className="plus-stats">
                <div><strong>€14.60</strong><span>saved this month</span></div>
                <div><strong>23</strong><span>places near Polimi</span></div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {toastEl}
    </>
  );
}
