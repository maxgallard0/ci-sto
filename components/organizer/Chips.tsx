"use client";

/** Single choice: pass `value`. Multiple choice: pass `values`. */
export function Chips<T extends string>(
  props: { options: readonly T[] } & (
    | { value: T; onChange: (v: T) => void; values?: never }
    | { values: string[]; onChange: (v: string[]) => void; value?: never }
  ),
) {
  const single = props.value !== undefined;
  const isOn = (o: T) => (single ? props.value === o : props.values!.includes(o));
  const toggle = (o: T) => {
    if (props.value !== undefined) (props.onChange as (v: T) => void)(o);
    else {
      const vs = props.values!;
      (props.onChange as (v: string[]) => void)(vs.includes(o) ? vs.filter((x) => x !== o) : [...vs, o]);
    }
  };
  return (
    <div className="chips">
      {props.options.map((o) => (
        <button key={o} type="button" className="chip" aria-pressed={isOn(o)} onClick={() => toggle(o)}>
          {o}
        </button>
      ))}
    </div>
  );
}
