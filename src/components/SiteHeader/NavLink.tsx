"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function NavLink({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) {
    const pathname = usePathname();
    const active = pathname === href || pathname.startsWith(href + "/");
    const linkRef = useRef<HTMLAnchorElement>(null);
    const [width, setWidth] = useState<string | number>("100%");
  
    useEffect(() => {
      if (!linkRef.current) return;
  
      setWidth(linkRef.current.clientWidth);
    }, []);
  
    return (
      <Link
        ref={linkRef}
        href={href}
        className={cn(
          "relative dark:text-neutral-400 text-slate-700 transition-colors dark:hover:text-neutral-200 hover:text-slate-900",
          active && "dark:text-neutral-50"
        )}
      >
        {children}
        <div
          className="absolute h-0.5 bottom-0 inset-x-0 dark:bg-neutral-200 bg-slate-800"
          style={{
            width: active ? width : 0,
            transition: "width 500ms",
          }}
          role="none"
        />
      </Link>
    );
  }