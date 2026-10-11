"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { HeroReveal } from "@/components/animation/hero-reveal";
import { HeroTitleReveal } from "@/components/animation/hero-title-reveal";
import { motion } from "framer-motion";
import { routes } from "@/lib/routes";
import { enquiryWhatsApp } from "@/lib/site";
import Link from "next/link";

export function SubscriptionPlansHero() {
  return (
    <section className="relative isolate overflow-hidden pb-16 md:pb-20">
      <Container className="relative z-10 pt-32 text-center sm:pt-36">
        <HeroReveal delay={0.05}>
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
            style={{
              borderColor: "var(--hero-pill-border)",
              backgroundColor: "var(--glass-bg)",
              boxShadow: "var(--glass-shadow)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--hero-accent)" }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--hero-accent)" }}>
              Pricing
            </span>
          </div>
        </HeroReveal>

        <HeroTitleReveal
          className="mx-auto max-w-[920px] text-center text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[44px] lg:text-[48px]"
          style={{ color: "var(--hero-heading)" }}
          lines={["Strong 8k IPTV Subscription Plans for Every UK Household"]}
        />

        <HeroReveal delay={0.18}>
          <div className="mx-auto mt-6 max-w-[750px] space-y-4 text-sm leading-[1.8] sm:text-[15px] md:text-base">
            <p style={{ color: "var(--hero-muted)" }}>
              Choose a Strong 8k IPTV subscription with 40,000+ live channels, 140,000+ VOD titles and 24/7 customer support.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              Our premium IPTV plans bring together UK-focused viewing, international channels, films and series. Choose how long you want your subscription to last and how many streams you need playing at the same time.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              Strong 8k IPTV subscription prices are shown in pounds sterling. Every amount covers the complete selected term.
            </p>
          </div>
        </HeroReveal>

        <HeroReveal variant="cta" delay={0.36}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#pricing"
                className="flex w-full max-w-xs items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:brightness-110 sm:w-auto sm:max-w-none sm:text-[15px]"
                style={{
                  background: "var(--hero-cta-primary-bg)",
                  boxShadow: "var(--hero-cta-primary-shadow)",
                }}
              >
                View Prices Below
                <ArrowRight className="h-4 w-4 opacity-75" />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={enquiryWhatsApp("free-trial")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full max-w-xs items-center justify-center gap-2 rounded-xl border px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] hover:text-[var(--hero-accent)] sm:w-auto sm:max-w-none sm:text-[15px]"
                style={{
                  borderColor: "var(--hero-btn-border)",
                  color: "var(--hero-cta-secondary-text)",
                  backgroundColor: "var(--hero-pill-bg)",
                }}
              >
                Request Your Free Trial
              </Link>
            </motion.div>
          </div>
        </HeroReveal>
      </Container>
    </section>
  );
}
