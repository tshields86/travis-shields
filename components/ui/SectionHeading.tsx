interface SectionHeadingProps {
  /** Two-digit section number, e.g. "01". */
  number: string;
  title: string;
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="shead">
      <span className="n">{number}</span>
      <h2>{title}</h2>
    </div>
  );
}
