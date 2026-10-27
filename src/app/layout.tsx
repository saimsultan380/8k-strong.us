import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { BrandIconGradient } from "@/components/brand-icon-gradient";
import SiteBackground from "@/components/site-background";
import ParticlesBg from "@/components/ui/particles-bg";
import { JsonLd } from "@/components/seo/json-ld";
import { siteJsonLd } from "@/lib/breadcrumbs";
import { canonicalUrl, siteConfig, siteMetadataBase } from "@/lib/site";
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
    google: "KYACr84TCBCas0pp1qW-EG20eNHlo-6Zu0cX1lZo63A",
  },
  icons: {
    // Google Search uses one favicon from the homepage. The first icon must be
    // a square PNG larger than 48px. favicon.ico is a classic BMP icon (96 and
    // 48) because Google often fails to decode PNG-compressed .ico files.
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "96x96 48x48" },
    ],
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
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: "dark" }}
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.gaMeasurementId}');
          `}
        </Script>
        <SiteBackground />
        <ParticlesBg />
        <BrandIconGradient />
        <div className="relative z-10 flex min-h-full flex-1 flex-col bg-transparent">
          {children}
        </div>
      </body>
    </html>
  );
}
