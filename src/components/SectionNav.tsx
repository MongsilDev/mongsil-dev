"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "top", label: "Top" },
  { id: "work", label: "Work" },
  { id: "play", label: "Play" },
  { id: "favorites", label: "Favorites" },
  { id: "setup", label: "Setup" },
  { id: "contact", label: "Contact" },
] as const;

export function SectionNav() {
  const [active, setActive] = useState(0);
  // 스크롤 중 연타 시 active(IO 50% 진입 후 갱신)는 아직 옛 값이라 목표를 따로 기억.
  // 프로그램 스크롤이 중간 섹션을 지나는 동안엔 IO가 목표를 덮지 않는다.
  const targetRef = useRef(0);
  const scrollingRef = useRef(false);

  const goTo = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(SECTIONS.length - 1, idx));
    const el = document.getElementById(SECTIONS[clamped].id);
    if (!el) return;
    targetRef.current = clamped;
    scrollingRef.current = true;
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
            setActive(idx);
            if (idx === targetRef.current) scrollingRef.current = false;
            if (!scrollingRef.current) targetRef.current = idx;
          }
        }
      },
      { threshold: 0.5 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // 휠/드래그로 프로그램 스크롤이 끊긴 경우: 멈춘 자리를 목표로 삼는다
  useEffect(() => {
    const onEnd = () => {
      scrollingRef.current = false;
      const idx = SECTIONS.findIndex((s) => {
        const el = document.getElementById(s.id);
        return el !== null && Math.abs(el.getBoundingClientRect().top) < window.innerHeight / 2;
      });
      if (idx >= 0) targetRef.current = idx;
    };
    window.addEventListener("scrollend", onEnd);
    return () => window.removeEventListener("scrollend", onEnd);
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

  // 흰 점과 라벨을 difference 블렌드로 그려 밝은 섹션 위에서는 검게 뒤집힌다.
  // 블렌드는 span에만 건다. nav나 button에 걸면 포커스 링까지 색이 뒤집힌다.
  return (
    <nav
      aria-label="Sections"
      className="fixed right-2 top-1/2 z-50 hidden -translate-y-1/2 flex-col sm:flex"
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
          <span className="pointer-events-none absolute right-10 whitespace-nowrap text-[12px] text-white/70 opacity-0 mix-blend-difference transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            {s.label}
          </span>
          <span
            className={`size-2 rounded-full mix-blend-difference transition-colors duration-200 ${
              active === i ? "bg-white" : "bg-white/40 group-hover:bg-white/70"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
