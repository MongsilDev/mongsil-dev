"use client";

import { useEffect, useState } from "react";

// TODO(mongsil): 실제 셀프호스팅/봇 가동 시작일로 바꾸면 uptime이 진짜가 됨.
//                (지금은 placeholder — 대략 언제부터 굴렸는지 날짜만 넣어주면 됨)
const OPERATING_SINCE = new Date("2024-03-01T00:00:00+09:00").getTime();

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

// 가동 시작일부터 며칠째인지: "863d" (시계가 live 역할, uptime은 얼마나 오래 굴렸는지)
function uptime(ms: number) {
  const days = Math.floor((ms - OPERATING_SINCE) / 86_400_000);
  return `${Math.max(0, days)}d`;
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
    <p
      className="font-mono text-xs text-muted tabular-nums"
      suppressHydrationWarning
    >
      {now === null ? (
        "seoul --:--:-- · uptime --"
      ) : (
        <>
          seoul {seoulClock(now)}
          <span className="text-muted/60"> · uptime {uptime(now)}</span>
        </>
      )}
    </p>
  );
}
