"use client";

import { Container } from "@/components/layout/container";
import { HeroReveal } from "@/components/animation/hero-reveal";
import { HeroTitleReveal } from "@/components/animation/hero-title-reveal";

import Link from "next/link";
import { enquiryWhatsApp } from "@/lib/site";

export function ResellerPanelHero() {
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
              Reseller Panel
            </span>
          </div>
        </HeroReveal>

        <HeroTitleReveal
          className="mx-auto max-w-[960px] text-center text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[48px] lg:text-[54px]"
          style={{ color: "var(--hero-heading)" }}
          lines={["Strong8k Reseller Panel With Credits and Custom White Label Branding"]}
        />

        <HeroReveal delay={0.18}>
          <div className="mx-auto mt-6 max-w-[760px] space-y-4 text-sm leading-[1.75] sm:text-[15px] md:text-base">
            <p style={{ color: "var(--hero-muted)" }}>
              Manage customer subscriptions through the Strong 8k reseller panel.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              Purchase credits, organize customer access, and set your retail prices. The minimum opening purchase required to create a panel is 120 credits.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              After payment confirmation, we activate access using your supplied email address and username.
            </p>
            <p style={{ color: "var(--hero-muted)" }}>
              Ask about white label branding, personal domains, branded panel URLs, VPS arrangements, and supported service addresses for VPN users.
            </p>
          </div>
        </HeroReveal>

        <HeroReveal variant="cta" delay={0.34}>
          <div className="mt-8 flex flex-row items-center justify-center gap-3">
            <Link
              href={enquiryWhatsApp("reseller-pricing")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 flex-1 items-center justify-center rounded-xl px-4 py-3.5 text-[13px] font-bold transition-all duration-200 hover:brightness-110 sm:flex-initial sm:px-7 sm:text-[15px]"
              style={{
                background: "var(--hero-cta-primary-bg)",
                boxShadow: "var(--hero-cta-primary-shadow)",
                color: "var(--hero-cta-primary-fg)",
              }}
            >
              Request Reseller Pricing
            </Link>
            <a
              href="#reseller-plans"
              className="flex min-h-12 flex-1 items-center justify-center rounded-xl border px-4 py-3.5 text-[13px] font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] sm:flex-initial sm:px-7 sm:text-[15px]"
              style={{
                borderColor: "var(--hero-btn-border)",
                color: "var(--hero-cta-secondary-text)",
                backgroundColor: "transparent",
              }}
            >
              See Credit Requirements
            </a>
          </div>
        </HeroReveal>
      </Container>
    </section>
  );
}
