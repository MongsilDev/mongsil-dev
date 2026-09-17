import { projects, repos, type Project } from "@/data/projects";
import { Dot } from "./StatusDot";
import { Section } from "./Section";
import { ScrollCue } from "./ScrollCue";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function Projects() {
  return (
    <Section id="work" tone="light" className="pt-20 pb-12">
      <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
        Work
      </h2>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <li key={p.name} className="reveal">
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>

      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {repos.map((r) => (
          <li key={r.name}>
            <a
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col rounded-[20px] bg-tile p-7"
            >
              <span className="text-[19px] font-semibold tracking-[-0.01em]">{r.name}</span>
              <span className="mt-1 text-[14px] text-fg-muted">{r.blurb}</span>
              <span className="mt-1 text-[13px] text-fg-muted">{r.stack}</span>
            </a>
          </li>
        ))}
      </ul>

      <ScrollCue href="#play" label="Play" />
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full flex-col rounded-[28px] bg-tile p-7"
    >
      <h3 className="text-[32px] font-semibold leading-tight tracking-[-0.02em]">
        {project.name}
      </h3>
      <p className="mt-1.5 text-[17px] text-fg-muted">{project.blurb}</p>
      <p className="mt-1 text-[13px] text-fg-muted">{project.stack}</p>

      <p className="mt-auto flex items-center gap-1.5 pt-6 text-[13px] text-fg-muted">
        <Dot live={project.live} />
        {project.live ? "Running" : "Stopped"} since{" "}
        {MONTHS[Number(project.since.slice(5, 7)) - 1]} {project.since.slice(0, 4)}
      </p>
    </a>
  );
}
