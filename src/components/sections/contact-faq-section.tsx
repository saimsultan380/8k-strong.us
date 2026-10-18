import Link from "next/link";
import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";
import { routes } from "@/lib/routes";

const CONTACT_FAQS: FaqItem[] = [
  {
    id: "before",
    q: "Can I ask before ordering?",
    a: "Yes. Contact us about your device, preferred content, connections, or trial availability.",
  },
  {
    id: "trial-duration",
    q: "Is the trial always 24 hours?",
    a: "Support confirms the available trial duration and start time when arranging access.",
  },
  {
    id: "activation",
    q: "How quickly will my account be activated?",
    a: "We confirm activation timing with your trial or paid order.",
  },
  {
    id: "player",
    q: "Can you help with another player?",
    a: "Send the app name and device model so we can check its account requirements.",
  },
  {
    id: "login-not-arrived",
    q: "What if my login information has not arrived?",
    a: "Check the contact details used for the order and your email spam folder. Send support your order reference.",
  },
  {
    id: "whatsapp-us",
    q: "Can US customers use the WhatsApp number?",
    a: "Use the published WhatsApp link and retain the complete international number, including the +1 country code.",
  },
];

export function ContactFaqSection() {
  return (
    <FaqAccordionSection
      faqs={CONTACT_FAQS}
      defaultOpenId="before"
      eyebrow="FAQ"
      description=""
      title={<>Answers to Common Questions About Contacting Our Team</>}
    />
  );
}
