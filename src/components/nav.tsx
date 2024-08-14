import Link from "next/link";
import ThemeToggle from "./themeToggle";
import { Button } from "./ui/button";
import { IconGithubLogo, IconBrandX } from "@/components/Icons";
const Nav = () => {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between">
        <h3>test</h3>
        <h3 className="hidden md:block">test2</h3>
        <div className="flex items-center gap-2">
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
