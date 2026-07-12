"use client";

import { useEffect, useState } from "react";

// 서울(KST) 시:분:초 — 보는 사람 로컬 시간대와 무관하게 항상 서울 시간
function seoulClock(ms: number) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Seoul",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(ms);
}

export function LiveStatus() {
  // 초기엔 null → 자리표시 렌더 (SSR/하이드레이션 불일치 방지), 마운트 후 매초 갱신
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setNow(Date.now());
    // 첫 값은 rAF로(effect 본문 동기 setState 회피), 이후 매초 갱신
    const raf = requestAnimationFrame(update);
    const id = setInterval(update, 1000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(id);
    };
  }, []);

  return (
    <span className="tabular-nums" suppressHydrationWarning>
      {now === null ? "seoul --:--:--" : `seoul ${seoulClock(now)}`}
    </span>
  );
}
