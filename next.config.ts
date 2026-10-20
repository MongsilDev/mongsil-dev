import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 서버 로직 없는 순수 정적 사이트라 어디든 올릴 수 있게 static export
  output: "export",
  // 정적 export에선 기본 이미지 최적화가 불가 (어차피 next/image는 안 씀)
  images: { unoptimized: true },
};

export default nextConfig;
