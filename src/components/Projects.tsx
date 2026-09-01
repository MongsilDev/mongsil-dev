import { projects, type Project } from "@/data/projects";
import { Dot } from "./StatusDot";
import { Section } from "./Section";
import { ScrollCue } from "./ScrollCue";

export function Projects() {
  return (
    <Section id="work" className="relative py-20">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        <span aria-hidden="true" className="text-ember">/</span> work
      </h2>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <li key={p.name} className="reveal">
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>

      <ScrollCue href="#contact" label="contact" />
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const card = (
    <div className="flex h-full flex-col rounded-3xl bg-ink-raised p-8 transition duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:active:scale-[0.98]">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
        <h3 className="font-display text-3xl font-semibold tracking-[-0.02em] text-bone">
          {project.name}
        </h3>
        <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap font-mono text-xs text-muted">
          <Dot live={project.live} />
          {project.live ? "running" : "idle"} since {project.since.slice(0, 4)}
        </span>
      </div>

      <p className="mt-2 font-body text-base text-bone">{project.blurb}</p>

      <div className="mt-auto flex items-center justify-between pt-8">
        <span className="font-mono text-xs text-muted">{project.stack}</span>
        {project.href && (
          <span
            aria-hidden="true"
            className="font-mono text-sm text-muted transition-colors group-hover:text-ember group-focus-visible:text-ember"
          >
            →
          </span>
        )}
      </div>
    </div>
  );

  if (!project.href) return card;

  const external = project.href.startsWith("http");
  return (
    <a
      href={project.href}
      className="group block h-full rounded-3xl"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {card}
    </a>
  );
}
