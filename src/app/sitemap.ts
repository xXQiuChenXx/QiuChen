import { getAllMdxFiles } from "@/lib/documents";
import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postRoutes = (await getAllMdxFiles()).map((post) => ({
    url: `${siteConfig.siteURL}/blog/${post}`,
  }));

  const routes = ["", "blog"].map((route) => ({
    url: `${siteConfig.siteURL}/${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...postRoutes];
}
