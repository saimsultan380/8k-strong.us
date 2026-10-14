"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { routes } from "@/lib/routes";
import { enquiryWhatsApp } from "@/lib/site";

export function ResellerCtaSection() {
  return (
    <section
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div
          className="mx-auto max-w-4xl rounded-2xl border px-6 py-12 text-center sm:px-10 sm:py-14 md:px-14 md:py-16"
          style={{
            backgroundColor: "transparent",
            borderColor: "var(--feature-card-border)",
          }}
        >
          <FadeIn delay={0.05}>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--hero-accent)" }}
            >
              Get Started
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Contact Us for Your Reseller Credit Price Quote
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="mx-auto mt-7 max-w-[680px] text-[15px] leading-[1.8]"
              style={{ color: "var(--hero-muted)" }}
            >
              Send your credit quantity and branding or technical requirements. We will confirm pricing, setup, and activation details.
            </p>
          </FadeIn>

          <ScrollReveal direction="up" delay={0.1} once>
            <div className="mt-10 flex flex-row items-center justify-center gap-3">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="flex-1 sm:flex-initial">
              <Link
                href={enquiryWhatsApp("reseller-pricing")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center rounded-xl px-4 py-3.5 text-[13px] font-bold transition-all duration-200 hover:brightness-110 sm:px-8 sm:text-[15px]"
                style={{
                  background: "var(--hero-cta-primary-bg)",
                  boxShadow: "var(--hero-cta-primary-shadow)",
                  color: "var(--hero-cta-primary-fg)",
                }}
              >
                Request Your Reseller Quote
              </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="flex-1 sm:flex-initial">
              <Link
                href={routes.installationGuide}
                className="flex min-h-12 items-center justify-center rounded-xl border px-4 py-3.5 text-[13px] font-semibold transition-all duration-200 hover:border-[var(--hero-accent)] sm:px-8 sm:text-[15px]"
                style={{
                  borderColor: "var(--hero-btn-border)",
                  color: "var(--hero-cta-secondary-text)",
                  backgroundColor: "transparent",
                }}
              >
                Read Installation Instructions
              </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
