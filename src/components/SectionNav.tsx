"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "top", label: "intro" },
  { id: "work", label: "work" },
  { id: "contact", label: "contact" },
] as const;

export function SectionNav() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  const goTo = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(SECTIONS.length - 1, idx));
    const el = document.getElementById(SECTIONS[clamped].id);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
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
            activeRef.current = idx;
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
          goTo(activeRef.current + 1);
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          goTo(activeRef.current - 1);
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
      className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 sm:flex"
    >
      {SECTIONS.map((s, i) => (
        <button
          key={s.id}
          type="button"
          onClick={() => goTo(i)}
          aria-label={s.label}
          aria-current={active === i ? "true" : undefined}
          className="group relative flex items-center justify-center p-1.5"
        >
          <span className="pointer-events-none absolute right-6 whitespace-nowrap font-mono text-[11px] text-muted opacity-0 transition-opacity group-hover:opacity-100">
            {s.label}
          </span>
          <span
            className={`size-2 rounded-full transition-all duration-200 ease-out ${
              active === i
                ? "scale-100 bg-ember"
                : "scale-75 bg-muted/50 group-hover:bg-muted"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
