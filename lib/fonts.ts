import { Bricolage_Grotesque, Figtree } from "next/font/google";

// Exposed as CSS variables; styles/tokens.css reads them through --font-title and --font-ui.
export const title = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--nf-title",
  display: "swap",
});

export const ui = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--nf-ui",
  display: "swap",
});

export const fontVars = `${title.variable} ${ui.variable}`;
