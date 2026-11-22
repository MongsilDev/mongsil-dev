import { projects, repos } from "@/data/projects";
import { Section } from "./Section";
import { ScrollCue } from "./ScrollCue";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const ROW =
  "group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 border-t border-hairline lg:grid-cols-[minmax(0,5fr)_minmax(0,5fr)_7rem]";
const NOTE = "text-right text-[14px] text-fg-muted tabular-nums";

export function Projects() {
  return (
    <Section id="work" tone="light" className="pt-20 pb-20">
      <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
        Work
      </h2>

      <ul className="mt-8 border-b border-hairline">
        {projects.map((p) => (
          <li key={p.name}>
            <a href={p.href} target="_blank" rel="noopener noreferrer" className={`${ROW} py-5`}>
              <h3 className="text-[clamp(1.625rem,3vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.015em] transition-colors group-hover:text-link">
                {p.name}
              </h3>
              <p className={`${NOTE} lg:order-last`}>
                Since {MONTHS[Number(p.since.slice(5, 7)) - 1]} {p.since.slice(0, 4)}
              </p>
              <p className="col-span-2 mt-1 text-[17px] lg:col-span-1 lg:mt-0 lg:text-[19px]">
                {p.blurb}
                <span className="block text-[14px] text-fg-muted">{p.stack}</span>
              </p>
            </a>
          </li>
        ))}
        {repos.map((r) => (
          <li key={r.name}>
            <a href={r.href} target="_blank" rel="noopener noreferrer" className={`${ROW} py-3.5`}>
              <h3 className="text-[21px] font-semibold tracking-[-0.01em] transition-colors group-hover:text-link">
                {r.name}
              </h3>
              <p className="col-span-2 mt-0.5 text-[15px] lg:col-span-1 lg:mt-0">
                {r.blurb}
                <span className="block text-[14px] text-fg-muted">{r.stack}</span>
              </p>
            </a>
          </li>
        ))}
      </ul>

      <ScrollCue href="#play" label="Play" />
    </Section>
  );
}
