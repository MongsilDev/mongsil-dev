# mongsil-dev

개인 소개 겸 프로젝트 허브 원페이지 사이트. 서버 로직 없이 정적 파일만으로 동작한다.

## 기능

- intro, work, contact 세 개의 풀페이지 섹션으로 이루어진 스크롤 사이트
- 우측 내비 점 클릭 또는 위아래 방향키, PageUp/Down, Home/End 키로 섹션 이동
- intro: 워드마크와 한 줄 소개, 서울 시간 기준 실시간 시계
- work: 프로젝트 카드에 한 줄 설명, 기술 스택, 가동 상태 점, 가동 일수 표시. 목록은 `src/data/projects.ts`에 정의
- contact: GitHub와 메일 링크

## 동작 방식

Next.js 16 App Router를 `output: "export"` 설정으로 빌드해 순수 정적 결과물을 만든다. 시계와 가동 일수는 클라이언트에서 계산해 각각 매초, 매시간 갱신한다. 프로젝트 목록은 코드에 정적으로 정의되어 있어 수정 후 다시 빌드하면 반영된다.

## 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버
pnpm dev

# 정적 빌드, 결과물은 out/
pnpm build
```
