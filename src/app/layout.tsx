import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces, IBM_Plex_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { organizationJsonLd, rootMetadata, websiteJsonLd } from "@/lib/metadata";
import { alternateLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

function jsonLdScript(data: object) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        fraunces.variable,
        dmSans.variable,
        ibmPlexMono.variable,
        "scroll-smooth"
      )}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#C4553A" />
        {alternateLinks.map((link) => (
          <link key={link.hrefLang} rel="alternate" hrefLang={link.hrefLang} href={link.href} />
        ))}
        {jsonLdScript(organizationJsonLd)}
        {jsonLdScript(websiteJsonLd)}
      </head>
      <body className="min-h-screen bg-linen font-body text-stone-600 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-cream focus:px-4 focus:py-2 focus:text-charcoal focus:shadow-card focus:outline-none focus:ring-2 focus:ring-terracotta-500"
        >
          Skip to main content
        </a>
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
