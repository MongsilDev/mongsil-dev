"use client";

import type { MouseEvent } from "react";

// Apple 제품 페이지 상단의 로컬 내비 바.
// 앵커는 JS 스크롤, URL에 #해시 없음
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
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-12 bg-[rgba(22,22,23,0.8)] text-[#f5f5f7] backdrop-blur-xl backdrop-saturate-[1.8]">
      <nav
        aria-label="Page"
        className="mx-auto flex h-full max-w-[980px] items-center justify-between px-6"
      >
        <a
          href="#top"
          onClick={(e) => jump(e, "top")}
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
    </header>
  );
}
