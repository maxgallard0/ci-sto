"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, type FormEvent, type RefObject } from "react";

import { save } from "@/lib/demo-store";
import { routes } from "@/lib/routes";

import { LogoMark, Sprite, Use } from "./Sprite";
import { Logo } from "@/components/Logo";

type Flow = "member" | "host" | "login";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function nameFromEmail(email: string) {
  const first = email.split("@")[0].split(/[._-]/)[0] || "";
  return first.charAt(0).toUpperCase() + first.slice(1);
}

/** Public entry page: marketing hero plus the sign-up and log-in dialogs. */
export function Entry() {
  const router = useRouter();
  const dialogs: Record<Flow, RefObject<HTMLDialogElement | null>> = {
    member: useRef<HTMLDialogElement>(null),
    host: useRef<HTMLDialogElement>(null),
    login: useRef<HTMLDialogElement>(null),
  };
  const [errors, setErrors] = useState<Record<Flow, string>>({ member: "", host: "", login: "" });
  const [hostDone, setHostDone] = useState(false);

  const open = (flow: Flow) => {
    const d = dialogs[flow].current;
    if (!d?.showModal) return;
    d.showModal();
    d.querySelector("input")?.focus();
  };
  const close = (flow: Flow) => dialogs[flow].current?.close();
  const setError = (flow: Flow, msg: string) => setErrors((e) => ({ ...e, [flow]: msg }));

  const submit = (flow: Flow) => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(flow, "");
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "").trim().toLowerCase();
    if (!EMAIL_RE.test(email)) return setError(flow, "Enter a valid email.");
    if (flow === "member" && !email.endsWith("@mail.polimi.it")) return setError(flow, "Use your @mail.polimi.it address.");
    if (flow === "host") {
      if (!String(data.get("venue") ?? "").trim()) return setError(flow, "Tell us the name of your venue.");
      setHostDone(true);
      return;
    }
    if (flow === "login" && !data.get("password")) return setError(flow, "Enter your password.");
    save("name", nameFromEmail(email));
    // New members go to profile setup; returning users go to their plans.
    router.push(flow === "member" ? routes.aboutYou : routes.plans);
  };

  const closeBtn = (flow: Flow) => (
    <button className="icon-btn soft dialog-close" type="button" aria-label="Close" onClick={() => close(flow)}>
      <Use id="i-x" size="sm" />
    </button>
  );

  return (
    <>
      <Sprite />

      <header className="nav nav-entry">
        <Link className="logo" href={routes.landing} aria-label="Ci Sto home">
          <Logo />
        </Link>
        <nav className="nav-links" aria-label="Main">
          <a href="#how">How it works</a>
          <Link href={routes.plans}>Find your plans</Link>
        </nav>
        <div className="nav-actions">
          <button className="btn btn-text" onClick={() => open("login")}>Log in</button>
          <button className="btn btn-outline" onClick={() => open("host")}>Become a host</button>
          <button className="btn btn-secondary" onClick={() => open("member")}>Become a member</button>
        </div>
      </header>

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
                <button className="btn btn-main btn-block" onClick={() => open("member")}><Use id="i-arrow" />Become a member</button>
              </article>
              <article className="choice">
                <div className="choice-top">
                  <span className="choice-icon tint"><Use id="i-store" /></span>
                  <span className="badge badge-info">Partners</span>
                </div>
                <h2>Become a host</h2>
                <p>For venues, brands and associations. Post activities, fill your slow days, see who is coming.</p>
                <button className="btn btn-secondary btn-block" onClick={() => open("host")}><Use id="i-arrow" />Become a host</button>
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
        </section>
      </main>

      {/* Sign up / log in dialogs */}
      <dialog ref={dialogs.member} id="dlg-member" aria-labelledby="dlg-member-title">
        {closeBtn("member")}
        <form noValidate onSubmit={submit("member")}>
          <h2 id="dlg-member-title">Become a member</h2>
          <p>Use your university email. We send you a code to verify it.</p>
          <label className="field">Polimi email<input type="email" name="email" placeholder="name.surname@mail.polimi.it" autoComplete="email" required /></label>
          <div className="error" role="alert">{errors.member}</div>
          <button className="btn btn-main btn-block" type="submit"><Use id="i-check" />Continue</button>
        </form>
      </dialog>

      <dialog ref={dialogs.host} id="dlg-host" aria-labelledby="dlg-host-title">
        {closeBtn("host")}
        <form noValidate onSubmit={submit("host")} hidden={hostDone}>
          <h2 id="dlg-host-title">Become a host</h2>
          <p>Tell us where you are and we set up your partner account.</p>
          <label className="field">Venue or organisation<input type="text" name="venue" placeholder="Bar Lumen" required /></label>
          <label className="field">Work email<input type="email" name="email" placeholder="hello@yourvenue.it" autoComplete="email" required /></label>
          <div className="error" role="alert">{errors.host}</div>
          <button className="btn btn-secondary btn-block" type="submit">Create host account</button>
        </form>
        <div className="notice" role="status" hidden={!hostDone}>Done. Check your inbox to finish setting up your venue.</div>
      </dialog>

      <dialog ref={dialogs.login} id="dlg-login" aria-labelledby="dlg-login-title">
        {closeBtn("login")}
        <form noValidate onSubmit={submit("login")}>
          <h2 id="dlg-login-title">Welcome back</h2>
          <p>Log in with the email you signed up with.</p>
          <label className="field">Email<input type="email" name="email" placeholder="name.surname@mail.polimi.it" autoComplete="email" required /></label>
          <label className="field">Password<input type="password" name="password" autoComplete="current-password" required /></label>
          <div className="error" role="alert">{errors.login}</div>
          <button className="btn btn-secondary btn-block" type="submit">Log in</button>
        </form>
      </dialog>
    </>
  );
}
