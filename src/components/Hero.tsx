import { Dot } from "./StatusDot";
import { Section } from "./Section";
import { LiveStatus } from "./LiveStatus";
import { ScrollCue } from "./ScrollCue";

export function Hero() {
  return (
    <Section id="top" className="text-center">
      <p className="rise flex items-center justify-center gap-2 text-[14px] text-fg-muted">
        <Dot live />
        <LiveStatus />
      </p>

      <h1
        className="rise mt-4 text-[clamp(3.5rem,9vw,6rem)] font-semibold leading-[1.05] tracking-[-0.015em]"
        style={{ animationDelay: "80ms" }}
      >
        Mongsil
      </h1>

      <p
        className="rise mt-3 text-[clamp(1.375rem,2.8vw,1.75rem)] leading-tight"
        style={{ animationDelay: "160ms" }}
      >
        I do a bit of everything.
      </p>

      <p
        className="rise mt-7 flex items-center justify-center gap-8 text-[clamp(1.0625rem,1.6vw,1.3125rem)] text-link"
        style={{ animationDelay: "240ms" }}
      >
        <a
          href="https://github.com/MongsilDev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub <span aria-hidden="true">›</span>
        </a>
        <a
          href="https://steamcommunity.com/id/MongsilDev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Steam <span aria-hidden="true">›</span>
        </a>
      </p>

      <ScrollCue
        href="#work"
        label="Work"
        className="rise"
        style={{ animationDelay: "320ms" }}
      />
    </Section>
  );
}
