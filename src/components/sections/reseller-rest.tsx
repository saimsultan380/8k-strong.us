"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { routes } from "@/lib/routes";
import { whatsappUrlWithText } from "@/lib/site";
import { FadeIn } from "@/components/animation/fade-in";
import { RevealParts } from "@/components/animation/reveal-parts";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { motion } from "framer-motion";

const cardStyle = {
  backgroundColor: "var(--feature-card-bg)",
  borderColor: "var(--feature-card-border)",
  boxShadow: "var(--feature-card-shadow)",
} as const;

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

const RESELLER_PACKS = [
  { name: "Starter Pack", credits: "120 Credits", highlight: false },
  { name: "Growth Pack", credits: "240 Credits", highlight: true },
  { name: "Pro Pack", credits: "360 Credits", highlight: false },
] as const;

function Block({
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

const CATALOGUE = [
  "40,000+ live channels.",
  "140,000+ on-demand titles.",
  "International and multilingual content.",
  "HD, Full HD, and UHD source options.",
  "Movie and series requests.",
  "Live event inquiries and updates.",
  "Limited EPG and catch-up.",
  "Our app for compatible Fire OS and Android devices.",
  "Help with supported devices and players.",
];

export function ResellerRest() {
  return (
    <>
      <Block title="Manage Customer Subscriptions Through Your Strong 8k Panel">
        <p>Use purchased credits to manage customer subscriptions through the dashboard.</p>
        <p>During onboarding, ask us to demonstrate the available account creation, renewal, and management functions.</p>
        <p>Confirm the credit deductions for the durations and connection allowances you intend to sell.</p>
        <p>For US customers, check devices, locations, required content, and simultaneous viewing before creating an account.</p>
      </Block>

      <section
        id="reseller-plans"
        className="relative isolate overflow-hidden py-16 md:py-24"
        style={{ backgroundColor: "var(--hero-base)" }}
      >
        <Container className="relative z-10">
          <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-2 md:items-end md:gap-12">
            <FadeIn delay={0.05}>
              <h2
                className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[42px]"
                style={{ color: "var(--hero-heading)" }}
              >
                Start Your Reseller Dashboard With 120 Initial Credits
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div
                className="space-y-3 text-sm leading-[1.75] sm:text-[15px] md:text-right"
                style={{ color: "var(--hero-muted)" }}
              >
                <p>
                  All packages provide the same available catalog and reseller features. Package size changes the credit quantity available for managing subscriptions.
                </p>
                <p>
                  Confirm the current quote, payment currency, usage conditions, and wholesale terms before purchase.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="grid items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
            {RESELLER_PACKS.map((pack, i) => (
              <ScrollReveal key={pack.name} direction="up" delay={0.06 * i} once className="h-full">
                <article
                  className="relative flex h-full flex-col rounded-xl border px-6 py-7 md:px-7 md:py-8"
                  style={{
                    backgroundColor: "var(--feature-card-bg)",
                    borderColor: pack.highlight
                      ? "rgba(212, 168, 75, 0.85)"
                      : "var(--feature-card-border)",
                    boxShadow: pack.highlight
                      ? "var(--feature-card-shadow), 0 0 0 1px rgba(212, 168, 75, 0.35), 0 0 28px rgba(212, 168, 75, 0.18)"
                      : "var(--feature-card-shadow)",
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                      {pack.name}
                    </p>
                    <p className="shrink-0 text-sm font-semibold" style={{ color: "var(--hero-muted)" }}>
                      {pack.credits}
                    </p>
                  </div>

                  <p
                    className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: "var(--hero-muted)" }}
                  >
                    Cash price
                  </p>
                  <p className="mt-1 text-xl font-bold tracking-tight text-gradient-brand sm:text-2xl">
                    Contact support
                  </p>

                  <PriceGlowDivider />

                  <p className="text-[13px] font-semibold" style={{ color: "var(--hero-heading)" }}>
                    Available catalog and reseller features:
                  </p>
                  <ul className="mt-3 flex flex-1 flex-col gap-2.5">
                    {CATALOGUE.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-[13px] leading-[1.55]"
                      >
                        <span className="mt-0.5 shrink-0" style={{ color: "var(--hero-accent)" }}>
                          –
                        </span>
                        <span style={{ color: "rgba(255, 255, 255, 0.82)" }}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-7">
                    <Link
                      href={whatsappUrlWithText(
                        `I would like the Strong8k ${pack.name} (${pack.credits}).`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center rounded-xl bg-gradient-brand px-5 py-3.5 text-center text-[13px] font-bold text-black transition-all duration-200 hover:brightness-110"
                      style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}
                    >
                      Request Reseller Pricing
                    </Link>
                  </motion.div>
                </article>
              </ScrollReveal>
            ))}
          </div>

        </Container>
      </section>

      <Block title="Activate Your Panel With Your Email and Username">
        <ol className="grid gap-3 sm:grid-cols-2">
          {[
            "Select a credit quantity starting from 120.",
            "Explain the account types you intend to sell.",
            "Include branding, domain, VPS, or URL requirements.",
            "Review the confirmed price and credit terms.",
            "Supply your chosen email address and username.",
            "Complete payment using the verified instructions.",
            "Receive the activation information.",
            "Check panel access and the opening credit balance.",
          ].map((step, index) => (
            <li key={step} className="rounded-xl border bg-transparent px-4 py-3" style={{ borderColor: "rgba(212, 168, 75, 0.45)" }}>
              <span className="mr-2 font-bold text-gradient-brand">{index + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
        <p className="mt-4">Use an email address you control and verify its spelling before activation.</p>
      </Block>

      <section className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10">
          <FadeIn delay={0.05}>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--hero-heading)" }}>
              Add Your Own Branding and Personal Customer URLs
            </h2>
          </FadeIn>
          <p className="mt-6 max-w-3xl text-sm leading-[1.8] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Describe the branding and customer setup you need so we can confirm the appropriate arrangement.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <article className="rounded-2xl border p-6" style={cardStyle}>
              <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Use Your Own Domain for a Branded Panel</h3>
              <div className="mt-4 space-y-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                <p>Send the domain you control and your preferred hostname or subdomain.</p>
                <p>We will explain the required configuration, available branding elements, and any setup cost.</p>
                <p>Confirm both the panel address and playback address if you need both branded.</p>
              </div>
            </article>
            <article className="rounded-2xl border p-6" style={cardStyle}>
              <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Discuss VPS Configuration and Secure Customer URL Options</h3>
              <div className="mt-4 space-y-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                <p>Tell us whether you already have a VPS and what it needs to support.</p>
                <p>Confirm the compatible configuration, HTTPS requirements, maintenance responsibilities, and cost.</p>
              </div>
            </article>
            <article className="rounded-2xl border p-6" style={cardStyle}>
              <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Confirm the Correct Service URL for VPN Users</h3>
              <div className="mt-4 space-y-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                <p>Provide the customer’s device, player, and intended VPN arrangement.</p>
                <p>Support can check the compatible service address and account requirements. Confirm any separate VPN subscription or setup charges.</p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <Block title="Offer Your Customers Live Channels and On-Demand Content">
        <p>Available service features include:</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {CATALOGUE.map((item) => (
            <li key={item} className="rounded-xl border bg-transparent px-4 py-3" style={{ borderColor: "rgba(212, 168, 75, 0.45)" }}>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4">Verify specific channels, local stations, languages, and events before promising them to a customer.</p>
      </Block>

      <Block title="Get Strong8k Reseller Support for Your Panel Questions">
        <p>Contact us about access, credits, account creation, renewals, branding, domain configuration, and service issues.</p>
        <p>For a customer playback problem, provide the account reference, device, player, affected content, error, time, and checks already completed.</p>
        <p>Explain whether other content works. Hide passwords and full private playlist links in screenshots.</p>
      </Block>

      <Block title="Prepare the Right Viewing Setup for Each Customer">
        <p>Confirm the device and player before the customer purchases an app license.</p>
        <p>Explain whether setup uses credentials, an M3U playlist, or device activation.</p>
        <p>For compatible Fire OS and Android installations, the current Strong8k app code is 4330396.</p>
        <p>Make the account duration, expiry date, connection allowance, and support route clear.</p>
        <div className="pt-2">
          <Link
            href={routes.installationGuide}
            className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all hover:border-[var(--hero-accent)]"
            style={{
              borderColor: "var(--hero-btn-border)",
              color: "var(--hero-cta-secondary-text)",
            }}
          >
            Read the Installation Guide &rarr;
          </Link>
        </div>
      </Block>

      <Block title="Support Your Customers With Clear Subscription and Setup Information">
        <p>Explain the retail subscription terms, simultaneous connections, device setup, and any separate player charges before payment.</p>
        <p>Maintain accurate account and expiry records.</p>
        <p>For a problem, establish whether it affects login, one source, the full catalog, or the customer’s network. Send service and panel issues to Strong8k with the relevant details.</p>
        <p>Confirm the agreed end-customer support arrangement before advertising it.</p>
      </Block>

      <Block title="Calculate Your Credit Costs, Selling Prices and Margin">
        <p>Use the confirmed credit price and account deduction to calculate the cost of each subscription.</p>
        <p>Include relevant payment fees, app licenses you supply, domain or VPS expenses, and customer-support costs.</p>
        <p>A larger package may have a different unit price. Use the current quote when calculating.</p>
        <p>Panel access provides management tools; it does not guarantee sales or earnings.</p>
      </Block>
    </>
  );
}
