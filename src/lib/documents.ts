import { promises as fs } from "fs";
import path from "path";

// Function to get all MDX files from the content directory
export async function getAllMdxFiles() {
  const contentDirectory = path.join(process.cwd(), "content");
  const filenames = await fs.readdir(contentDirectory);

  // Filter only MDX files
  const mdxFiles = filenames.filter(
    (filename) => filename.endsWith(".mdx") || filename.endsWith(".md")
  );

  return mdxFiles.map((filename) => filename.replace(/\.mdx?$/, ""));
}
