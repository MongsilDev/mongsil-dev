import { Dot } from "./StatusDot";
import { Section } from "./Section";
import { LiveStatus } from "./LiveStatus";

export function Hero() {
  return (
    <Section id="top" className="relative isolate">
      {/* 워드마크 뒤 극미묘한 앰버 글로우 (장식) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 45% at 32% 46%, color-mix(in oklab, var(--color-ember) 11%, transparent), transparent 70%)",
        }}
      />

      <p
        className="rise flex items-center gap-2 font-mono text-xs text-muted"
        style={{ transitionDelay: "0ms" }}
      >
        <Dot live />
        <LiveStatus />
      </p>

      <h1
        className="rise mt-6 font-display text-[clamp(3.5rem,14vw,9rem)] font-extrabold leading-[0.92] tracking-[-0.03em] text-bone"
        style={{ transitionDelay: "80ms" }}
      >
        Mongsil
      </h1>

      <p
        className="rise mt-6 font-body text-xl text-bone sm:text-2xl"
        style={{ transitionDelay: "160ms" }}
      >
        이것저것 합니다.
      </p>

      <a
        href="#work"
        className="rise absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-muted transition-colors hover:text-ember"
        style={{ transitionDelay: "320ms" }}
      >
        ↓ work
      </a>
    </Section>
  );
}
