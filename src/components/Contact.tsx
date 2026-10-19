import { Section } from "./Section";
import { ScrollCue } from "./ScrollCue";

export function Contact() {
  return (
    <Section id="contact" tone="light" className="pt-20 pb-20">
      <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
        Contact
      </h2>

      <ul className="mt-8 flex flex-col gap-3">
        <ContactRow label="github.com/MongsilDev" href="https://github.com/MongsilDev" />
        <ContactRow label="mail@mongsil.dev" href="mailto:mail@mongsil.dev" />
      </ul>

      <a href="/privacy" className="mt-10 inline-block text-[14px] text-fg-muted hover:underline">
        개인정보 처리방침
      </a>

      <ScrollCue href="#top" label="Top" up />
    </Section>
  );
}

function ContactRow({ label, href }: { label: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <li>
      <a
        href={href}
        className="text-[clamp(1.3125rem,2.4vw,1.75rem)] text-link hover:underline"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <span className="select-text">{label}</span> <span aria-hidden="true">›</span>
      </a>
    </li>
  );
}
