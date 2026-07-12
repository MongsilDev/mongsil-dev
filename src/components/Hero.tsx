import { Dot } from "./StatusDot";
import { Section } from "./Section";

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
        className="rise flex items-center gap-2 font-mono text-sm text-muted"
        style={{ transitionDelay: "0ms" }}
      >
        <Dot live />
        <span>집 선반 위에서 셀프호스팅 중</span>
      </p>

      <h1
        className="rise mt-6 font-display text-[clamp(3.5rem,14vw,9rem)] font-extrabold leading-[0.92] tracking-[-0.03em] text-bone"
        style={{ transitionDelay: "80ms" }}
      >
        mongsil
      </h1>

      <p
        className="rise mt-6 font-body text-xl text-bone sm:text-2xl"
        style={{ transitionDelay: "160ms" }}
      >
        봇 만들고 위키 굴리는 사람.
      </p>
      <p
        className="rise mt-3 max-w-md font-body text-base text-muted"
        style={{ transitionDelay: "220ms" }}
      >
        디스코드 봇과 이터널 리턴 위키를, 집에 있는 시놀로지 한 대로.
      </p>

      <a
        href="#work"
        className="rise absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-muted transition-colors hover:text-ember"
        style={{ transitionDelay: "320ms" }}
      >
        ↓ 굴리는 것들
      </a>
    </Section>
  );
}
