"use client";

import { useEffect, useState } from "react";

// 프로젝트별 가동 일수 ("512d"). 일 단위라 매초 갱신 불필요 — 마운트 시 계산 + 1시간마다 재계산.
export function Uptime({ since }: { since: string }) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const compute = () => {
      const start = new Date(since).getTime();
      setDays(Math.max(0, Math.floor((Date.now() - start) / 86_400_000)));
    };
    // 초기 계산은 rAF로(effect 본문 동기 setState 회피), 이후 자정 넘김 대비 1시간마다
    const raf = requestAnimationFrame(compute);
    const id = setInterval(compute, 3_600_000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(id);
    };
  }, [since]);

  return (
    <span className="tabular-nums" suppressHydrationWarning>
      {days === null ? "--" : `${days}d`}
    </span>
  );
}
