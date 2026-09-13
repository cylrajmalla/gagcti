import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/services",
  "/ai-solutions",
  "/cybersecurity",
  "/software-engineering",
  "/data-analytics",
  "/staff-augmentation",
  "/industries",
  "/global-presence",
  "/careers",
  "/contact",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://goodasgoldtech.com${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
