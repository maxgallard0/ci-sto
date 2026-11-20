import Link from "next/link";

import { routes } from "@/lib/routes";

import { EntryHeader } from "./EntryHeader";
import { LogoMark, Sprite, Use } from "./Sprite";

/** Public entry page. Sign-up and log-in live on their own pages. */
export function Entry() {
  return (
    <>
      <Sprite />

      <EntryHeader />

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="badge badge-lime"><Use id="i-star" size="xs" />Live at Politecnico di Milano</span>
            <h1 className="hero-title">Find your plans.<br />Find your <span>people.</span></h1>
            <p className="hero-lede">Swipe on plans, not people. From an aperitivo on the Navigli to a weekend in the Dolomites: say ci sto and meet students who like what you like.</p>

            <div className="choose">
              <article className="choice">
                <div className="choice-top">
                  <span className="choice-icon lime"><Use id="i-user" /></span>
                  <span className="badge badge-soft">Free for students</span>
                </div>
                <h2>Become a member</h2>
                <p>For students with an @mail.polimi.it email. Swipe on plans, join the chat, grow your Cerchia.</p>
                <Link className="btn btn-main btn-block" href={routes.signup}><Use id="i-arrow" />Become a member</Link>
              </article>
              <article className="choice">
                <div className="choice-top">
                  <span className="choice-icon tint"><Use id="i-store" /></span>
                  <span className="badge badge-info">Partners</span>
                </div>
                <h2>Become a host</h2>
                <p>For venues, brands and associations. Post activities, fill your slow days, see who is coming.</p>
                <Link className="btn btn-secondary btn-block" href={routes.host}><Use id="i-arrow" />Become a host</Link>
              </article>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hero-photo" src="/landing/aperitivo.jpg" alt="" />
            <span className="badge badge-lime">Under €10</span>
            <div className="float-pill"><LogoMark color="var(--lime)" />Lucía joined your Cerchia</div>
            <div className="float-card">
              <span className="badge badge-ink">Social</span>
              <h3>Aperitivo on the Navigli</h3>
              <div className="row"><Use id="i-clock" size="sm" />Today · 19:00</div>
              <div className="row gap-12">
                <div className="avatars">
                  <span className="avatar a1">LU</span>
                  <span className="avatar a2">MA</span>
                  <span className="avatar a3">SO</span>
                  <span className="avatar a4">KE</span>
                </div>
                <span className="muted strong">7 of 10 going</span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust" id="how" aria-label="How it works">
          <ul>
            <li><span className="icon-circle"><Use id="i-check" size="sm" /></span>Only verified Polimi students</li>
            <li><span className="icon-circle"><Use id="i-users" size="sm" /></span>Small groups of 3 to 8</li>
            <li><span className="icon-circle"><Use id="i-star" size="sm" /></span>Free for students</li>
            <li><span className="icon-circle"><Use id="i-store" size="sm" /></span>Partners always labelled</li>
          </ul>
          <Link className="btn btn-text" href={routes.howItWorks}>See how it works<Use id="i-arrow" size="sm" /></Link>
        </section>
      </main>

    </>
  );
}
