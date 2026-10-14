import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ResellerPanelHero } from "@/components/sections/reseller-panel-hero";
import { ResellerRest } from "@/components/sections/reseller-rest";
import { ResellerFaqSection } from "@/components/sections/reseller-faq-section";
import { ResellerCtaSection } from "@/components/sections/reseller-cta-section";
import { pageDescriptions, pageKeywords, pageTitles, createPageMetadata } from "@/lib/site";
import { routes } from "@/lib/routes";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = createPageMetadata({
  title: pageTitles.resellerPanel,
  description: pageDescriptions.resellerPanel,
  path: routes.resellerPanel,
  keywords: [...pageKeywords.resellerPanel],
});

export default function ResellerPanelPage() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <Breadcrumbs items={pageBreadcrumbs.resellerPanel} />
      <ResellerPanelHero />
      <ResellerRest />
      <ResellerFaqSection />
      <ResellerCtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
