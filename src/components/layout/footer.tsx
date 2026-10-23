"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Mail, MessageCircle } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site";
import { routes } from "@/lib/routes";
import { BLOG_POSTS } from "@/data/blogs";
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
    { label: "Refund Policy", href: `${routes.subscriptionPlans}#refund-policy` },
  ],
  blogs: [
    { label: "All Blogs", href: routes.blogs },
    ...BLOG_POSTS.map((post) => ({
      label: post.navLabel,
      href: post.path,
    })),
  ],
};

function UsFlag() {
  return (
    <svg
      viewBox="0 0 19 10"
      preserveAspectRatio="none"
      className="size-5 shrink-0 rounded-[2px] shadow-[0_0_0_1px_rgba(255,255,255,0.35)]"
      aria-hidden
    >
      <rect width="19" height="10" fill="#bf0a30" />
      <path stroke="#fff" strokeWidth="0.77" d="M0 1.15h19M0 2.69h19M0 4.23h19M0 5.77h19M0 7.31h19M0 8.85h19" />
      <rect width="7.6" height="5.38" fill="#002868" />
      <g fill="#fff">
        <circle cx="1.1" cy="0.85" r="0.28" />
        <circle cx="2.5" cy="0.85" r="0.28" />
        <circle cx="3.9" cy="0.85" r="0.28" />
        <circle cx="5.3" cy="0.85" r="0.28" />
        <circle cx="6.7" cy="0.85" r="0.28" />
        <circle cx="1.8" cy="1.7" r="0.28" />
        <circle cx="3.2" cy="1.7" r="0.28" />
        <circle cx="4.6" cy="1.7" r="0.28" />
        <circle cx="6" cy="1.7" r="0.28" />
        <circle cx="1.1" cy="2.55" r="0.28" />
        <circle cx="2.5" cy="2.55" r="0.28" />
        <circle cx="3.9" cy="2.55" r="0.28" />
        <circle cx="5.3" cy="2.55" r="0.28" />
        <circle cx="6.7" cy="2.55" r="0.28" />
        <circle cx="1.8" cy="3.4" r="0.28" />
        <circle cx="3.2" cy="3.4" r="0.28" />
        <circle cx="4.6" cy="3.4" r="0.28" />
        <circle cx="6" cy="3.4" r="0.28" />
        <circle cx="1.1" cy="4.25" r="0.28" />
        <circle cx="2.5" cy="4.25" r="0.28" />
        <circle cx="3.9" cy="4.25" r="0.28" />
        <circle cx="5.3" cy="4.25" r="0.28" />
        <circle cx="6.7" cy="4.25" r="0.28" />
      </g>
    </svg>
  );
}

function UkFlag() {
  return (
    <svg
      viewBox="0 0 60 30"
      preserveAspectRatio="none"
      className="size-5 shrink-0 rounded-[2px] shadow-[0_0_0_1px_rgba(255,255,255,0.35)]"
      aria-hidden
    >
      <clipPath id="uk-flag-clip">
        <path d="M0 0h60v30H0z" />
      </clipPath>
      <g clipPath="url(#uk-flag-clip)">
        <path d="M0 0h60v30H0z" fill="#012169" />
        <path d="M0 0l60 30M60 0L0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0l60 30M60 0L0 30" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

const REGIONAL_WEBSITES = [
  { place: "United States", domain: "8k-strong.us", href: "https://8k-strong.us/", Flag: UsFlag },
  { place: "United Kingdom", domain: "8k-strong.co.uk", href: "https://8k-strong.co.uk/", Flag: UkFlag },
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
                      color: "#ffffff",
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
          <FadeIn delay={0.12} className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
                Blogs
              </h3>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.blogs.map((link) => (
                  <li key={link.href}>
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
              <ul className="mt-4 space-y-2.5">
                {REGIONAL_WEBSITES.map((site) => (
                  <li key={site.domain}>
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex w-max"
                    >
                      <a
                        href={site.href}
                        className="btn-shine inline-flex w-max items-center gap-2 whitespace-nowrap rounded-lg border px-3 py-2 text-sm font-medium leading-none transition-colors duration-150 hover:border-[var(--hero-accent)]"
                        style={{
                          color: "#ffffff",
                          backgroundColor: "rgba(255, 255, 255, 0.06)",
                          borderColor: "rgba(255, 255, 255, 0.18)",
                        }}
                      >
                        <span className="relative z-[2] shrink-0">
                          <site.Flag />
                        </span>
                        <span className="relative z-[2]">
                          {site.place}
                          {" — "}
                          <span style={{ color: "var(--hero-accent)" }}>{site.domain}</span>
                        </span>
                      </a>
                    </motion.div>
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
