/**
 * Site-wide brand & SEO defaults for Strong 8k IPTV.
 *
 * Canonical rule: always HTTPS + non-www + trailing slash
 * e.g. https://8k-strong.us/pricing/
 */
import type { Metadata } from "next";
import { routes } from "@/lib/routes";

export const siteConfig = {
  name: "Strong 8k",
  shortName: "Strong8k",
  tagline: "Premium UHD IPTV Subscription for USA Viewers with 40k+ Channels",
  description:
    "Strong 8k IPTV: 40,000+ channels and 140,000+ VOD titles. Compare Strong8k plans, explore UHD viewing, and request a free trial.",
  /** Canonical origin — HTTPS, non-www, no trailing slash on the origin itself */
  siteUrl: "https://8k-strong.us",
  ukSiteUrl: "https://8k-strong.co.uk",
  email: "support@strong8k.com",
  /** Display format for the public support number */
  phone: "+1 716 494 3064",
  /** Digits only for wa.me / tel: links (no + or spaces) */
  phoneE164: "17164943064",
  locale: "en_US",
  language: "en-US",
  currency: "USD",
  twitterHandle: "@strong8k",
  /** Google Analytics 4 measurement ID */
  gaMeasurementId: "G-Y02Z2XBPWC",
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
  "content-request": "I would like to request a movie, series or live event.",
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
  home: "Strong8k - Premium UHD IPTV Subscription With 40k+ Channels",
  subscriptionPlans: "Strong8k IPTV Pricing | Plans & Connections",
  installationGuide: "Strong8k Installation Guide | Apps & Device Setup",
  resellerPanel: "Strong 8k Reseller Panel | Credits & Branding",
  contactUs: "Contact Strong8k | Free Trial & Customer Support",
  blogs: "Strong 8k IPTV Guides | Setup, Reviews & Help",
  notFound: "Page Not Found | Strong 8k",
} as const;

/** Primary plus secondary keywords from the page keyword chart. */
export const pageKeywords = {
  home: [
    "Strong8k",
    "Strong 8k",
    "Strong 8k IPTV",
    "Strong8k IPTV",
    "Strong IPTV 8k",
    "Strong IPTV",
    "StrongIPTV",
    "premium IPTV",
    "premium IPTV service",
    "premium IPTV subscription",
    "UHD IPTV",
    "Strong8k USA",
    "USA IPTV",
    "Strong 8k channel list",
    "international IPTV",
    "UK IPTV in the USA",
    "live TV",
    "movies and series",
  ],
  subscriptionPlans: [
    "Strong8k IPTV subscription",
    "Strong 8k pricing",
    "Strong8k prices",
    "Strong 8k cost",
    "Strong8k plans",
    "buy Strong8k",
    "IPTV premium subscription",
    "monthly IPTV subscription",
    "annual IPTV subscription",
    "1-month IPTV",
    "3-month IPTV",
    "6-month IPTV",
    "12-month IPTV",
    "multi-connection IPTV",
    "two-screen IPTV",
    "three-screen IPTV",
    "four-screen IPTV",
    "renewal",
    "refund policy",
  ],
  installationGuide: [
    "Strong8k setup",
    "Strong 8k IPTV installation guide",
    "Strong8k app",
    "Strong8k download",
    "Strong 8k Downloader code",
    "4330396",
    "Firestick IPTV",
    "Android TV IPTV",
    "Google TV IPTV",
    "Samsung IPTV",
    "LG IPTV",
    "iPhone IPTV",
    "Apple TV IPTV",
    "Windows IPTV",
    "Mac IPTV",
    "Roku IPTV",
    "TiviMate setup",
    "IBO Player",
    "Smarters Pro",
    "Xtream Codes",
    "M3U playlist",
    "MAG",
    "Formuler",
    "Enigma2",
  ],
  resellerPanel: [
    "Strong 8k reseller panel",
    "Strong 8k panel",
    "Strong8k reseller",
    "Strong8k panel",
    "IPTV reseller",
    "IPTV reseller USA",
    "reseller credits",
    "120-credit panel",
    "240-credit package",
    "360-credit package",
    "white label IPTV",
    "branded dashboard",
    "reseller domain",
    "reseller pricing",
    "VPS configuration",
    "VPN-compatible service URL",
  ],
  contactUs: [
    "Strong8k support",
    "Strong 8k free trial",
    "Contact Strong8k",
    "Strong8k WhatsApp",
    "Strong8k email",
    "IPTV free trial",
    "trial duration",
    "activation help",
    "installation support",
    "buffering help",
    "renewal support",
    "movie requests",
    "series requests",
    "event availability",
    "refund requests",
  ],
  blogs: [
    "Strong 8k Reddit",
    "Strong8k troubleshooting",
    "8kiptv",
    "8k IPTV",
    "IPTV 8k",
    "IPTV premium services",
    "Strong8k reviews",
    "Strong8k down",
    "Strong8k not working",
    "Strong8k worth it",
    "Strong vs Trex",
    "Strong8k G2G",
    "Strong 8k Z2U",
    "8K VIP",
    "Strong8k versions",
    "Xtream IPTV 8k",
    "native 8K",
    "anti-freeze IPTV",
    "IPTV legal in the USA",
    "IPTV blocked",
    "Strong8k VPN",
    "EPG",
    "catch-up",
    "recording",
    "multiview",
    "adult categories",
    "parental controls",
  ],
} as const;

export const pageDescriptions = {
  home: "Strong 8k IPTV: 40,000+ channels and 140,000+ VOD titles. Compare Strong8k plans, explore UHD viewing, and request a free trial.",
  subscriptionPlans:
    "Compare Strong 8k IPTV plans for 1, 3, 6, or 12 months. View USD prices for one to four connections and read the seven-day refund policy.",
  installationGuide:
    "Install Strong 8k with app code 4330396 or a compatible player. Find device setup steps, login instructions, and playback help.",
  resellerPanel:
    "Start a Strong 8k reseller panel with 120 credits. Ask about credit prices, white label branding, domain options, VPS setup, and support.",
  contactUs:
    "Contact Strong 8k for a free trial, setup help, renewals, content requests, or reseller pricing. Customer support is available 24/7.",
  blogs:
    "Read Strong 8k IPTV guides covering setup, Reddit reviews, buffering, Xtream Codes, EPG, catch-up, and subscription questions.",
  notFound:
    "The page you are looking for could not be found. Browse Strong8k plans, installation guides, blogs or contact support.",
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

/** Reciprocal UK alternate URL for hreflang */
export function ukCanonicalUrl(path: string = "/"): string {
  const origin = siteConfig.ukSiteUrl.replace(/\/$/, "");
  if (!path || path === "/") return `${origin}/`;

  let normalized = path.startsWith("/") ? path : `/${path}`;
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
  keywords?: string[];
};

/** Shared page metadata with a single canonical + matching Open Graph URL + reciprocal en-US and en-GB hreflang. */
export function createPageMetadata({
  title,
  description,
  path,
  index = true,
  follow = true,
  keywords,
}: PageMetaInput): Metadata {
  const url = canonicalUrl(path);
  const ukUrl = ukCanonicalUrl(path);

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
        "en-GB": ukUrl,
      },
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
  keywords: [...pageKeywords.home],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: pageTitles.home,
    description: siteConfig.description,
    images: [
      {
        url: "/brand-logo.png",
        width: 512,
        height: 512,
        alt: "Strong 8k",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: pageTitles.home,
    description: siteConfig.description,
    images: ["/brand-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
