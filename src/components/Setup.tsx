import { devices, type Device } from "@/data/devices";
import { Section } from "./Section";
import { ScrollCue } from "./ScrollCue";

export function Setup() {
  return (
    <Section id="setup" className="pt-20 pb-12">
      <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
        Setup
      </h2>

      <ul className="mt-10 border-b border-hairline">
        {devices.map((d) => (
          <li key={d.name} className="border-t border-hairline">
            {d.href ? (
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline gap-3 py-3 [-webkit-tap-highlight-color:transparent]"
              >
                <DeviceText device={d} />
                <span
                  aria-hidden="true"
                  className="w-4 text-center text-[15px] text-fg-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
                >
                  ↗
                </span>
              </a>
            ) : (
              <div className="flex items-baseline gap-3 py-3">
                <DeviceText device={d} />
                <span className="w-4" />
              </div>
            )}
          </li>
        ))}
      </ul>

      <ScrollCue href="#contact" label="Contact" />
    </Section>
  );
}

function DeviceText({ device }: { device: Device }) {
  return (
    <span className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <span className="text-[19px] font-semibold tracking-[-0.01em]">{device.name}</span>
      <span className="text-[15px] text-fg-muted transition-colors group-hover:text-fg">{device.spec}</span>
    </span>
  );
}
