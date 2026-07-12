import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://mongsil.dev"),
  title: "mongsil — 봇 만들고 위키 굴리는 사람",
  description:
    "이터널 리턴을 조금 더 편하게 즐기려고 위키랑 디스코드 봇을 만듭니다.",
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
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="min-h-svh bg-ink font-body text-bone antialiased">
        {children}
      </body>
    </html>
  );
}
