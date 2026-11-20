const STEPS = ["1 · Details", "2 · Preview", "3 · Publish"];

export function StepChips({ current }: { current: 1 | 2 | 3 }) {
  return (
    <div className="chips" aria-label="Steps">
      {STEPS.map((label, i) => (
        <span
          key={label}
          className="chip"
          aria-pressed={i + 1 === current ? "true" : undefined}
          aria-current={i + 1 === current ? "step" : undefined}
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
