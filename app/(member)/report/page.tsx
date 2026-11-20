import type { Metadata } from "next";
import { Suspense } from "react";

import { ReportForm } from "@/components/member/ReportForm";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = { title: "Report a problem" };

export default function ReportPage() {
  return (
    <>
      <Nav />
      <main className="page" style={{ maxWidth: 720 }}>
        <Suspense>
          <ReportForm />
        </Suspense>
      </main>
    </>
  );
}
