import { social } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <span className="mono">© {year} Travis Shields · Open to new roles</span>
        <span>
          <a href={social.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{" "}
          ·{" "}
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{" "}
          ·{" "}
          <a href={`mailto:${social.email}`}>Email</a>
        </span>
      </div>
    </footer>
  );
}
