import { documents } from "@/lib/documents";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClientDate } from "@/components/ClientDate";
import { HTMLAttributes, type AnchorHTMLAttributes } from "react";

function MDXLink({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (!href) return <a {...props} />;

  const isExternal = href.startsWith("https://") || href.startsWith("http://");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" {...props} />
    );
  }

  return <Link href={href} {...props} />;
}

const headingTypes = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

function Heading({
  as: As,
  ...props
}: { as: (typeof headingTypes)[number] } & HTMLAttributes<HTMLHeadingElement>) {
  if (props.id)
    return (
      <a href={`#${props.id}`} className="no-underline group">
        <As {...props}>
          <span className="absolute -ml-4 mt-0.5 dark:text-neutral-500 text-base opacity-0 transition-opacity group-hover:opacity-100">
            #
          </span>
          {props.children}
        </As>
      </a>
    );

  return <As {...props}>{props.children}</As>;
}

export default function Page({ params }: { params: { id: string } }) {
  const document = documents.find((d) => d.id === decodeURI(params.id));
  if (!document) notFound();

  return (
    <div className="pt-6 md:py-8 py-4 gap-12 pb-10 md:pb-12">
      <article className="prose prose-sm md:prose-base dark:prose-invert dark:text-neutral-400 dark:prose-li:marker:text-neutral-300 max-w-full">
        <document.renderer
          components={{
            a: MDXLink,
            // img: (props) => <img className="rounded-xl" {...props} />,
            ...Object.fromEntries(
              headingTypes.map((type) => [
                type,
                (props: HTMLAttributes<HTMLHeadingElement>) => (
                  <Heading as={type} {...props} />
                ),
              ])
            ),
            pre: ({ className, style: _style, ...props }) => (
              <pre
                className={cn(
                  "text-sm p-2 dark:bg-neutral-900 border dark:border-neutral-800 rounded-lg overflow-auto",
                  className
                )}
                {...props}
              >
                {props.children}
              </pre>
            ),
            h2: ({ className, style: _style, ...props }) => (
              <Heading as={"h2"} className={cn(className, "border-b pb-2")} {...props} />
            ),
          }}
        />
      </article>
      <p className="mt-8 text-sm">
        <span className="font-medium mr-1">Last Updated:</span>
        <ClientDate className="dark:text-neutral-400" value={document.info.date} />
      </p>
    </div>
  );
}

export function generateStaticParams() {
  return documents.map((d) => ({
    id: encodeURI(d.id),
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const document = documents.find((d) => d.id === decodeURI(params.id));
  if (!document) notFound();

  return {
    title: document.info.title,
    description: document.info.description,
    openGraph: {
      type: "article",
      authors: "Fuma Nama",
      modifiedTime: document.info.date.toISOString(),
    },
  };
}
