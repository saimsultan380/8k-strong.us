"use client";

import Link from "next/link";
import { Clapperboard, Radio, MonitorPlay, Download, Tv, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { RevealParts } from "@/components/animation/reveal-parts";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { routes } from "@/lib/routes";
import { enquiryWhatsApp } from "@/lib/site";

const DEVICES = [
  ["Compatible Fire OS Firestick or Fire TV", "Our app through Downloader, or TiviMate where compatible"],
  ["Android TV and Google TV", "Our compatible app or a supported television player"],
  ["Android TV boxes", "Our compatible app or a player suited to the box"],
  ["Android phones and tablets", "Our compatible app or a suitable touchscreen player"],
  ["Samsung and LG Smart TVs", "A compatible player from the television’s app store"],
  ["iPhone and iPad", "Supported versions of iPlayTV AIO, UHF IPTV, GSE Smart IPTV, or IBO Player Pro"],
  ["Apple TV", "A compatible IBO player or an existing supported app"],
  ["Windows and Mac", "A compatible desktop player"],
  ["Roku", "A compatible player confirmed for the model and account region"],
];

const cardStyle = {
  backgroundColor: "var(--feature-card-bg)",
  borderColor: "var(--feature-card-border)",
  boxShadow: "var(--feature-card-shadow)",
} as const;

const buttonClass =
  "inline-flex items-center justify-center rounded-xl bg-gradient-brand px-6 py-3.5 text-[13px] font-bold text-black transition-all duration-200 hover:brightness-110 sm:text-[15px]";

const linkClass = "font-semibold underline transition-colors hover:text-[var(--hero-accent)]";

const CONTENT_TOPICS = [
  {
    icon: Clapperboard,
    label: "Content requests",
    body: "Send support the movie title, release year, preferred language, and subtitle requirements. For a series, include the season and episode numbers. We will check whether the requested content is available to add.",
  },
  {
    icon: Radio,
    label: "Live event updates",
    body: "Provide the event name, scheduled date, start time, and your US time zone. Support can help you check current availability and identify the relevant viewing option. Test playback before the event starts if that content is important to you.",
  },
  {
    icon: MonitorPlay,
    label: "UHD picture quality",
    body: "Available viewing includes HD, Full HD, and UHD sources. Picture quality depends on the original content, device, player, and internet connection. Strong 8k is our brand name. It does not mean every stream is native 8K. Check your preferred content during a trial.",
  },
] as const;

const APP_POINTS = [
  {
    icon: Tv,
    body: "Choose one to four connections according to the number of screens playing simultaneously. Installing the app on additional devices does not increase your connection allowance.",
  },
  {
    icon: Info,
    body: "EPG and catch-up are limited. Check your preferred channels and replay options during a trial.",
  },
] as const;

export function HomepageDetails() {
  return (
    <>
      <section id="content-requests" className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10">
          <FadeIn delay={0.05}>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]" style={{ color: "var(--hero-heading)" }}>
              Content Requests, Live Event Updates and UHD Picture Quality
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {CONTENT_TOPICS.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <ScrollReveal key={topic.label} direction="up" delay={0.05 * index} once className="h-full">
                  <article className="flex h-full flex-col rounded-2xl border p-6 sm:p-7" style={cardStyle}>
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-xl border"
                      style={{ borderColor: "var(--feature-card-border)", color: "var(--hero-accent)" }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <p className="mt-5 text-lg font-bold leading-snug" style={{ color: "var(--hero-heading)" }}>
                      {topic.label}
                    </p>
                    <p className="mt-3 text-sm leading-[1.75] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
                      {topic.body}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
          <FadeIn delay={0.16} className="mt-8">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link
                href={enquiryWhatsApp("content-request")}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
                style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}
              >
                Send a Content or Event Request
              </Link>
            </motion.div>
          </FadeIn>
        </Container>
      </section>

      <section id="device-compatibility" className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10">
          <FadeIn delay={0.05}>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]" style={{ color: "var(--hero-heading)" }}>
              Watch USA IPTV on Smart TVs and Supported Devices
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-3xl text-sm leading-[1.8] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
              The appropriate setup depends on your exact device model, operating system, and compatible player.
            </p>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Device</th>
                    <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Typical setup</th>
                  </tr>
                </thead>
                <tbody>
                  {DEVICES.map(([device, setup]) => (
                    <tr key={device} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                      <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{device}</td>
                      <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{setup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
          <div className="mt-6 max-w-3xl space-y-4 text-sm leading-[1.8] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <RevealParts>
              <p>The installation guide also explains what to check for MAG, Formuler, Enigma2, Linux, and browser viewing.</p>
              <Link href={routes.installationGuide} className={linkClass} style={{ color: "var(--hero-heading)" }}>
                Find Your Installation Instructions
              </Link>
            </RevealParts>
          </div>
        </Container>
      </section>

      <section id="app-code" className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10">
          <FadeIn delay={0.05}>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]" style={{ color: "var(--hero-heading)" }}>
              Install the Strong8k App and Configure Your Streaming Connections
            </h2>
          </FadeIn>
          <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <ScrollReveal direction="up" delay={0.05} once className="h-full">
              <article className="flex h-full flex-col rounded-2xl border p-6 sm:p-8" style={cardStyle}>
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl border"
                  style={{ borderColor: "var(--feature-card-border)", color: "var(--hero-accent)" }}
                >
                  <Download className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "var(--hero-accent)" }}>
                  Downloader code
                </p>
                <p className="mt-3 text-5xl font-black tracking-tight text-gradient-brand sm:text-6xl">4330396</p>
                <p className="mt-5 text-sm leading-[1.75] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
                  For compatible Fire OS and Android devices, install Downloader by AFTVnews and enter 4330396. Check the download destination against the app source confirmed by support before installing. Contact support for your subscription login. The earlier app version used 439873. Ask about updating if you already have an older installation. For Fire TV devices running Vega OS, confirm the appropriate setup with support.
                </p>
              </article>
            </ScrollReveal>
            <div className="grid h-full gap-4">
              {APP_POINTS.map((point, index) => {
                const Icon = point.icon;
                return (
                  <ScrollReveal key={point.body.slice(0, 24)} direction="up" delay={0.1 + index * 0.06} once className="h-full">
                    <article className="flex h-full gap-4 rounded-2xl border p-6 sm:p-7" style={cardStyle}>
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                        style={{ borderColor: "var(--feature-card-border)", color: "var(--hero-accent)" }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                      </span>
                      <p className="text-sm leading-[1.75] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
                        {point.body}
                      </p>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export function HomepageResellerSection() {
  return (
    <section id="reseller" className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
      <Container className="relative z-10">
        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--feature-card-border)", backgroundColor: "var(--feature-card-bg)", boxShadow: "var(--feature-card-shadow)" }}>
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div
              className="flex flex-col items-center justify-center border-b px-8 py-10 text-center lg:border-b-0 lg:border-r lg:py-14"
              style={{ borderColor: "var(--feature-card-border)" }}
            >
              <FadeIn delay={0.05}>
                <span className="text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: "var(--hero-muted)" }}>
                  Minimum initial purchase
                </span>
                <p className="mt-4 text-6xl font-black leading-none text-gradient-brand sm:text-7xl">120</p>
                <p className="mt-3 text-xl font-black uppercase tracking-wide" style={{ color: "var(--hero-accent)" }}>
                  credits
                </p>
              </FadeIn>
            </div>
            <div className="p-7 sm:p-10 lg:p-12">
              <FadeIn delay={0.08}>
                <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--hero-heading)" }}>
                  Run Your Own Reseller Dashboard With White Label Branding
                </h2>
              </FadeIn>
              <div className="mt-6 max-w-xl space-y-4 text-sm leading-[1.75] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
                <RevealParts>
                  <p>The Strong 8k reseller dashboard requires a minimum initial purchase of 120 credits.</p>
                  <p>After payment confirmation, we activate the panel using your supplied email address and username.</p>
                  <p>Ask about white label branding, your own domain, a branded panel URL, VPS arrangements, and supported service URLs for VPN use. Credit prices and wholesale terms are confirmed before purchase.</p>
                </RevealParts>
              </div>
              <FadeIn delay={0.2} className="mt-8">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Link
                    href={routes.resellerPanel}
                    className={buttonClass}
                    style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}
                  >
                    Explore Reseller Options
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
