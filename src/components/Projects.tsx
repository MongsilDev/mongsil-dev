import { projects, type Project } from "@/data/projects";
import { Dot } from "./StatusDot";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="work" className="py-20">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        <span aria-hidden="true" className="text-ember">/</span> 굴리는 것들
      </h2>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <li key={p.name} className="reveal">
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const card = (
    <div className="group flex h-full flex-col rounded-2xl border border-haze bg-ink-raised p-6 transition duration-200 ease-out hover:-translate-y-1 hover:border-ember/50 active:scale-[0.98]">
      <div className="flex items-center justify-between gap-3">
        <span className="font-display text-2xl font-semibold text-bone">
          {project.name}
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
          <Dot live={project.live} />
          {project.live ? "running" : "idle"}
        </span>
      </div>

      <p className="mt-2 font-body text-[15px] text-bone/85">{project.blurb}</p>

      <div className="mt-auto flex items-center justify-between pt-6">
        <span className="font-mono text-xs text-muted">{project.stack}</span>
        {project.href && (
          <span
            aria-hidden="true"
            className="font-mono text-sm text-muted transition-colors group-hover:text-ember"
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
      className="block h-full"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {card}
    </a>
  );
}
