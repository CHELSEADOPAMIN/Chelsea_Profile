import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { projectStats, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Chelsea Yang's selected full-stack and AI projects."
};

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <header className="page-heading">
        <p className="eyebrow">Finder / Projects</p>
        <h1>Projects</h1>
        <p>
          {projectStats.total} selected builds, {projectStats.aiFocused} AI-integrated
        </p>
      </header>

      <section className="project-grid" aria-label="Selected project entries">
        {projects.map((project) => (
          <ProjectCard key={`${project.title}-${project.period}`} project={project} />
        ))}
      </section>
    </main>
  );
}
