import type { Metadata } from "next";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { WhoYouMet } from "@/components/member/WhoYouMet";
import { Nav } from "@/components/Nav";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Who did you click with" };

export default function WhoYouMetPage() {
  return (
    <>
      <Nav active="Chats" />
      <main className="page">
        <Link className="back" href={routes.chats}>
          <Icon name="chevronLeft" />
          Chats · Dolomites weekend · 12 Oct
        </Link>
        <div className="cols" style={{ gridTemplateColumns: "1fr 400px" }}>
          <WhoYouMet />
          <aside className="stack">
            <div className="plan-card">
              <div className="photo ph-dol" style={{ height: 200 }}></div>
              <div className="body">
                <div className="row" style={{ gap: 8 }}>
                  <span className="badge b-ink">Outdoor</span>
                  <span className="badge b-soft">Done</span>
                </div>
                <h3 style={{ fontSize: 20 }}>Dolomites weekend · Seceda</h3>
                <p className="helper" style={{ fontSize: 14, fontWeight: 600 }}>
                  Sat 11 – Sun 12 Oct · 8 of 8 went
                </p>
                <div className="row" style={{ gap: 28, alignItems: "flex-start" }}>
                  <div>
                    <span className="big-num" style={{ minWidth: 0 }}>
                      8
                    </span>
                    <p className="helper">people met</p>
                  </div>
                  <div>
                    <span className="big-num" style={{ minWidth: 0 }}>
                      4
                    </span>
                    <p className="helper">nationalities</p>
                  </div>
                  <div>
                    <span className="big-num" style={{ minWidth: 0 }}>
                      2
                    </span>
                    <p className="helper">already in your Cerchia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-line row" style={{ flexDirection: "row", padding: "16px 18px" }}>
              <span style={{ color: "var(--blue)" }}>
                <Icon name="lock" />
              </span>
              <p className="helper" style={{ fontSize: 14 }}>
                Your Cerchia is private. Nobody sees who you did not add.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
