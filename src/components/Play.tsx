import { games, steamProfile } from "@/data/games";
import { Section } from "./Section";
import { ScrollCue } from "./ScrollCue";

export function Play() {
  const [lead, ...rest] = games;

  return (
    <Section id="play" className="pt-20 pb-12">
      <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
        Play
      </h2>

      <div className="reveal mt-10">
        <p className="text-[clamp(4rem,11vw,8rem)] whitespace-nowrap font-semibold leading-none tracking-[-0.02em] tabular-nums">
          {lead.hours}
          <span className="ml-3 text-[0.4em] tracking-normal">hours</span>
        </p>
        <p className="mt-3 text-[21px] text-fg-muted">{lead.name}</p>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
        {rest.map((g) => (
          <li key={g.name} className="border-t border-hairline pt-4">
            <p className="text-[clamp(1.75rem,3vw,2.5rem)] whitespace-nowrap font-semibold leading-none tracking-[-0.02em] tabular-nums">
              {g.hours}
              <span className="ml-1.5 text-[0.5em] tracking-normal">hours</span>
            </p>
            <p className="mt-2 text-[14px] text-fg-muted">{g.name}</p>
          </li>
        ))}
      </ul>

      <a
        href={steamProfile}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-block text-[17px] text-link hover:underline"
      >
        Steam <span aria-hidden="true">›</span>
      </a>

      <ScrollCue href="#favorites" label="Favorites" />
    </Section>
  );
}
