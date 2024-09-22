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
          {siteConfig.siteTitle}
        </Link>
        <div className="flex gap-4">
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </div>
        <div className="items-center gap-2 hidden md:flex">
          <Button variant="ghost" size="icon" className="size-7" asChild>
            <Link href={siteConfig.githubLink} target="_blank" rel="noreferrer">
              <IconGithubLogo className="size-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="size-7" asChild>
            <Link href={siteConfig.xLink} target="_blank" rel="noreferrer">
              <IconBrandX className="size-5" />
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
