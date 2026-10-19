import { projects, repos, type Project } from "@/data/projects";
import { Dot } from "./StatusDot";
import { Section } from "./Section";
import { ScrollCue } from "./ScrollCue";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function Projects() {
  return (
    <Section id="work" tone="light" className="pt-20 pb-20">
      <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
        Work
      </h2>

      <ul className="mt-8 grid gap-4 lg:grid-cols-3">
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
              className="group flex h-full flex-col tile rounded-[20px] p-7 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="flex items-baseline justify-between gap-3 text-[19px] font-semibold tracking-[-0.01em]">
                {r.name}
                <Arrow />
              </span>
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
      className="group flex h-full flex-col tile rounded-[28px] p-7 transition-transform duration-200 hover:-translate-y-0.5"
    >
      <h3 className="flex items-baseline justify-between gap-3 text-[32px] font-semibold leading-tight tracking-[-0.02em]">
        {project.name}
        <Arrow />
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

// 카드 전체가 외부 링크라는 표시, 호버 때 오른쪽 위로 밀림
function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="text-[17px] font-normal text-fg-muted transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
    >
      ↗
    </span>
  );
}
