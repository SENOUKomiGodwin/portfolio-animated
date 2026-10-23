import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/geist";
import "@fontsource/geist-mono";
import "@fontsource/jetbrains-mono";
import { Nav } from "@/components/nav";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";
import { siteConfig } from "@/lib/site.config";
import { siteData } from "@/content/site-data";

export const metadata: Metadata = {
  title: `${siteData.fullName} — ${siteData.brand}`,
  description: siteData.bio,
  openGraph: {
    title: `${siteData.fullName} — ${siteData.brand}`,
    description: siteData.bio,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        <ScrollProgress />
        <CustomCursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
