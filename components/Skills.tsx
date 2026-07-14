"use client";

import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { skillCategories } from "@/lib/content";

const MOBILE_QUERY = "(max-width: 560px)";

export function Skills() {
  // Accordions are collapsed on mobile and all-open on larger screens.
  const [openStates, setOpenStates] = useState<boolean[]>(() =>
    skillCategories.map(() => true),
  );

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const sync = () => setOpenStates(skillCategories.map(() => !mq.matches));
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section className="section" id="skills">
      <div className="wrap">
        <Reveal>
          <SectionHeading number="02" title="Skills & Technologies" />
          <div className="caps">
            {skillCategories.map((category, index) => (
              <details
                key={category.title}
                className={category.featured ? "cap cap-feat" : "cap"}
                open={openStates[index]}
                onToggle={(event) => {
                  const next = event.currentTarget.open;
                  setOpenStates((prev) =>
                    prev.map((value, i) => (i === index ? next : value)),
                  );
                }}
              >
                <summary>
                  <h3>{category.title}</h3>
                  <p className="blurb">{category.blurb}</p>
                  <span className="ind" aria-hidden="true" />
                </summary>
                <ul className="list">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
