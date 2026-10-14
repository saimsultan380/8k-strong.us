import { routes } from "@/lib/routes";

export const CONNECTION_COUNTS = [1, 2, 3, 4] as const;

/** Full-term totals in USD for 1 / 2 / 3 / 4 connections. */
export const PLAN_PRICES: Record<number, Record<number, string>> = {
  1: { 1: "$13.24", 3: "$23.82", 6: "$33.10", 12: "$55.62" },
  2: { 1: "$26.48", 3: "$47.64", 6: "$66.20", 12: "$111.24" },
  3: { 1: "$39.72", 3: "$71.46", 6: "$99.30", 12: "$166.86" },
  4: { 1: "$52.96", 3: "$95.28", 6: "$132.40", 12: "$222.48" },
};

export const PLAN_DURATIONS = [
  {
    months: 1,
    label: "1 Month",
    cardTitle: "1-Month IPTV Subscription",
    homeTitle: "1 Month — $13.24",
    slug: "1-month",
    summary:
      "A short subscription for your first paid period after trying the service.",
    pricingSummary:
      "One month of access to the full Strong8k catalog. A practical starting point if you prefer a shorter subscription before choosing a longer term.",
    cta: "Get Your 1-Month Subscription",
    pricingCta: "Get This Plan",
  },
  {
    months: 3,
    label: "3 Months",
    cardTitle: "3-Month IPTV Subscription",
    homeTitle: "3 Months — $23.82",
    slug: "3-months",
    summary:
      "A three-month subscription for viewers who want a longer viewing period.",
    pricingSummary:
      "Three months of access to the full catalog. Choose this duration if you want continued viewing with a shorter commitment than a six-month or annual subscription.",
    cta: "Get Your 3-Month Subscription",
    pricingCta: "Get This Plan",
  },
  {
    months: 6,
    label: "6 Months",
    cardTitle: "6-Month IPTV Subscription",
    homeTitle: "6 Months — $33.10",
    slug: "6-months",
    summary:
      "A six-month subscription for regular viewing on your supported device.",
    pricingSummary:
      "Six months of access to the full catalog. A suitable option for regular viewers who prefer to renew less frequently.",
    cta: "Get Your 6-Month Subscription",
    pricingCta: "Get This Plan",
  },
  {
    months: 12,
    label: "12 Months",
    cardTitle: "12-Month IPTV Subscription",
    homeTitle: "12 Months — $55.62",
    slug: "12-months",
    summary:
      "A full-year subscription once you have checked that the service suits your household.",
    pricingSummary:
      "Twelve months of access to the full catalog. Choose an annual subscription if you want a longer viewing term with fewer renewal dates to remember.",
    cta: "Get Your 12-Month Subscription",
    pricingCta: "Get This Plan",
  },
] as const;

export const HOME_PLAN_FEATURES = [
  "40,000+ available live channels.",
  "140,000+ on-demand titles, including movies and series.",
  "International and multilingual content.",
  "HD, Full HD, and UHD options where supported.",
  "Movie and series requests, subject to availability.",
  "Live event inquiries and updates.",
  "Limited EPG program information.",
  "Limited catch-up on supported content.",
  "Our app for compatible Fire OS and Android devices.",
  "Help with supported devices and players.",
  "24/7 customer support.",
] as const;

export const PRICING_PLAN_FEATURES = [
  "40,000+ available live channels.",
  "140,000+ on-demand titles.",
  "International and multilingual content.",
  "HD, Full HD, and UHD sources where supported.",
  "Movie and series requests, subject to availability.",
  "Live event inquiries and updates.",
  "Limited EPG and catch-up.",
  "Our app for compatible Fire OS and Android devices.",
  "Help with supported devices and players.",
  "24/7 customer support.",
] as const;

export function planEnquiryHref(months: number, connections: number) {
  const slug = months === 1 ? "1-month" : `${months}-months`;
  return `${routes.contactUs}?plan=${slug}&connections=${connections}`;
}
