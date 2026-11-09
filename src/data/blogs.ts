/**
 * Blog post registry. Page URLs are top-level (no /blogs/ in the path).
 * Full article bodies live in each post's page component.
 */
export type BlogPost = {
  slug: string;
  /** Public path with trailing slash, e.g. /what-is-strong-8k-iptv/ */
  path: string;
  title: string;
  navLabel: string;
  /** Card / intro supporting line */
  line: string;
  description: string;
  metaTitle: string;
  /** Featured / card image in /public */
  image: string;
  imageAlt: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-strong-8k-iptv",
    path: "/what-is-strong-8k-iptv/",
    title: "What Is Strong 8K IPTV or 8K IPTV? Easy Guide for Beginners",
    navLabel: "What Is Strong 8K IPTV?",
    line: "Learn what Strong 8K IPTV is, how strong8k works, and how strong 8k iptv delivers live TV, movies, and series with compatible devices and streaming options.",
    description:
      "Learn what Strong 8K IPTV is, how strong8k works, and how strong 8k iptv delivers live TV, movies, and series with compatible devices and streaming options.",
    metaTitle: "What Is Strong 8K IPTV or 8K IPTV? Easy Guide for Beginners",
    image: "/strong8k-iptv-beginners-thumbnail.webp",
    imageAlt: "Strong 8K IPTV beginner guide thumbnail",
  },
  {
    slug: "strong8k-reseller-panel",
    path: "/strong8k-reseller-panel/",
    title: "Strong8K Reseller Panel or Strong 8K Panel | How to Earn $ as 8K Strong Reseller?",
    navLabel: "Strong8K Reseller Panel",
    line: "Explore the Strong8K reseller panel, Strong 8K panel credit system, reseller packages & practical ways to calculate potential IPTV 8K Panel business earnings",
    description:
      "Explore the Strong8K reseller panel, Strong 8K panel credit system, reseller packages & practical ways to calculate potential IPTV 8K Panel business earnings",
    metaTitle: "Strong8K Reseller Panel: Earn $ as a Strong 8K IPTV Reseller",
    image: "/strong8k-reseller-panel-thumbnail.webp",
    imageAlt: "Strong8K reseller panel guide thumbnail",
  },
  {
    slug: "does-strong-8k-iptv-use-invoices",
    path: "/does-strong-8k-iptv-use-invoices/",
    title: "Does Strong 8K IPTV Use Invoices? Payment Methods and Subscription Process Explained",
    navLabel: "Strong 8K IPTV Invoices",
    line: "Does Strong 8K IPTV use invoices? Learn how Strong8K handles payments, request a Stripe invoice or secure link, pay securely, and activate your subscription.",
    description:
      "Does Strong 8K IPTV use invoices? Learn how Strong8K handles payments, request a Stripe invoice or secure link, pay securely, and activate your subscription.",
    metaTitle: "Does Strong 8K IPTV Use Invoices? Payment Methods Guide",
    image: "/strong8k-invoices-payments-thumbnail.webp",
    imageAlt: "Strong 8K IPTV invoices and payment methods guide thumbnail",
  },
  {
    slug: "strong-8k-down",
    path: "/strong-8k-down/",
    title: "Is Strong 8K Down? How to Check Strong8K IPTV Status and Fix Streaming Problems",
    navLabel: "Is Strong 8K Down?",
    line: "Is Strong 8K down or is Strong8K IPTV not working? Check possible service issues, fix buffering, troubleshoot channels, and restore your IPTV connection.",
    description:
      "Is Strong 8K down or is Strong8K IPTV not working? Check possible service issues, fix buffering, troubleshoot channels, and restore your IPTV connection.",
    metaTitle: "Is Strong 8K Down? Strong8K IPTV Server Status & Easy Fixes",
    image: "/strong8k-status-troubleshooting-thumbnail.webp",
    imageAlt: "Is Strong 8K down and IPTV troubleshooting guide thumbnail",
  },
  {
    slug: "install-strong-8k-iptv-on-firestick",
    path: "/install-strong-8k-iptv-on-firestick/",
    title: "How to Install or Set Up Strong 8K IPTV on Firestick? Complete Guide",
    navLabel: "Install Strong 8K on Firestick",
    line: "Learn how to install Strong 8K IPTV on Firestick, set up a compatible IPTV player, add your subscription details, and fix common setup and playback issues.",
    description:
      "Learn how to install Strong 8K IPTV on Firestick, set up a compatible IPTV player, add your subscription details, and fix common setup and playback issues.",
    metaTitle: "How to Install & Setup Strong 8K IPTV on Firestick in 5 Mint?",
    image: "/strong8k-firestick-installation-thumbnail.webp",
    imageAlt: "How to install and set up Strong 8K IPTV on Firestick thumbnail",
  },
  {
    slug: "strong-8k-iptv-multiple-connections",
    path: "/strong-8k-iptv-multiple-connections/",
    title: "Strong 8K IPTV Multiple Connections: How to Watch on Multiple Devices",
    navLabel: "Multiple Connections",
    line: "Learn how Strong 8K IPTV multiple connections work, use your subscription on different devices, watch simultaneously, and choose the right connection plan for your needs.",
    description:
      "Learn how Strong 8K IPTV multiple connections work, use your subscription on different devices, watch simultaneously, and choose the right connection plan for your needs.",
    metaTitle: "Strong 8K IPTV Multiple Connections: Watch on Multiple Devices",
    image: "/strong8k-multiple-connections-thumbnail.webp",
    imageAlt: "Strong 8K IPTV multiple connections and devices guide thumbnail",
  },
] as const;

export function blogPath(slug: string): string {
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  return post?.path ?? `/${slug}/`;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
