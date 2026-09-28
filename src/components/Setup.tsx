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
        {devices.map((d) =>
          d.details ? <DeviceDetails key={d.name} device={d} /> : <DeviceLink key={d.name} device={d} />,
        )}
      </div>

      <ScrollCue href="#contact" label="Contact" />
    </Section>
  );
}

const ROW = "flex items-baseline gap-3 py-3";

function RowText({ device }: { device: Device }) {
  return (
    <span className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <span className="text-[19px] font-semibold tracking-[-0.01em]">{device.name}</span>
      <span className="text-[15px] text-fg-muted transition-colors group-hover:text-fg group-open:text-fg">
        {device.spec}
      </span>
    </span>
  );
}

// name이 같은 details는 하나만 열려 섹션이 한 화면을 넘지 않음
function DeviceDetails({ device }: { device: Device }) {
  return (
    <details name="setup" className="group border-t border-hairline">
      <summary className={`${ROW} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
        <RowText device={device} />
        <span
          aria-hidden="true"
          className="w-4 text-center text-[17px] text-fg-muted transition-transform duration-200 group-open:rotate-90"
        >
          ›
        </span>
      </summary>

      <div className="flex items-baseline gap-6 pb-4 text-[15px] sm:justify-end sm:pr-7">
        <dl className="flex flex-wrap gap-x-6 gap-y-1">
          {device.details!.map(([label, value]) => (
            <div key={label} className="flex gap-2">
              <dt className="text-fg-muted">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        {device.href && (
          <a href={device.href} target="_blank" rel="noopener noreferrer" className="shrink-0 text-link hover:underline">
            Specs <span aria-hidden="true">›</span>
          </a>
        )}
      </div>
    </details>
  );
}

function DeviceLink({ device }: { device: Device }) {
  return (
    <a
      href={device.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${ROW} border-t border-hairline`}
    >
      <RowText device={device} />
      <span aria-hidden="true" className="w-4 text-center text-[15px] text-fg-muted group-hover:text-fg">
        ↗
      </span>
    </a>
  );
}
