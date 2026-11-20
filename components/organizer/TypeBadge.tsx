import type { PlanType } from "@/lib/organizer-data";

/** Social and Both use the ink badge, Pro the lime one (as in the mockups). */
export function TypeBadge({ type }: { type: PlanType }) {
  return <span className={`badge ${type === "Pro" ? "b-lime" : "b-ink"}`}>{type}</span>;
}
