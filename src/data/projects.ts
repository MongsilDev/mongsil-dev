export type Project = {
  name: string;
  blurb: string;
  stack: string;
  href: string;
  since: string; // 가동 시작일 ISO, 한국 시간 기준
};

export type Repo = {
  name: string;
  blurb: string;
  stack: string;
  href: string;
};

// tarkov-settings는 포크지만 직접 개발 중이라 포함.
export const repos: Repo[] = [
  {
    name: "tarkov-settings",
    blurb: "Escape from Tarkov display settings utility",
    stack: "C#, WinForms",
    href: "https://github.com/MongsilDev/tarkov-settings",
  },
  {
    name: "scrim-bot",
    blurb: "Eternal Return scrim Discord bot",
    stack: "Python, discord.py",
    href: "https://github.com/MongsilOrg/scrim-bot",
  },
];

// since 실측 출처
//  - bori.wiki: MediaWiki 대문 최초 생성 2024-09-30T18:03:50Z, 한국 시간 10월 1일
//  - mongsil-bot: Discord 앱 ID snowflake 디코드 값 2023-06-15T05:54:18Z
//  - Labs: 첫 커밋과 배포 2026-10-19 한국 시간
export const projects: Project[] = [
  {
    name: "Labs",
    blurb: "Eternal Return and Escape from Tarkov tools",
    stack: "Next.js, SQLite",
    href: "https://labs.mongsil.dev",
    since: "2026-10-19",
  },
  {
    name: "bori.wiki",
    blurb: "Eternal Return esports wiki",
    stack: "MediaWiki, MariaDB",
    href: "https://bori.wiki",
    since: "2024-10-01",
  },
  {
    name: "mongsil-bot",
    blurb: "Eternal Return stats Discord bot",
    stack: "Python, discord.py",
    href: "https://bot.mongsil.dev",
    since: "2023-06-15",
  },
];
