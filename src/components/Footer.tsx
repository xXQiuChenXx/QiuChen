import React, { ReactNode } from "react";
import { siteConfig } from "@/config/site.config";
import { IconBrandX, IconGithubLogo } from "./Icons";

const Footer = () => {
  return (
    <div className="flex gap-3 border-t mt-4 pt-4 border-neutral-800">
      <Badge href={siteConfig.githubLink}>
        <IconGithubLogo className="size-5 mr-1"/>
        Github
      </Badge>
      <Badge href={siteConfig.xLink}>
        <IconBrandX className="size-5" />
        Twitter
      </Badge>
    </div>
  );
};

export default Footer;

function Badge({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      rel="noreferrer noopener"
      className="inline-flex items-center gap-1 font-medium text-sm transition-colors hover:text-neutral-200"
    >
      {children}
    </a>
  );
}
