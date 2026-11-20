import type { ReactNode } from "react";

import { EntryHeader } from "./EntryHeader";
import { Sprite, Use } from "./Sprite";

type Current = "login" | "host" | "signup";

/** Shared frame for sign-up and log-in pages: the form on the left, reassurance on the right. */
export function AuthPage({ current, points, children }: { current: Current; points: string[]; children: ReactNode }) {
  return (
    <>
      <Sprite />
      <EntryHeader current={current} />
      <main className="auth">
        <section className="auth-card">{children}</section>
        <aside className="auth-aside" aria-label="Why Ci Sto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/landing/aperitivo.jpg" alt="" />
          <ul>
            {points.map((p) => (
              <li key={p}><span className="icon-circle"><Use id="i-check" size="sm" /></span>{p}</li>
            ))}
          </ul>
        </aside>
      </main>
    </>
  );
}
