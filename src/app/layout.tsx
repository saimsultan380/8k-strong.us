import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BrandIconGradient } from "@/components/brand-icon-gradient";
import SiteBackground from "@/components/site-background";
import ParticlesBg from "@/components/ui/particles-bg";
import { JsonLd } from "@/components/seo/json-ld";
import { siteJsonLd } from "@/lib/breadcrumbs";
import { canonicalUrl, siteMetadataBase } from "@/lib/site";
import { routes } from "@/lib/routes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...siteMetadataBase,
  metadataBase: new URL(canonicalUrl(routes.home)),
  verification: {
    google: "mQRPFUjrZxye77pMaig-wBVfguUClB7P72FIJQ6Xib0",
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon-48x48.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preload" href="/vendor/particles.min.js" as="script" />
        <link
          rel="preload"
          href="/strong8k-mobile-bg.jpeg"
          as="image"
          media="(max-width: 768px)"
        />
        <link
          rel="preload"
          href="/strong8k-dekstop-bg.jpeg"
          as="image"
          media="(min-width: 769px)"
        />
        <JsonLd data={siteJsonLd()} />
      </head>
      <body className="relative min-h-full flex flex-col bg-black text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SiteBackground />
          <ParticlesBg />
          <BrandIconGradient />
          <div className="relative z-10 flex min-h-full flex-1 flex-col bg-transparent">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
