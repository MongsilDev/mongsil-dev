import { games, steamProfile } from "@/data/games";
import { Cover } from "./GameCover";
import { Section } from "./Section";
import { ScrollCue } from "./ScrollCue";

export function Play() {
  const [lead, ...rest] = games;

  return (
    <Section id="play" className="pt-20 pb-12">
      <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
        Play
      </h2>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:gap-10">
        <div className="w-40 shrink-0 lg:w-[203px]">
          <Cover game={lead} />
        </div>

        <div className="flex min-w-0 flex-col">
          <div className="reveal">
            <p className="whitespace-nowrap text-[clamp(3.5rem,7vw,5rem)] font-semibold leading-none tracking-[-0.02em] tabular-nums">
              {lead.hours}
              <span className="ml-3 text-[0.4em] tracking-normal">hours</span>
            </p>
            <p className="mt-2 text-[17px] text-fg-muted">{lead.name}</p>
          </div>

          <ul className="mt-auto grid grid-cols-3 gap-4 pt-8 sm:grid-cols-5 lg:w-[544px]">
            {rest.map((g) => (
              <li key={g.cover}>
                <Cover game={g} />
                <p className="mt-2 whitespace-nowrap text-[17px] font-semibold tracking-[-0.01em] tabular-nums">
                  {g.hours}
                  <span className="ml-1 text-[13px] font-normal text-fg-muted">hours</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href={steamProfile}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-[17px] text-link hover:underline"
      >
        Steam <span aria-hidden="true">›</span>
      </a>

      <ScrollCue href="#favorites" label="Favorites" />
    </Section>
  );
}
