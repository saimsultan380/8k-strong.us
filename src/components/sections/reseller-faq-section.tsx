import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const RESELLER_FAQS: FaqItem[] = [
  {
    id: "minimum",
    q: "What is the minimum purchase?",
    a: "120 credits are required to create the dashboard.",
  },
  {
    id: "cost",
    q: "How much do credits cost?",
    a: "Contact support for the current quote.",
  },
  {
    id: "capacity",
    q: "How many accounts can 120 credits create?",
    a: "That depends on durations, connections, and confirmed credit deductions.",
  },
  {
    id: "branding",
    q: "Can I use my own brand and domain?",
    a: "Ask support to confirm the available branding elements and domain configuration.",
  },
  {
    id: "trials",
    q: "Can I create trials?",
    a: "Confirm the panel’s current trial functions and allowances during onboarding.",
  },
  {
    id: "expire",
    q: "Do unused credits expire?",
    a: "The applicable usage and expiry conditions are confirmed before purchase.",
  },
  {
    id: "refund",
    q: "Does the seven-day viewing refund policy cover credits?",
    a: "Reseller purchases have separate wholesale terms.",
  },
];

export function ResellerFaqSection() {
  return (
    <FaqAccordionSection
      faqs={RESELLER_FAQS}
      defaultOpenId="minimum"
      eyebrow="FAQ"
      description=""
      title={<>Answers to Common Strong 8k Reseller Panel Questions</>}
    />
  );
}
