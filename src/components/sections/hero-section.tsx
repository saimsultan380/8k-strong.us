"use client";

import Image from "next/image";
import Link from "next/link";
import { Tv, Film, Headphones } from "lucide-react";
import { routes } from "@/lib/routes";
import { enquiryWhatsApp } from "@/lib/site";
import { Container } from "@/components/layout/container";
import { HeroReveal } from "@/components/animation/hero-reveal";
import { HeroTitleReveal } from "@/components/animation/hero-title-reveal";
import { motion } from "framer-motion";

const HERO_FEATURES = [
  { label: "40,000+ live channels", icon: Tv },
  { label: "140,000+ on-demand titles", icon: Film },
  { label: "24/7 customer support", icon: Headphones },
];

export function HeroSection() {
  return (
    <section className="relative isolate">
      <Container className="relative z-10 grid min-h-[100svh] items-start gap-4 pb-8 pt-28 sm:gap-6 sm:pt-32 lg:grid-cols-[minmax(0,1.08fr)_minmax(280px,0.85fr)] lg:items-center lg:gap-10 lg:pb-14 lg:pt-32">
        <HeroReveal
          variant="logoHero"
          delay={0.16}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative w-full max-w-[180px] sm:max-w-[250px] lg:max-w-[360px]">
            <div
              aria-hidden
              className="absolute inset-8 rounded-full blur-3xl"
              style={{ background: "rgba(212, 168, 75, 0.18)" }}
            />
            <Image
              src="/strong-8k.PNG?v=3"
              alt="Strong 8k logo"
              width={1024}
              height={1024}
              loading="eager"
              unoptimized
              className="relative h-auto w-full object-contain drop-shadow-[0_0_24px_rgba(212,168,75,0.25)]"
            />
          </div>
        </HeroReveal>

        <div className="order-2 text-left lg:order-1">
          <HeroTitleReveal
            className="max-w-[720px] text-left text-[26px] font-bold leading-[1.12] tracking-tight text-gradient-brand sm:text-4xl md:text-[40px] lg:text-[44px]"
            lines={[
              "Strong8k - Premium UHD IPTV Subscription ",
              "for USA Viewers with 40k+ Channels",
            ]}
          />

          <HeroReveal delay={0.2}>
            <div
              className="mt-3 max-w-[700px] space-y-2 text-[11px] leading-[1.5] sm:mt-4 sm:space-y-3 sm:text-sm sm:leading-[1.65]"
              style={{ color: "var(--hero-muted)" }}
            >
              <p>
                Strong8k brings available live television and on-demand entertainment to compatible devices. Explore 40,000+ live channels and 140,000+ VOD titles, with content requests and 24/7 customer support.
              </p>
              <p>
                Our premium IPTV service combines international viewing, movies, and series through a supported player on your own device. For viewers in the United States, start by checking the channels, titles, and events important to your household.
              </p>
              <p>
                Choose a Strong8k IPTV subscription for one, three, six, or twelve months. Select the connection allowance you need for simultaneous viewing, then check available HD, Full HD, and UHD playback on your setup.
              </p>
              <p>
                Contact support before ordering to confirm device compatibility, content availability, and your payment amount. You can request a free trial using your usual internet connection.
              </p>
            </div>
          </HeroReveal>

          <HeroReveal variant="cta" delay={0.28}>
            <div className="mt-5 flex flex-row items-stretch justify-start gap-2 sm:mt-6 sm:gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="min-w-0 flex-1 sm:flex-initial">
                <Link
                  href={routes.subscriptionPlans}
                  className="flex min-h-11 items-center justify-center whitespace-nowrap rounded-xl bg-gradient-brand px-2.5 py-3 text-[12px] font-bold text-black transition-all duration-200 hover:brightness-110 sm:min-w-52 sm:px-7 sm:text-[14px]"
                  style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}
                >
                  View Subscription Plans
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="min-w-0 flex-[1.15] sm:flex-initial">
                <Link
                  href={enquiryWhatsApp("free-trial")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center justify-center whitespace-nowrap rounded-xl bg-gradient-brand px-2.5 py-3 text-[12px] font-bold text-black transition-all duration-200 hover:brightness-110 sm:min-w-52 sm:px-7 sm:text-[14px]"
                  style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}
                >
                  Request a Free Trial
                </Link>
              </motion.div>
            </div>
          </HeroReveal>

          <ul className="mt-5 grid grid-cols-3 gap-2 text-center sm:gap-4 sm:text-left lg:max-w-[680px]">
              {HERO_FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <HeroReveal key={feature.label} delay={0.32 + index * 0.06} className="h-full">
                  <li
                    className={`flex h-full flex-col items-center gap-1.5 px-1 sm:flex-row sm:items-start sm:pr-4 sm:text-left${index < HERO_FEATURES.length - 1 ? " border-r" : ""}`}
                    style={{ borderColor: "var(--hero-divider)" }}
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                      style={{ color: "var(--hero-accent)" }}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <span
                      className="text-[11px] font-medium sm:text-sm"
                      style={{ color: "var(--hero-muted)" }}
                    >
                      {feature.label}
                    </span>
                  </li>
                  </HeroReveal>
                );
              })}
            </ul>
        </div>
      </Container>
    </section>
  );
}
