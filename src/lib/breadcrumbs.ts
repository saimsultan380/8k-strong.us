import { routes } from "@/lib/routes";
import { canonicalUrl, pageDescriptions, siteConfig } from "@/lib/site";

export type BreadcrumbItem = {
  name: string;
  /** Canonical path with trailing slash, or "/" for home */
  path: string;
};

/** Indexable page breadcrumb trails (Home › Page). Homepage has no trail — Google requires ≥2 ListItems. */
export const pageBreadcrumbs = {
  home: [{ name: "Home", path: routes.home }] satisfies BreadcrumbItem[],
  subscriptionPlans: [
    { name: "Home", path: routes.home },
    { name: "Pricing", path: routes.subscriptionPlans },
  ] satisfies BreadcrumbItem[],
  installationGuide: [
    { name: "Home", path: routes.home },
    { name: "Installation Guide", path: routes.installationGuide },
  ] satisfies BreadcrumbItem[],
  resellerPanel: [
    { name: "Home", path: routes.home },
    { name: "Reseller Panel", path: routes.resellerPanel },
  ] satisfies BreadcrumbItem[],
  contactUs: [
    { name: "Home", path: routes.home },
    { name: "Contact Us", path: routes.contactUs },
  ] satisfies BreadcrumbItem[],
  blogs: [
    { name: "Home", path: routes.home },
    { name: "Blogs", path: routes.blogs },
  ] satisfies BreadcrumbItem[],
} as const;

/** schema.org/BreadcrumbList JSON-LD. Only emit when there are ≥2 items (Google requirement). */
export function breadcrumbJsonLd(items: readonly BreadcrumbItem[]) {
  if (items.length < 2) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function siteJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      alternateName: ["Strong8k", "Strong 8k IPTV"],
      url: canonicalUrl(routes.home),
      description: pageDescriptions.home,
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      alternateName: ["Strong8k", "Strong 8k IPTV"],
      url: canonicalUrl(routes.home),
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl.replace(/\/$/, "")}/icon-512.png`,
        width: 512,
        height: 512,
        caption: "Strong 8k",
      },
      image: `${siteConfig.siteUrl.replace(/\/$/, "")}/icon-512.png`,
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.email,
        telephone: siteConfig.phone,
        contactType: "customer support",
        availableLanguage: ["English"],
      },
    },
  ];
}
