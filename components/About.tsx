import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { aboutStats } from "@/lib/content";

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal>
          <SectionHeading number="01" title="About" />
          <div className="about">
            <p className="narr">
              I turn underperforming teams and brittle legacy platforms into{" "}
              <span className="hl">high-performing orgs that ship.</span>
            </p>

            <div className="body">
              <p>
                As <b>Director of Engineering at Vimeo</b>, I led transformational initiatives
                that modernized enterprise web platforms and built high-performing teams —
                specializing in platform architecture, marketing technology, experimentation,
                design systems, and <b>AI-accelerated engineering</b> that delivers measurable
                business impact.
              </p>
              <p>
                My leadership approach centers on <b>developing technical leaders</b> who own
                architecture and decision-making autonomously. I&apos;ve mentored engineers to win
                Director&apos;s Cut awards for transformational work, and pioneered AI-accelerated
                development workflows with <b>Claude Code and GitHub Copilot</b>, paving the way
                for agentic coding.
              </p>
              <p>
                With <b>10+ years</b> across Vimeo, WeWork and Madison Square Garden, I&apos;m
                committed to cultures of ownership, excellence and continuous innovation. And I
                stay hands-on — nights and weekends, I&apos;m still shipping side projects.
              </p>
            </div>

            <div className="stats3">
              {aboutStats.map((stat) => (
                <div className="s" key={stat.value}>
                  <div className="n">{stat.value}</div>
                  <div className="l">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
