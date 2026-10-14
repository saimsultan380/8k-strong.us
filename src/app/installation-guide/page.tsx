import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { InstallationGuideHero } from "@/components/sections/installation-guide-hero";
import { InstallationBeforeStart } from "@/components/sections/installation-before-start";
import { InstallationDeviceSelector } from "@/components/sections/installation-device-selector";
import { InstallationAppsCodes } from "@/components/sections/installation-apps-codes";
import { InstallationTroubleshooting } from "@/components/sections/installation-troubleshooting";
import { InstallationCtaSection } from "@/components/sections/installation-cta-section";
import { pageDescriptions, pageKeywords, pageTitles, createPageMetadata } from "@/lib/site";
import { routes } from "@/lib/routes";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = createPageMetadata({
  title: pageTitles.installationGuide,
  description: pageDescriptions.installationGuide,
  path: routes.installationGuide,
  keywords: [...pageKeywords.installationGuide],
});

export default function InstallationGuidePage() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <Breadcrumbs items={pageBreadcrumbs.installationGuide} />
      <InstallationGuideHero />
      <InstallationBeforeStart />
      <InstallationDeviceSelector />
      <InstallationAppsCodes />
      <InstallationTroubleshooting />
      <InstallationCtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
