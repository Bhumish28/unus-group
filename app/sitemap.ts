import type { MetadataRoute } from "next";

const siteUrl = "https://www.unusgroup.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/companies/engineering`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/companies/homes`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/companies/interior`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
