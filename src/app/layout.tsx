import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { cn } from "@/lib/cn";
import Nav from "@/components/SiteHeader/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "QiuChen",
    template: "QiuChen | %s",
  },
  description: "My Personal Website",
  keywords: ["Qiu Chen", "Lau Tai Hong", "nextjs"],
  authors: [
    { name: "Qiu Chen", url: "https://qiuchen.myitscm.com" },
    { name: "Lau Tai Hong", url: "https://qiuchen.myitscm.com" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <header className="max-w-3xl container mx-auto py-4 md:py-8 px-6">
            <Nav />
            {children}
            <Footer />
          </header>
        </ThemeProvider>
      </body>
    </html>
  );
}
