import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const OLD_WIKI = ["/index.php", "/api.php", "/w/"];

export default function robots(): MetadataRoute.Robots {
  return {
    // 옛 위키 경로는 403인데 크롤러가 한 주에 십만 건 넘게 요청해 CloudFront 요청 수만 늘림
    // meta-externalagent는 * 묶음에만 막혀 있을 때 이 경로 요청을 멈추지 않았음
    rules: [
      { userAgent: "*", disallow: OLD_WIKI },
      { userAgent: ["meta-externalagent", "meta-webindexer"], disallow: OLD_WIKI },
    ],
    sitemap: "https://mongsil.dev/sitemap.xml",
  };
}
