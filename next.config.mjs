// @ts-check
import rehypeShiki from "@shikijs/rehype";
import remarkGfm from "remark-gfm";
import remarkHeadingId from "remark-heading-id";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFrontmatter,
      remarkMdxFrontmatter,
      [remarkHeadingId, { defaults: true }],
    ],
    rehypePlugins: [[rehypeShiki, { theme: "github-dark" }]],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
