"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { Icon } from "@/components/Icon";
import { ChipGroup, Switch } from "@/components/member/controls";
import { filterGroups, filterSwitches, plans, type ChipItem } from "@/lib/member-data";
import { planHref } from "@/lib/routes";

const TYPES = ["Social", "Pro", "Outdoor"];
// Groups whose pressed chips show as removable pills above the results.
const PILL_GROUPS = ["Budget", "Neighbourhood", "Group size"];

const cleared = () => filterGroups.map((g) => ({ ...g, chips: g.chips.map((c) => ({ ...c, pressed: false })) }));

/** Find your plans: search, filters and the result grid, all working together. */
export function FindPlansView() {
  const [groups, setGroups] = useState(filterGroups);
  const [query, setQuery] = useState("");
  const [switchKey, setSwitchKey] = useState(0);
  const results = useRef<HTMLElement>(null);

  const types = groups.find((g) => g.legend === "Type")?.chips.filter((c) => c.pressed).map((c) => c.label) ?? [];
  const q = query.trim().toLowerCase();
  const visible = plans.filter((p) => {
    const typeOk = !types.length || !TYPES.includes(p.kind) || types.includes(p.kind);
    const textOk = !q || [p.title, p.where, p.host, p.kind].some((t) => t.toLowerCase().includes(q));
    return typeOk && textOk;
  });

  const pills = groups.filter((g) => PILL_GROUPS.includes(g.legend)).flatMap((g) => g.chips.filter((c) => c.pressed).map((c) => ({ legend: g.legend, label: c.label })));

  const setGroup = (legend: string, chips: ChipItem[]) => setGroups((gs) => gs.map((g) => (g.legend === legend ? { ...g, chips } : g)));
  const unpress = (legend: string, label: string) =>
    setGroups((gs) => gs.map((g) => (g.legend === legend ? { ...g, chips: g.chips.map((c) => (c.label === label ? { ...c, pressed: false } : c)) } : g)));
  const clearAll = () => {
    setGroups(cleared());
    setQuery("");
    setSwitchKey((k) => k + 1);
  };

  const label = `${visible.length} plan${visible.length === 1 ? "" : "s"}`;

  return (
    <main className="page">
      <div className="page-head">
        <div>
          <p className="eyebrow">All plans · Bovisa, Isola and around</p>
          <h1 className="title">Find your plans</h1>
        </div>
        <label className="search">
          <Icon name="search" />
          <span className="sr-only">Search</span>
          <input type="search" placeholder="Search plans, places or people" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
      </div>
      <div className="filters-layout">
        <aside className="filters" aria-label="Filters">
          <div className="row">
            <Icon name="sliders" />
            <b className="h-sec spacer">Filters</b>
            <button type="button" className="btn-text" onClick={clearAll}>
              Clear all
            </button>
          </div>
          {groups.map((g) => (
            <fieldset key={g.legend}>
              <legend>{g.legend}</legend>
              <ChipGroup items={g.chips} onChange={(chips) => setGroup(g.legend, chips)} />
            </fieldset>
          ))}
          {filterSwitches.map((s) => (
            <div className="row" key={`${s.title}-${switchKey}`}>
              <div className="spacer">
                <b>{s.title}</b>
                <p className="helper">{s.helper}</p>
              </div>
              <Switch initial={switchKey ? false : s.on} label={s.title} />
            </div>
          ))}
          <button type="button" className="btn-sec btn-block" onClick={() => results.current?.scrollIntoView({ behavior: "smooth", block: "start" })}>
            Show {label}
          </button>
        </aside>
        <section className="stack" style={{ gap: 20 }} ref={results} aria-live="polite">
          <div className="row" style={{ gap: 8, flexWrap: "wrap" }}>
            <b className="h-sec">{label}</b>
            <span className="muted" style={{ fontWeight: 600 }}>
              · sorted by soonest
            </span>
            <span className="spacer"></span>
            {pills.map((f) => (
              <button type="button" className="active-filter" key={`${f.legend}-${f.label}`} onClick={() => unpress(f.legend, f.label)} aria-label={`Remove filter ${f.label}`}>
                {f.label} <Icon name="x" className="i-sm" />
              </button>
            ))}
          </div>
          {visible.length === 0 ? (
            <div className="card card-line" style={{ gap: 10, padding: 24 }}>
              <b className="h-sec">No plans match</b>
              <p className="helper">Try another word or turn on more types.</p>
              <button type="button" className="btn-text" style={{ width: "fit-content" }} onClick={clearAll}>
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="plan-grid">
              {visible.map((p) => (
                <Link className="plan-card" href={planHref(p.id)} key={p.id}>
                  <div className={`photo ${p.photo}`} role="img" aria-label="Plan photo">
                    <span className={`badge ${p.badge}`}>{p.kind}</span>
                  </div>
                  <div className="body">
                    <h3>{p.title}</h3>
                    <span className="info">
                      <Icon name="clock" />
                      {p.when}
                    </span>
                    <span className="info">
                      <Icon name="pin" />
                      {p.where}
                    </span>
                    <div className="bar" style={{ height: 6 }}>
                      <span style={{ width: `${p.fill}%` }}></span>
                    </div>
                    <div className="row" style={{ gap: 10 }}>
                      <span className="stack-av">
                        {p.avatars.map((a, i) => (
                          <span className={`avatar avatar-sm a${i + 1}`} key={a}>
                            {a}
                          </span>
                        ))}
                      </span>
                      <b style={{ fontSize: 13 }}>{p.price}</b>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
