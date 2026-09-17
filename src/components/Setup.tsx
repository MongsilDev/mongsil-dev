import { devices } from "@/data/devices";
import { Section } from "./Section";
import { ScrollCue } from "./ScrollCue";

export function Setup() {
  return (
    <Section id="setup" className="pt-20 pb-12">
      <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
        Setup
      </h2>

      <dl className="mt-10 border-b border-hairline">
        {devices.map((d) => (
          <div
            key={d.name}
            className="flex flex-col gap-1 border-t border-hairline py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <dt className="text-[19px] font-semibold tracking-[-0.01em]">{d.name}</dt>
            <dd className="text-[15px] text-fg-muted">{d.spec}</dd>
          </div>
        ))}
      </dl>

      <ScrollCue href="#contact" label="Contact" />
    </Section>
  );
}
