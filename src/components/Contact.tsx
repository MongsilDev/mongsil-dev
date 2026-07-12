import { Section } from "./Section";

export function Contact() {
  return (
    <Section className="py-20">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        <span aria-hidden="true" className="text-ember">/</span> 연락
      </h2>

      <ul className="mt-8 flex flex-col">
        <ContactRow label="github.com/MongsilDev" href="https://github.com/MongsilDev" />
        <ContactRow label="mail@mongsil.dev" href="mailto:mail@mongsil.dev" />
      </ul>

      <p className="mt-16 font-mono text-xs text-muted">
        made &amp; hosted at home · 2026
      </p>
    </Section>
  );
}

function ContactRow({ label, href }: { label: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <li>
      <a
        href={href}
        className="group inline-flex items-center gap-3 py-2 font-mono text-lg text-bone transition-colors hover:text-ember active:scale-[0.99] sm:text-xl"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <span
          aria-hidden="true"
          className="text-sm text-muted transition-colors group-hover:text-ember"
        >
          →
        </span>
        {label}
      </a>
    </li>
  );
}
