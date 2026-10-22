# mongsil-dev

개인 소개 겸 프로젝트 모음 원페이지 사이트입니다.\
서버 로직 없이 정적 파일만으로 동작합니다.

## 기능

- top, work, play, favorites, setup, contact 여섯 개의 풀페이지 섹션으로 된 스크롤 사이트.\
  검정과 밝은 회색 섹션이 번갈아 나옴
- 상단 고정 바의 섹션 링크, 오른쪽 내비 점, 위아래 방향키, PageUp과 PageDown, Home과 End 키로 섹션 이동
- top: 워드마크와 한 줄 소개, 서울 시간 기준 실시간 시계, GitHub와 Steam 링크
- work: 운영 중인 서비스 타일에 한 줄 설명, 시작 연월, 기술 스택 표시.\
  아래에는 공개 레포 타일과 레포별 기술 스택 표시.\
  둘 다 `src/data/projects.ts`에 정의
- play: Steam 플레이 시간 상위 6개 게임과 시간, 소수점 이하는 버림.\
  값은 빌드할 때 Steam API에서 받음
- favorites: 가장 좋아하는 게임, 좋아하는 게임, 요즘 하는 게임 표지.\
  목록은 `src/data/games.ts`에, 표지 이미지는 `public/games`에 있음
- setup: 쓰는 기기와 사양.\
  `src/data/devices.ts`에 정의
- contact: GitHub와 메일 링크
- 글꼴은 `public/fonts/pretendard`의 Pretendard 가변 글꼴 동적 서브셋

## 동작 방식

Next.js 16 App Router를 `output: "export"` 설정으로 빌드해 정적 결과물만 만듭니다.\
시계는 브라우저에서 매초 갱신합니다.\
프로젝트, favorites 게임, 기기 목록은 코드에 정의되어 있어, 목록을 고친 뒤 다시 빌드하면 사이트에 반영됩니다.

`pnpm build`와 `pnpm dev`는 먼저 `scripts/steam-sync.mjs`를 실행해, Steam API `GetOwnedGames`에서 play에 표시할 상위 6개 게임과 시간을 받아 `src/data/steam.json`에 씁니다.\
키가 없거나 응답을 받지 못하면 마지막으로 받은 `steam.json`을 그대로 쓰고, 받은 적이 없으면 `src/data/games.ts`의 대체값을 씁니다.\
`games.ts`에 없는 게임은 Steam 이름과 상점 링크를 쓰고, 표지는 Steam 세로 표지로 만들어 `public/games`에 저장합니다.\
매일 05:20에 `deploy/steam-refresh.sh`가 값을 다시 받아, 값이 바뀐 날에만 다시 배포합니다.

## 실행

```bash
# 의존성 설치
pnpm install

# play 데이터를 받을 Steam Web API 키, 없으면 대체값으로 빌드
export STEAM_API_KEY=<키>

# 개발 서버
pnpm dev

# 정적 빌드, 결과물은 out/
pnpm build
```
