import type { Metadata } from "next";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { AddBack, Seg } from "@/components/member/controls";
import { Nav } from "@/components/Nav";
import { addedYou, innerRing, ringAvatars } from "@/lib/member-data";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Your Cerchia" };

export default function CerchiaPage() {
  return (
    <>
      <Nav active="Cerchia" />
      <main className="page">
        <div className="page-head">
          <div>
            <p className="eyebrow">15 people · 9 plans since September</p>
            <h1 className="title">Your Cerchia</h1>
            <p className="lead">People you met at plans and chose to keep. Closer ring, more plans together.</p>
          </div>
          <Seg label="Show" options={["All", "Social", "Pro"]} />
        </div>
        <div className="cols" style={{ gridTemplateColumns: "760px 1fr" }}>
          <section className="card card-line" style={{ alignItems: "center" }} aria-label="Cerchia rings">
            <div className="rings">
              <span className="ring ring-out"></span>
              <span className="ring ring-in"></span>
              <span className="you">You</span>
              {ringAvatars.map((a) => {
                const size = a.inner ? 64 : 52;
                return (
                  <span
                    className={`avatar ${a.tone}`}
                    key={a.initials}
                    style={{ left: a.left, top: a.top, width: size, height: size, fontSize: a.inner ? 18 : 15 }}
                  >
                    {a.initials}
                  </span>
                );
              })}
            </div>
            <div className="row" style={{ gap: 20 }}>
              <span className="row helper" style={{ gap: 8 }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--av3)" }}></span>Inner ring · 3 or more plans
              </span>
              <span className="row helper" style={{ gap: 8 }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--field-border)" }}></span>Outer ring · 1 or 2 plans
              </span>
            </div>
          </section>
          <aside className="stack">
            <div className="added-you">
              <div className="row">
                <span style={{ color: "var(--lime)" }}>
                  <Icon name="userPlus" />
                </span>
                <b style={{ fontSize: 17 }}>{addedYou.length} people added you</b>
              </div>
              {addedYou.map((p) => (
                <div className="row" key={p.name}>
                  <span className={`avatar ${p.tone}`} style={{ width: 40, height: 40 }}>
                    {p.initials}
                  </span>
                  <div className="spacer">
                    <b>{p.name}</b>
                    <br />
                    <span>{p.from}</span>
                  </div>
                  <AddBack />
                </div>
              ))}
            </div>
            <div className="card card-line" style={{ gap: 0, padding: "18px 20px 8px" }}>
              <p className="eyebrow" style={{ fontSize: 12 }}>
                Inner ring · 6
              </p>
              {innerRing.map((p) => (
                <div className="person" key={p.name}>
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
              <a className="btn-text" href="#" style={{ width: "fit-content" }}>
                See outer ring · 9
              </a>
            </div>
            <div className="card" style={{ background: "var(--blue-tint)", color: "var(--blue-dark)", gap: 8 }}>
              <b className="h-sec">Ahmed and Sofia said ci sto to Free jazz night in Isola</b>
              <p style={{ fontWeight: 600, fontSize: 14 }}>Thu 27 Nov · 21:00 · free · 3 of 6 going</p>
              <Link className="btn-sec" href={routes.findPlans} style={{ width: "fit-content" }}>
                See plan
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
