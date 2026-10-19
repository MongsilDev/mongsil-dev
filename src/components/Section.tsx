// 풀페이지 스냅 섹션 공통 껍데기 (100svh + 스냅 + 중앙정렬 + 컨텐츠 max-width)
// tone으로 검정/밝은 회색 톤을 정하고, 안의 토큰 유틸리티(text-fg 등)가 따라간다.
export function Section({
  id,
  tone = "dark",
  className = "",
  children,
}: {
  id?: string;
  tone?: "dark" | "light";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      data-tone={tone}
      className={`relative flex min-h-svh snap-start flex-col justify-center bg-bg px-6 text-fg sm:px-12 ${className}`}
    >
      <div className="mx-auto w-full max-w-[980px]">{children}</div>
    </section>
  );
}
