"use client";
import Link from "next/link";
import { documents } from "@/lib/documents";
import { useLayoutEffect, useState } from "react";

export function BlogCard({
  id,
  info,
}: {
  id: string;
  info: (typeof documents)[number]["info"];
}) {
  const [date, setDate] = useState("");

  useLayoutEffect(() => {
    setDate(info.date.toLocaleDateString(undefined, { dateStyle: "medium" }));
  }, [info.date]);

  return (
    <Link
      href={`/blog/${id}`}
      className="relative group overflow-hidden flex flex-row dark:shadow-inner 
      shadow-neutral-800 p-4 rounded-lg border border-neutral-900 
       transition-colors hover:transition-none hover:dark:bg-neutral-900"
    >
      <div className="flex-1">
        <div className="flex flex-row gap-2 justify-between">
          <h2 className="text-sm font-semibold mb-2">{info.title}</h2>
          <span className="text-xs text-neutral-400 text-nowrap">{date}</span>
        </div>
        <p className="text-sm text-muted-foreground dark:text-neutral-400">
          {info.description}
        </p>
      </div>
      <div className="z-[-1] size-40 absolute right-0 bottom-0 bg-neutral-400 blur-3xl opacity-0 rounded-full transition-opacity group-hover:opacity-20" />
    </Link>
  );
}
