import { ImageResponse } from "next/og";

export const dynamic = "force-static"; // 정적 export 시 빌드 타임에 PNG 생성
export const alt = "mongsil — makes bots, runs a wiki";
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
          justifyContent: "center",
          padding: "84px",
          background: "#15141b",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#8b8698",
            fontSize: 30,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 999,
              background: "#84c7a0",
            }}
          />
          eternal return · seoul
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 200,
            fontWeight: 800,
            letterSpacing: "-8px",
            marginTop: 20,
            color: "#ece7de",
          }}
        >
          mongsil
        </div>
        <div style={{ display: "flex", fontSize: 44, marginTop: 4, color: "#f2a25c" }}>
          makes bots, runs a wiki
        </div>
      </div>
    ),
    size,
  );
}
