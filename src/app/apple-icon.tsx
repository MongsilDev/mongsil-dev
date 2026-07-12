import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS 홈화면 아이콘 (파비콘과 동일한 M 모노그램)
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
          color: "#ece7de",
          fontSize: 112,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        M
      </div>
    ),
    size,
  );
}
