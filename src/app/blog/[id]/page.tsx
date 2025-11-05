import { ClientDate } from "@/components/ClientDate";
import { mdxImports } from "@/config/posts";
import { getAllMdxFiles } from "@/lib/documents";
import { createMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // @ts-ignore
  const { default: Post, frontmatter } = await mdxImports[
    id as keyof typeof mdxImports
  ]();
  return (
    <div className="pt-6 md:py-8 py-4 gap-12 pb-10 md:pb-12">
      <article className="prose prose-sm md:prose-base dark:prose-invert dark:text-neutral-400 dark:prose-li:marker:text-neutral-300 max-w-full">
        <Post />
      </article>
      <p className="mt-8 text-sm">
        <span className="font-medium mr-1">Last Updated:</span>
        <ClientDate
          className="dark:text-neutral-400"
          value={new Date(frontmatter.date)}
        />
      </p>
    </div>
  );
}

export async function generateStaticParams() {
  return (await getAllMdxFiles()).map((id) => {
    return { id: id.replace(/\.mdx?$/, "") };
  });
}

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const document = await (
    await getAllMdxFiles()
  ).includes(decodeURI(id).toLowerCase());

  if (!document) notFound();

  // @ts-ignore
  const { frontmatter } = await mdxImports[id as keyof typeof mdxImports]();

  return createMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      type: "article",
      authors: "Lau Tai Hong",
      url: `https://myblog.myitscm.com/blog/${id}`,
      modifiedTime: new Date(frontmatter.date).toISOString(),
    },
  });
}

export const dynamicParams = false;
