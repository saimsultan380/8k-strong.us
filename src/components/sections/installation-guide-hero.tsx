"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { routes } from "@/lib/routes";
import { enquiryWhatsApp } from "@/lib/site";
import { Container } from "@/components/layout/container";
import { HeroReveal } from "@/components/animation/hero-reveal";
import { HeroTitleReveal } from "@/components/animation/hero-title-reveal";

export function InstallationGuideHero() {
  return (
    <section className="relative isolate overflow-hidden pb-16 md:pb-20">
      <Container className="relative z-10 pt-32 text-center sm:pt-36">
        <HeroReveal delay={0.05}>
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
            style={{
              borderColor: "var(--hero-pill-border)",
              backgroundColor: "transparent",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--hero-accent)" }}
            />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Installation Guide
            </span>
          </div>
        </HeroReveal>

        <HeroTitleReveal
          className="mx-auto max-w-[920px] text-center text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[48px] lg:text-[52px]"
          style={{ color: "var(--hero-heading)" }}
          lines={["Strong 8k IPTV Installation Guide for TVs, Phones and Computers"]}
        />

        <HeroReveal delay={0.18}>
          <div className="mx-auto mt-6 max-w-[760px] space-y-4 text-sm leading-[1.75] sm:text-[15px] md:text-base">
            <p style={{ color: "var(--hero-muted)" }}>
              Select your device to see the recommended apps and setup instructions for Strong 8k.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              For compatible Fire OS and Android devices, our current app is available through Strong 8k Downloader code 4330396. The previous version used 439873.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              For Smart TVs, Apple devices, computers and Roku, choose a compatible player and use the account details supplied by support.
            </p>
          </div>
        </HeroReveal>

        <HeroReveal variant="cta" delay={0.34}>
          <div className="mt-8 flex flex-row items-center justify-center gap-3">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="flex-1 sm:flex-initial">
              <Link
                href={enquiryWhatsApp("installation")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center rounded-xl px-4 py-3.5 text-[13px] font-bold transition-all duration-200 hover:brightness-110 sm:px-7 sm:text-[15px]"
                style={{
                  background: "var(--hero-cta-primary-bg)",
                  boxShadow: "var(--hero-cta-primary-shadow)",
                  color: "var(--hero-cta-primary-fg)",
                }}
              >
                Contact Installation Support
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="flex-1 sm:flex-initial">
              <Link
                href={routes.subscriptionPlans}
                className="flex min-h-12 items-center justify-center rounded-xl border px-4 py-3.5 text-[13px] font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] sm:px-7 sm:text-[15px]"
                style={{
                  borderColor: "var(--hero-btn-border)",
                  color: "var(--hero-cta-secondary-text)",
                  backgroundColor: "transparent",
                }}
              >
                View Prices
              </Link>
            </motion.div>
          </div>
        </HeroReveal>
      </Container>
    </section>
  );
}
