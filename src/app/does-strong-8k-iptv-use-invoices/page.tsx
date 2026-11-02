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
import { createPageMetadata, enquiryWhatsApp, siteConfig } from "@/lib/site";
import { routes } from "@/lib/routes";
import { getBlogBySlug } from "@/data/blogs";

const post = getBlogBySlug("does-strong-8k-iptv-use-invoices")!;

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

const buttonClass =
  "inline-flex items-center justify-center rounded-xl bg-gradient-brand px-6 py-3.5 text-[13px] font-bold text-black transition-all hover:brightness-110 sm:text-[15px]";

const OVERVIEW_ROWS = [
  ["Does Strong 8K provide invoices?", "Yes, through Stripe upon request"],
  ["Are invoices generated automatically?", "No"],
  ["Can I receive an invoice by email?", "Yes"],
  ["Can I request a Stripe payment link?", "Yes"],
  ["Do I need to contact support?", "Yes, through WhatsApp"],
  ["Can I pay using other methods?", "Yes, subject to availability"],
  ["When is my subscription activated?", "After payment verification"],
] as const;

const PAYMENT_METHODS = [
  ["Google Pay", "Pay using an eligible Google Pay payment method"],
  ["Apple Pay", "Complete payment through a supported Apple device or browser"],
  ["Credit cards", "Pay using an eligible credit card"],
  ["Debit cards", "Use a supported debit card"],
  ["Stripe Invoice", "Request an invoice delivered to your email"],
  ["Stripe Payment Link", "Open a secure payment link and complete the transaction"],
  ["Bank Transfer", "Follow the bank transfer instructions provided by support"],
  ["PayPal", "Pay through PayPal where available"],
  ["Cryptocurrency", "Use an accepted cryptocurrency payment option"],
  ["USDT", "Complete payment using the provided USDT instructions"],
  ["Remitly", "Follow the applicable international transfer instructions"],
] as const;

const STRIPE_COMPARISON = [
  ["How you receive it", "Sent to your email", "Shared through a link"],
  ["Personal details", "Full name and email requested", "Follow the details requested on the payment page"],
  ["Payment process", "Open the invoice and follow its payment instructions", "Open the link and complete payment"],
  ["Payment methods", "Depends on the invoice configuration", "Depends on the payment link configuration"],
  ["Best suited for", "Customers who want an emailed invoice", "Customers who prefer a direct payment link"],
] as const;

const WHY_WHATSAPP_BENEFITS = [
  {
    title: "Personal assistance",
    body: "Customers can ask questions about subscription plans, devices, and payment methods before making a decision.",
  },
  {
    title: "Free trial before purchase",
    body: "Customers can test the service before committing to a paid subscription.",
  },
  {
    title: "Flexible payment options",
    body: "Customers can discuss different payment methods based on their location and preferences.",
  },
  {
    title: "Invoice on request",
    body: "Customers who prefer Stripe invoicing can request an invoice through the support team.",
  },
  {
    title: "Payment verification",
    body: "The team can verify the transaction before activating the selected subscription.",
  },
  {
    title: "Direct support",
    body: "Customers have a clear communication channel for payment and setup questions.",
  },
] as const;

const SAFETY_PRECAUTIONS = [
  "Check that the invoice contains the correct subscription amount.",
  "Verify the payment recipient and business details.",
  "Make sure you are using the payment link provided by the official support team.",
  "Do not share your card PIN, password, or one-time verification codes with anyone.",
  "Keep your payment confirmation email.",
  "Share only the payment confirmation details needed for transaction verification.",
  "For bank transfers, PayPal, cryptocurrency, USDT, or Remitly, request the correct payment instructions directly from support and verify the recipient before sending money.",
] as const;

const PROCESS_FLOW_STEPS = [
  "Contact Us on WhatsApp",
  "Try the Free Trial",
  "Choose a Subscription Plan",
  "Select a Payment Method",
  "Request an Invoice or Payment Link if Needed",
  "Complete Payment",
  "Share Payment Confirmation",
  "Get Your Subscription Activated",
] as const;

const FAQS = [
  {
    q: "1. Does Strong 8K IPTV use invoices?",
    a: "Yes. Strong 8K IPTV provides Stripe invoices upon request. Customers need to contact the support team through WhatsApp and provide their full name and email address to receive an invoice.",
  },
  {
    q: "2. Does Strong8K automatically generate invoices after payment?",
    a: "No. Strong8K does not use an automated checkout or payment form on its website. Customers contact the team directly, and those who prefer Stripe invoicing can request an invoice before completing their payment.",
  },
  {
    q: "3. How can I get an invoice from Strong 8K IPTV?",
    a: "Contact the Strong8K team through WhatsApp and request a Stripe invoice. Provide your full name and email address. The invoice will be sent to your email so you can review the details and complete the payment.",
  },
  {
    q: "4. Can I pay for Strong8K IPTV without an invoice?",
    a: "Yes. If you do not need an invoice, you can ask the support team about the other available payment methods. Depending on your location, options may include Google Pay, Apple Pay, credit and debit cards, bank transfer, PayPal, cryptocurrency, USDT, and Remitly.",
  },
  {
    q: "5. Does Strong 8K IPTV provide Stripe payment links?",
    a: "Yes. Customers can request a Stripe payment link instead of an emailed invoice. The team shares the link, allowing customers to open the payment page and complete their transaction using an eligible supported payment method.",
  },
  {
    q: "6. What information do I need to request a Stripe invoice?",
    a: "You need to provide your full name and email address. The support team uses these details to prepare and send your Stripe invoice.",
  },
  {
    q: "7. Can I pay using Google Pay or Apple Pay?",
    a: "Yes, these payment options may be available depending on your location and payment setup. Contact the support team to confirm availability and receive the appropriate payment instructions.",
  },
  {
    q: "8. Can international customers pay for Strong8K IPTV?",
    a: "Yes. Strong8K offers several payment options for customers in different countries. Available methods may include card payments, Stripe, PayPal, bank transfers, cryptocurrency, USDT, and Remitly. Contact support to check which option works in your country.",
  },
  {
    q: "9. Do I need to pay before trying Strong8K IPTV?",
    a: "No. You can request a free trial before purchasing a paid subscription. This allows you to test the service and check whether it meets your requirements.",
  },
  {
    q: "10. What happens after I complete my payment?",
    a: "After completing your payment, share a screenshot of the payment confirmation through WhatsApp. The support team will verify the transaction and activate your selected subscription.",
  },
  {
    q: "11. How long does Strong8K take to activate a subscription?",
    a: "Activation takes place after the payment has been verified. For the expected activation time, contact the support team when placing your order.",
  },
  {
    q: "12. Can I contact Strong8K if I have a payment problem?",
    a: "Yes. You can contact the support team through WhatsApp or the official email address listed on the website. Share the relevant payment information so the team can help you check the issue.",
  },
] as const;

export default function DoesStrong8kIptvUseInvoicesPage() {
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

      {/* Hero: title + intro description, then image placeholder */}
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
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--hero-accent)" }}
              />
              <span
                className="text-[11px] font-bold uppercase tracking-[0.2em]"
                style={{ color: "var(--hero-accent)" }}
              >
                Payment Guide
              </span>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.1}>
            <h1
              className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-[44px]"
              style={{ color: "var(--hero-heading)" }}
            >
              Does Strong 8K IPTV Use Invoices? Payment Methods and Subscription Process Explained
            </h1>
          </HeroReveal>

          <HeroReveal delay={0.16}>
            <div
              className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px] md:text-base"
              style={{ color: "var(--hero-muted)" }}
            >
              <p>
                When choosing an IPTV subscription, customers often want to know how payments work, whether they can receive an invoice, and how they will get their subscription after making a payment. If you are considering Strong 8K IPTV, you may have similar questions.
              </p>
              <p>
                Some IPTV providers use automated checkout systems where customers select a plan, enter their payment details, and complete an order directly on the website. However, Strong 8K follows a more personalized payment process. Customers contact the support team through WhatsApp to discuss subscription plans, request payment details, and complete their orders.
              </p>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.22}>
            <BlogFeaturedImage src={post.image} alt={post.imageAlt} />
          </HeroReveal>
        </Container>
      </section>

      {/* Does Strong 8K IPTV Use Invoices? */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Does Strong 8K IPTV Use Invoices?
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <RevealParts>
              <p>
                Yes, Strong 8K IPTV provides Stripe invoices upon request. However, invoices are not automatically generated through an online checkout form because Strong8K does not use an automated payment system on its website.
              </p>
              <p>
                Customers who prefer to pay through Stripe can request an invoice by providing their full name and email address. The invoice is then sent directly to their email. Alternatively, customers can request a secure Stripe payment link to complete their payment.
              </p>
              <p>
                Strong8K also supports other payment options, including Google Pay, Apple Pay, credit and debit cards, bank transfers, PayPal, cryptocurrency, USDT, and Remitly, depending on the customer&apos;s location and available options.
              </p>
            </RevealParts>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Customer question</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Answer</th>
                </tr>
              </thead>
              <tbody>
                {OVERVIEW_ROWS.map(([question, answer]) => (
                  <tr key={question} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{question}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{answer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            This approach allows customers to ask questions, test the service, select a suitable subscription, and choose their preferred payment method before completing an order.
          </p>
        </Container>
      </section>

      {/* How Does the Strong8K Payment Process Work? */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              How Does the Strong8K Payment Process Work?
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              The Strong8K payment process is simple. Instead of completing an automated checkout, customers communicate directly with the support team through WhatsApp.
            </p>
            <p>
              Here is how the complete process works.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {/* Step 1 */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{ background: "var(--grad-brand)" }}
                >
                  1
                </span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                  Contact Strong8K Through WhatsApp
                </h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  The first step is to contact the Strong8K support team through WhatsApp.
                </p>
                <p>
                  If you are interested in a subscription, you can ask about available plans, prices, subscription durations, supported devices, and payment methods.
                </p>
                <p>
                  The support team will guide you through the available options and help you understand the process before making a purchase.
                </p>
              </div>
            </article>

            {/* Step 2 */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{ background: "var(--grad-brand)" }}
                >
                  2
                </span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                  Try the Free Trial Before Purchasing
                </h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  You do not have to purchase a subscription without testing the service first.
                </p>
                <p>
                  Strong8K offers a free-trial option so prospective customers can explore the service before choosing a paid plan.
                </p>
                <p className="font-semibold" style={{ color: "var(--hero-heading)" }}>
                  During the trial, you can:
                </p>
                <ul className="list-inside list-disc space-y-1.5 pl-1">
                  <li>Check the available channels.</li>
                  <li>Explore the content library.</li>
                  <li>Test playback on your compatible device.</li>
                  <li>Check picture quality and streaming performance.</li>
                  <li>Understand the available features.</li>
                </ul>
                <p>
                  Testing the service on your usual device and internet connection can help you decide whether it meets your expectations.
                </p>
              </div>
            </article>

            {/* Step 3 */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{ background: "var(--grad-brand)" }}
                >
                  3
                </span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                  Choose Your Subscription Plan
                </h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  After testing the free trial, you can select the subscription that suits your viewing requirements and budget.
                </p>
                <p>
                  If you are unsure which plan to choose, contact the support team for guidance. You can ask about subscription duration, available connections, compatibility, and other relevant details.
                </p>
                <p>
                  Once you have selected your preferred plan, the team will explain the available payment methods.
                </p>
              </div>
            </article>

            {/* Step 4 */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{ background: "var(--grad-brand)" }}
                >
                  4
                </span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                  Select Your Preferred Payment Method
                </h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  Strong8K offers different payment options to make the process convenient for customers in different countries.
                </p>
                <p>
                  Depending on your location and payment availability, you may be able to use:
                </p>
              </div>

              <div className="mt-6 overflow-x-auto rounded-xl border" style={{ borderColor: "var(--feature-card-border)" }}>
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                      <th className="px-5 py-3.5 font-bold" style={{ color: "var(--hero-heading)" }}>Payment method</th>
                      <th className="px-5 py-3.5 font-bold" style={{ color: "var(--hero-heading)" }}>How it works</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PAYMENT_METHODS.map(([method, desc]) => (
                      <tr key={method} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                        <td className="px-5 py-3.5 font-semibold" style={{ color: "var(--hero-heading)" }}>{method}</td>
                        <td className="px-5 py-3.5" style={{ color: "var(--hero-muted)" }}>{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                Not every payment method will be available in every country. Contact the team to confirm which options you can use before making a payment.
              </p>
            </article>

            {/* Step 5 */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{ background: "var(--grad-brand)" }}
                >
                  5
                </span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                  Request a Stripe Invoice or Secure Payment Link
                </h3>
              </div>
              <p className="mt-4 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                If you prefer to pay through Stripe, you can request an invoice or a payment link.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border p-4 sm:p-5" style={{ borderColor: "var(--feature-card-border)", backgroundColor: "rgba(0,0,0,0.3)" }}>
                  <h4 className="text-base font-bold" style={{ color: "var(--hero-heading)" }}>
                    Option A: Request a Stripe invoice
                  </h4>
                  <p className="mt-2 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                    If you need an invoice for your records, follow these steps:
                  </p>
                  <ol className="mt-3 list-inside list-decimal space-y-1.5 text-sm" style={{ color: "var(--hero-muted)" }}>
                    <li>Contact Strong8K through WhatsApp.</li>
                    <li>Tell the support team that you want to pay through a Stripe invoice.</li>
                    <li>Provide your full name and email address.</li>
                    <li>The team will prepare the invoice.</li>
                    <li>Check your email for the invoice.</li>
                    <li>Open it and follow the payment instructions.</li>
                  </ol>
                  <p className="mt-4 text-xs leading-[1.7]" style={{ color: "var(--hero-muted)" }}>
                    Your Stripe invoice is delivered directly to your email address. You can review the payment details before completing the transaction.
                  </p>
                </div>

                <div className="rounded-xl border p-4 sm:p-5" style={{ borderColor: "var(--feature-card-border)", backgroundColor: "rgba(0,0,0,0.3)" }}>
                  <h4 className="text-base font-bold" style={{ color: "var(--hero-heading)" }}>
                    Option B: Request a Stripe payment link
                  </h4>
                  <p className="mt-2 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                    If you prefer a simpler payment process, you can request a Stripe payment link instead.
                  </p>
                  <p className="mt-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                    The support team will share the link with you. Open it and follow the payment instructions to complete your transaction using an eligible credit or debit card, Apple Pay, Google Pay, or another supported payment option.
                  </p>
                  <p className="mt-4 text-xs leading-[1.7]" style={{ color: "var(--hero-muted)" }}>
                    Both options allow customers to complete their payments without using an automated checkout form on the Strong8K website.
                  </p>
                </div>
              </div>
            </article>

            {/* Step 6 */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{ background: "var(--grad-brand)" }}
                >
                  6
                </span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                  Share Your Payment Confirmation
                </h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  After completing your payment, share a screenshot of the payment confirmation with the support team through WhatsApp.
                </p>
                <p>
                  This helps the team identify and verify your transaction before activating your subscription.
                </p>
                <p>
                  If you paid through a Stripe invoice or payment link, keep your payment confirmation email for your records as well.
                </p>
              </div>
            </article>

            {/* Step 7 */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{ background: "var(--grad-brand)" }}
                >
                  7
                </span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                  Get Your Subscription Activated
                </h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  Once the payment has been verified, the support team will activate your selected subscription.
                </p>
                <p>
                  You will then receive the necessary subscription details and setup instructions to connect the service to your compatible device.
                </p>
                <p>
                  Follow the provided instructions to complete the setup and start using your subscription.
                </p>
              </div>
            </article>

            {/* Step 8 */}
            <article className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{ background: "var(--grad-brand)" }}
                >
                  8
                </span>
                <h3 className="text-lg font-bold" style={{ color: "var(--hero-heading)" }}>
                  Contact Support Whenever You Need Assistance
                </h3>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                <p>
                  The support process does not end after payment.
                </p>
                <p>
                  If you have questions about subscription activation, payment confirmation, installation, or other service-related matters, you can contact the team through WhatsApp or the official email address listed on the website ({siteConfig.email}).
                </p>
                <p>
                  This gives customers a direct way to ask for assistance instead of relying entirely on automated responses.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* Stripe Invoice vs Stripe Payment Link */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Stripe Invoice vs Stripe Payment Link: What Is the Difference?
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Customers sometimes confuse a Stripe invoice with a Stripe payment link. Both can be used to complete a payment, but they serve slightly different purposes.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--feature-card-border)" }}>
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--feature-card-border)", backgroundColor: "rgba(212,168,75,0.08)" }}>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Feature</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Stripe Invoice</th>
                  <th className="px-5 py-4 font-bold" style={{ color: "var(--hero-heading)" }}>Stripe Payment Link</th>
                </tr>
              </thead>
              <tbody>
                {STRIPE_COMPARISON.map(([feature, inv, link]) => (
                  <tr key={feature} style={{ borderBottom: "1px solid var(--feature-card-border)" }}>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--hero-heading)" }}>{feature}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{inv}</td>
                    <td className="px-5 py-4" style={{ color: "var(--hero-muted)" }}>{link}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-2xl border p-6 sm:p-7" style={cardStyle}>
            <h3 className="text-base font-bold sm:text-lg" style={{ color: "var(--hero-heading)" }}>
              Which option should you choose?
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[var(--hero-accent)]">•</span>
                <span>
                  <strong className="font-semibold text-white">Choose a Stripe invoice</strong> if you want a payment document delivered to your email address and prefer to keep it for your records.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[var(--hero-accent)]">•</span>
                <span>
                  <strong className="font-semibold text-white">Choose a Stripe payment link</strong> if you simply want to open a link and complete your payment using an eligible payment method.
                </span>
              </li>
            </ul>
            <p className="mt-4 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
              Both options are available upon request through the Strong8K support team.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Does Strong8K Use a WhatsApp-Based Payment Process? */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Why Does Strong8K Use a WhatsApp-Based Payment Process?
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              Not every business uses an automated payment form. Strong8K follows a direct communication approach that allows customers to discuss their requirements before purchasing.
            </p>
            <p>
              There are several practical benefits to this process:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {WHY_WHATSAPP_BENEFITS.map((item) => (
              <article key={item.title} className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
                <h3 className="text-base font-bold" style={{ color: "var(--hero-heading)" }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            The aim is to make the process straightforward while allowing customers to receive assistance at each stage.
          </p>
        </Container>
      </section>

      {/* Is It Safe to Pay for a Strong 8K IPTV Subscription? */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Is It Safe to Pay for a Strong 8K IPTV Subscription?
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              Before making any online payment, it is sensible to understand how the transaction works.
            </p>
            <p>
              If you choose Stripe, make sure you receive your invoice or payment link through the official communication channel and check the payment details before proceeding.
            </p>
            <p className="font-semibold" style={{ color: "var(--hero-heading)" }}>
              Here are some useful precautions:
            </p>
          </div>

          <div className="mt-6 rounded-2xl border p-6 sm:p-7" style={cardStyle}>
            <ul className="space-y-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
              {SAFETY_PRECAUTIONS.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span
                    className="mt-1 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--hero-accent)" }}
                  />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            <p>
              For bank transfers, PayPal, cryptocurrency, USDT, or Remitly, request the correct payment instructions directly from support and verify the recipient before sending money.
            </p>
            <p>
              A little care before completing a transaction can help prevent payment mistakes.
            </p>
          </div>
        </Container>
      </section>

      {/* Strong8K Payment Process at a Glance */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Strong8K Payment Process at a Glance
            </h2>
          </FadeIn>
          <p className="mt-6 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
            Here is the complete process from your first enquiry to subscription activation:
          </p>

          <div className="mt-8 rounded-2xl border p-6 sm:p-8" style={cardStyle}>
            <div className="flex flex-wrap items-center justify-center gap-2 text-center text-sm font-semibold">
              {PROCESS_FLOW_STEPS.map((step, idx) => (
                <span key={step} className="inline-flex items-center gap-2">
                  <span
                    className="rounded-lg px-3 py-1.5"
                    style={{
                      backgroundColor: "rgba(212,168,75,0.1)",
                      color: "var(--hero-heading)",
                      border: "1px solid var(--feature-card-border)",
                    }}
                  >
                    {step}
                  </span>
                  {idx < PROCESS_FLOW_STEPS.length - 1 && (
                    <span className="text-[var(--hero-accent)] font-bold">→</span>
                  )}
                </span>
              ))}
            </div>

            <p className="mt-6 text-center text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
              You do not need to navigate an automated checkout system. The support team guides you through the process and helps you complete your subscription.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative isolate overflow-hidden py-14 md:py-20" style={{ backgroundColor: "var(--hero-base)" }}>
        <Container className="relative z-10 max-w-4xl">
          <FadeIn delay={0.05}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]" style={{ color: "var(--hero-heading)" }}>
              Frequently Asked Questions About Strong8K Invoices and Payments
            </h2>
          </FadeIn>
          <div className="mt-8 space-y-3">
            {FAQS.map((faq) => (
              <article key={faq.q} className="rounded-2xl border p-5 sm:p-6" style={cardStyle}>
                <h3 className="text-base font-bold sm:text-[17px]" style={{ color: "var(--hero-heading)" }}>
                  {faq.q}
                </h3>
                <p className="mt-3 text-sm leading-[1.8]" style={{ color: "var(--hero-muted)" }}>
                  {faq.a}
                </p>
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
              Ready to Get Started With Strong 8K IPTV?
            </h2>
            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-sm leading-[1.85] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
              <p>
                Getting a subscription does not have to be complicated. Whether you want to receive a Stripe invoice, use a secure payment link, or choose another available payment method, Strong8K provides direct assistance throughout the process.
              </p>
              <p>
                You can first request a free trial, explore the service, and choose a subscription that suits your requirements. Once you are ready, contact the team through WhatsApp to receive payment instructions and complete your order.
              </p>
              <p>
                Have a question about invoices or payment options? Contact the Strong8K team and get guidance before purchasing your subscription.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={routes.subscriptionPlans} className={buttonClass} style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}>
                View Subscription Plans
              </Link>
              <Link
                href={enquiryWhatsApp("free-trial")}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
                style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}
              >
                Request a Free Trial
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
