import { Section } from "./Section";
import { ScrollCue } from "./ScrollCue";

export function Contact() {
  return (
    <Section id="contact" className="relative py-20">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        <span aria-hidden="true" className="text-ember">/</span> contact
      </h2>

      <ul className="mt-8 flex flex-col">
        <ContactRow label="github.com/MongsilDev" href="https://github.com/MongsilDev" />
        <ContactRow label="mail@mongsil.dev" href="mailto:mail@mongsil.dev" />
      </ul>

      <ScrollCue href="#top" label="top" up />
    </Section>
  );
}

function ContactRow({ label, href }: { label: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <li>
      <a
        href={href}
        className="group inline-flex items-center gap-3 py-2 font-mono text-xl text-bone transition-colors hover:text-ember sm:text-2xl"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <span
          aria-hidden="true"
          className="text-sm text-muted transition-colors group-hover:text-ember"
        >
          →
        </span>
        <span className="select-text">{label}</span>
      </a>
    </li>
  );
}
