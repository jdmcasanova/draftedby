import type { MetadataRoute } from "next";

const baseUrl = "https://draftedby.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/products", "/contact", "/legal"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
