"use client";

import { useRef, useState, type KeyboardEvent } from "react";

import { Icon } from "@/components/Icon";
import { ChipGroup } from "@/components/member/controls";
import type { ChipItem } from "@/lib/member-data";

/** Profile photo: pick an image and see it in the avatar right away. */
export function PhotoUpload({ initials }: { initials: string }) {
  const input = useRef<HTMLInputElement>(null);
  const [src, setSrc] = useState("");
  return (
    <div className="row" style={{ gap: 20 }}>
      <span
        className="avatar avatar-lg a3"
        style={src ? { backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center", color: "transparent" } : undefined}
      >
        {initials}
      </span>
      <div style={{ flex: 1 }}>
        <b className="h-sec">Profile photo</b>
        <p className="helper">{src ? "Looking good. You can change it any time." : "Optional. A clear photo of your face builds trust with organizers."}</p>
      </div>
      <input
        ref={input}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) setSrc(URL.createObjectURL(file));
        }}
      />
      <button className="btn-sec" type="button" onClick={() => input.current?.click()}>
        <Icon name="upload" />
        {src ? "Change photo" : "Upload photo"}
      </button>
    </div>
  );
}

const LEVELS = ["Native", "Fluent", "Learning"];

/** Languages: toggle chips, or add a new language with a level. */
export function LanguageChips({ initial }: { initial: ChipItem[] }) {
  const [items, setItems] = useState(initial);
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState("");
  const [level, setLevel] = useState(LEVELS[2]);

  const add = () => {
    const clean = name.trim();
    if (!clean) return;
    const lang = clean.charAt(0).toUpperCase() + clean.slice(1);
    const label = `${lang} · ${level}`;
    if (!items.some((c) => c.label.toLowerCase() === label.toLowerCase())) setItems((xs) => [...xs, { label, pressed: true }]);
    setName("");
    setAdding(false);
  };
  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      add();
    }
    if (e.key === "Escape") setAdding(false);
  };

  return (
    <>
      <ChipGroup items={items} onChange={setItems} />
      {adding ? (
        <div className="row" style={{ gap: 10, flexWrap: "wrap" }}>
          <label className="sr-only" htmlFor="f-lang">
            Language
          </label>
          <input className="input" id="f-lang" placeholder="e.g. Portuguese" value={name} onChange={(e) => setName(e.target.value)} onKeyDown={onKey} autoFocus style={{ maxWidth: 220 }} />
          <div className="chips" role="group" aria-label="Level">
            {LEVELS.map((l) => (
              <button key={l} type="button" className="chip" aria-pressed={level === l} onClick={() => setLevel(l)}>
                {l}
              </button>
            ))}
          </div>
          <button type="button" className="btn-sec" onClick={add} disabled={!name.trim()}>
            Add
          </button>
          <button type="button" className="btn-text" onClick={() => setAdding(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <button className="btn-text" type="button" style={{ width: "fit-content" }} onClick={() => setAdding(true)}>
          <Icon name="plus" className="i-sm" />
          Add a language
        </button>
      )}
    </>
  );
}
