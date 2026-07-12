import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS 홈화면 아이콘 — 파비콘과 동일한 앰버 상태등
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#15141b",
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 9999,
            background: "#f2a25c",
          }}
        />
      </div>
    ),
    size,
  );
}
