import { Icon, type IconName } from "./Icon";

interface IconLinkProps {
  href: string;
  label: string;
  icon: IconName;
}

/** An icon-only link with an accessible label and a ≥44px tap target. */
export function IconLink({ href, label, icon }: IconLinkProps) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Icon name={icon} />
    </a>
  );
}
