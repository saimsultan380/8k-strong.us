"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { motion } from "framer-motion";
import { enquiryWhatsApp } from "@/lib/site";

export function HomepageFreeTrialSection() {
  return (
    <section
      id="free-trial"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <div
          className="rounded-2xl border"
          style={{
            borderColor: "var(--feature-card-border)",
            backgroundColor: "transparent",
          }}
        >
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div
              className="flex flex-col items-center justify-center border-b p-8 text-center lg:border-b-0 lg:border-r lg:p-12"
              style={{ borderColor: "var(--feature-card-border)" }}
            >
              <FadeIn delay={0.05}>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.28em]"
                  style={{ color: "var(--hero-muted)" }}
                >
                  Before you subscribe
                </span>
                <p className="mt-4 text-5xl font-black leading-none text-gradient-brand sm:text-6xl">
                  Free
                </p>
                <p className="mt-3 text-xl font-black uppercase" style={{ color: "var(--hero-accent)" }}>
                  trial
                </p>
                <p className="mt-6 text-sm font-semibold" style={{ color: "var(--hero-heading)" }}>
                  24/7 customer support
                </p>
              </FadeIn>
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <FadeIn delay={0.1}>
                <h2
                  className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
                  style={{ color: "var(--hero-heading)" }}
                >
                  Request a Free Trial With 24/7 Customer Support
                </h2>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="mt-6 max-w-xl space-y-4 text-sm leading-[1.75] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
                  <p>
                    Contact support before or after subscribing for help with plans, devices, app installation, account details, and playback.
                  </p>
                  <p>
                    We can also assist with renewals, movie and series requests, live event inquiries, and reseller access.
                  </p>
                  <p>
                    Request a free trial to test the service on your usual device and internet connection. Support will confirm availability, duration, start time, and account instructions.
                  </p>
                  <p>
                    For technical help, send your device model, player name, account reference, and any error message. Explain whether other content plays.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-8">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Link
                    href={enquiryWhatsApp("free-trial")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-xl px-7 py-4 text-[14px] font-bold transition-all duration-200 hover:brightness-110 sm:text-[15px]"
                    style={{
                      background: "var(--hero-cta-primary-bg)",
                      boxShadow: "var(--hero-cta-primary-shadow)",
                      color: "var(--hero-cta-primary-fg)",
                    }}
                  >
                    Contact Support or Request a Trial
                  </Link>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
