import { BlogCard } from "@/components/BlogCard";
import { mdxImports } from "@/config/posts";
import { getAllMdxFiles } from "@/lib/documents";
import { createMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description: "My precious thoughts and inspirations.",
  openGraph: {
    url: "https://tai-hong.myitscm.com/blog",
  }
});

const Blog = async () => {
  const posts = await getAllMdxFiles();

  // Fetch all frontmatters in parallel 
  const postData = await Promise.all(
    posts.map(async (id) => {
      // @ts-ignore
      const { frontmatter } = await mdxImports[
        id as keyof typeof mdxImports
      ]();
      return { id, frontmatter };
    })
  );

  // Sort by date descending
  postData.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());

  return (
    <main className="pt-6 md:py-8 py-4 pb-10 md:pb-12">
      <h1 className="font-semibold text-xl mb-2">Blog</h1>
      <p className="text-sm text-muted-foreground dark:text-neutral-400 mb-4">
        My precious thoughts and inspirations.
      </p>

      <div className="flex flex-col gap-3">
        {postData.map(({ id, frontmatter }) => (
          <BlogCard key={id} id={id} info={frontmatter} />
        ))}
      </div>
    </main>
  );
};

export default Blog;
