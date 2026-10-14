import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";
import { createPageMetadata, pageDescriptions, pageKeywords, pageTitles } from "@/lib/site";
import { routes } from "@/lib/routes";

export const metadata: Metadata = createPageMetadata({
  title: pageTitles.home,
  description: pageDescriptions.home,
  path: routes.home,
  keywords: [...pageKeywords.home],
});

export default function RootPage() {
  return <HomePage />;
}
