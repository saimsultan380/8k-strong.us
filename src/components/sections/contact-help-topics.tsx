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
        Tell us whether you want one, three, six or twelve months and how many simultaneous streams your household needs. If you are unsure, describe your normal viewing arrangement and the devices involved. We can check compatibility and confirm the total before ordering.{" "}
        <Link href={routes.subscriptionPlans} className={linkClass} style={{ color: "var(--hero-heading)" }}>
          View Subscription Prices
        </Link>
      </>
    ),
  },
  {
    title: "Get Strong 8k Installation Help for Your Device",
    body: (
      <>
        Send your device make and model, app name and the step you reached. For compatible Fire OS and Android devices, the current app code is 4330396. The earlier version used 439873. If an installation or login message appears, copy the exact wording or send a screenshot with credentials hidden.{" "}
        <Link href={routes.installationGuide} className={linkClass} style={{ color: "var(--hero-heading)" }}>
          Read the Installation Guide
        </Link>
      </>
    ),
  },
  {
    title: "Request Your Favourite Films, Series and Missing Episodes",
    body: "Send the exact title and release year. For a series, include the season and episode numbers. Mention your preferred audio language and any subtitle requirement. We will check whether the requested content is available to add. Timing depends on the title and source. If an existing title fails to play, include the device and player details so we can investigate it as a fault.",
  },
  {
    title: "Check Current Channel Availability and Live Event Updates",
    body: "Ask us about a particular channel, live event or language before ordering. Include the name and scheduled date for an event. For a programme or title, provide enough detail to identify the correct version. Our team can check current information and explain availability. Event updates should not be treated as a guarantee that every broadcast worldwide is included.",
  },
  {
    title: "Report Playback Problems with the Details We Need",
    body: "A useful support message includes your account or order reference, device model, player name, affected channel or title, when the problem began, the error shown, whether other content works and whether another device is streaming. For buffering, say whether the device uses Wi-Fi or a wired connection. For a missing guide, explain whether playback still works. Keep passwords and complete playlist links private.",
  },
  {
    title: "Ask About Strong 8k Reseller Pricing and Branding",
    body: (
      <>
        The minimum initial purchase for a reseller dashboard is 120 credits. Tell us the credit quantity you want and whether you need a personal domain, branded panel URL, VPS arrangement or VPN-compatible address. Panel activation after payment uses the email address and username you provide.{" "}
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
