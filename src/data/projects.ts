export type Project = {
  name: string;
  blurb: string; // 한 줄 설명 (한국어)
  stack: string; // 모노 메타 (기술 스택)
  href: string; // 없으면 "" (링크 없이 표시)
  live: boolean; // presence 점 색 (running 여부)
  since: string; // 가동 시작일 (ISO). 카드 uptime 계산용
};

// TODO(mongsil): since를 각 프로젝트 실제 가동 시작일로 교체 (지금은 placeholder → uptime 가짜).
export const projects: Project[] = [
  {
    name: "bori.wiki",
    blurb: "이터널 리턴 이스포츠 위키",
    stack: "MediaWiki 1.43 · MariaDB 12.0",
    href: "https://bori.wiki",
    live: true,
    since: "2023-06-01",
  },
  {
    name: "mongsilbot",
    blurb: "이터널 리턴 전적·정보 디스코드 봇",
    stack: "Python 3.12 · discord.py 2.7",
    href: "https://discord.com/discovery/applications/1118780504490131557",
    live: true,
    since: "2023-09-01",
  },
];
