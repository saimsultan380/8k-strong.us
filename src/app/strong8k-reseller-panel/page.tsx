import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { BlogFeaturedImage } from "@/components/blog/blog-featured-image";
import { HeroReveal } from "@/components/animation/hero-reveal";
import { FadeIn } from "@/components/animation/fade-in";
import { RevealParts } from "@/components/animation/reveal-parts";
import { createPageMetadata, enquiryWhatsApp } from "@/lib/site";
import { routes } from "@/lib/routes";
import { getBlogBySlug } from "@/data/blogs";

const post = getBlogBySlug("strong8k-reseller-panel")!;

export const metadata: Metadata = createPageMetadata({
  title: post.metaTitle,
  description: post.description,
  path: post.path,
});

const cardStyle = {
  backgroundColor: "var(--feature-card-bg)",
  borderColor: "var(--feature-card-border)",
  boxShadow: "var(--feature-card-shadow)",
} as const;

const PANEL_OPTIONS = [
  {
    title: "Customer subscription management",
    body: "Manage customer access using the functions available in your panel.",
  },
  {
    title: "Credit-based reselling",
    body: "Purchase a credit package and confirm how credits are deducted for different subscription terms.",
  },
  {
    title: "Retail pricing",
    body: "Set your selling prices and calculate your margin against the confirmed wholesale cost.",
  },
  {
    title: "White-label branding",
    body: "Ask about using your own brand, personal domain, and branded panel URL.",
  },
  {
    title: "Technical assistance",
    body: "Get clarification about panel activation, supported devices, account setup, and service requirements.",
  },
] as const;

const KEYWORD_ROWS = [
  ["Strong 8K panel", "The dashboard used to manage reseller subscriptions"],
  ["Strong8K panel", "An alternative spelling of the panel name"],
  ["Strong8K reseller panel", "The platform used to manage IPTV customers and credits"],
  ["Strong 8K reseller", "A person or business selling subscriptions through the service"],
  ["Strong 8K IPTV reseller", "A reseller focused on subscriptions for the Strong 8K IPTV service"],
  ["8K panel", "A broader search term that can refer to different reseller platforms"],
  ["Strong IPTV panel", "A related search phrase that should be checked against the exact provider"],
] as const;

const RECORD_ROWS = [
  ["Starting balance", "Total credits purchased"],
  ["Subscription created", "Credits deducted for that account"],
  ["Renewal", "Credits required under the renewal rules"],
  ["Remaining balance", "Credits available after each transaction"],
  ["Next purchase", "When your balance is too low for expected demand"],
] as const;

const CONFIRM_ITEMS = [
  "How many credits each subscription duration requires.",
  "Whether different connection allowances have different credit costs.",
  "Whether trials consume credits and what limits apply.",
  "Whether unused credits expire.",
  "Whether additional credit purchases can be added to your existing balance.",
  "Whether renewals follow the same credit rules as new subscriptions.",
] as const;

const PACKAGES = [
  {
    name: "Starter",
    credits: "120",
    suitable: "Beginners testing demand",
    heading: "Strong 8K reseller panel 120 credits",
    body: [
      "The 120-credit option is the minimum opening package for creating a reseller dashboard.",
      "It may suit someone who wants to understand the panel, learn the credit rules, and begin with a smaller inventory. Before paying, confirm the package price and calculate how many subscriptions you can create using the actual deductions.",
    ],
  },
  {
    name: "Growth",
    credits: "240",
    suitable: "Resellers building a customer base",
    heading: "Strong8K reseller panel 240 credits",
    body: [
      "The 240-credit package may be worth considering if you already have prospective customers or expect more demand than the starter balance can support.",
      "A larger balance gives you more prepaid capacity, but it also ties up more money. Compare the price per credit and your realistic sales expectations before choosing it.",
    ],
  },
  {
    name: "Pro",
    credits: "360",
    suitable: "Resellers planning for greater demand",
    heading: "Strong 8K IPTV reseller panel 360 credits",
    body: [
      "The 360-credit option may suit a reseller planning to manage a larger customer base.",
      "It is important to compare the current wholesale quote with the expected cost of acquiring customers, providing support, and handling renewals. A larger package is useful only when its additional capacity fits your business needs.",
    ],
  },
] as const;

const ACQUISITION = [
  "A professional website with clear subscription information.",
  "Search-engine-optimised landing pages and helpful blog posts.",
  "Social media content explaining supported devices and setup.",
  "Customer referrals and repeat business.",
  "Responsive customer service that helps customers understand their options.",
] as const;

const EARN_EXAMPLE = [
  ["Customers making a purchase", "20"],
  ["Illustrative retail price per subscription", "$15"],
  ["Total sales revenue", "$300"],
  ["Illustrative wholesale cost per subscription", "$7"],
  ["Total wholesale cost", "$140"],
  ["Gross margin before other expenses", "$160"],
] as const;

const FEATURE_CHECKS = [
  {
    title: "Customer account management",
    body: "Ask how customer subscriptions are created, activated, renewed, and managed. Find out whether the dashboard displays account status and expiry information.",
  },
  {
    title: "Credit tracking",
    body: "Check whether you can view your remaining balance and transaction history. Clear credit records make it easier to reconcile sales and plan future purchases.",
  },
  {
    title: "White-label branding",
    body: "If you want to operate under your own business identity, ask about personal domains, branded panel URLs, and the exact branding elements available. The website lists these as options to discuss with support. Confirm any setup costs and technical requirements before committing.",
  },
  {
    title: "Device and installation support",
    body: "Your customers may use different devices and players. Check which setups the service supports and what installation guidance is available. Also explain that third-party IPTV players may require separate licences or payments.",
  },
  {
    title: "Technical support",
    body: "Ask how to report panel access issues, subscription problems, and playback errors. Clarify which issues are handled by the provider and which responsibilities remain with you as the reseller.",
  },
] as const;

const START_STEPS = [
  {
    title: "Contact the provider",
    body: "Explain that you want a reseller panel rather than a personal IPTV subscription.",
  },
  {
    title: "Choose a credit quantity",
    body: "Start by comparing the 120-, 240-, and 360-credit options.",
  },
  {
    title: "Confirm the terms",
    body: "Ask for the current price, credit deductions, expiry rules, account permissions, and support arrangements.",
  },
  {
    title: "Discuss branding",
    body: "If required, provide your domain and explain whether you need a branded panel URL or other supported configuration.",
  },
  {
    title: "Complete the order",
    body: "Use the verified payment instructions and provide the requested activation details through the appropriate channel.",
  },
  {
    title: "Check your panel",
    body: "Confirm access, review the available functions, and verify your starting credit balance.",
  },
  {
    title: "Prepare for your first customers",
    body: "Understand account creation, renewals, device compatibility, and support procedures before taking orders.",
  },
] as const;

const BEGINNER_CHECKS = [
  "Explain the subscription options accurately.",
  "Calculate the cost of each subscription using confirmed credit rules.",
  "Set prices that cover costs and leave a reasonable margin.",
  "Help customers understand device compatibility and installation.",
  "Maintain account, payment, and renewal records.",
  "Handle complaints and follow the applicable refund policy.",
] as const;

const FAQS = [
  {
    q: "1. What is a Strong8K reseller panel?",
    a: "A Strong8K reseller panel is a dashboard used to manage customer subscriptions through the Strong 8K IPTV service. The available functions and commercial terms depend on the reseller arrangement.",
  },
  {
    q: "2. How many credits do I need to start?",
    a: "The 8K-Strong.us reseller page specifies a minimum initial purchase of 120 credits to create a panel. Contact support to confirm the current package price and requirements.",
  },
  {
    q: "3. How much does a Strong 8K reseller panel cost?",
    a: "The current website directs prospective resellers to contact support for pricing. Request a quote for your chosen credit package and confirm the payment currency and any additional charges.",
  },
  {
    q: "4. How does the Strong8K credit system work?",
    a: "Credits are a prepaid balance used according to your reseller account's rules. The exact number deducted depends on the applicable subscription and connection terms, which you should confirm before purchasing.",
  },
  {
    q: "5. How many subscriptions can I create with 120 credits?",
    a: "The number depends on the credit deduction for each subscription and any applicable connection requirements. Ask the provider for a breakdown of the plans you intend to sell before estimating your capacity.",
  },
  {
    q: "6. Can I earn money with a Strong 8K reseller panel?",
    a: "You can calculate potential gross margin by subtracting the wholesale subscription cost from your retail selling price. Actual net profit depends on sales volume, payment fees, marketing, customer support, refunds, and other expenses. Earnings are not guaranteed.",
  },
  {
    q: "7. Can I set my own prices as a Strong 8K reseller?",
    a: "The reseller page indicates that you can set retail prices. Confirm any applicable commercial restrictions, then calculate your prices using your actual wholesale costs and business expenses.",
  },
  {
    q: "8. Can I use my own brand and domain?",
    a: "The website invites resellers to ask about white-label branding, personal domains, and branded panel URLs. Contact support to confirm availability, configuration requirements, and additional costs.",
  },
  {
    q: "9. Do unused Strong8K reseller credits expire?",
    a: "Do not assume that credits remain valid indefinitely. Ask the provider to confirm the credit-expiry rules and any account conditions before making a purchase.",
  },
  {
    q: "10. Can I create free trials for my customers?",
    a: "Trial functionality and any associated credit costs or daily limits must be confirmed with the provider. Ask which trial options are available for your particular reseller account.",
  },
  {
    q: "11. Is the Strong8K reseller panel the same as a regular IPTV subscription?",
    a: "No. A regular IPTV subscription is intended for personal viewing, while a reseller panel is designed for managing customer subscriptions under the applicable reseller terms.",
  },
  {
    q: "12. Which reseller package should I choose?",
    a: "The 120-credit package may suit someone testing demand, while the 240- and 360-credit options provide larger starting balances. Compare the current prices, credit deductions, and your realistic sales forecast before choosing.",
  },
  {
    q: "13. What should I do if my reseller credits run low?",
    a: "Check your remaining balance and calculate the credits needed for expected new subscriptions and renewals. Contact the provider to confirm the current top-up process and terms before purchasing additional credits.",
  },
  {
    q: "14. How can I get help with my Strong 8K reseller panel?",
    a: "Visit the official reseller panel page or use the website's contact page to ask about pricing, activation, credit rules, branding, and technical requirements.",
  },
] as const;

const buttonClass =
  "inline-flex items-center justify-center rounded-xl bg-gradient-brand px-6 py-3.5 text-[13px] font-bold text-black transition-all hover:brightness-110 sm:text-[15px]";

export default function Strong8kResellerPanelBlogPage() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <Breadcrumbs
        items={[
          { name: "Home", path: routes.home },
          { name: "Blogs", path: routes.blogs },
          { name: post.navLabel, path: post.path },
        ]}
      />

      <section className="relative isolate overflow-hidden pb-10 pt-32 sm:pt-36">
        <Container className="relative z-10 max-w-4xl">
          <HeroReveal delay={0.05}>
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{
                borderColor: "var(--hero-pill-border)",
                backgroundColor: "transparent",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--hero-accent)" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--hero-accent)" }}>
                Reseller Guide
              </span>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.1}>
            <h1
              className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-[42px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Strong8K Reseller Panel or Strong 8K Panel | How to Earn $ as 8K Strong Reseller?
            </h1>
          </HeroReveal>

          <HeroReveal delay={0.16}>
            <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px] md:text-base" style={{ color: "var(--hero-muted)" }}>
              <p>
                Want to start an IPTV reselling business and earn money by selling subscriptions? The Strong8K reseller panel gives you a way to manage customer subscriptions, purchase reseller credits, and set your own retail prices. Instead of building an IPTV platform from scratch, you can use the available reseller infrastructure to manage your business.
              </p>
              <p>
                Whether you searched for the strong 8k panel, strong8k reseller panel, strong 8k reseller, or strong 8k iptv reseller, understanding the credit system and your potential profit is essential before investing.
              </p>
              <p>
                At 8K-Strong.us, the initial requirement for creating a reseller panel is 120 credits. You can contact the team to confirm current wholesale prices, credit deductions, available branding options, and activation requirements.
              </p>
              <p>
                In this guide, you will learn how the Strong8K panel works, how credits are used, how to calculate potential earnings, which reseller package may suit your business, and what to consider before getting started.
              </p>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.22}>
            <BlogFeaturedImage src={post.image} alt={post.imageAlt} />
          </HeroReveal>
        </Container>
      </section>

      {/* What is the panel */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              What Is the Strong8K Reseller Panel?
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <RevealParts>
              <p>
                The Strong8K reseller panel is a dashboard for managing customer subscriptions through the Strong 8K IPTV service. It provides a central place to handle reseller access and the subscription-management functions available to your account.
              </p>
              <p>
                Instead of creating your own streaming infrastructure, you work with the existing service and focus on finding customers, explaining subscription options, managing renewals, and providing customer support.
              </p>
              <p>With the Strong 8K panel, you can explore the available options for:</p>
            </RevealParts>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {PANEL_OPTIONS.map((item) => (
              <article key={item.title} className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
                <h3 className="text-base font-bold" style={{ color: "var(--hero-heading)" }}>{item.title}</h3>
                <p className="mt-2 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>{item.body}</p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            The exact functions depend on your reseller arrangement, so confirm the available permissions and features before purchasing credits.
          </p>
        </Container>
      </section>

      {/* Keyword difference table */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              What Is the Difference Between Strong 8K Panel and Strong8K Reseller Panel?
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            These search terms generally refer to the same type of reseller-management solution.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Keyword</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>What users generally mean</th>
                </tr>
              </thead>
              <tbody>
                {KEYWORD_ROWS.map(([keyword, meaning]) => (
                  <tr key={keyword} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{keyword}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              If you are looking for a reseller account rather than a personal viewing subscription, make sure you select the reseller option. A standard IPTV subscription is intended for watching content, whereas a reseller panel is intended for managing customer subscriptions under the applicable commercial terms.
            </p>
            <p>Always verify that you are dealing with the intended provider before making a payment.</p>
          </div>
        </Container>
      </section>

      {/* Credit system */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              How Does the Strong 8K Reseller Credit System Work?
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              The credit system is one of the most important parts of running an IPTV reseller business. Credits represent the prepaid balance you use according to the rules of your reseller account.
            </p>
            <p>
              The Strong8K website requires an initial purchase of 120 credits to create a panel. Additional options listed on the reseller page include 240 and 360 credits.
            </p>
            <p>
              However, do not assume that every subscription duration or connection type consumes the same number of credits across all reseller arrangements. Confirm the current deductions with the provider before calculating how many customers your balance can support.
            </p>
          </div>

          <h3 className="mt-10 text-xl font-bold sm:text-2xl" style={{ color: "var(--hero-heading)" }}>
            Understanding your credit balance
          </h3>
          <div className="mt-4 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>Consider the following example to understand how credits work.</p>
            <p>
              Suppose your panel has 120 credits. Before selling subscriptions, ask the provider how many credits are required for each available plan and connection allowance.
            </p>
            <p>
              Once you know those rules, you can estimate the number of subscriptions you can create, the remaining balance after each sale, and when you may need to purchase additional credits.
            </p>
            <p>A simple record-keeping table can help:</p>
          </div>

          <div className="mt-6 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Item</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>What to record</th>
                </tr>
              </thead>
              <tbody>
                {RECORD_ROWS.map(([item, record]) => (
                  <tr key={item} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{item}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{record}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Keeping accurate records helps you avoid selling a subscription without enough credits to activate it.
          </p>

          <h3 className="mt-10 text-xl font-bold sm:text-2xl" style={{ color: "var(--hero-heading)" }}>
            Why should you confirm credit deductions first?
          </h3>
          <div className="mt-4 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              Credit requirements affect your costs, retail prices, and potential profit. If you misunderstand how the panel calculates a subscription, your expected margin may be incorrect.
            </p>
            <p>Before purchasing the strong 8k panel, confirm:</p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {CONFIRM_ITEMS.map((item) => (
              <li
                key={item}
                className="rounded-xl border px-4 py-3 text-sm leading-[1.7]"
                style={{ borderColor: "rgba(212,168,75,0.45)", color: "var(--hero-muted)" }}
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Get these details in writing so that you can plan your business with greater confidence.
          </p>
        </Container>
      </section>

      {/* Packages */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Strong 8K Reseller Panel Packages: 120, 240, and 360 Credits
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              The appropriate reseller package depends on your budget, expected customer demand, and experience with subscription-based businesses.
            </p>
            <p>
              The current reseller page lists the following credit quantities. Prices are provided by contacting support rather than displayed as fixed amounts on the page.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Package</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Initial credits</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Suitable for</th>
                </tr>
              </thead>
              <tbody>
                {PACKAGES.map((pack) => (
                  <tr key={pack.name} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{pack.name}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{pack.credits}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{pack.suitable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            All three options list the available service catalogue and reseller features. The main difference is the initial credit quantity, not a guaranteed difference in streaming quality.
          </p>

          <div className="mt-8 grid gap-4">
            {PACKAGES.map((pack) => (
              <article key={pack.heading} className="rounded-2xl border p-6 sm:p-7" style={cardStyle}>
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold text-black"
                    style={{ background: "var(--grad-brand)" }}
                  >
                    {pack.credits} credits
                  </span>
                  <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>{pack.heading}</h3>
                </div>
                <div className="mt-4 space-y-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                  {pack.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Before selecting any package, request a current quote and confirm all credit, activation, and wholesale terms.
          </p>
        </Container>
      </section>

      {/* How to earn */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              How to Earn Money as an 8K Strong Reseller
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              The basic business model is straightforward: purchase reseller credits at the confirmed wholesale rate, sell eligible subscriptions at your chosen retail price, and manage the difference between revenue and costs.
            </p>
            <p>
              However, your actual earnings depend on the cost of each subscription, the price customers are willing to pay, your sales volume, and your operating expenses.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <article className="rounded-2xl border p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Step 1: Calculate the cost of each subscription</h3>
              <div className="mt-3 space-y-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                <p>First, establish the cost of the credits required to create a particular subscription.</p>
                <p>For example, if a package costs $240 for 120 credits, the average purchase cost is:</p>
                <p
                  className="rounded-xl border px-4 py-3 font-semibold"
                  style={{ borderColor: "rgba(212,168,75,0.45)", color: "var(--hero-heading)" }}
                >
                  $240 ÷ 120 = $2 per credit
                </p>
                <p>This is a hypothetical calculation, not a current Strong8K reseller quote. Use your actual package price when calculating your costs.</p>
                <p>If a particular subscription uses multiple credits, multiply the cost per credit by the number required for that subscription.</p>
              </div>
            </article>

            <article className="rounded-2xl border p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Step 2: Set a suitable retail price</h3>
              <div className="mt-3 space-y-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                <p>Your selling price should account for your wholesale cost, customer expectations, competitors, payment fees, and support expenses.</p>
                <p>For example, suppose your confirmed wholesale cost for one subscription is $6 and you sell it for $12.</p>
                <p
                  className="rounded-xl border px-4 py-3 font-semibold"
                  style={{ borderColor: "rgba(212,168,75,0.45)", color: "var(--hero-heading)" }}
                >
                  12 − 6 = $6
                </p>
                <p>Your gross margin contribution would be $6 before other expenses. This is not your final net profit.</p>
              </div>
            </article>

            <article className="rounded-2xl border p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Step 3: Find customers</h3>
              <p className="mt-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                Potential customer-acquisition channels include:
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {ACQUISITION.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border px-4 py-3 text-sm leading-[1.7]"
                    style={{ borderColor: "rgba(212,168,75,0.45)", color: "var(--hero-muted)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                Market only services and content that you are authorised to distribute, and follow the applicable advertising and consumer-protection rules.
              </p>
            </article>

            <article className="rounded-2xl border p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Step 4: Encourage renewals through good service</h3>
              <div className="mt-3 space-y-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                <p>Repeat customers can make revenue more predictable, but renewals are never guaranteed.</p>
                <p>
                  Help customers understand their subscription duration, supported devices, connection limits, and expiry dates. Respond to technical questions promptly and be clear about limitations and refund terms.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border p-6" style={cardStyle}>
              <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>Step 5: Track your actual profit</h3>
              <div className="mt-3 space-y-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                <p>Record each sale, credit deduction, payment fee, refund, and other business expense.</p>
                <p>
                  This helps you distinguish sales revenue from gross margin and net profit. It also shows whether your current pricing is sustainable.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* How much can you earn */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              How Much Can You Earn With a Strong8K Reseller Panel?
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              There is no fixed amount that every reseller can earn. Your results depend on your wholesale costs, retail prices, sales volume, renewals, and operating expenses.
            </p>
            <p>
              The following example shows how to calculate revenue and gross margin using hypothetical numbers.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Example</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {EARN_EXAMPLE.map(([label, amount]) => (
                  <tr key={label} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{label}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>The calculation is:</p>
            <p
              className="rounded-xl border px-4 py-3 font-semibold"
              style={{ borderColor: "rgba(212,168,75,0.45)", color: "var(--hero-heading)" }}
            >
              20 × (15 − 7) = $160
            </p>
            <p>
              The $160 figure is gross margin before other business expenses, not guaranteed income or net profit. Payment processing, marketing, customer support, refunds, taxes, and other costs can reduce the final amount.
            </p>
            <p>
              Use your actual credit deductions and current wholesale quote to build a realistic estimate before investing.
            </p>
          </div>
        </Container>
      </section>

      {/* Features to check */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              What Features Should You Check in the Strong8K Panel?
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Before purchasing a reseller account, make sure the available tools match the way you intend to operate.
          </p>

          <div className="mt-8 grid gap-4">
            {FEATURE_CHECKS.map((item) => (
              <article key={item.title} className="rounded-2xl border p-6" style={cardStyle}>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>{item.title}</h3>
                <p className="mt-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Get started */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              How to Get Started With the Strong8K Reseller Panel
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            The process begins by confirming your requirements and choosing an appropriate credit package.
          </p>

          <ol className="mt-8 space-y-4">
            {START_STEPS.map((item, index) => (
              <li key={item.title} className="flex gap-4 rounded-2xl border p-5 sm:p-6" style={cardStyle}>
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-black"
                  style={{ background: "var(--grad-brand)" }}
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-base font-bold sm:text-lg" style={{ color: "var(--hero-heading)" }}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            You can review the available options on the{" "}
            <Link href={routes.resellerPanel} className="font-semibold underline" style={{ color: "var(--hero-heading)" }}>
              Strong8K Reseller Panel page
            </Link>{" "}
            or contact the team for current pricing and activation details.
          </p>
        </Container>
      </section>

      {/* Beginners */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Is the Strong 8K Panel Suitable for Beginners?
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              A reseller panel can be a practical starting point for someone who wants to manage subscriptions without building a platform from scratch. However, it still requires business planning, customer service, and a clear understanding of the provider&apos;s terms.
            </p>
            <p>Before you start, make sure you can:</p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {BEGINNER_CHECKS.map((item) => (
              <li
                key={item}
                className="rounded-xl border px-4 py-3 text-sm leading-[1.7]"
                style={{ borderColor: "rgba(212,168,75,0.45)", color: "var(--hero-muted)" }}
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Start with a clear plan instead of assuming that purchasing credits will automatically generate sales.
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Frequently Asked Questions About Strong8K Reseller Panels
            </h2>
          </FadeIn>
          <div className="mt-8 space-y-3">
            {FAQS.map((faq) => (
              <article key={faq.q} className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
                <h3 className="text-base font-bold sm:text-[17px]" style={{ color: "var(--hero-heading)" }}>{faq.q}</h3>
                <p className="mt-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>{faq.a}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <div className="rounded-2xl border px-6 py-10 text-center sm:px-10 sm:py-14" style={cardStyle}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Start Your Strong8K Reseller Business With Clear Information
            </h2>
            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
              <p>
                Choosing the right reseller panel begins with understanding the credit system, the available management tools, and the actual costs of serving customers.
              </p>
              <p>
                The Strong 8K panel offers a starting point for managing subscriptions through the existing service, with 120 credits required for initial panel creation and larger credit options available.
              </p>
              <p>
                Before investing, request a current quote, confirm the credit deductions for the subscriptions you plan to sell, and work out your potential margin using realistic figures. If you intend to use your own branding, ask about the available white-label and domain options as well.
              </p>
              <p>
                Ready to explore your options? Visit the Strong8K Reseller Panel to discuss credit packages, pricing, branding, and activation requirements with the team.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={routes.resellerPanel} className={buttonClass} style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}>
                View Reseller Panel
              </Link>
              <Link
                href={enquiryWhatsApp("reseller-pricing")}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
                style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}
              >
                Request Reseller Pricing
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
