import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://draftedby.com/sitemap.xml",
    host: "https://draftedby.com",
  };
}
