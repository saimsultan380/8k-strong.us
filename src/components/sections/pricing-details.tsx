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
    id: "change-connections",
    q: "Can I change my connection allowance after ordering?",
    a: "Contact us with your current subscription details and the number of simultaneous streams you now require. Support will confirm the available arrangement and any price adjustment before a change is made.",
  },
  {
    id: "replacement-device",
    q: "Can I move my subscription to a replacement device?",
    a: "Tell support the old and new device models, along with the player you want to use. The required steps depend on whether your setup uses direct credentials, a playlist or device activation.",
  },
  {
    id: "player-licence",
    q: "Does an IPTV premium subscription include a player licence?",
    a: "Third-party players have their own activation and licence conditions. Ask support whether your chosen player requires a separate payment before completing your subscription order.",
  },
  {
    id: "native-8k",
    q: "Does an IPTV 8k subscription mean every stream is native 8K?",
    a: "Strong 8k is our brand name. The subscription offers available HD, FHD and UHD sources. The resolution of an individual channel or title determines its available picture quality.",
  },
];

const SETUP_CARDS = [
  "Watch available HD, FHD and UHD content. Picture quality depends on the channel or film, your device, player and internet connection. EPG programme guides and catch-up are limited, so check your preferred channels with support or during a trial.",
  "Compatible devices include Smart TVs, Firestick, Fire TV, Android, iPhone, iPad, Apple TV, Windows, Mac and Roku. Our app uses Downloader code 4330396 on compatible Fire OS and Android devices; 439873 is the old code. TiviMate is another option for compatible Android TV devices. Samsung and LG televisions use players from their own app stores. Tell support your device model and existing player before ordering.",
  "Request a Strong 8k free trial to test your channels, on-demand content and UHD viewing. Support will confirm the duration, access details and conditions. To order a Strong 8k IPTV subscription, choose your connections and 1, 3, 6 or 12 months, then confirm the price, devices, locations and activation details. Keep login and device activation details private. 24/7 customer support is available.",
];

export function PricingDetails() {
  return (
    <>
      <Prose title="Request Favourite Films, Series and Live Event Updates">
        <p>Looking for a favourite film or series that you cannot find in the catalogue? Send the title to our support team.</p>
        <p>Include the release year where possible. For a series, tell us which season or episodes you want. These details help us identify the correct content and avoid confusion between titles with similar names.</p>
        <p>We can add requested films and series to the server, subject to availability. Support will confirm what can be added and any available update on the request.</p>
        <p>For live events, send the event name, date and approximate start time. We provide event updates and can help you check the available viewing options before it begins.</p>
        <Link href={enquiryWhatsApp("content-request")} target="_blank" rel="noopener noreferrer" className={buttonClass} style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}>
          Request Content or Ask About an Event
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
            {SETUP_CARDS.map((text) => (
              <article key={text.slice(0, 24)} className="rounded-2xl border p-6" style={cardStyle}>
                <p className="text-sm leading-[1.75] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={routes.installationGuide} className={buttonClass} style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}>
              Open the Strong 8k Installation Guide
            </Link>
            <Link href={enquiryWhatsApp("free-trial")} target="_blank" rel="noopener noreferrer" className={buttonClass} style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}>
              Request Your Free Trial
            </Link>
            <Link href={routes.resellerPanel} className={buttonClass} style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}>
              Strong 8k Reseller Panel
            </Link>
          </div>
        </Container>
      </section>

      <Prose title="Renew Your Strong 8k Subscription Before Access Expires">
        <p>For subscription renewal, contact us with your existing order reference or the account information requested by support.</p>
        <p>Tell us whether you want to keep your current duration and connection allowance or discuss a different arrangement. We will confirm the available renewal option and its price before you pay.</p>
        <p>For an existing Strong8k account, make clear that you are renewing. This helps support identify the correct subscription and explain how the renewal will apply.</p>
        <p>If you also want to change devices, mention this in the same enquiry. Some players use direct account credentials, while others require device linking or a refreshed playlist.</p>
        <Link href={enquiryWhatsApp("renewal")} target="_blank" rel="noopener noreferrer" className={buttonClass} style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}>
          Ask About Subscription Renewal
        </Link>
      </Prose>

      <FaqAccordionSection
        faqs={PRICING_FAQS}
        defaultOpenId="change-connections"
        eyebrow="FAQ"
        description=""
        title="Answers to Common Questions About Your IPTV Subscription"
      />
      <Prose title="Need help choosing your subscription?">
        <p>Send us your device details, preferred duration and required connection allowance. We can help you check the plan before you order.</p>
        <Link href={enquiryWhatsApp("subscription")} target="_blank" rel="noopener noreferrer" className={buttonClass} style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}>
          Contact Strong 8k About Your Subscription
        </Link>
      </Prose>
    </>
  );
}
