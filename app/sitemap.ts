import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://furway.app";

  const pages = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.8 },
    { path: "/download", priority: 0.9 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
    { path: "/contact", priority: 0.5 },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    entries.push({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${page.path}`,
          el: `${baseUrl}/el${page.path}`,
        },
      },
    });

    entries.push({
      url: `${baseUrl}/el${page.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${page.path}`,
          el: `${baseUrl}/el${page.path}`,
        },
      },
    });
  }

  return entries;
}