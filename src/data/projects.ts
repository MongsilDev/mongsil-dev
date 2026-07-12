export type Project = {
  name: string;
  blurb: string; // 한 줄 설명 (한국어)
  stack: string; // 모노 메타 (기술 스택)
  href: string;
  live: boolean; // presence 점 색 (running 여부)
};

// TODO(mongsil): 봇들의 href를 각 GitHub repo 링크로 교체하면 됨.
//                비공개로 두고 싶은 건 href를 "" 로 비우면 링크 없이 표시됨.
const GH = "https://github.com/MongsilDev";

export const projects: Project[] = [
  {
    name: "bori.wiki",
    blurb: "이터널 리턴 이스포츠 위키",
    stack: "mediawiki · self-hosted",
    href: "https://bori.wiki",
    live: true,
  },
  {
    name: "mongsilbot",
    blurb: "이터널 리턴 전적·정보 디스코드 봇",
    stack: "python · discord",
    href: GH,
    live: true,
  },
  {
    name: "scrimbot",
    blurb: "스크림 조 편성 봇",
    stack: "python · 자동 배포",
    href: GH,
    live: true,
  },
  {
    name: "kelbot",
    blurb: "추첨·우선권 관리 봇",
    stack: "python · discord",
    href: GH,
    live: true,
  },
];
