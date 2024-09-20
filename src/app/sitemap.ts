import { documents } from "@/lib/documents";
import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const postRoutes = documents.map((post) => ({
    url: `${siteConfig.siteURL}/blog/${post.id}`,
    lastModified: post.info.date.toISOString(),
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `${siteConfig.siteURL}/${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...postRoutes];
}
