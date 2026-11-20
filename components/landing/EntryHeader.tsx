import Link from "next/link";

import { Logo } from "@/components/Logo";
import { routes } from "@/lib/routes";

type Current = "how" | "login" | "host" | "signup";

/** Header of the public pages. Every item is a real page. */
export function EntryHeader({ current }: { current?: Current }) {
  const here = (c: Current) => (current === c ? ("page" as const) : undefined);
  return (
    <header className="nav nav-entry">
      <Link className="logo" href={routes.landing} aria-label="Ci Sto home">
        <Logo />
      </Link>
      <nav className="nav-links" aria-label="Main">
        <Link href={routes.howItWorks} aria-current={here("how")}>How it works</Link>
        <Link href={routes.plans}>Find your plans</Link>
      </nav>
      <div className="nav-actions">
        <Link className="btn btn-text" href={routes.login} aria-current={here("login")}>Log in</Link>
        <Link className="btn btn-outline" href={routes.host} aria-current={here("host")}>Become a host</Link>
        <Link className="btn btn-secondary" href={routes.signup} aria-current={here("signup")}>Become a member</Link>
      </div>
    </header>
  );
}
