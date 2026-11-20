import type { Metadata } from "next";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { Nav } from "@/components/Nav";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Community rules" };

const RULES: [string, string][] = [
  ["Show up, or say so", "Confirm the day before. If you can't make it, free your spot early so someone on the waiting list can go."],
  ["Be kind to everyone", "No harassment, no pressure, no hate. Mixed groups are the point: help people who are new to Milan or to Italian."],
  ["Keep it real", "Use your real name and photo. Plans must happen where and when they say, at the price they say."],
  ["Respect the venue", "Partners host us. Follow their rules and leave the place as you found it."],
  ["Safety first", "Meet in public places. Never share someone's details outside the chat. Report anything wrong."],
  ["Organizers decide who joins", "They see your profile and can approve or decline. Be honest about your level for outdoor plans."],
];

export default function RulesPage() {
  return (
    <>
      <Nav />
      <main className="page" style={{ maxWidth: 820 }}>
        <p className="eyebrow">Ci Sto community</p>
        <h1 className="title">Community rules</h1>
        <p className="lead">Six rules for members, organizers and partners. Break them and we may pause or close your account.</p>
        <ol className="stack" style={{ gap: 12, listStyle: "none", padding: 0 }}>
          {RULES.map(([title, text], i) => (
            <li className="card card-line" key={title} style={{ gap: 6, padding: "18px 22px" }}>
              <b className="h-sec">{i + 1}. {title}</b>
              <p className="muted">{text}</p>
            </li>
          ))}
        </ol>
        <div className="row" style={{ gap: 12 }}>
          <Link className="btn-main" href={routes.organize}><Icon name="check" />Back to organize</Link>
          <Link className="btn-text" href={routes.report}>Report a problem</Link>
        </div>
      </main>
    </>
  );
}
