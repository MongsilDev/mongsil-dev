import { devices, type Device } from "@/data/devices";
import { Section } from "./Section";
import { ScrollCue } from "./ScrollCue";

export function Setup() {
  return (
    <Section id="setup" className="pt-20 pb-12">
      <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
        Setup
      </h2>

      <div className="mt-10 border-b border-hairline">
        {devices.map((d) => (
          <DeviceRow key={d.name} device={d} />
        ))}
      </div>

      <ScrollCue href="#contact" label="Contact" />
    </Section>
  );
}

// name이 같은 details는 하나만 열려 섹션이 한 화면을 넘지 않음
function DeviceRow({ device }: { device: Device }) {
  return (
    <details name="setup" className="group border-t border-hairline">
      <summary className="flex cursor-pointer list-none items-baseline gap-3 py-3 [&::-webkit-details-marker]:hidden">
        <span className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <span className="text-[19px] font-semibold tracking-[-0.01em]">{device.name}</span>
          <span className="text-[15px] text-fg-muted transition-colors group-hover:text-fg group-open:text-fg">
            {device.spec}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="text-[17px] text-fg-muted transition-transform duration-200 group-open:rotate-90"
        >
          ›
        </span>
      </summary>

      <div className="pb-4 sm:ml-auto sm:max-w-[28rem] sm:pr-7">
        <dl className="grid grid-cols-[6.5rem_1fr] gap-x-4 gap-y-1 text-[15px]">
          {device.details.map(([label, value]) => (
            <div key={label} className="contents">
              <dt className="text-fg-muted">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        {device.href && (
          <a
            href={device.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-[15px] text-link hover:underline"
          >
            Specs <span aria-hidden="true">›</span>
          </a>
        )}
      </div>
    </details>
  );
}
