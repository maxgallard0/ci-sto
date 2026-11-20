"use client";

import { useCallback, useEffect, useState } from "react";

import { load, save } from "@/lib/demo-store";
import { DEFAULT_DRAFT, ORGANIZER, type PlanDraft } from "@/lib/organizer-data";

const KEY = "draft";

/**
 * The plan draft shared by every organizer step. It starts from the default
 * draft, then loads the saved one from the browser after mount.
 * `update` changes it in memory; `persist` writes it to storage.
 */
export function useDraft() {
  const [draft, setDraft] = useState<PlanDraft>(DEFAULT_DRAFT);

  useEffect(() => {
    const raw = load(KEY);
    if (!raw) return;
    try {
      setDraft({ ...DEFAULT_DRAFT, ...(JSON.parse(raw) as Partial<PlanDraft>) });
    } catch {
      /* Broken JSON: keep the default draft. */
    }
  }, []);

  const update = useCallback((patch: Partial<PlanDraft>) => {
    setDraft((prev) => ({ ...prev, ...patch }));
  }, []);

  const persist = useCallback((value: PlanDraft) => {
    save(KEY, JSON.stringify(value));
  }, []);

  return { draft, update, persist, organizer: ORGANIZER };
}
