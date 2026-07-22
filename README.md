# mongsil-dev

개인 소개 겸 프로젝트 허브 페이지. `mongsil.dev`. 한 페이지 스크롤 사이트로 운영 중인 프로젝트와 연락처를 담으며, 서버 로직 없이 정적 파일만 배포한다.

## 구성

세 개의 풀페이지 섹션(intro / work / contact). 우측 내비 점과 키보드로 이동한다.

- intro — 워드마크·한 줄 소개, 서울(KST) 실시간 시계
- work — 프로젝트 카드(스택, 가동 상태등, 가동 일수). 목록은 `src/data/projects.ts`에 정의
- contact — GitHub·메일 링크

## 기술 스택

Next.js 16(`output: "export"` 정적 export), React 19, TypeScript, Tailwind CSS v4. 정적 결과물을 nginx가 서빙하고 Cloudflare Tunnel로 `mongsil.dev`에 노출한다.
