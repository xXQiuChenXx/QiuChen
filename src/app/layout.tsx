import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { cn } from "@/lib/cn";
import Nav from "@/components/SiteHeader/Nav";
import Footer from "@/components/Footer";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import NextTopLoader from "nextjs-toploader";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  description: "My personal website.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(GeistMono.variable, GeistSans.variable, "min-h-screen")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            height={3}
            color="#6E56CF"
            showSpinner={false}
            shadow="0 0 20px #7D66D9, 0 0 15px #7D66D9"
          />
          <div className="max-w-3xl container mx-auto py-4 md:py-8 px-6">
            <Nav />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
