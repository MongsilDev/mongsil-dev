// presence 점 — 이 페이지의 시그니처 마커. live면 soft green + 은은한 글로우.
export function Dot({ live = false }: { live?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block size-2 shrink-0 rounded-full${live ? " dot-live" : ""}`}
      style={{
        background: live ? "var(--color-live)" : "var(--color-muted)",
        boxShadow: live
          ? "0 0 10px color-mix(in oklab, var(--color-live) 65%, transparent)"
          : undefined,
      }}
    />
  );
}
