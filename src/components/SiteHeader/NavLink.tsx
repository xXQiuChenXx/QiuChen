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
          "relative text-neutral-400 transition-colors hover:text-neutral-200 ",
          active && "text-neutral-50"
        )}
      >
        {children}
        <div
          className="absolute h-0.5 bottom-0 inset-x-0 bg-neutral-200"
          style={{
            width: active ? width : 0,
            transition: "width 500ms",
          }}
          role="none"
        />
      </Link>
    );
  }