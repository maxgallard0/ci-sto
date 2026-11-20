"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { Icon } from "@/components/Icon";
import {
  AUDIENCES,
  GROUP_MAX,
  GROUP_MIN,
  PLAN_TYPES,
  PRICE_KINDS,
  priceLine,
  vibe,
  whenLine,
} from "@/lib/organizer-data";
import { routes } from "@/lib/routes";

import { Chips } from "./Chips";
import { Stepper } from "./Stepper";
import { Switch } from "./Switch";
import { TypeBadge } from "./TypeBadge";
import { useDraft } from "./useDraft";

export function PlanDetailsForm() {
  const router = useRouter();
  const { draft, update, persist, organizer } = useDraft();
  const [saved, setSaved] = useState(false);

  const set = (patch: Parameters<typeof update>[0]) => {
    setSaved(false);
    update(patch);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    persist(draft);
    router.push(routes.previewPublish);
  };

  const onFile = (file: File | undefined) => {
    if (!file) return;
    set({ cover: { name: file.name, sizeMb: Math.round((file.size / 1024 / 1024) * 10) / 10 } });
  };

  const v = vibe(draft);

  return (
    <div className="cols">
      <form className="form" onSubmit={onSubmit}>
        <div className="field">
          <span className="label">Type of plan</span>
          <Chips options={PLAN_TYPES} value={draft.type} onChange={(type) => set({ type })} />
        </div>

        <div className="field">
          <label htmlFor="f-title">Title</label>
          <input
            id="f-title"
            className="input"
            value={draft.title}
            maxLength={60}
            onChange={(e) => set({ title: e.target.value })}
          />
          <p className="helper">Short and concrete. Up to 60 characters.</p>
        </div>

        <div className="field">
          <label htmlFor="f-desc">Description</label>
          <textarea
            id="f-desc"
            className="input"
            maxLength={300}
            value={draft.description}
            onChange={(e) => set({ description: e.target.value })}
          />
          <div className="row">
            <p className="helper">What will you do? Who will enjoy it?</p>
            <span className="spacer"></span>
            <span className="helper">{draft.description.length} / 300</span>
          </div>
        </div>

        <div className="field">
          <span className="label">Cover photo</span>
          {draft.cover ? (
            <div className="upload">
              <div className="photo" style={{ width: 176, height: 110 }}>
                {draft.cover.name}
              </div>
              <div className="stack" style={{ gap: 4 }}>
                <strong>{draft.cover.name}</strong>
                <span className="ok">{draft.cover.sizeMb} MB · landscape · looks good</span>
                <div className="row" style={{ gap: 16 }}>
                  <label className="btn-text">
                    Replace
                    <input
                      type="file"
                      accept="image/png,image/jpeg"
                      className="sr-only"
                      onChange={(e) => onFile(e.target.files?.[0])}
                    />
                  </label>
                  <button type="button" className="btn-text" onClick={() => set({ cover: null })}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="upload upload-empty">
              <span className="ic">
                <Icon name="upload" className="i-blue" />
              </span>
              <div className="stack" style={{ gap: 2, flex: 1 }}>
                <strong>Drag a photo here or browse</strong>
                <span className="helper">JPG or PNG, landscape, up to 10 MB</span>
              </div>
              <label className="btn-sec">
                Browse files
                <input
                  type="file"
                  accept="image/png,image/jpeg"
                  className="sr-only"
                  onChange={(e) => onFile(e.target.files?.[0])}
                />
              </label>
            </div>
          )}
          <p className="helper">Use a photo of the place or the activity. No photos of people without their consent.</p>
        </div>

        <div className="grid-3">
          <div className="field">
            <label htmlFor="f-date">Date</label>
            <input id="f-date" className="input" value={draft.date} onChange={(e) => set({ date: e.target.value })} />
          </div>
          <div className="field">
            <label htmlFor="f-start">Starts</label>
            <input id="f-start" className="input" value={draft.start} onChange={(e) => set({ start: e.target.value })} />
          </div>
          <div className="field">
            <label htmlFor="f-end">Ends</label>
            <input id="f-end" className="input" value={draft.end} onChange={(e) => set({ end: e.target.value })} />
          </div>
        </div>

        <div className="grid-venue">
          <div className="field">
            <label htmlFor="f-venue">Public venue</label>
            <input id="f-venue" className="input" value={draft.venue} onChange={(e) => set({ venue: e.target.value })} />
            <p className="helper">Only public places. Approved members see the exact meeting point.</p>
          </div>
          <div className="field">
            <label htmlFor="f-hood">Neighbourhood</label>
            <input
              id="f-hood"
              className="input"
              value={draft.neighbourhood}
              onChange={(e) => set({ neighbourhood: e.target.value })}
            />
            <p className="helper">Used by the neighbourhood filter.</p>
          </div>
        </div>

        <div className="field">
          <span className="label">Group size</span>
          <Stepper value={draft.size} onChange={(size) => set({ size })} />
          <p className="helper">
            {GROUP_MIN} to {GROUP_MAX}. Small enough to talk to everyone.
          </p>
        </div>

        <div className="field">
          <span className="label">Price per person</span>
          <p className="helper">Members filter by price, so pick the closest option.</p>
          <Chips options={PRICE_KINDS} value={draft.priceKind} onChange={(priceKind) => set({ priceKind })} />
          {draft.priceKind === "Set a price" && (
            <div className="grid-price">
              <div className="field">
                <label htmlFor="f-amount">Amount</label>
                <input
                  id="f-amount"
                  className="input"
                  value={draft.amount}
                  onChange={(e) => set({ amount: e.target.value })}
                />
              </div>
              <div className="field">
                <label htmlFor="f-pay">How people pay</label>
                <input
                  id="f-pay"
                  className="input"
                  value={draft.payment}
                  onChange={(e) => set({ payment: e.target.value })}
                />
              </div>
            </div>
          )}
        </div>

        <div className="field">
          <span className="label">Who is it for</span>
          <p className="helper">Pick what fits. This helps the right people find your plan.</p>
          <Chips options={AUDIENCES} values={draft.audience} onChange={(audience) => set({ audience })} />
          <div className="toggle-row">
            <Switch checked={draft.womenOnly} onChange={(womenOnly) => set({ womenOnly })} labelledBy="wo-label" />
            <div>
              <b id="wo-label">Women only</b>
              <p className="helper">Only women can see and join this plan.</p>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="btn-text"
            onClick={() => {
              persist(draft);
              setSaved(true);
            }}
          >
            {saved ? "Draft saved" : "Save draft"}
          </button>
          <span className="spacer"></span>
          <button type="submit" className="btn-main">
            Preview plan
          </button>
        </div>
      </form>

      <aside className="stack" style={{ gap: 12, position: "sticky", top: 24 }}>
        <p className="eyebrow">How members will see it</p>
        <article className="card card-line" style={{ padding: 0, overflow: "hidden", gap: 0 }}>
          <div className="photo photo-top">{draft.cover ? draft.cover.name : "Cover photo"}</div>
          <div className="stack" style={{ padding: 22, gap: 14 }}>
            <TypeBadge type={draft.type} />
            <h2 className="title-card" id="pv-title">
              {draft.title || "Your plan title"}
            </h2>
            <p className="info">
              <Icon name="calendar" />
              {whenLine(draft)}
            </p>
            <p className="info">
              <Icon name="pin" />
              {draft.venue}
            </p>
            <p className="info">
              <Icon name="users" />
              <span id="pv-size">0 of {draft.size} going · small group</span>
            </p>
            <p className="info">
              <Icon name="euro" />
              {priceLine(draft)}
            </p>
            <p className="notice">
              {v ? `Vibe: ${v}. ` : ""}Organized by {organizer.name}, {organizer.field}.
            </p>
          </div>
        </article>
        <p className="helper">Updates as you type. Women only and the exact meeting point are not shown here.</p>
      </aside>
    </div>
  );
}
