import type { Metadata } from "next";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { Chips, Switch } from "@/components/member/controls";
import { Nav } from "@/components/Nav";
import { activeFilters, filterGroups, filterSwitches, plans } from "@/lib/member-data";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Find your plans" };

export default function FindPlansPage() {
  return (
    <>
      <Nav active="Find your plans" />
      <main className="page">
        <div className="page-head">
          <div>
            <p className="eyebrow">All plans · Bovisa, Isola and around</p>
            <h1 className="title">Find your plans</h1>
          </div>
          <label className="search">
            <Icon name="search" />
            <span className="sr-only">Search</span>
            <input placeholder="Search plans, places or people" />
          </label>
        </div>
        <div className="filters-layout">
          <aside className="filters" aria-label="Filters">
            <div className="row">
              <Icon name="sliders" />
              <b className="h-sec spacer">Filters</b>
              <button className="btn-text">Clear all</button>
            </div>
            {filterGroups.map((g) => (
              <fieldset key={g.legend}>
                <legend>{g.legend}</legend>
                <Chips initial={g.chips} />
              </fieldset>
            ))}
            {filterSwitches.map((s) => (
              <div className="row" key={s.title}>
                <div className="spacer">
                  <b>{s.title}</b>
                  <p className="helper">{s.helper}</p>
                </div>
                <Switch initial={s.on} label={s.title} />
              </div>
            ))}
            <button className="btn-sec btn-block">Show 12 plans</button>
          </aside>
          <section className="stack" style={{ gap: 20 }}>
            <div className="row" style={{ gap: 8 }}>
              <b className="h-sec">12 plans</b>
              <span className="muted" style={{ fontWeight: 600 }}>
                · sorted by soonest
              </span>
              <span className="spacer"></span>
              {activeFilters.map((f) => (
                <button className="active-filter" key={f}>
                  {f} <Icon name="x" className="i-sm" />
                </button>
              ))}
            </div>
            <div className="plan-grid">
              {plans.map((p) => (
                <Link className="plan-card" href={routes.chats} key={p.title}>
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
          </section>
        </div>
      </main>
    </>
  );
}
