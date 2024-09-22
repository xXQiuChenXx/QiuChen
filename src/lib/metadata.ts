import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

export const createMetadata = ({
  twitter,
  openGraph,
  ...override
}: Metadata): Metadata => {
  return {
    metadataBase: new URL(siteConfig.siteURL),
    title: {
      default: siteConfig.siteTitle,
      template: `${siteConfig.siteTitle} | %s`,
    },
    keywords: [
      "nextjs",
      "react",
      "blog",
      "react server components",
      "taihong",
      "lau tai hong",
      "tai hong",
      "tai hong blog",
      "lau tai hong blog",
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
      siteName: "Portfolio",
      images: [`${siteConfig.siteURL}/ogImage.png`],
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: override.title as string,
      description: override.description as string,
      images: [`${siteConfig.siteURL}/ogImage.png`],
      creator: "@lautaihong",
      ...twitter,
    },
    icons: {
      icon: "/favicon.ico",
    },
    manifest: `${siteConfig.siteURL}/site.webmanifest`,
    ...override,
  };
};
