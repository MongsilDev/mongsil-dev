# mongsil.dev

개인 페이지. 정적 사이트.

## 스택

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- 정적 export (`output: 'export'`) — 서버 로직 없음
- 폰트: Bricolage Grotesque(디스플레이) / Hanken Grotesk(본문) / IBM Plex Mono(메타), 한글은 나눔고딕 셀프호스팅
- Vercel Analytics + Speed Insights

## 개발

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build   # out/ 에 정적 파일 생성
pnpm lint
```

## 구조

- `src/app/` — layout, page, 404, 메타 라우트(robots / sitemap / opengraph-image / icon / apple-icon)
- `src/components/` — Hero, Projects, Contact, SectionNav, ScrollCue 등
- `src/data/projects.ts` — 프로젝트 카드 데이터 (이름·설명·스택·링크·가동 시작일)
- `src/app/fonts/` — 나눔고딕 한글 woff2

## 구성 메모

- 풀페이지 스크롤 스냅(데스크톱만 `mandatory`, 모바일·reduced-motion은 일반 스크롤)
- 프로젝트 카드의 `uptime`은 `projects.ts`의 `since` 날짜 기준으로 계산됨
- 섹션 이동은 URL에 해시를 남기지 않음 (`ScrollCue`가 JS로 스크롤)

## 배포

Vercel. `main` 브랜치 푸시 시 자동 배포.
