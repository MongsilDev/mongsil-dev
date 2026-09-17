"use client";

import type { CSSProperties, MouseEvent } from "react";

// 섹션 하단 중앙 스크롤 안내, JS 스크롤이라 URL에 #해시 없음
// href는 접근성과 JS 미동작 시 폴백용.
export function ScrollCue({
  href,
  label,
  up = false,
  className = "",
  style,
}: {
  href: string;
  label: string;
  up?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById(href.replace("#", ""));
    if (!el) return; // 폴백: 기본 앵커 동작
    e.preventDefault();
    el.scrollIntoView();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      style={style}
      className={[
        "absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-4 text-[13px] text-fg-muted transition-colors hover:text-fg",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span aria-hidden="true">{up ? "↑" : "↓"}</span> {label}
    </a>
  );
}
