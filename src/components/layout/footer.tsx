import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Mail, MessageCircle, Globe } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site";
import { routes } from "@/lib/routes";
import { FadeIn } from "@/components/animation/fade-in";

const FOOTER_LINKS = {
  service: [
    { label: "Home", href: routes.home },
    { label: "Pricing", href: routes.subscriptionPlans },
    { label: "Installation Guide", href: routes.installationGuide },
    { label: "Reseller Panel", href: routes.resellerPanel },
    { label: "Contact Us", href: routes.contactUs },
    { label: "Blogs", href: routes.blogs },
  ],
  support: [
    { label: "Pricing", href: `${routes.subscriptionPlans}#pricing` },
    { label: "Free Trial", href: `${routes.contactUs}#free-trial` },
    { label: "Installation Guide", href: routes.installationGuide },
    { label: "Blogs", href: routes.blogs },
    { label: "Refund Policy", href: `${routes.subscriptionPlans}#refund-policy` },
  ],
};

const REGIONAL_WEBSITES = [
  { label: "United States — 8k-strong.us", href: "https://8k-strong.us/" },
  { label: "United Kingdom — 8k-strong.co.uk", href: "https://8k-strong.co.uk/" },
];

const TRUST_POINTS = [
  "40,000+ Live Channels",
  "140,000+ VOD Titles",
  "24/7 Customer Support",
  "HD, Full HD, and UHD",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative isolate border-t"
      style={{
        backgroundColor: "var(--footer-bg)",
        borderColor: "var(--footer-border)",
      }}
    >
      <Container className="py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr] lg:gap-16">
          {/* Brand column */}
          <FadeIn delay={0.05}>
            <div>
              <Link href={routes.home} className="inline-flex items-center gap-2.5 no-underline">
                <Image
                  src="/strong-8k.PNG?v=3"
                  alt="Strong 8k"
                  width={64}
                  height={64}
                  unoptimized
                  className="h-12 w-12 object-contain sm:h-[3.25rem] sm:w-[3.25rem]"
                />
              </Link>

              <p
                className="mt-4 max-w-sm text-sm leading-relaxed"
                style={{ color: "var(--footer-muted)" }}
              >
                Live television and on-demand viewing through supported devices: 40,000+ available live channels, 140,000+ VOD titles, and HD, Full HD, and UHD sources where supported.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {TRUST_POINTS.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border px-3 py-1 text-[11px] font-medium"
                    style={{
                      borderColor: "rgba(255, 255, 255, 0.22)",
                      backgroundColor: "transparent",
                      color: "var(--hero-pill-text)",
                    }}
                  >
                    {point}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--hero-accent)]"
                  style={{ color: "var(--footer-link)" }}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  {siteConfig.phone}
                </a>
                <span
                  className="hidden h-4 w-px sm:block"
                  style={{ backgroundColor: "var(--footer-border)" }}
                  aria-hidden
                />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--hero-accent)]"
                  style={{ color: "var(--footer-link)" }}
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Link columns */}
          <FadeIn delay={0.12} className="grid gap-10 sm:grid-cols-3">
            <div>
              <h3
                className="text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: "var(--hero-accent)" }}
              >
                Service
              </h3>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.service.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-150 hover:text-[var(--hero-accent)]"
                      style={{ color: "var(--footer-link)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: "var(--hero-accent)" }}
              >
                Support
              </h3>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-150 hover:text-[var(--hero-accent)]"
                      style={{ color: "var(--footer-link)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: "var(--hero-accent)" }}
              >
                Regional Sites
              </h3>
              <ul className="mt-4 space-y-3">
                {REGIONAL_WEBSITES.map((site) => (
                  <li key={site.label}>
                    <a
                      href={site.href}
                      className="inline-flex items-center gap-1.5 text-sm transition-colors duration-150 hover:text-[var(--hero-accent)]"
                      style={{ color: "var(--footer-link)" }}
                    >
                      <Globe className="h-3.5 w-3.5 opacity-70" />
                      {site.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Bottom bar */}
        <FadeIn delay={0.18}>
          <div
            className="mt-12 flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between"
            style={{ borderColor: "var(--footer-border)" }}
          >
            <p className="text-xs" style={{ color: "var(--footer-muted)" }}>
              © 2026 {siteConfig.name}. All rights reserved.
            </p>
            <p
              className="max-w-xl text-xs leading-relaxed md:text-right"
              style={{ color: "var(--footer-muted)" }}
            >
              Strong 8k is an independent service provider. Channel availability and playback features may vary by program, device, location, and applicable rights.
            </p>
          </div>
        </FadeIn>
      </Container>
    </footer>
  );
}
