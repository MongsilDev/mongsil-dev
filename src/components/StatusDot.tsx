// rounded-full은 리터럴 필수, 템플릿 리터럴로 조합하면 Tailwind 추출 누락
export function Dot({ live = false }: { live?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={
        live
          ? "dot-live inline-block size-2 shrink-0 rounded-full"
          : "inline-block size-2 shrink-0 rounded-full"
      }
      style={{ background: live ? "var(--color-live)" : "var(--fg-muted)" }}
    />
  );
}
