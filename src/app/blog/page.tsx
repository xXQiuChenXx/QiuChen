import { BlogCard } from "@/components/BlogCard";
import { documents } from "@/lib/documents";
import { createMeatadata } from "@/lib/metadata";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = createMeatadata({
  title: "Blog",
  description: "My precious thoughts and inspirations.",
});

const Blog = () => {
  return (
    <main className="pt-6 md:py-8 py-4 pb-10 md:pb-12">
      <h1 className="font-semibold text-xl mb-2">Blog</h1>
      <p className="text-sm text-muted-foreground dark:text-neutral-400 mb-4">
        My precious thoughts and inspirations.
      </p>

      <div className="flex flex-col gap-3">
        {documents.map((d) => (
          <BlogCard key={d.id} id={d.id} info={d.info} />
        ))}
      </div>
    </main>
  );
};

export default Blog;
