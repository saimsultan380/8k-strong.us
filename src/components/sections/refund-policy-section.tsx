import Link from "next/link";
import { Container } from "@/components/layout/container";
import { enquiryWhatsApp } from "@/lib/site";
import { FadeIn } from "@/components/animation/fade-in";
import { RevealParts } from "@/components/animation/reveal-parts";

export function RefundPolicySection() {
  return (
    <section
      id="refund-policy"
      className="relative isolate overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <h2
            className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--hero-heading)" }}
          >
            Read the Strong 8k Refund Policy Before Ordering
          </h2>
        </FadeIn>
        <div
          className="mt-8 rounded-2xl border p-6 sm:p-8 md:p-10"
          style={{
            backgroundColor: "var(--feature-card-bg)",
            borderColor: "var(--feature-card-border)",
            boxShadow: "var(--feature-card-shadow)",
          }}
        >
          <div
            className="max-w-3xl space-y-5 text-sm leading-[1.8] sm:text-[15px]"
            style={{ color: "var(--hero-muted)" }}
          >
            <RevealParts>
            <p>
              You can request a refund within seven days of activation of your paid
              subscription if you change your mind or are dissatisfied with the service.
            </p>
            <p>To request a refund, contact support and provide:</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {["Your order reference.", "The account covered by your request.", "Your device and player details.", "A brief explanation of your request."].map((item) => (
                <li key={item} className="rounded-xl border bg-transparent px-4 py-3" style={{ borderColor: "rgba(212, 168, 75, 0.45)" }}>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Where an order contains multiple accounts, identify which account or
              accounts the request concerns so we can confirm the applicable refund amount.
            </p>
            <p>
              The seven-day refund period ends after that window. Technical support
              remains available throughout your active subscription.
            </p>
            <p>
              Reseller credit purchases follow separate wholesale terms, which should
              be confirmed before purchasing credits.
            </p>
            <p>This policy does not affect your statutory rights.</p>
            <Link
              href={enquiryWhatsApp("refund")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-brand px-6 py-3.5 text-[13px] font-bold text-black"
              style={{ boxShadow: "var(--hero-cta-primary-shadow)" }}
            >
              Contact Support About a Refund
            </Link>
            </RevealParts>
          </div>
        </div>
      </Container>
    </section>
  );
}
