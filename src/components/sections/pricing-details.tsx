"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { routes } from "@/lib/routes";
import { enquiryWhatsApp } from "@/lib/site";
import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";
import { FadeIn } from "@/components/animation/fade-in";
import { RevealParts } from "@/components/animation/reveal-parts";

const cardStyle = {
  backgroundColor: "var(--feature-card-bg)",
  borderColor: "var(--feature-card-border)",
  boxShadow: "var(--feature-card-shadow)",
} as const;

const buttonClass =
  "inline-flex items-center justify-center rounded-xl bg-gradient-brand px-6 py-3.5 text-[13px] font-bold text-black transition-all duration-200 hover:brightness-110 sm:text-[15px]";

function Prose({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--hero-heading)" }}>
            {title}
          </h2>
        </FadeIn>
        <div className="mt-8 rounded-2xl border p-6 sm:p-8 md:p-10" style={cardStyle}>
          <div className="max-w-3xl space-y-4 text-sm leading-[1.8] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <RevealParts>{children}</RevealParts>
          </div>
        </div>
      </Container>
    </section>
  );
}

const PRICING_FAQS: FaqItem[] = [
  {
    id: "cost",
    q: "How much does Strong8k cost?",
    a: "One-connection plans cost $13.24 for one month, $23.82 for three months, $33.10 for six months, and $55.62 for twelve months.",
  },
  {
    id: "annual-billing",
    q: "Is the annual subscription billed monthly?",
    a: "The $55.62 price covers the full twelve-month term for one connection. Its approximate monthly equivalent is $4.64.",
  },
  {
    id: "change-connections",
    q: "Can I change my connection allowance?",
    a: "Contact support with your account reference and the number of simultaneous streams you need. We will confirm the available change and any price adjustment.",
  },
  {
    id: "player-license",
    q: "Does an IPTV premium subscription include the player license?",
    a: "Third-party players have separate licensing conditions. Check any app charge before purchasing your viewing subscription.",
  },
  {
    id: "replacement-device",
    q: "Can I move to a replacement device?",
    a: "Send support the old and new device models and player details. The required steps depend on your account method.",
  },
  {
    id: "lifetime",
    q: "Do you offer a Strong8k lifetime subscription?",
    a: "The published plans on this website run for one, three, six, or twelve months.",
  },
  {
    id: "native-8k",
    q: "Does the brand name guarantee native 8K?",
    a: "Available resolution depends on the original channel or title and your setup. Strong 8k is our brand name.",
  },
];

const SETUP_CARDS = [
  {
    title: "Device and Player Compatibility",
    body: "Use the installation guide to check your device and player before ordering. The current Strong8k app code is 4330396 for compatible Fire OS and Android devices. Samsung, LG, Apple devices, computers, and Roku require their appropriate compatible players.",
  },
  {
    title: "Separate Player Licenses",
    body: "Some third-party players have a separate license charge.",
  },
  {
    title: "Free Trial Testing",
    body: "Request a trial to check your regular live channels, on-demand titles, audio, subtitles, and available picture quality. EPG and catch-up are limited, so test the channels where you need those features. Support will confirm trial duration and activation details.",
  },
];

export function PricingDetails() {
  return (
    <>
      <Prose title="Request Favorite Movies, Series and Live Event Updates">
        <p>Send support the exact movie title and release year.</p>
        <p>For a series, include the season and episode numbers. Mention your preferred audio language, subtitles, or version.</p>
        <p>We will check whether the content is available to add.</p>
        <p>For a live event, provide its name, date, start time, and time zone. Support can check available viewing options and explain any update.</p>
        <Link href={enquiryWhatsApp("content-request")} target="_blank" rel="noopener noreferrer" className={buttonClass} style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}>
          Request Content or Event Information
        </Link>
      </Prose>

      <section className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10">
          <FadeIn delay={0.05}>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--hero-heading)" }}>
              IPTV Setup, Free Trial and Help With Your Subscription
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {SETUP_CARDS.map((card) => (
              <article key={card.title} className="rounded-2xl border p-6" style={cardStyle}>
                <h3 className="text-base font-bold" style={{ color: "var(--hero-heading)" }}>{card.title}</h3>
                <p className="mt-3 text-sm leading-[1.75] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>{card.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={routes.installationGuide} className={buttonClass} style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}>
              Open the Installation Guide
            </Link>
            <Link href={enquiryWhatsApp("free-trial")} target="_blank" rel="noopener noreferrer" className={buttonClass} style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}>
              Request Trial Access
            </Link>
          </div>
        </Container>
      </section>

      <Prose title="Renew Your Strong8k IPTV Subscription Before Access Expires">
        <p>Contact support with your existing account or order reference.</p>
        <p>Tell us whether you want to keep your current duration and connection allowance or discuss another arrangement.</p>
        <p>We will confirm the available renewal option and price before payment.</p>
        <p>If you are replacing a device, include the old and new models and your chosen player. Account setup may involve credentials, a refreshed playlist, or device linking.</p>
        <Link href={enquiryWhatsApp("renewal")} target="_blank" rel="noopener noreferrer" className={buttonClass} style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}>
          Ask About Subscription Renewal
        </Link>
      </Prose>

      <FaqAccordionSection
        faqs={PRICING_FAQS}
        defaultOpenId="cost"
        eyebrow="FAQ"
        description=""
        title="Answers to Common Questions About Your IPTV Subscription"
      />

      <Prose title="Need Help Choosing Your Subscription?">
        <p>Send your device details, preferred duration, and simultaneous connection requirements. We can help you check the plan before ordering.</p>
        <Link href={enquiryWhatsApp("subscription")} target="_blank" rel="noopener noreferrer" className={buttonClass} style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}>
          Contact Strong8k About Your Plan
        </Link>
      </Prose>
    </>
  );
}
