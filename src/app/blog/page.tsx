import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog",
  description: "My precious thoughts and inspirations.",
};

const Blog = () => {
  return (
    <main className="grid items-center pt-6 md:py-8 py-4 gap-12 pb-10 md:pb-12">
      <h1 className="font-semibold text-xl mb-2">Blog</h1>
      <p className="text-sm text-neutral-400 mb-4">
        My precious thoughts and inspirations.
      </p>
      
    </main>
  );
};

export default Blog;
