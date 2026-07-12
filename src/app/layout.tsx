import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Hanken_Grotesk,
  IBM_Plex_Mono,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Display — 개성 있는 그로테스크 (워드마크·섹션 헤더)
const display = Bricolage_Grotesque({
  variable: "--f-display",
  subsets: ["latin"],
  display: "swap",
});

// Body — 따뜻한 휴머니스트 산세리프
const body = Hanken_Grotesk({
  variable: "--f-body",
  subsets: ["latin"],
  display: "swap",
});

// Mono — 상태·호스트 메타 (운영자 감성)
const mono = IBM_Plex_Mono({
  variable: "--f-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

// Korean — 모든 한글 텍스트 (나눔고딕, 한글 서브셋 woff2 셀프호스팅)
// next/font/google은 Nanum Gothic 한글 글리프를 안 받아와서 fontsource woff2를 로컬로 사용
const korean = localFont({
  variable: "--f-korean",
  src: [
    { path: "./fonts/nanum-gothic-korean-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/nanum-gothic-korean-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mongsil.dev"),
  title: "mongsil — 봇 만들고 위키 굴리는 사람",
  description:
    "봇 만들고 위키 굴리는 사람. 봇이든 웹이든 필요한 건 그냥 만듭니다.",
  openGraph: {
    title: "mongsil",
    description: "봇 만들고 위키 굴리는 사람",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  themeColor: "#15141b", // 모바일 브라우저 상단바를 배경색과 맞춤
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      className={`${display.variable} ${body.variable} ${mono.variable} ${korean.variable}`}
    >
      <body className="min-h-svh bg-ink font-body text-bone antialiased">
        {children}
      </body>
    </html>
  );
}
