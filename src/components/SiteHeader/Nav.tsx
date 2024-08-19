import Link from "next/link";
import ThemeToggle from "../themeToggle";
import { Button } from "../ui/button";
import { IconGithubLogo, IconBrandX } from "@/components/Icons";
import { NavLink } from "./NavLink";
import { siteConfig } from "@/config/site.config";
const Nav = () => {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between">
        <Link href="/" className="font-bold">
          Tai Hong
        </Link>
        <div className="flex gap-4">
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/projects">Projects</NavLink>
        </div>
        <div className="items-center gap-2 hidden md:flex">
          <Button variant="ghost" size="icon" className="size-7" asChild>
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <IconGithubLogo className="size-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="size-7">
            <Link href="https://x.com" target="_blank" rel="noreferrer">
              <IconBrandX className="size-5 fill-current" />
              <span className="sr-only">X</span>
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
