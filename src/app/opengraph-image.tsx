import { ImageResponse } from "next/og";

export const dynamic = "force-static"; // 정적 export 시 빌드 타임에 PNG 생성
export const alt = "Mongsil";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// 링크 공유 미리보기 카드. 라틴 텍스트만 사용(생성기 폰트 이슈 회피).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#86868b",
            fontSize: 30,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 999,
              background: "#30d158",
            }}
          />
          seoul, korea
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 200,
            fontWeight: 600,
            letterSpacing: "-6px",
            marginTop: 16,
            color: "#f5f5f7",
          }}
        >
          Mongsil
        </div>
      </div>
    ),
    size,
  );
}
