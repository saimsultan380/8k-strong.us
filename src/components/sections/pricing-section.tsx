"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { motion } from "framer-motion";
import { routes } from "@/lib/routes";
import { HOME_PLAN_FEATURES, PLAN_DURATIONS, PLAN_PRICES, planEnquiryHref } from "@/lib/plans";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 md:items-end md:gap-12">
          <FadeIn delay={0.05}>
            <h2
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Choose Your Strong 8k IPTV Subscription and Duration
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p
              className="text-sm leading-[1.75] sm:text-[15px] md:text-right"
              style={{ color: "var(--hero-muted)" }}
            >
              Choose the subscription length that suits your viewing. Every plan
              includes access to the same available live channel and on-demand
              catalogue. The prices below cover the full selected term for one
              connection, allowing one active stream at a time.
            </p>
          </FadeIn>
        </div>

        <div className="grid w-full items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {PLAN_DURATIONS.map((plan, i) => (
            <ScrollReveal key={plan.months} direction="up" delay={0.04 * i} once className="h-full">
              <article
                className="flex h-full flex-col rounded-xl border px-6 py-7 md:px-6 md:py-8"
                style={{
                  backgroundColor: "var(--feature-card-bg)",
                  borderColor: "var(--feature-card-border)",
                  boxShadow: "var(--feature-card-shadow)",
                }}
              >
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-gradient-brand">
                  {plan.label}
                </p>
                <p
                  className="mt-4 text-4xl font-bold tracking-tight md:text-[40px]"
                  style={{ color: "var(--hero-heading)" }}
                >
                  {PLAN_PRICES[1][plan.months]}
                </p>
                <p className="mt-5 text-[13px] font-semibold" style={{ color: "var(--hero-heading)" }}>
                  Included catalogue and features:
                </p>
                <ul className="mb-8 mt-3 flex flex-1 flex-col gap-2.5">
                  {HOME_PLAN_FEATURES.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[13px] leading-[1.55]">
                      <span
                        className="mt-[9px] h-px w-3 shrink-0"
                        style={{ background: "var(--grad-brand)" }}
                        aria-hidden
                      />
                      <span style={{ color: "rgba(255, 255, 255, 0.82)" }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href={planEnquiryHref(plan.months, 1)}
                    className="flex w-full items-center justify-center rounded-xl px-4 py-3.5 text-center text-[13px] font-bold text-black transition-all duration-200 hover:brightness-110"
                    style={{
                      background: "var(--grad-brand)",
                      boxShadow: "var(--hero-cta-primary-shadow)",
                    }}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <FadeIn delay={0.2} className="mx-auto mt-10 max-w-3xl text-center">
          <div className="space-y-4 text-sm leading-[1.75] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              Need more than one screen playing at once? Visit our{" "}
              <Link href={routes.subscriptionPlans} className="font-semibold underline" style={{ color: "var(--hero-heading)" }}>
                Pricing page
              </Link>{" "}
              for two, three and four-connection options.
            </p>
            <p>
              Ask us about your important channels, titles and device before ordering.
              Individual content availability can change, and some third-party players
              have a separate licence charge.
            </p>
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={routes.subscriptionPlans}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-brand px-6 py-3.5 text-[13px] font-bold text-black transition-all duration-200 hover:brightness-110 sm:text-[15px]"
              style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}
            >
              View All Subscription Plans
            </Link>
            <Link
              href={`${routes.contactUs}?enquiry=free-trial`}
              className="inline-flex items-center justify-center rounded-xl border px-6 py-3.5 text-[13px] font-bold transition-all duration-200 hover:border-[var(--hero-accent)] sm:text-[15px]"
              style={{
                borderColor: "var(--hero-btn-border)",
                color: "var(--hero-heading)",
              }}
            >
              Ask About a Free Trial
            </Link>
          </div>
          <p className="mt-6 text-sm leading-[1.75] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            A specific channel, title or feature can change. If something is essential
            to your viewing, ask us to check it before choosing a plan.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
