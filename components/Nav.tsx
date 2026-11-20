"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Icon } from "@/components/Icon";
import { load } from "@/lib/demo-store";
import { routes } from "@/lib/routes";

export type NavItem = "Find your plans" | "Organize" | "Chats" | "Cerchia";

const ITEMS: [NavItem, string][] = [
  ["Find your plans", routes.plans],
  ["Organize", routes.organize],
  ["Chats", routes.chats],
  ["Cerchia", routes.cerchia],
];

/** One top navigation for every signed-in page. Each area stylesheet styles .nav the same way. */
export function Nav({ active }: { active?: NavItem }) {
  const [name, setName] = useState("Camila");
  useEffect(() => {
    const saved = load("name");
    if (saved) setName(saved);
  }, []);

  return (
    <header className="nav">
      <Link className="logo" href={routes.plans}>
        <span className="logo-mark" aria-hidden="true" />
        Ci Sto
      </Link>
      <nav className="nav-links" aria-label="Main">
        {ITEMS.map(([label, href]) => (
          <Link key={label} href={href} aria-current={label === active ? "page" : undefined}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="nav-account">
        <button className="icon-btn" aria-label="Search">
          <Icon name="search" />
        </button>
        <button className="icon-btn" aria-label="Notifications">
          <Icon name="bell" />
        </button>
        <Link className="me" href={routes.landing} title="Log out">
          <span className="avatar" style={{ width: 36, height: 36, fontSize: 13 }}>
            {name.slice(0, 2).toUpperCase()}
          </span>
          {name}
        </Link>
      </div>
    </header>
  );
}
