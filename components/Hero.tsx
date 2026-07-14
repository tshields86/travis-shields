import { IconLink } from "@/components/ui/IconLink";
import { social } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="meta">
          <span className="avail">
            <span className="dot" aria-hidden="true" />
            Open to new roles
          </span>
          <span className="mono">Director of Engineering</span>
          <span className="mono">New York City</span>
        </div>

        <h1 className="name">
          Trav<span className="o">i</span>s<br />
          <span className="b">Shields</span>
        </h1>

        <div className="subrow">
          <p className="role">
            Teams, platforms &amp; <em>AI-accelerated impact.</em>
          </p>
          <div>
            <p className="lede">
              Hands-on engineering leader — I turn underperforming teams and brittle legacy
              platforms into high-performing orgs that ship. 10+ years across Vimeo, WeWork and
              Madison Square Garden. Now looking for the next one.
            </p>
            <div className="cta">
              <a className="btn p" href="#say">
                Get in touch
              </a>
              <a
                className="btn s"
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <span className="social">
                <IconLink href={social.github} label="GitHub" icon="github" />
                <IconLink href={`mailto:${social.email}`} label="Email" icon="mail" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
