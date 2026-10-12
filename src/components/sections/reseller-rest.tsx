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

const RESELLER_PACK_FEATURES = [
  "40,000+ live channels and 140,000+ VOD titles, including films and series.",
  "Multilingual UK-focused and international content; audio and subtitles vary by title.",
  "HD, FHD and UHD source options.",
  "Favourite film and series requests, plus live event enquiries and updates.",
  "Limited EPG programme information and catch-up coverage.",
  "Our app for compatible Fire OS and Android devices.",
  "Help with supported devices and compatible third-party players.",
  "Reseller dashboard to manage customer subscriptions using your credit balance.",
  "White Label Branding, with your own domain and branded panel URL options.",
  "VPS, secure URL and VPN-compatible URL options.",
  "Reseller support and 24/7 customer support.",
] as const;

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
  "140,000+ VOD titles.",
  "UK-focused and international content.",
  "HD, FHD and UHD options.",
  "Multilingual viewing where available.",
  "Requests for favourite films and series.",
  "Live event enquiries and updates.",
  "Limited EPG coverage.",
  "Limited catch-up.",
];

const SUPPORT_DETAILS = [
  "The account reference.",
  "Device make and model.",
  "Player name.",
  "Affected channel or title.",
  "The time and symptoms.",
  "Any error message.",
  "Whether other content works.",
  "The checks already completed.",
];

export function ResellerRest() {
  return (
    <>
      <Block title="Manage Customer Subscriptions Through Your Strong 8k Panel">
        <p>Your Strong 8k panel provides a way to manage customer subscriptions using purchased credits.</p>
        <p>You organise your customer accounts and selling prices. We support you with the dashboard and underlying service questions.</p>
        <p>During onboarding, ask us to demonstrate the available account creation, renewal and management functions. Check the credit deduction for the subscriptions and connections you intend to sell.</p>
        <p>If you see Strong8k panel or Strong8k reseller written without a space, check the website associated with the offer. Here, Strong8k IPTV panel refers to our reseller dashboard. Choose the reseller enquiry route for business access.</p>
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
                Start Your Reseller Dashboard with 120 Initial Credits
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div
                className="space-y-3 text-sm leading-[1.75] sm:text-[15px] md:text-right"
                style={{ color: "var(--hero-muted)" }}
              >
                <p>
                  The minimum opening purchase for your Strong 8k reseller dashboard is 120
                  credits. Contact us for the current cash price and any larger purchase
                  requirement.
                </p>
                <p>
                  All three packages include the same catalogue and available reseller features.
                  The package size changes the credit quantity available to manage customer
                  subscriptions.
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
                  {pack.highlight ? (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        background: "var(--grad-brand)",
                        color: "var(--hero-cta-primary-fg)",
                      }}
                    >
                      Popular
                    </span>
                  ) : null}

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
                    Pricing
                  </p>
                  <p className="mt-1 text-xl font-bold tracking-tight text-gradient-brand sm:text-2xl">
                    Contact Support for Price
                  </p>

                  <PriceGlowDivider />

                  <p className="text-[13px] font-semibold" style={{ color: "var(--hero-heading)" }}>
                    Catalogue and reseller features:
                  </p>
                  <ul className="mt-3 flex flex-1 flex-col gap-2.5">
                    {RESELLER_PACK_FEATURES.map((feature) => (
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
                        `I would like the Strong 8k ${pack.name} (${pack.credits}).`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center rounded-xl bg-gradient-brand px-5 py-3.5 text-center text-[13px] font-bold text-black transition-all duration-200 hover:brightness-110"
                      style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}
                    >
                      Get This Package
                    </Link>
                  </motion.div>
                </article>
              </ScrollReveal>
            ))}
          </div>

        </Container>
      </section>

      <Block title="Activate Your Panel with Your Email and Username">
        <ol className="grid gap-3 sm:grid-cols-2">
          {[
            "Tell us the credit quantity you want, starting from 120.",
            "Explain the customer account types you intend to sell.",
            "Include any domain, branding, VPS or URL requirements.",
            "Review the confirmed price and credit terms.",
            "Provide your chosen email address and username.",
            "Complete payment through the verified instructions.",
            "Receive the panel activation details.",
            "Check access and your opening credit balance.",
          ].map((step, index) => (
            <li key={step} className="rounded-xl border bg-transparent px-4 py-3" style={{ borderColor: "rgba(212, 168, 75, 0.45)" }}>
              <span className="mr-2 font-bold text-gradient-brand">{index + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
        <p>Use an email address you control and check its spelling before activation.</p>
        <p>If someone else manages your accounts, agree which address will receive panel information. Tell support promptly if the supplied details need correcting.</p>
      </Block>

      <section className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10">
          <FadeIn delay={0.05}>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--hero-heading)" }}>
              Add Your Own Branding and Personal Customer URLs
            </h2>
          </FadeIn>
          <p className="mt-6 max-w-3xl text-sm leading-[1.8] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Your panel address, customer playback URL, VPS and VPN configuration have different roles. Describe the outcome you need so we can arrange the correct setup.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <article className="rounded-2xl border p-6" style={cardStyle}>
              <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Use Your Own Domain for a Branded Panel</h3>
              <div className="mt-4 space-y-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                <p>We can add a personal domain to the panel so you can use your own branding and URL.</p>
                <p>Send the domain you control and the preferred hostname or subdomain.</p>
                <p>We will explain the required configuration, what can display your branding and any setup cost.</p>
                <p>A panel-domain change does not automatically change every address used in customer players. Ask us to confirm both requirements if you need a branded dashboard and customer playback address.</p>
              </div>
            </article>
            <article className="rounded-2xl border p-6" style={cardStyle}>
              <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Discuss VPS Configuration and Secure Customer URL Options</h3>
              <div className="mt-4 space-y-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                <p>We can configure a compatible virtual private server arrangement for your panel and customer URLs.</p>
                <p>Tell us whether you already have a VPS and what you want it to do.</p>
                <p>We can check the compatible configuration, HTTPS requirements, maintenance responsibilities and cost.</p>
                <p>A personal URL alone does not establish encryption or a private server. The relevant security features need to be configured as part of the agreed setup.</p>
              </div>
            </article>
            <article className="rounded-2xl border p-6" style={cardStyle}>
              <h3 className="text-xl font-bold" style={{ color: "var(--hero-heading)" }}>Confirm the Correct Service URL for VPN Users</h3>
              <div className="mt-4 space-y-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                <p>For customers who want to use a VPN, we can arrange a compatible URL according to the supported account setup.</p>
                <p>Confirm the correct address with us before giving customers VPN instructions.</p>
                <p>A VPN is different from a VPS, and a VPN-compatible service URL does not automatically include a VPN subscription.</p>
                <p>Provide the device, player and intended VPN arrangement so we can check the configuration.</p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <Block title="Offer Your Customers Live Channels and On-Demand Content">
        <p>Customer subscriptions use the available Strong 8k service catalogue:</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {CATALOGUE.map((item) => (
            <li key={item} className="rounded-xl border bg-transparent px-4 py-3" style={{ borderColor: "rgba(212, 168, 75, 0.45)" }}>
              {item}
            </li>
          ))}
        </ul>
        <p>Check specific titles, languages and events before promising them to a customer.</p>
        <p>Their player and device still need to support the supplied account method. Simultaneous viewing must match the created subscription’s allowance.</p>
      </Block>

      <Block title="Get Strong 8k Reseller Support for Panel Questions">
        <p>We provide assistance with panel access, credit questions and service issues.</p>
        <p>Contact us about account creation problems, renewals, domain configuration, URL arrangements or a fault that needs investigation.</p>
        <p>For a customer issue, send:</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {SUPPORT_DETAILS.map((item) => (
            <li key={item} className="rounded-xl border bg-transparent px-4 py-3" style={{ borderColor: "rgba(212, 168, 75, 0.45)" }}>
              {item}
            </li>
          ))}
        </ul>
        <p>Hide passwords and full private playlist links in screenshots.</p>
        <p>Clear information helps us identify the correct account and source.</p>
      </Block>

      <Block title="Prepare the Right Viewing Setup for Each Customer">
        <p>Ask the customer which device they own, how many screens need to play together and what content they want to check.</p>
        <p>Confirm the appropriate player before they buy an app licence. Explain whether the account uses server credentials, an M3U link or device activation.</p>
        <p>For compatible Fire OS and Android setups, use the current Strong 8k app code 4330396. The earlier code 439873 should not be given as the current installation instruction.</p>
        <p>Show the customer where to find support and make their expiry date clear.</p>
        <p>If they need catch-up, guide information or a particular language, check those requirements rather than assuming every feature is available across the catalogue.</p>
      </Block>

      <Block title="Support Your Customers with Clear Subscription and Setup Information">
        <p>You manage the relationship with your customers and the retail terms you offer.</p>
        <p>Explain the subscription duration, simultaneous connection allowance, device setup and any separate player charge before taking payment.</p>
        <p>Keep account and expiry records so that renewal questions can be handled accurately.</p>
        <p>For an installation problem, check the player and login method. For playback, establish whether the issue affects one source or the whole catalogue.</p>
        <p>Escalate service and panel questions to Strong 8k with the relevant details. Confirm any direct end-customer support arrangement before advertising it.</p>
      </Block>

      <Block title="Calculate Your Credit Costs, Selling Prices and Margin">
        <p>Your profit depends on the confirmed credit cost, retail price and other expenses.</p>
        <p>Start with the deduction for the customer subscription. Work out its cash cost using your credit purchase price.</p>
        <p>Allow for player licences you include, payment fees, domain or VPS expenses and the time spent providing support.</p>
        <p>A larger purchase may have a different unit price, but use the current quote rather than assuming a discount.</p>
        <p>An 8k reseller dashboard provides management tools. It does not guarantee sales or earnings.</p>
      </Block>
    </>
  );
}
