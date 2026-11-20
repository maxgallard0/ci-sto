import type { Metadata } from "next";

import { fontVars } from "@/lib/fonts";
import "@/styles/tokens.css";
import "@/styles/organizer.css";
import "@/styles/motion.css";
import "@/styles/logo.css";

export const metadata: Metadata = {
  title: { default: "Ci Sto", template: "%s · Ci Sto" },
  description: "Make a plan. Or just say Ci sto.",
};

// Each area is its own root layout so its stylesheet never leaks into the others.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVars}>
      <body>{children}</body>
    </html>
  );
}
