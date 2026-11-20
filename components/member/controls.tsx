"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

import { Icon } from "@/components/Icon";
import type { ChipItem } from "@/lib/member-data";

// Applies the member.js chip rules: single choice in a `single` group, multiple choice otherwise,
// and static chips never toggle.
export function toggleChip(items: ChipItem[], index: number, single: boolean): ChipItem[] {
  const chip = items[index];
  if (!chip || chip.static) return items;
  return items.map((c, i) => {
    if (i === index) return { ...c, pressed: single ? true : !c.pressed };
    return single ? { ...c, pressed: false } : c;
  });
}

// Controlled chip group, for screens that need the pressed state (counts).
export function ChipGroup({
  items,
  onChange,
  single = false,
  style,
}: {
  items: ChipItem[];
  onChange: (next: ChipItem[]) => void;
  single?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div className="chips" role="group" data-single={single ? "" : undefined} style={style}>
      {items.map((c, i) => (
        <button
          key={c.label}
          className="chip"
          aria-pressed={c.pressed}
          data-static={c.static ? "" : undefined}
          onClick={() => onChange(toggleChip(items, i, single))}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}

// Uncontrolled chip group: keeps its own state.
export function Chips({ initial, single = false, style }: { initial: ChipItem[]; single?: boolean; style?: CSSProperties }) {
  const [items, setItems] = useState(initial);
  return <ChipGroup items={items} onChange={setItems} single={single} style={style} />;
}

export function Switch({ initial, label }: { initial: boolean; label: string }) {
  const [on, setOn] = useState(initial);
  return <button className="switch" role="switch" aria-checked={on} aria-label={label} onClick={() => setOn((v) => !v)} />;
}

export function Seg({ options, label }: { options: string[]; label: string }) {
  const [active, setActive] = useState(0);
  return (
    <div className="seg" role="group" aria-label={label}>
      {options.map((o, i) => (
        <button key={o} aria-pressed={i === active} onClick={() => setActive(i)}>
          {o}
        </button>
      ))}
    </div>
  );
}

export function Stars({ initial, total = 5 }: { initial: number; total?: number }) {
  const [value, setValue] = useState(initial);
  return (
    <div className="stars" role="group" aria-label="Rating">
      {Array.from({ length: total }, (_, i) => (
        <button key={i} className={i < value ? "on" : ""} aria-label={`${i + 1} stars`} onClick={() => setValue(i + 1)}>
          <Icon name="star" />
        </button>
      ))}
    </div>
  );
}

export function AddBack() {
  const [added, setAdded] = useState(false);
  if (added)
    return (
      <span className="badge b-lime" role="status">
        In your Cerchia
      </span>
    );
  return (
    <button className="btn-lime-sm" data-add-back="" onClick={() => setAdded(true)}>
      <Icon name="plus" className="i-sm" />
      Add back
    </button>
  );
}

export function ConfirmBox() {
  const [answer, setAnswer] = useState<"" | "in" | "out">("");
  return (
    <div className="confirm" id="confirm-box">
      {answer ? (
        <div className="row" style={{ gap: 12 }}>
          <p role="status" className="spacer" style={{ color: answer === "in" ? "var(--lime)" : "var(--white)", fontWeight: 800, fontSize: 17 }}>
            {answer === "in"
              ? "You're in. See you tomorrow at 18:30."
              : "Spot freed. The next person on the waiting list gets it. Thanks for saying so early."}
          </p>
          <button type="button" className="btn-outline-dark" onClick={() => setAnswer("")}>
            Undo
          </button>
        </div>
      ) : (
        <>
          <b style={{ fontSize: 18 }}>Tomorrow at 18:30. Still in?</b>
          <p>
            Confirming keeps your reliability badge. Can&apos;t make it? Say so now and free your spot for someone on the waiting list.
          </p>
          <div className="row">
            <button type="button" className="btn-lime" id="confirm-yes" onClick={() => setAnswer("in")}>
              Yes, I&apos;m in
            </button>
            <button type="button" className="btn-outline-dark" onClick={() => setAnswer("out")}>
              Can&apos;t make it
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// The mockups use onsubmit="return false"; this keeps forms from navigating.
export function StaticForm({ className, style, children }: { className?: string; style?: CSSProperties; children: ReactNode }) {
  return (
    <form className={className} style={style} onSubmit={(e) => e.preventDefault()}>
      {children}
    </form>
  );
}
