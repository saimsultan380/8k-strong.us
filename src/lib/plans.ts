import { routes } from "@/lib/routes";

export const CONNECTION_COUNTS = [1, 2, 3, 4] as const;

/** Full-term totals in the order 1 / 2 / 3 / 4 connections. */
export const PLAN_PRICES: Record<number, Record<number, string>> = {
  1: { 1: "£8.98", 3: "£17.98", 6: "£24.98", 12: "£41.98" },
  2: { 1: "£17.96", 3: "£35.96", 6: "£49.96", 12: "£83.96" },
  3: { 1: "£26.94", 3: "£53.94", 6: "£74.94", 12: "£125.94" },
  4: { 1: "£35.92", 3: "£71.92", 6: "£99.92", 12: "£167.92" },
};

export const PLAN_DURATIONS = [
  {
    months: 1,
    label: "1 Month",
    cardTitle: "1-Month IPTV Subscription",
    homeTitle: "1 Month — £8.98",
    slug: "1-month",
    summary:
      "A short subscription for your first paid period after trying the service.",
    pricingSummary:
      "One month of access to the full Strong 8k catalogue. A practical starting point if you prefer a shorter subscription before choosing a longer term.",
    cta: "Get Your 1-Month Subscription",
    pricingCta: "Get This Plan",
  },
  {
    months: 3,
    label: "3 Months",
    cardTitle: "3-Month IPTV Subscription",
    homeTitle: "3 Months — £17.98",
    slug: "3-months",
    summary:
      "A three-month subscription for viewers who want a longer viewing period.",
    pricingSummary:
      "Three months of access to the full catalogue. Choose this duration if you want continued viewing with a shorter commitment than a six-month or annual subscription.",
    cta: "Get Your 3-Month Subscription",
    pricingCta: "Get This Plan",
  },
  {
    months: 6,
    label: "6 Months",
    cardTitle: "6-Month IPTV Subscription",
    homeTitle: "6 Months — £24.98",
    slug: "6-months",
    summary:
      "A six-month subscription for regular viewing on your supported device.",
    pricingSummary:
      "Six months of access to the full catalogue. A suitable option for regular viewers who prefer to renew less frequently.",
    cta: "Get Your 6-Month Subscription",
    pricingCta: "Get This Plan",
  },
  {
    months: 12,
    label: "12 Months",
    cardTitle: "12-Month IPTV Subscription",
    homeTitle: "12 Months — £41.98",
    slug: "12-months",
    summary:
      "A full-year subscription once you have checked that the service suits your household.",
    pricingSummary:
      "Twelve months of access to the full catalogue. Choose an annual subscription if you want a longer viewing term with fewer renewal dates to remember.",
    cta: "Get Your 12-Month Subscription",
    pricingCta: "Get This Plan",
  },
] as const;

export const HOME_PLAN_FEATURES = [
  "40,000+ available live channels.",
  "140,000+ VOD titles, including films and series.",
  "UK-focused and international viewing.",
  "HD, FHD and UHD options where supported.",
  "Multilingual content, with audio and subtitles varying by title.",
  "Requests for favourite films and series.",
  "Live event updates and availability enquiries.",
  "Limited catch-up on supported channels and programmes.",
  "Limited EPG programme information.",
  "Our app for compatible Fire OS and Android devices.",
  "Help setting up supported devices and players.",
  "24/7 customer support.",
  "Plans for one or more simultaneous connections.",
] as const;

export const PRICING_PLAN_FEATURES = [
  "40,000+ available live channels.",
  "140,000+ VOD titles, including films and series.",
  "UK-focused and international content.",
  "Multilingual viewing, where available.",
  "HD, FHD and UHD source options.",
  "Requests for favourite films and series.",
  "Live event enquiries and updates.",
  "Limited EPG programme information.",
  "Limited catch-up on supported content.",
  "Our app for compatible Fire OS and Android devices.",
  "Support with compatible third-party players.",
  "24/7 customer assistance.",
] as const;

export function planEnquiryHref(months: number, connections: number) {
  const slug = months === 1 ? "1-month" : `${months}-months`;
  return `${routes.contactUs}?plan=${slug}&connections=${connections}`;
}
