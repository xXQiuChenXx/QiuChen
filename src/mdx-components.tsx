import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { CodeBlock } from "./components/MDX/CodeBlock";
import { HTMLAttributes } from "react";
import { cn } from "./lib/utils";
import Image, { ImageProps } from "next/image";

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

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, ...props }) => {
      if (!href) return <a {...props} />;

      const isExternal =
        href.startsWith("https://") || href.startsWith("http://");

      if (isExternal) {
        return (
          <a href={href} target="_blank" rel="noreferrer noopener" {...props} />
        );
      }

      return <Link href={href} {...props} />;
    },
    ...Object.fromEntries(
      headingTypes.map((type) => [
        type,
        (props: HTMLAttributes<HTMLHeadingElement>) => (
          <Heading as={type} {...props} />
        ),
      ])
    ),
    img: (props) => (
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "70%", height: "auto" }}
        {...(props as ImageProps)}
        alt="mdx image"
        className="aspect-auto rounded-md "
      />
    ),
    h2: ({ className, style: _style, ...props }) => (
      <Heading
        as={"h2"}
        className={cn(className, "border-b pb-2")}
        {...props}
      />
    ),
    span: ({ className, ...props }) => (
      <span className={cn("text-sm", className)} {...props}>
        {props.children}
      </span>
    ),
    pre: CodeBlock,
    ...components,
  };
}
