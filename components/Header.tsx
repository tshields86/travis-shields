"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About", hideOnMobile: true },
  { href: "#skills", label: "Skills", hideOnMobile: false },
  { href: "#work", label: "Work", hideOnMobile: false },
  { href: "#projects", label: "Projects", hideOnMobile: true },
  { href: "#say", label: "Contact", hideOnMobile: false },
];

const sectionIds = navLinks.map((link) => link.href.slice(1));

export function Header() {
  // Scroll-spy: highlight the nav item for the section currently in view.
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const visibility = new Map<string, boolean>();
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.isIntersecting);
        }
        // Topmost section crossing the middle band wins.
        const current = sectionIds.find((id) => visibility.get(id));
        if (current) setActiveId(current);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="wrap bar">
        <a href="#top" className="sig" aria-label="Travis Shields — back to top">
          Travis Shields
        </a>
        <nav className="site-nav" aria-label="Primary">
          {navLinks.map(({ href, label, hideOnMobile }) => {
            const isActive = activeId === href.slice(1);
            const className = [hideOnMobile ? "hide" : "", isActive ? "active" : ""]
              .filter(Boolean)
              .join(" ");
            return (
              <a
                key={href}
                href={href}
                className={className || undefined}
                aria-current={isActive ? "true" : undefined}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
