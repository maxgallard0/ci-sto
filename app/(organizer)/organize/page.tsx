import type { Metadata } from "next";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { Nav } from "@/components/Nav";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Become an organizer" };

const RULES = [
  { icon: "shield", title: "Public places only", text: "Cafés, bars, parks and campus spaces. Never at someone's home." },
  { icon: "users", title: "Small groups", text: "Keep it small enough to talk to everyone. You set the group size." },
  {
    icon: "userCheck",
    title: "You approve who joins",
    text: "You see each request's profile and say yes or no. Everyone confirms 24 hours before.",
  },
  { icon: "euro", title: "Clear about cost", text: "Free, under €10 or a set price. Say how people pay, so there are no surprises." },
] as const;

const EXAMPLES = [
  { type: "Social", badge: "b-ink", title: "Aperitivo on the Navigli", meta: "Under €10 · 7 of 10 going" },
  { type: "Pro", badge: "b-lime", title: "Startup pitch night · PoliHub", meta: "Free · 9 of 12 going" },
] as const;

export default function BecomeOrganizerPage() {
  return (
    <>
      <Nav active="Organize" />
      <main className="page">
        <div className="cols">
          <section className="stack" style={{ gap: 28 }}>
            <div>
              <p className="eyebrow">Become an organizer</p>
              <h1 className="title">Organize your first plan</h1>
              <p className="lead">
                Anyone at Polimi can propose a plan, from a coffee to a weekend in the mountains. You choose who it&apos;s
                for, approve who joins and meet in a public place.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {RULES.map((r) => (
                <article className="card" key={r.title}>
                  <span className="ic">
                    <Icon name={r.icon} />
                  </span>
                  <h2 className="h-card">{r.title}</h2>
                  <p className="muted">{r.text}</p>
                </article>
              ))}
            </div>

            <div className="card" style={{ flexDirection: "row", alignItems: "center", padding: "14px 18px" }}>
              <label className="check">
                <input type="checkbox" defaultChecked /> I agree to the Ci Sto community rules
              </label>
              <span className="spacer"></span>
              <Link className="btn-text" href={routes.rules}>
                Read the rules
              </Link>
            </div>

            <div className="row" style={{ gap: 16 }}>
              <Link className="btn-main" href={routes.planDetails}>
                Start a plan
              </Link>
              <Link className="btn-text" href={routes.plans}>
                Not now
              </Link>
            </div>
          </section>

          <aside className="stack" style={{ gap: 20 }}>
            <div className="card card-lime" style={{ padding: 28 }}>
              <span className="ic ic-lime" style={{ width: 48, height: 48 }}>
                <Icon name="award" />
              </span>
              <h2 className="h-card">Earn the Organizer badge</h2>
              <p>Organize 3 plans with good show-up. The badge appears on your profile and on every plan you publish.</p>
              <div className="dots">
                <i></i>
                <i></i>
                <i></i>
                <span className="helper" style={{ color: "var(--lime-ink)", fontWeight: 700 }}>
                  0 of 3 plans
                </span>
              </div>
            </div>
            <div className="card">
              <h2 className="h-sec">Plans that work well</h2>
              {EXAMPLES.map((e) => (
                <div className="row" style={{ gap: 14 }} key={e.title}>
                  <div className="photo" style={{ width: 88, height: 88 }}>
                    Photo
                  </div>
                  <div className="stack" style={{ gap: 6 }}>
                    <span className={`badge ${e.badge}`}>{e.type}</span>
                    <b>{e.title}</b>
                    <span className="helper">{e.meta}</span>
                  </div>
                </div>
              ))}
              <p className="helper">
                Tip: a clear title, a real photo of the place and an honest price get more people to say ci sto.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
