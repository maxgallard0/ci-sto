"use client";

import { Icon } from "@/components/Icon";
import { GROUP_MAX, GROUP_MIN } from "@/lib/organizer-data";

export function Stepper({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const step = (d: number) => onChange(Math.min(GROUP_MAX, Math.max(GROUP_MIN, value + d)));
  return (
    <div className="stepper">
      <button
        type="button"
        className="round-btn"
        aria-label="Fewer people"
        disabled={value <= GROUP_MIN}
        onClick={() => step(-1)}
      >
        <Icon name="minus" />
      </button>
      <span className="big-num" aria-live="polite">
        {value} people
      </span>
      <button
        type="button"
        className="round-btn"
        aria-label="More people"
        disabled={value >= GROUP_MAX}
        onClick={() => step(1)}
      >
        <Icon name="plus" />
      </button>
    </div>
  );
}
