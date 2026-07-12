// 풀페이지 스냅 섹션 공통 껍데기 (100svh + 스냅 + 중앙정렬 + 컨텐츠 max-width)
export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`flex min-h-svh snap-start flex-col justify-center px-6 sm:px-10 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}
