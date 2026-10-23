import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blogs";
import { canonicalUrl, sitemapRoutes } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = sitemapRoutes.map(({ path, changeFrequency, priority }) => ({
    url: canonicalUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));

  const blogs = BLOG_POSTS.map((post) => ({
    url: canonicalUrl(post.path),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.55,
  }));

  return [...pages, ...blogs];
}
