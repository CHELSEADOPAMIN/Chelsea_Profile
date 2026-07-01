import { CalendarDays, Code2, ExternalLink, Github, Globe2, Sparkles } from "lucide-react";

import { MacWindowCard } from "@/components/mac-window-card";
import type { ProjectEntry, ProjectLinkKind } from "@/data/projects";

const linkIcons: Record<ProjectLinkKind, typeof Globe2> = {
  website: Globe2,
  github: Github,
  demo: ExternalLink
};

type ProjectCardProps = {
  project: ProjectEntry;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const links = Object.entries(project.links).filter(([, href]) => Boolean(href));

  return (
    <article className="project-card">
      <MacWindowCard title={project.title} contentClassName="project-card-content">
        <div className={`project-cover project-cover-${project.tone}`}>
          <div className="project-cover-grid" aria-hidden="true" />
          <div className="project-cover-mark" aria-hidden="true">
            <Sparkles size={22} strokeWidth={2.2} />
          </div>
          <p>{project.type}</p>
        </div>

        <div className="project-body">
          <header className="project-card-header">
            <div>
              <h2>{project.title}</h2>
              <p>{project.role}</p>
            </div>
            <span className="project-period">
              <CalendarDays aria-hidden="true" size={14} />
              {project.period}
            </span>
          </header>

          <p className="project-summary">{project.summary}</p>

          <ul className="project-highlights">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <footer className="project-footer">
          <div className="project-stack" aria-label={`${project.title} technology stack`}>
            <Code2 aria-hidden="true" size={14} />
            {project.stack.slice(0, 4).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          {links.length > 0 ? (
            <div className="project-links" aria-label={`${project.title} links`}>
              {links.map(([kind, href]) => {
                const Icon = linkIcons[kind as ProjectLinkKind];

                return (
                  <a
                    aria-label={`${project.title} ${kind}`}
                    href={href}
                    key={kind}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon aria-hidden="true" size={15} strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          ) : null}
        </footer>
      </MacWindowCard>
    </article>
  );
}
