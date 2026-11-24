import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // 옛 위키 경로는 403인데 크롤러가 한 주에 십만 건 넘게 요청해 CloudFront 요청 수만 늘림
    rules: { userAgent: "*", allow: "/", disallow: ["/index.php", "/api.php", "/w/"] },
    sitemap: "https://mongsil.dev/sitemap.xml",
  };
}
