"use client";

import { FormEvent, useEffect, useState } from "react";
import { MessageCircle, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { siteConfig, whatsappUrl, whatsappUrlWithText } from "@/lib/site";

const ENQUIRY_TYPES = [
  "Free trial",
  "Subscription",
  "Renewal",
  "Installation",
  "Playback",
  "Content request",
  "Reseller pricing",
  "Refund",
];

const DEVICES = [
  "Firestick / Fire TV",
  "Android TV / Android Phone",
  "iPhone / iPad",
  "Samsung Smart TV",
  "LG Smart TV",
  "Windows PC",
  "Mac",
  "MAG Box",
  "Other",
];

const inputClass =
  "w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--hero-accent)]";
const inputStyle = {
  borderColor: "var(--feature-card-border)",
  color: "var(--hero-heading)",
} as const;

export function ContactMethodsForm() {
  const [submitted, setSubmitted] = useState(false);
  const [replyError, setReplyError] = useState(false);
  const [planNote, setPlanNote] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    const connections = params.get("connections");
    if (plan || connections) {
      setPlanNote(
        [plan ? `Plan: ${plan}` : "", connections ? `Connections: ${connections}` : ""]
          .filter(Boolean)
          .join(", "),
      );
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const whatsapp = String(data.get("whatsapp") || "").trim();
    const device = String(data.get("device") || "").trim();
    const enquiry = String(data.get("enquiry") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!email && !whatsapp) {
      setReplyError(true);
      return;
    }
    setReplyError(false);

    const text = [
      "Strong8k USA Contact Form",
      `Name: ${name}`,
      `Email: ${email || "Not provided"}`,
      `WhatsApp: ${whatsapp || "Not provided"}`,
      `Device: ${device}`,
      `Inquiry: ${enquiry}`,
      planNote ? `Selected: ${planNote}` : "",
      `Message: ${message}`,
    ].join("\n");

    window.open(whatsappUrlWithText(text), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden py-12 md:py-16"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Get in Touch
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-3 max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[36px]"
            style={{ color: "var(--hero-heading)" }}
          >
            Send Your Inquiry With the Relevant Account Details
          </h2>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <ScrollReveal direction="up" delay={0.05} once>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col rounded-2xl border p-5 transition-colors hover:border-[var(--hero-accent)] sm:p-6"
              style={{
                borderColor: "var(--feature-card-border)",
                backgroundColor: "transparent",
              }}
            >
              <MessageCircle
                className="h-5 w-5"
                style={{ color: "var(--hero-accent)" }}
                strokeWidth={1.75}
              />
              <p className="mt-4 text-base font-bold" style={{ color: "var(--hero-heading)" }}>
                WhatsApp
              </p>
              <p className="mt-2 text-sm leading-[1.7]" style={{ color: "var(--feature-body)" }}>
                WhatsApp: {siteConfig.phone}. Customer support is available 24/7.
              </p>
            </a>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1} once>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex h-full flex-col rounded-2xl border p-5 transition-colors hover:border-[var(--hero-accent)] sm:p-6"
              style={{
                borderColor: "var(--feature-card-border)",
                backgroundColor: "transparent",
              }}
            >
              <Mail
                className="h-5 w-5"
                style={{ color: "var(--hero-accent)" }}
                strokeWidth={1.75}
              />
              <p className="mt-4 text-base font-bold" style={{ color: "var(--hero-heading)" }}>
                Email
              </p>
              <p className="mt-2 text-sm leading-[1.7]" style={{ color: "var(--feature-body)" }}>
                Email: {siteConfig.email}. Leave out your account password.
              </p>
            </a>
          </ScrollReveal>
        </div>

        <div className="mt-6 space-y-2 text-sm leading-[1.7]" style={{ color: "var(--hero-muted)" }}>
          <p>
            For renewal inquiries, include the existing account reference and the duration and connections you want.
          </p>
          <p>
            For refund requests, identify the account concerned and review the applicable seven-day window.{" "}
            <a
              href="/pricing#refund-policy"
              className="font-semibold underline transition-colors hover:text-[var(--hero-accent)]"
              style={{ color: "var(--hero-heading)" }}
            >
              Read the Refund Policy
            </a>
          </p>
        </div>

        <FadeIn delay={0.15}>
          <h2
            className="mt-10 text-2xl font-bold leading-tight tracking-tight sm:text-3xl"
            style={{ color: "var(--hero-heading)" }}
          >
            Your Message
          </h2>
          <p className="mt-3 text-sm leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
            Include the information relevant to your inquiry. Leave out your account password.
          </p>
        </FadeIn>

        <ScrollReveal direction="up" delay={0.1} once>
          <form
            onSubmit={handleSubmit}
            className="mt-6 rounded-2xl border p-5 sm:p-7 md:p-8"
            style={{
              borderColor: "var(--feature-card-border)",
              backgroundColor: "transparent",
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--hero-muted)" }}>
                  Name
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClass}
                  style={inputStyle}
                />
              </label>

              <label className="block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--hero-muted)" }}>
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@strong8k.com"
                  className={inputClass}
                  style={inputStyle}
                />
              </label>

              <label className="block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--hero-muted)" }}>
                  WhatsApp Number
                </span>
                <input
                  name="whatsapp"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+44 7xxx xxx xxx"
                  className={inputClass}
                  style={inputStyle}
                />
              </label>

              <label className="block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--hero-muted)" }}>
                  Device and player
                </span>
                <select
                  name="device"
                  required
                  defaultValue=""
                  className={inputClass}
                  style={inputStyle}
                >
                  <option value="" disabled>
                    Select your device
                  </option>
                  {DEVICES.map((device) => (
                    <option key={device} value={device} style={{ color: "#000" }}>
                      {device}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-4 block space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--hero-muted)" }}>
                Inquiry type
              </span>
              <select
                name="enquiry"
                required
                defaultValue=""
                className={inputClass}
                style={inputStyle}
              >
                <option value="" disabled>
                  Select an inquiry type
                </option>
                {ENQUIRY_TYPES.map((type) => (
                  <option key={type} value={type} style={{ color: "#000" }}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-4 block space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--hero-muted)" }}>
                Message
              </span>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Free trial, subscription, renewal, installation, playback, content request, reseller pricing, refund"
                className={`${inputClass} resize-y`}
                style={inputStyle}
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center rounded-xl px-7 py-3.5 text-sm font-bold transition-all duration-200 hover:brightness-110 sm:text-[15px]"
                style={{
                  background: "var(--hero-cta-primary-bg)",
                  boxShadow: "var(--hero-cta-primary-shadow)",
                  color: "var(--hero-cta-primary-fg)",
                }}
              >
                Open My Inquiry in WhatsApp
              </button>
              {submitted ? (
                <p className="text-sm" style={{ color: "var(--hero-accent)" }}>
                  Your inquiry is ready in WhatsApp. Send it there to reach the team.
                </p>
              ) : null}
              {replyError ? (
                <p className="text-sm" style={{ color: "var(--hero-accent)" }}>
                  Add an email address or a WhatsApp number so we can reply.
                </p>
              ) : null}
            </div>
            {planNote ? (
              <p className="mt-4 text-sm" style={{ color: "var(--hero-heading)" }}>
                This inquiry includes {planNote}.
              </p>
            ) : null}
            <p className="mt-4 text-xs leading-[1.7]" style={{ color: "var(--hero-muted)" }}>
              This form prepares your message and opens WhatsApp. Review the details there before sending them to support.
            </p>
          </form>
        </ScrollReveal>
      </Container>
    </section>
  );
}
