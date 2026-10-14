"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { routes } from "@/lib/routes";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const linkClass = "font-semibold underline transition-colors hover:text-[var(--hero-accent)]";

const TOPICS = [
  {
    title: "Ask About the Right Subscription for Your Household",
    body: (
      <>
        Tell us whether you want one, three, six, or twelve months and how many streams need to play simultaneously. Include the devices and locations involved. We can check compatibility and confirm your selected plan’s total. Website prices are displayed in US dollars and cover the full selected term.{" "}
        <Link href={routes.subscriptionPlans} className={linkClass} style={{ color: "var(--hero-heading)" }}>
          View Subscription Prices
        </Link>
      </>
    ),
  },
  {
    title: "Get Strong8k Installation Help for Your Supported Device",
    body: (
      <>
        Send the device make and model, operating system, player name, and installation step you reached. The current app code for compatible Fire OS and Android devices is 4330396. The earlier version used 439873. Include the exact error or a screenshot with credentials hidden.{" "}
        <Link href={routes.installationGuide} className={linkClass} style={{ color: "var(--hero-heading)" }}>
          Read the Installation Guide
        </Link>
      </>
    ),
  },
  {
    title: "Request Your Favorite Movies, Series and Missing Episodes",
    body: "Provide the exact title and release year. For a series, include season and episode numbers. Mention your preferred audio language and subtitle requirements. We will check whether the content is available to add. Timing depends on the title and source. If an existing item fails to play, include your device and player details.",
  },
  {
    title: "Check Current Channel Availability and Live Event Updates",
    body: "For a channel, provide the network or station name. Include your city or ZIP code when asking about a local US station. For an event, send its name, date, scheduled start time, and time zone. Support can check current information and explain availability. Confirm essential viewing before choosing a subscription.",
  },
  {
    title: "Report Playback Problems With the Details We Need",
    body: "Include your account or order reference, device model and player, affected channel or title, date, time, and time zone, error message or playback behavior, whether other content works, whether another device is streaming, Wi-Fi or wired connection, and checks already completed. Keep passwords and complete playlist links private.",
  },
  {
    title: "Ask About Strong8k Reseller Pricing and Branding Options",
    body: (
      <>
        The minimum opening reseller purchase is 120 credits. Tell us the quantity you want and any personal domain, white label branding, panel URL, VPS, or VPN-compatible address requirements. Panel activation uses the email address and username you supply after payment confirmation.{" "}
        <Link href={routes.resellerPanel} className={linkClass} style={{ color: "var(--hero-heading)" }}>
          View Reseller Information
        </Link>
      </>
    ),
  },
];

export function ContactHelpTopics() {
  return (
    <section
      id="what-we-help-with"
      className="relative isolate overflow-hidden py-12 md:py-16"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Support
          </span>
        </FadeIn>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {TOPICS.map((topic, i) => (
            <ScrollReveal key={topic.title} direction="up" delay={0.05 * i} once className="h-full">
              <div
                className="flex h-full flex-col rounded-2xl border p-5 sm:p-6"
                style={{
                  borderColor: "var(--feature-card-border)",
                  backgroundColor: "transparent",
                }}
              >
                <h2
                  className="text-lg font-bold leading-snug"
                  style={{ color: "var(--hero-heading)" }}
                >
                  {topic.title}
                </h2>
                <div
                  className="mt-2 text-sm leading-[1.7]"
                  style={{ color: "var(--feature-body)" }}
                >
                  {topic.body}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
