import type { Metadata } from "next";
import Link from "next/link";

import { EntryHeader } from "@/components/landing/EntryHeader";
import { Sprite, Use } from "@/components/landing/Sprite";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "How it works" };

const MEMBER_STEPS = [
  { icon: "i-user", title: "Verify your Polimi email", text: "Sign up with your @mail.polimi.it address. Only verified students get in." },
  { icon: "i-star", title: "Swipe on plans, not people", text: "Aperitivo, hikes, pitch nights. Say ci sto to the ones you like." },
  { icon: "i-users", title: "Meet a small group", text: "Groups of 3 to 8. A group chat opens when you join, so you know who is coming." },
  { icon: "i-check", title: "Grow your Cerchia", text: "After the plan, add the people you clicked with and see their next plans." },
];

const HOST_STEPS = [
  { icon: "i-store", title: "Create your host account", text: "Venues, brands and student associations. Tell us who you are." },
  { icon: "i-clock", title: "Post an activity", text: "Pick a day, a group size and a price. We check it within a day." },
  { icon: "i-users", title: "Students say ci sto", text: "You see who is coming and approve each request. Partner plans are always labelled." },
];

function Steps({ steps }: { steps: { icon: string; title: string; text: string }[] }) {
  return (
    <ol className="steps">
      {steps.map((s, i) => (
        <li key={s.title} className="step">
          <span className="step-num">{i + 1}</span>
          <span className="icon-circle"><Use id={s.icon} size="sm" /></span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      <Sprite />
      <EntryHeader current="how" />
      <main className="how">
        <header className="how-head">
          <p className="eyebrow">How it works</p>
          <h1 className="home-title">Say ci sto. Show up. Meet people.</h1>
          <p className="home-sub">Ci Sto turns plans into small groups of Polimi students. Here is how it works for members and for hosts.</p>
        </header>

        <section className="how-block" aria-labelledby="how-members">
          <div className="how-block-head">
            <h2 id="how-members">For students</h2>
            <span className="badge badge-soft">Free</span>
          </div>
          <Steps steps={MEMBER_STEPS} />
          <Link className="btn btn-main" href={routes.signup}><Use id="i-arrow" />Become a member</Link>
        </section>

        <section className="how-block" aria-labelledby="how-hosts">
          <div className="how-block-head">
            <h2 id="how-hosts">For hosts</h2>
            <span className="badge badge-info">Partners</span>
          </div>
          <Steps steps={HOST_STEPS} />
          <Link className="btn btn-secondary" href={routes.host}><Use id="i-arrow" />Become a host</Link>
        </section>

        <section className="trust" aria-label="Our promises">
          <ul>
            <li><span className="icon-circle"><Use id="i-check" size="sm" /></span>Only verified Polimi students</li>
            <li><span className="icon-circle"><Use id="i-users" size="sm" /></span>Small groups of 3 to 8</li>
            <li><span className="icon-circle"><Use id="i-star" size="sm" /></span>Free for students</li>
            <li><span className="icon-circle"><Use id="i-store" size="sm" /></span>Partners always labelled</li>
          </ul>
        </section>
      </main>
    </>
  );
}
