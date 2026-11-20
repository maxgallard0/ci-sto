import type { CSSProperties } from "react";

// SVG symbols used by the landing pages. Render once per page, reference with <Use id="i-star" />.
export function Sprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="logo" viewBox="0 0 48 48">
        <g fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
          <path d="M39.32 11.14 A20 20 0 1 0 39.32 36.86" />
          <path d="M35.11 14.68 A14.5 14.5 0 1 0 35.11 33.32" />
          <path d="M30.89 18.21 A9 9 0 1 0 30.89 29.79" />
        </g>
      </symbol>
      <symbol id="i-check" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" /></symbol>
      <symbol id="i-star" viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></symbol>
      <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></symbol>
      <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></symbol>
      <symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.5-3.6 3.1-6 6.5-6s6 2.4 6.5 6" /><circle cx="17" cy="9" r="2.5" /><path d="M17 14c2.6 0 4.2 1.8 4.6 4.5" /></symbol>
      <symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 21c.8-4 4-6.5 8-6.5s7.2 2.5 8 6.5" /></symbol>
      <symbol id="i-store" viewBox="0 0 24 24"><path d="M4 9l1.5-5h13L20 9M4 9v11h16V9M4 9h16M9 20v-6h6v6" /></symbol>
      <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></symbol>
      <symbol id="i-x" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></symbol>
      <symbol id="i-info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5v.5" /></symbol>
    </svg>
  );
}

type Size = "" | "sm" | "xs";

/** Icon from the sprite. */
export function Use({ id, size = "", style }: { id: string; size?: Size; style?: CSSProperties }) {
  return (
    <svg className={`icon ${size}`.trim()} aria-hidden="true" style={style}>
      <use href={`#${id}`} />
    </svg>
  );
}

/** Logo mark from the sprite, sized by the parent's CSS. */
export function LogoMark({ color }: { color: string }) {
  return (
    <svg style={{ color }} aria-hidden="true">
      <use href="#logo" />
    </svg>
  );
}
