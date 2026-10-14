"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const ISSUES = [
  {
    id: "login",
    title: "Account information rejected",
    body: "Check server address, login details, complete playlist, and account expiry.",
  },
  {
    id: "catalog",
    title: "Catalog fails to load",
    body: "Player restart, internet connection, and exact error message.",
  },
  {
    id: "channels",
    title: "One channel or title fails",
    body: "Test another item and report the affected content and time.",
  },
  {
    id: "connections",
    title: "Playback stops when another device starts",
    body: "Connection allowance and background streams.",
  },
  {
    id: "epg",
    title: "Program information missing",
    body: "EPG coverage, guide refresh, and time-zone settings.",
  },
  {
    id: "catchup",
    title: "Catch-up unavailable",
    body: "Whether that channel and program support replay.",
  },
  {
    id: "license",
    title: "Player requests a license payment",
    body: "Separate app licensing conditions.",
  },
  {
    id: "older-app",
    title: "Older app installed",
    body: "Ask support about updating to the version associated with code 4330396.",
  },
];

export function InstallationTroubleshooting() {
  return (
    <section
      id="troubleshooting"
      className="relative py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Troubleshooting
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-[42px]">
            Fix Common Strong8k Account Login and Playback Problems
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
          {ISSUES.map((issue, i) => (
            <ScrollReveal key={issue.id} direction="up" delay={0.04 * i} once className="h-full">
              <article
                className="flex h-full flex-col rounded-2xl border p-5 sm:p-6"
                style={{
                  borderColor: "var(--feature-card-border)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-bold"
                  style={{
                    borderColor: "var(--feature-icon-border)",
                    color: "var(--hero-accent)",
                  }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mt-4 text-base font-bold leading-snug sm:text-lg"
                  style={{ color: "#ffffff" }}
                >
                  {issue.title}
                </h3>
                <p
                  className="mt-2.5 flex-1 text-sm leading-[1.75]"
                  style={{ color: "var(--feature-body)" }}
                >
                  {issue.body}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p
            className="mt-10 text-sm sm:text-[15px]"
            style={{ color: "var(--hero-muted)" }}
          >
            For buffering, include whether you use Wi-Fi or a wired connection and whether other household devices are using the internet heavily. Technical support continues throughout your active subscription.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
