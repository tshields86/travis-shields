const navLinks = [
  { href: "#about", label: "About", hideOnMobile: true },
  { href: "#skills", label: "Skills", hideOnMobile: false },
  { href: "#work", label: "Work", hideOnMobile: false },
  { href: "#projects", label: "Projects", hideOnMobile: true },
  { href: "#say", label: "Contact", hideOnMobile: false },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap bar">
        <span className="sig">Travis Shields</span>
        <nav className="site-nav" aria-label="Primary">
          {navLinks.map(({ href, label, hideOnMobile }) => (
            <a key={href} href={href} className={hideOnMobile ? "hide" : undefined}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
