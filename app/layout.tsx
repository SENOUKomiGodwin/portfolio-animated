import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/geist";
import "@fontsource/geist-mono";
import "@fontsource/jetbrains-mono";
import { Nav } from "@/components/nav";
import { CustomCursor } from "@/components/custom-cursor";
import { siteConfig } from "@/lib/site.config";

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.title}`,
  description: `${siteConfig.name}, ${siteConfig.title} basé à ${siteConfig.location}. Disponible pour des missions freelance et des opportunités à temps plein.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        <CustomCursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
