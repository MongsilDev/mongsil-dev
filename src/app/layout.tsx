import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-P0QQSS1SE5";
const WA_TOKEN = "8c0dac15421b4c3088e1b8998bfe6ee0";

// 페이지만 열고 나가는 봇이 GA와 Web Analytics에 찍히지 않게, 입력이나 10초 체류 뒤에만 불러옴
const analytics = `(function(){
if(navigator.webdriver)return;
var ev=['pointerdown','keydown','scroll','touchstart','mousemove'],timer,done=false;
function add(src,beacon){var s=document.createElement('script');s.async=true;s.src=src;if(beacon)s.setAttribute('data-cf-beacon',beacon);document.head.appendChild(s);}
function load(){
if(done)return;done=true;clearTimeout(timer);
ev.forEach(function(e){removeEventListener(e,load,true);});
document.removeEventListener('visibilitychange',arm);
window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments);};
gtag('js',new Date());gtag('config','${GA_ID}');
add('https://www.googletagmanager.com/gtag/js?id=${GA_ID}');
add('https://static.cloudflareinsights.com/beacon.min.js','{"token":"${WA_TOKEN}"}');
}
function arm(){clearTimeout(timer);if(document.visibilityState==='visible')timer=setTimeout(load,10000);}
ev.forEach(function(e){addEventListener(e,load,{capture:true,passive:true});});
document.addEventListener('visibilitychange',arm);arm();
})();`;

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
        <Script id="analytics" strategy="afterInteractive">
          {analytics}
        </Script>
      </body>
    </html>
  );
}
