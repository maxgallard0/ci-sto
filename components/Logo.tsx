import type { CSSProperties } from "react";

// Ci Sto wordmark: a hand making the "C" (an OK gesture) followed by "i STO".
// Each part is its own group so styles/logo.css can animate the hand, the letters and the colours.
export function Logo({ className = "" }: { className?: string }) {
  const part = (i: number) => ({ "--i": i } as CSSProperties);
  return (
    <svg className={`cisto-logo ${className}`} viewBox="120 340 820 650" role="img" aria-label="Ci Sto">
      <g className="lg-hand lg-part" style={part(0)} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* Wrist and palm */}
        <path stroke="none" d="M137 600 L265 600 L268 950 Q268 978 242 978 L160 978 Q132 978 134 950 Z" />
        <path stroke="none" d="M140 612 L188 574 L205 545 L258 512 L300 515 L262 650 Z" />
        {/* Little finger, ring finger, middle finger */}
        <line className="lg-finger" strokeWidth="54" x1="161" y1="468" x2="161" y2="640" />
        <line className="lg-finger lg-f2" strokeWidth="56" x1="243" y1="392" x2="232" y2="600" />
        <line className="lg-finger lg-f3" strokeWidth="48" x1="344" y1="414" x2="282" y2="520" />
        {/* Thumb and index finger closing into the C */}
        <path className="lg-c" fill="none" strokeWidth="62" d="M430 510 A146 146 0 1 0 438 800" />
      </g>
      <g className="lg-letter lg-part" style={part(1)} fill="currentColor" stroke="currentColor" strokeLinecap="round">
        <circle className="lg-dot" cx="513" cy="543" r="27" stroke="none" />
        <line strokeWidth="32" x1="504" y1="614" x2="496" y2="732" />
      </g>
      <g className="lg-letter lg-part" style={part(2)} fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
        <path d="M645 604 C612 616 604 644 628 660 C660 680 676 694 660 722 C642 744 606 738 597 714" />
      </g>
      <g className="lg-letter lg-part" style={part(3)} fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round">
        <line x1="704" y1="613" x2="776" y2="613" />
        <line x1="738" y1="616" x2="733" y2="722" />
      </g>
      <g className="lg-letter lg-part" style={part(4)} fill="none" stroke="currentColor" strokeWidth="32">
        <ellipse cx="859" cy="664" rx="42" ry="58" />
      </g>
    </svg>
  );
}
