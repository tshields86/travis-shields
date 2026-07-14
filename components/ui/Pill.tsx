/** A tech tag pill (mono, outlined). */
export function Pill({ children }: { children: string }) {
  return <span className="tag">{children}</span>;
}

/** Renders a row of tech pills from a string list. */
export function PillList({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <Pill key={item}>{item}</Pill>
      ))}
    </div>
  );
}
