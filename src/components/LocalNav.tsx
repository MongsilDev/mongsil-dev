"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";

// Apple 제품 페이지 상단의 로컬 내비 바.
// 앵커는 JS 스크롤, URL에 #해시 없음. sm 미만은 섹션 링크를 접는 메뉴로 보여 줌
const LINKS = [
  { id: "work", label: "Work" },
  { id: "play", label: "Play" },
  { id: "favorites", label: "Favorites" },
  { id: "setup", label: "Setup" },
  { id: "contact", label: "Contact" },
] as const;

function jump(e: MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView();
}

export function LocalNav() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(22,22,23,0.8)] text-[#f5f5f7] backdrop-blur-xl backdrop-saturate-[1.8]"
    >
      <nav
        aria-label="Page"
        className="mx-auto flex h-12 max-w-[1076px] items-center justify-between px-6 sm:px-12"
      >
        <a
          href="#top"
          onClick={(e) => {
            setOpen(false);
            jump(e, "top");
          }}
          className="text-[21px] font-semibold tracking-[-0.01em]"
        >
          Mongsil
        </a>

        <div className="flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => jump(e, l.id)}
              className="hidden text-xs text-[#f5f5f7]/80 transition-colors hover:text-[#f5f5f7] sm:inline"
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            aria-label="Sections"
            aria-expanded={open}
            aria-controls="local-menu"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 flex size-10 items-center justify-center text-[#f5f5f7]/80 transition-colors hover:text-[#f5f5f7] sm:hidden"
          >
            <svg
              viewBox="0 0 12 8"
              aria-hidden="true"
              className={`w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            >
              <path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <a
            href="https://github.com/MongsilDev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cta px-3 py-1 text-xs text-white transition-colors hover:bg-[#0077ed]"
          >
            GitHub
          </a>
        </div>
      </nav>

      <ul id="local-menu" hidden={!open} className="border-t border-white/10 px-6 pb-2 sm:hidden">
        {LINKS.map((l) => (
          <li key={l.id} className="border-b border-white/10 last:border-b-0">
            <a
              href={`#${l.id}`}
              onClick={(e) => {
                setOpen(false);
                jump(e, l.id);
              }}
              className="block py-3 text-[17px] text-[#f5f5f7]/90"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
