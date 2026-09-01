"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "top", label: "top" },
  { id: "work", label: "work" },
  { id: "contact", label: "contact" },
] as const;

export function SectionNav() {
  const [active, setActive] = useState(0);
  // 스크롤 중 연타 시 active(IO 50% 진입 후 갱신)는 아직 옛 값이라 목표를 따로 기억
  const targetRef = useRef(0);

  const goTo = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(SECTIONS.length - 1, idx));
    const el = document.getElementById(SECTIONS[clamped].id);
    if (!el) return;
    targetRef.current = clamped;
    el.scrollIntoView(); // smooth/auto는 html의 scroll-behavior가 결정
  }, []);

  // 현재 화면에 걸린 섹션을 활성으로
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const idx = SECTIONS.findIndex((s) => s.id === entry.target.id);
          if (idx >= 0) {
            targetRef.current = idx;
            setActive(idx);
          }
        }
      },
      { threshold: 0.5 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // 키보드: ↑/↓, PageUp/Down, Home/End 로 섹션 이동
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          e.preventDefault();
          goTo(targetRef.current + 1);
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          goTo(targetRef.current - 1);
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(SECTIONS.length - 1);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo]);

  return (
    <nav
      aria-label="섹션 이동"
      className="fixed right-3.5 top-1/2 z-50 hidden -translate-y-1/2 flex-col sm:flex"
    >
      {SECTIONS.map((s, i) => (
        <button
          key={s.id}
          type="button"
          onClick={() => goTo(i)}
          aria-label={s.label}
          aria-current={active === i ? "true" : undefined}
          className="group relative flex cursor-pointer items-center justify-center rounded-full p-3"
        >
          <span className="pointer-events-none absolute right-8 whitespace-nowrap font-mono text-xs text-muted opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            {s.label}
          </span>
          <span
            className={`size-2 rounded-full transition-all duration-200 ease-out ${
              active === i
                ? "scale-100 bg-ember"
                : "scale-75 bg-muted/70 group-hover:bg-muted"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
