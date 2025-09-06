import { getAllMdxFiles } from "@/lib/documents";
import { resolve } from "node:url";
import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { mdxImports } from "@/config/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const getUrl = (v: string) => resolve(siteConfig.siteURL, v);
  const posts = await getAllMdxFiles();

  return [
    {
      url: getUrl("/"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: getUrl("/projects"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: getUrl("/blog"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...(await Promise.all(
      posts.map(async (post) => {
        const mod = await mdxImports[post as keyof typeof mdxImports]();
        const frontmatter = (mod as any).frontmatter;
        return {
          url: getUrl(`/blog/${post}`),
          lastModified: new Date(frontmatter.date),
          changeFrequency: "monthly" as const,
          priority: 0.5,
        };
      })
    )),
  ];
}
