"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Icon } from "@/components/Icon";
import { load } from "@/lib/demo-store";
import { notifications } from "@/lib/member-data";
import { routes } from "@/lib/routes";
import { Logo } from "@/components/Logo";

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

  // Notifications popover: closes on outside click or Escape.
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (box.current && !box.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="nav">
      <Link className="logo" href={routes.plans} aria-label="Ci Sto home">
        <Logo />
      </Link>
      <nav className="nav-links" aria-label="Main">
        {ITEMS.map(([label, href]) => (
          <Link key={label} href={href} aria-current={label === active ? "page" : undefined}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="nav-account">
        <Link className="icon-btn" href={routes.findPlans} aria-label="Search plans">
          <Icon name="search" />
        </Link>
        <div ref={box} style={{ position: "relative" }}>
          <button
            className="icon-btn"
            aria-label={seen ? "Notifications" : `Notifications, ${notifications.length} new`}
            aria-expanded={open}
            aria-haspopup="true"
            onClick={() => {
              setOpen((v) => !v);
              setSeen(true);
            }}
            style={{ position: "relative" }}
          >
            <Icon name="bell" />
            {!seen && (
              <span
                aria-hidden="true"
                style={{ position: "absolute", top: 8, right: 9, width: 9, height: 9, borderRadius: "50%", background: "var(--blue)", border: "2px solid var(--white)" }}
              />
            )}
          </button>
          {open && (
            <div
              role="dialog"
              aria-label="Notifications"
              style={{
                position: "absolute",
                right: 0,
                top: 52,
                width: 320,
                zIndex: 50,
                background: "var(--white)",
                borderRadius: 18,
                boxShadow: "0 18px 40px rgba(20, 20, 40, 0.16)",
                padding: 8,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {notifications.map((n) => (
                <Link
                  key={n.text}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  style={{ display: "flex", gap: 12, padding: "12px 14px", borderRadius: 12, fontSize: 14, fontWeight: 600, lineHeight: 1.35, color: "var(--ink)", textDecoration: "none" }}
                >
                  <span style={{ flex: 1 }}>{n.text}</span>
                  <span style={{ fontSize: 12, color: "var(--muted)", whiteSpace: "nowrap" }}>{n.when}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
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
