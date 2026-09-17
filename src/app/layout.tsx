import type { Metadata, Viewport } from "next";
import "./globals.css";

const description = "I do a bit of everything.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mongsil.dev"),
  title: "Mongsil",
  description,
  authors: [{ name: "Mongsil", url: "https://mongsil.dev" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mongsil",
    description,
    url: "/",
    siteName: "Mongsil",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mongsil.dev/#person",
      name: "Mongsil",
      alternateName: "몽실",
      url: "https://mongsil.dev",
      sameAs: ["https://github.com/MongsilDev"],
    },
    {
      "@type": "WebSite",
      "@id": "https://mongsil.dev/#website",
      name: "Mongsil",
      alternateName: "몽실",
      url: "https://mongsil.dev",
      inLanguage: "en",
      publisher: { "@id": "https://mongsil.dev/#person" },
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#000000", // 모바일 브라우저 상단바를 배경색과 맞춤
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-svh select-none bg-bg font-sans text-fg antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
