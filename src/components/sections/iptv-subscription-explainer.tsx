"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";

const POINTS = [
  "Account details for a supported player",
  "The player and the subscription are separate",
  "Ask about your device before you pay",
];

export function IptvSubscriptionExplainer() {
  return (
    <section
      id="what-is-strong-8k"
      className="relative isolate overflow-hidden border-y py-20 md:py-28"
      style={{
        backgroundColor: "var(--hero-base)",
        borderColor: "var(--feature-card-border)",
      }}
    >
      <Container className="relative z-10 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">
        <div>
          <FadeIn delay={0.05}>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.24em]"
              style={{ color: "var(--hero-accent)" }}
            >
              About Strong 8k
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="mt-4 max-w-xl text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-[48px]"
              style={{ color: "var(--hero-heading)" }}
            >
              What is Strong 8K IPTV?
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p
              className="mt-6 max-w-xl text-sm leading-[1.8] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              Strong 8k IPTV delivers live channels and on-demand entertainment
              over an internet connection. You receive account details to add to
              a supported player, then browse the available catalogue.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <ul className="mt-8 space-y-3">
              {POINTS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm">
                  <span
                    className="mt-[9px] h-px w-3 shrink-0"
                    style={{ background: "var(--grad-brand)" }}
                    aria-hidden
                  />
                  <span style={{ color: "var(--hero-heading)" }}>{benefit}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.18}>
          <div
            className="rounded-2xl border p-6 sm:p-8 md:p-10"
            style={{
              borderColor: "var(--feature-card-border)",
              backgroundColor: "var(--feature-card-bg)",
              boxShadow: "var(--feature-card-shadow)",
            }}
          >
            <div
              className="grid gap-4 border-b pb-6 sm:grid-cols-3"
              style={{ borderColor: "var(--hero-divider)" }}
            >
              {[
                { value: "40K+", label: "Live channels" },
                { value: "140K+", label: "VOD titles" },
                { value: "24/7", label: "Customer support" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-black tracking-tight text-gradient-brand sm:text-3xl">
                    {value}
                  </p>
                  <p
                    className="mt-1 text-xs font-medium"
                    style={{ color: "var(--hero-heading)" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-5">
              <p
                className="text-sm leading-[1.8] sm:text-[15px] md:text-base"
                style={{ color: "var(--feature-body)" }}
              >
                The player provides the screen layout and playback controls. Your
                subscription provides service access. They are separate, and some
                third-party apps charge for their own licence or premium features.
              </p>
              <p
                className="text-sm leading-[1.8] sm:text-[15px] md:text-base"
                style={{ color: "var(--feature-body)" }}
              >
                If you are unsure which player to choose, send us your device
                model. We can explain the suitable installation route and account
                format before you pay.
              </p>
              <p
                className="text-sm leading-[1.8] sm:text-[15px] md:text-base"
                style={{ color: "var(--feature-body)" }}
              >
                Our aim is to make the service useful for your household: clear
                plans, practical setup help and a way to ask about the programmes
                you enjoy.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
