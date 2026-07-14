import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { social } from "@/lib/content";

export function Contact() {
  return (
    <section className="contact" id="say">
      <div className="wrap">
        <Reveal>
          <SectionHeading number="05" title="Say Hello" />
          <p className="lede">
            Looking for my next engineering leadership role. Open to conversations about
            platforms, AI-accelerated teams, and the occasional brisket.
          </p>
          <div className="cta">
            <a className="btn p" href={`mailto:${social.email}`}>
              {social.email}
            </a>
            <a className="btn s" href={social.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
