import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

export const createMeatadata = ({
  twitter,
  openGraph,
  ...override
}: Metadata): Metadata => {
  return {
    ...override,
    metadataBase: new URL(siteConfig.siteURL),
    title: {
      default: siteConfig.siteTitle,
      template: `%s - ${siteConfig.siteTitle}`,
    },
    keywords: [
      "nextjs",
      "react",
      "blog",
      "react server components",
      "taihong",
      "tai hong",
      "tai hong blog",
    ],
    authors: [
      {
        name: "taihong",
        url: "https://taihong.myitscm.com",
      },
    ],
    creator: "taihong",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.siteURL,
      title: override.title as string,
      description: override.description as string,
      siteName: siteConfig.siteTitle,
      // images: [siteConfig.ogImage],
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: override.title as string,
      description: override.description as string,
      // images: [siteConfig.ogImage],
      creator: "@lautaihong",
      ...twitter,
    },
    icons: {
      icon: "/favicon.ico",
    },
    manifest: `${siteConfig.siteURL}/site.webmanifest`,
  };
};
