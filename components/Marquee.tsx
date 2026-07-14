import { metrics } from "@/lib/content";

/**
 * Full-bleed cobalt band with an infinite horizontal scroll of metrics.
 * The list is duplicated so the -50% translate loops seamlessly; the second
 * copy is hidden from assistive tech (and under prefers-reduced-motion).
 */
export function Marquee() {
  return (
    <div className="band">
      <div className="track">
        {metrics.map((metric) => (
          <span key={metric.label}>
            {metric.value} <b>{metric.label}</b>
          </span>
        ))}
        {metrics.map((metric) => (
          <span key={`dup-${metric.label}`} aria-hidden="true">
            {metric.value} <b>{metric.label}</b>
          </span>
        ))}
      </div>
    </div>
  );
}
