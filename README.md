# mongsil.dev

개인 페이지. 정적 사이트.

## 스택

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- 정적 export (`output: 'export'`) — 서버 로직 없음
- 폰트: Bricolage Grotesque(디스플레이) / Hanken Grotesk(본문) / IBM Plex Mono(메타), 한글은 나눔고딕 셀프호스팅

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

Synology NAS의 nginx 컨테이너가 정적 파일을 서빙하고, Cloudflare Tunnel이 앞단을 맡는다.

```bash
./deploy/deploy.sh   # 빌드 + NAS 동기화 (컨테이너 재시작 불필요)
```

- 컨테이너: `mongsil-dev` (nginx:alpine), `127.0.0.1:8083` → 80
- 정적 파일: `/volume1/docker/mongsil-dev/out` (볼륨 마운트라 파일만 갈면 즉시 반영)
- nginx 설정: `deploy/nginx.conf`
  - Next가 메타 이미지를 확장자 없이 내보내므로 `/opengraph-image`·`/apple-icon`의 MIME을 명시해야 한다
  - 디렉토리를 통째로 교체하면 바인드 마운트가 깨지므로 rsync로 내용만 동기화할 것
