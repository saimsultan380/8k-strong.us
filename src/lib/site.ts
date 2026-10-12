/**
 * Site-wide brand & SEO defaults for Strong 8K IPTV.
 *
 * Canonical rule: always HTTPS + non-www + trailing slash
 * e.g. https://8k-strong.co.uk/pricing/
 */
import type { Metadata } from "next";
import { routes } from "@/lib/routes";

export const siteConfig = {
  name: "Strong 8k",
  shortName: "Strong 8k",
  tagline: "Premium UHD IPTV Subscription For UK with 40k+ Channels",
  description:
    "Watch Strong 8k IPTV with 40,000+ channels and 140,000+ VOD titles. Explore UHD viewing, content requests, subscriptions and a free trial.",
  /** Canonical origin — HTTPS, non-www, no trailing slash on the origin itself */
  siteUrl: "https://8k-strong.co.uk",
  email: "support@strong8k.com",
  /** Display format for the public support number */
  phone: "+44 7460 676632",
  /** Digits only for wa.me / tel: links (no + or spaces) */
  phoneE164: "447460676632",
  locale: "en_GB",
  language: "en-GB",
  twitterHandle: "@strong8k",
} as const;

/** WhatsApp chat URL for all CTAs and support buttons */
export const whatsappUrl = `https://wa.me/${siteConfig.phoneE164}` as const;

/**
 * Prefill text sources so support can tell which CTA the client came from.
 * First word capital; remaining words lowercase.
 */
export const whatsappMessages = {
  /** Prefill when user clicks homepage free-trial CTAs (source tracking) */
  startFreeTrial: "Start-free-trial",
} as const;

/** WhatsApp URL with prefilled message (source tracking). */
export function whatsappUrlWithText(text: string): string {
  return `${whatsappUrl}?text=${encodeURIComponent(text)}`;
}

const ENQUIRY_WHATSAPP_TEXT: Record<string, string> = {
  "free-trial": "I would like to request a Strong 8k free trial.",
  "content-request": "I would like to request a film, series or live event.",
  installation: "I need help installing Strong 8k.",
  playback: "I need help with playback.",
  renewal: "I would like to renew my Strong 8k subscription.",
  refund: "I would like to ask about a refund.",
  "reseller-pricing": "I would like a Strong 8k reseller credit quote.",
  subscription: "I would like help choosing a Strong 8k subscription.",
};

/** Opens WhatsApp for a support enquiry instead of another site page. */
export function enquiryWhatsApp(enquiry: string): string {
  return whatsappUrlWithText(
    ENQUIRY_WHATSAPP_TEXT[enquiry] ?? "I would like to contact Strong 8k support.",
  );
}

/** Exact SERP titles (shown in Google + browser tab) */
export const pageTitles = {
  home: "Strong 8k - Premium UHD IPTV Subscription For UK with 40k+ Channels",
  subscriptionPlans:
    "Strong 8k IPTV Subscription Prices for Multiple UK Connections",
  installationGuide: "Strong 8k IPTV Installation Guide for All Supported Devices",
  resellerPanel: "Strong 8k Reseller Panel UK with White Label Branding",
  contactUs: "Contact Strong 8k for IPTV Trials and Customer Support",
  blogs: "Strong 8k IPTV Blog with Setup and Viewing Guides",
  notFound: "Page Not Found | Strong 8k",
} as const;

export const pageDescriptions = {
  home: "Watch Strong 8k IPTV with 40,000+ channels and 140,000+ VOD titles. Explore UHD viewing, content requests, subscriptions and a free trial.",
  subscriptionPlans:
    "Choose Strong 8k IPTV plans for 1, 3, 6 or 12 months. See prices for one to four simultaneous connections, supported devices and customer support.",
  installationGuide:
    "Install Strong 8k using app code 4330396 or a compatible player. Find setup help for Firestick, Android, Smart TV, iPhone, Windows, Mac and Roku.",
  resellerPanel:
    "Get a Strong 8k reseller dashboard from 120 credits. Ask about White Label Branding, activation, branded URLs, VPS options and reseller support.",
  contactUs:
    "Contact Strong 8k for a free trial, subscription help, installation, film and series requests or reseller pricing. Customer support is available 24/7.",
  blogs:
    "Read Strong 8k IPTV guides for setup, playback problems, Reddit reviews, 8k VIP labels and Xtream Codes. Find practical help for UK viewers.",
  notFound:
    "The page you are looking for could not be found. Browse Strong 8k plans, installation guides, blogs or contact support.",
} as const;

/** Indexable routes used by sitemap (canonical paths with trailing slash). */
export const sitemapRoutes = [
  { path: routes.home, changeFrequency: "weekly" as const, priority: 1 },
  {
    path: routes.subscriptionPlans,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    path: routes.installationGuide,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: routes.resellerPanel,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: routes.contactUs,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: routes.blogs,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
] as const;

/** Absolute canonical URL — always non-www HTTPS with trailing slash. */
export function canonicalUrl(path: string = "/"): string {
  const origin = siteConfig.siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return `${origin}/`;

  let normalized = path.startsWith("/") ? path : `/${path}`;
  // Strip query/hash — canonicals never include them
  normalized = normalized.split("?")[0].split("#")[0];
  if (!normalized.endsWith("/")) normalized = `${normalized}/`;
  return `${origin}${normalized}`;
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  follow?: boolean;
};

/** Shared page metadata with a single canonical + matching Open Graph URL. */
export function createPageMetadata({
  title,
  description,
  path,
  index = true,
  follow = true,
}: PageMetaInput): Metadata {
  const url = canonicalUrl(path);

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index,
      follow,
      googleBot: {
        index,
        follow,
      },
    },
  };
}

export const siteMetadataBase: Metadata = {
  title: pageTitles.home,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(canonicalUrl(routes.home)),
  keywords: [
    "Strong 8k",
    "Strong8k",
    "Strong 8k IPTV",
    "Strong 8k IPTV subscription",
    "UK IPTV",
    "UHD IPTV",
    "IPTV subscription",
  ],
  // Canonical is set per-page via createPageMetadata — never inherit homepage here.
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: pageTitles.home,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitles.home,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};
