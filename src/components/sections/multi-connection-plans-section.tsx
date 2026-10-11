"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HOME_PLAN_FEATURES, PLAN_DURATIONS, PLAN_PRICES, planEnquiryHref } from "@/lib/plans";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { enquiryWhatsApp } from "@/lib/site";

const CONNECTION_OPTIONS = [1, 2, 3, 4] as const;

function PriceGlowDivider() {
  return (
    <div className="relative my-6 h-[2px] w-full" aria-hidden>
      <div
        className="absolute inset-x-[10%] top-1/2 h-3 -translate-y-1/2 blur-md"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(245, 230, 163, 0.55) 0%, rgba(212, 168, 75, 0.25) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(184, 134, 11, 0.15) 12%, #b8860b 28%, #e8c547 42%, #fff8e0 50%, #e8c547 58%, #b8860b 72%, rgba(184, 134, 11, 0.15) 88%, transparent 100%)",
          boxShadow:
            "0 0 10px rgba(232, 197, 71, 0.45), 0 0 22px rgba(212, 168, 75, 0.25)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[3px] w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, #ffffff 0%, #fff4c4 35%, transparent 70%)",
          boxShadow: "0 0 12px 2px rgba(255, 248, 224, 0.7)",
        }}
      />
    </div>
  );
}

function PricingCard({
  plan,
  connections,
  delay = 0,
}: {
  plan: (typeof PLAN_DURATIONS)[number];
  connections: number;
  delay?: number;
}) {
  const price = PLAN_PRICES[connections][plan.months];
  const href = planEnquiryHref(plan.months, connections);
  return (
    <ScrollReveal direction="up" delay={delay} once className="h-full">
      <div
        className="relative flex h-full flex-col rounded-xl border px-6 py-7 transition-all duration-300 md:px-7 md:py-8"
        style={{
          backgroundColor: "var(--feature-card-bg)",
          borderColor: "var(--feature-card-border)",
          boxShadow: "var(--feature-card-shadow)",
        }}
      >
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-gradient-brand">
          {plan.cardTitle}
        </p>
        <p
          className="mt-4 text-4xl font-bold tracking-tight md:text-[42px]"
          style={{ color: "var(--hero-heading)" }}
        >
          {price}
          <span className="ml-2 text-base font-semibold" style={{ color: "var(--hero-muted)" }}>
            total
          </span>
        </p>
        <PriceGlowDivider />
        <p className="text-[13px] font-semibold" style={{ color: "var(--hero-heading)" }}>
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
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-auto w-full">
          <Link
            href={href}
            className="flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-center text-[13px] font-extrabold uppercase tracking-[0.08em] transition-all duration-200 hover:brightness-110"
            style={{
              background: "var(--grad-brand)",
              color: "var(--hero-cta-primary-fg)",
              boxShadow: "var(--hero-cta-primary-shadow)",
            }}
          >
            Get This Plan
          </Link>
        </motion.div>
      </div>
    </ScrollReveal>
  );
}

export function MultiConnectionPlansSection() {
  const [connections, setConnections] = useState<(typeof CONNECTION_OPTIONS)[number]>(1);

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
              Choose Your IPTV Subscription Duration and Connection Allowance
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p
              className="text-sm leading-[1.75] sm:text-[15px] md:text-right"
              style={{ color: "var(--hero-muted)" }}
            >
              Select your connection allowance below, then choose a subscription lasting
              1, 3, 6 or 12 months. Every plan includes the same catalogue and service
              features. Your selected duration determines how long your subscription lasts,
              while your connection allowance determines how many streams can play simultaneously.
            </p>
          </FadeIn>
        </div>

        <div
          className="mb-8 flex flex-wrap gap-2 sm:gap-3"
          role="tablist"
          aria-label="Connection allowance"
        >
          {CONNECTION_OPTIONS.map((count) => {
            const active = connections === count;
            return (
              <button
                key={count}
                type="button"
                role="tab"
                id={`pricing-tab-${count}`}
                aria-selected={active}
                aria-controls={`pricing-panel-${count}`}
                onClick={() => setConnections(count)}
                className={cn(
                  "rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200",
                )}
                style={{
                  borderColor: active ? "transparent" : "var(--feature-card-border)",
                  color: active ? "var(--hero-cta-primary-fg)" : "var(--hero-muted)",
                  background: active
                    ? "var(--hero-cta-primary-bg)"
                    : "var(--feature-card-bg)",
                  boxShadow: active
                    ? "var(--hero-cta-primary-shadow)"
                    : "var(--feature-card-shadow)",
                }}
              >
                {count} {count === 1 ? "Connection" : "Connections"}
              </button>
            );
          })}
        </div>

        {CONNECTION_OPTIONS.map((count) => {
          const active = connections === count;
          return (
            <div
              key={count}
              id={`pricing-panel-${count}`}
              role="tabpanel"
              aria-labelledby={`pricing-tab-${count}`}
              hidden={!active}
              className={cn(!active && "hidden")}
            >
              <div className="mb-6 max-w-3xl space-y-3 text-sm leading-[1.7]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  A connection means one stream playing at a time. Two connections allow two
                  simultaneous streams, three allow three and four allow four.
                </p>
                <p>
                  Watching on a television and using another supported device later is different
                  from playing both at once. A two-screen IPTV arrangement needs two connections
                  when both screens are streaming simultaneously.
                </p>
                <p>
                  For multi-connection IPTV, count the streams you need running together rather
                  than the total number of devices you own. Your order will confirm the permitted
                  device and location arrangement. Contact us before ordering if you need several
                  addresses or more than four simultaneous streams.
                </p>
              </div>
              <div className="grid w-full items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {PLAN_DURATIONS.map((plan, i) => (
                  <PricingCard
                    key={`${count}-${plan.months}`}
                    plan={plan}
                    connections={count}
                    delay={active ? 0.04 * i : 0}
                  />
                ))}
              </div>
            </div>
          );
        })}

        <FadeIn delay={0.15} className="mx-auto mt-10 max-w-3xl text-center">
          <div className="space-y-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
            <p>
              All displayed prices are full-term totals, rather than monthly instalments.
              Select your required connection allowance to see the corresponding amount for
              each duration.
            </p>
            <p>
              Individual channels, titles, languages and features can change. If a particular
              programme, channel or viewing feature is essential to you, ask us about its
              current availability before choosing a plan.
            </p>
          </div>
          <Link
            href={enquiryWhatsApp("subscription")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-bold text-black"
            style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}
          >
            Ask About More Connections
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
