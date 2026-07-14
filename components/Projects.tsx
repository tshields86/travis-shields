import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PillList } from "@/components/ui/Pill";
import { IconLink } from "@/components/ui/IconLink";
import { professionalWork, sideProjects, type ProjectLink } from "@/lib/content";

function LinkCluster({ links }: { links: ProjectLink[] }) {
  if (links.length === 0) return null;
  return (
    <span className="links">
      {links.map((link) => (
        <IconLink key={link.href} href={link.href} label={link.label} icon={link.icon} />
      ))}
    </span>
  );
}

export function Projects() {
  return (
    <>
      <section className="section" id="work">
        <div className="wrap">
          <Reveal>
            <SectionHeading number="03" title="Professional Work" />
            <div className="pwork">
              {professionalWork.map((item) => (
                <article className="pcard" key={item.name}>
                  <span className="badge">{item.role}</span>
                  <div className="h">
                    <h3 className="nm">{item.name}</h3>
                    <LinkCluster links={item.links} />
                  </div>
                  <p className="desc">{item.description}</p>
                  <PillList items={item.tech} />
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="wrap">
          <Reveal>
            <SectionHeading number="04" title="Side Projects" />
            <div className="cards">
              {sideProjects.map((project) => (
                <article className="card" key={project.name}>
                  <div className="h">
                    <h3 className="nm">{project.name}</h3>
                    <LinkCluster links={project.links} />
                  </div>
                  <p className="desc">{project.description}</p>
                  <PillList items={project.tech} />
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
