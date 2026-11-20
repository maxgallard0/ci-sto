"use client";

import Link from "next/link";
import { useState } from "react";

import { Icon } from "@/components/Icon";
import { ChipGroup, Chips, StaticForm } from "@/components/member/controls";
import { budgets, fieldsOfStudy, goals as initialGoals, interests as initialInterests, levels } from "@/lib/member-data";
import { routes } from "@/lib/routes";

// M2 form. "Show my plans · N picked" counts pressed chips in the Goals and Interests fields (data-count).
export function InterestsForm() {
  const [goals, setGoals] = useState(initialGoals);
  const [interests, setInterests] = useState(initialInterests);
  const picked = [...goals, ...interests].filter((c) => c.pressed).length;

  return (
    <StaticForm className="form" style={{ gap: 32 }}>
      <div className="field" data-count="">
        <span className="h-sec">Goals</span>
        <span className="helper">Pick as many as you like.</span>
        <ChipGroup items={goals} onChange={setGoals} />
      </div>
      <div className="field">
        <span className="h-sec">Field of study</span>
        <span className="helper">Used for Pro plans and to mix groups.</span>
        <Chips initial={fieldsOfStudy} />
      </div>
      <div className="field" data-count="">
        <span className="h-sec">Interests</span>
        <ChipGroup items={interests} onChange={setInterests} />
      </div>
      <div className="field">
        <span className="h-sec">Your level</span>
        <span className="helper">For outdoor and sport plans, so you join groups that fit you.</span>
        {levels.map((l) => (
          <div className="level-row" key={l.activity}>
            <b>{l.activity}</b>
            <Chips initial={l.chips} single />
          </div>
        ))}
      </div>
      <div className="field">
        <span className="h-sec">Budget per plan</span>
        <span className="helper">You can still see everything. We show these first.</span>
        <Chips initial={budgets} />
      </div>
      <div className="form-actions">
        <Link className="btn-text" href={routes.aboutYou}>
          Back
        </Link>
        <span className="spacer"></span>
        <Link className="btn-main" href={routes.plans}>
          <Icon name="check" />
          <span id="picked-count">Show my plans · {picked} picked</span>
        </Link>
      </div>
    </StaticForm>
  );
}
