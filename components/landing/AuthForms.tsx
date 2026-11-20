"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { save } from "@/lib/demo-store";
import { routes } from "@/lib/routes";

import { Use } from "./Sprite";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function nameFromEmail(email: string) {
  const first = email.split("@")[0].split(/[._-]/)[0] || "";
  return first.charAt(0).toUpperCase() + first.slice(1);
}

const field = (data: FormData, key: string) => String(data.get(key) ?? "").trim();

/** Become a member: Polimi email, then the 6-digit code, then profile setup. */
export function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const sendCode = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = field(new FormData(e.currentTarget), "email").toLowerCase();
    if (!EMAIL_RE.test(value)) return setError("Enter a valid email.");
    if (!value.endsWith("@mail.polimi.it")) return setError("Use your @mail.polimi.it address.");
    setError("");
    setEmail(value);
  };

  const verify = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = field(new FormData(e.currentTarget), "code");
    if (!/^\d{6}$/.test(code)) return setError("Enter the 6-digit code from the email.");
    save("name", nameFromEmail(email));
    save("email", email);
    router.push(routes.aboutYou);
  };

  if (email) {
    return (
      <form key="code" className="auth-form" noValidate onSubmit={verify}>
        <p className="eyebrow">Step 2 of 2</p>
        <h1>Check your inbox</h1>
        <p className="auth-lede">We sent a 6-digit code to <b>{email}</b>. It expires in 10 minutes.</p>
        <label className="field">Code<input name="code" inputMode="numeric" autoComplete="one-time-code" maxLength={6} placeholder="123456" autoFocus /></label>
        <div className="error" role="alert">{error}</div>
        <button className="btn btn-main btn-block" type="submit"><Use id="i-check" />Verify and continue</button>
        <button className="btn btn-text" type="button" onClick={() => { setEmail(""); setError(""); }}>Use a different email</button>
      </form>
    );
  }

  return (
    <form key="email" className="auth-form" noValidate onSubmit={sendCode}>
      <p className="eyebrow">Step 1 of 2</p>
      <h1>Become a member</h1>
      <p className="auth-lede">Free for Polimi students. Use your university email and we send you a code to verify it.</p>
      <label className="field">Polimi email<input type="email" name="email" placeholder="name.surname@mail.polimi.it" autoComplete="email" autoFocus /></label>
      <div className="error" role="alert">{error}</div>
      <button className="btn btn-main btn-block" type="submit"><Use id="i-arrow" />Send me a code</button>
      <p className="auth-switch">Already a member? <Link href={routes.login}>Log in</Link></p>
    </form>
  );
}

const HOST_TYPES = ["Bar or café", "Restaurant", "Brand", "Student association", "Other"];

/** Become a host: venue details, then a confirmation that opens the organizer area. */
export function HostForm() {
  const [venue, setVenue] = useState("");
  const [type, setType] = useState(HOST_TYPES[0]);
  const [error, setError] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = field(data, "venue");
    const email = field(data, "email").toLowerCase();
    if (!name) return setError("Tell us the name of your venue or organisation.");
    if (!EMAIL_RE.test(email)) return setError("Enter a valid work email.");
    save("venue", name);
    save("hostType", type);
    setVenue(name);
  };

  if (venue) {
    return (
      <div className="auth-form" role="status">
        <span className="choice-icon lime"><Use id="i-check" /></span>
        <h1>{venue} is in</h1>
        <p className="auth-lede">Your host account is ready. Post your first activity now; we check it within a day and then students can say ci sto.</p>
        <Link className="btn btn-secondary btn-block" href={routes.organize}><Use id="i-arrow" />Post your first activity</Link>
        <Link className="btn btn-text" href={routes.howItWorks}>How hosting works</Link>
      </div>
    );
  }

  return (
    <form className="auth-form" noValidate onSubmit={submit}>
      <p className="eyebrow">For partners</p>
      <h1>Become a host</h1>
      <p className="auth-lede">For venues, brands and associations. Tell us who you are and we set up your host account.</p>
      <label className="field">Venue or organisation<input name="venue" placeholder="Bar Lumen" autoFocus /></label>
      <fieldset className="field">
        <legend>What are you?</legend>
        <div className="chips">
          {HOST_TYPES.map((t) => (
            <button key={t} type="button" className="chip" aria-pressed={type === t} onClick={() => setType(t)}>{t}</button>
          ))}
        </div>
      </fieldset>
      <label className="field">Work email<input type="email" name="email" placeholder="hello@yourvenue.it" autoComplete="email" /></label>
      <div className="error" role="alert">{error}</div>
      <button className="btn btn-secondary btn-block" type="submit">Create host account</button>
      <p className="auth-switch">Already hosting? <Link href={routes.login}>Log in</Link></p>
    </form>
  );
}

/** Log in: members go to their plans, hosts to the organizer area. */
export function LoginForm() {
  const router = useRouter();
  const [as, setAs] = useState<"member" | "host">("member");
  const [error, setError] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = field(data, "email").toLowerCase();
    if (!EMAIL_RE.test(email)) return setError("Enter a valid email.");
    if (!data.get("password")) return setError("Enter your password.");
    save("name", nameFromEmail(email));
    router.push(as === "member" ? routes.plans : routes.organize);
  };

  return (
    <form className="auth-form" noValidate onSubmit={submit}>
      <h1>Welcome back</h1>
      <p className="auth-lede">Log in with the email you signed up with.</p>
      <div className="segmented" role="group" aria-label="Log in as">
        <button type="button" aria-pressed={as === "member"} onClick={() => setAs("member")}>Member</button>
        <button type="button" aria-pressed={as === "host"} onClick={() => setAs("host")}>Host</button>
      </div>
      <label className="field">Email<input type="email" name="email" placeholder={as === "member" ? "name.surname@mail.polimi.it" : "hello@yourvenue.it"} autoComplete="email" autoFocus /></label>
      <label className="field">Password<input type="password" name="password" autoComplete="current-password" /></label>
      <div className="error" role="alert">{error}</div>
      <button className="btn btn-secondary btn-block" type="submit">Log in</button>
      <p className="auth-switch">
        New here? <Link href={routes.signup}>Become a member</Link> or <Link href={routes.host}>become a host</Link>
      </p>
    </form>
  );
}
