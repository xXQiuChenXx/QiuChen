import { getAllMdxFiles } from "@/lib/documents";
import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { mdxImports } from "@/config/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllMdxFiles();
  const postRoutes = await Promise.all(
    posts.map(async (post) => {
      const mod = await mdxImports[post as keyof typeof mdxImports]();
      const frontmatter = (mod as any).frontmatter;
      return {
        url: `${siteConfig.siteURL}/blog/${post}`,
        lastModified: new Date(frontmatter.date).toISOString(),
      };
    })
  );

  const routes = ["", "blog"].map((route) => ({
    url: `${siteConfig.siteURL}/${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...postRoutes];
}
