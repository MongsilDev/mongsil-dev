// 섹션 하단 중앙의 스크롤 안내 (다음/이전 섹션으로). 마지막 섹션은 up=위로.
export function ScrollCue({
  href,
  label,
  up = false,
}: {
  href: string;
  label: string;
  up?: boolean;
}) {
  return (
    <a
      href={href}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-muted transition-colors hover:text-ember"
    >
      {up ? "↑" : "↓"} {label}
    </a>
  );
}
