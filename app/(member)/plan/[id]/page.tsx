import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Icon } from "@/components/Icon";
import { JoinPlan } from "@/components/member/JoinPlan";
import { Nav } from "@/components/Nav";
import { plans } from "@/lib/member-data";
import { routes } from "@/lib/routes";

export const dynamicParams = false;

export function generateStaticParams() {
  return plans.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return { title: plans.find((p) => p.id === id)?.title ?? "Plan" };
}

/** One plan: what it is, when and where, who hosts it, and the Ci sto button. */
export default async function PlanPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const plan = plans.find((p) => p.id === id);
  if (!plan) notFound();

  return (
    <>
      <Nav active="Find your plans" />
      <main className="page">
        <Link className="btn-text" href={routes.findPlans} style={{ width: "fit-content" }}>
          ← All plans
        </Link>
        <div className="cols" style={{ gridTemplateColumns: "minmax(0, 1fr) 360px", alignItems: "start" }}>
          <section className="stack" style={{ gap: 20 }}>
            <div className={`photo ${plan.photo}`} role="img" aria-label="Plan photo" style={{ height: 320, borderRadius: 24 }}>
              <span className={`badge ${plan.badge}`}>{plan.kind}</span>
            </div>
            <h1 className="title">{plan.title}</h1>
            <p className="lead">{plan.about}</p>
            <div className="card card-line" style={{ gap: 12, padding: "18px 20px" }}>
              <span className="info"><Icon name="clock" />{plan.when}</span>
              <span className="info"><Icon name="pin" />{plan.where}</span>
              <span className="info"><Icon name="euro" />{plan.price}</span>
              <span className="info"><Icon name="users" />Hosted by {plan.host}</span>
            </div>
          </section>
          <aside className="stack">
            <JoinPlan id={plan.id} title={plan.title} fill={plan.fill} avatars={plan.avatars} />
            <Link className="row muted" href={`${routes.report}?plan=${plan.id}`} style={{ fontWeight: 700, minHeight: 44 }}>
              <Icon name="flag" className="i-sm" />
              Report this plan
            </Link>
          </aside>
        </div>
      </main>
    </>
  );
}
