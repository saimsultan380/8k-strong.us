"use client";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { RevealParts } from "@/components/animation/reveal-parts";

const METHODS = [
  "A server URL, username, and password.",
  "A complete M3U playlist link.",
  "A device ID, MAC address, or key for account linking.",
];

export function InstallationBeforeStart() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--hero-base)" }}>
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl" style={{ color: "var(--hero-heading)" }}>
            Prepare Your Device and Account Before Starting Installation
          </h2>
        </FadeIn>
        <div className="mt-6 max-w-3xl space-y-4 text-sm leading-[1.8] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
          <RevealParts>
            <p>Have your device make and model, an internet connection, and an active trial or subscription ready.</p>
            <p>Depending on the player, your setup may use:</p>
          </RevealParts>
        </div>
        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {METHODS.map((item) => (
            <li
              key={item}
              className="rounded-2xl border bg-transparent p-5 text-sm leading-[1.7]"
              style={{ borderColor: "rgba(212, 168, 75, 0.45)", color: "var(--hero-muted)" }}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 max-w-3xl space-y-4 text-sm leading-[1.8] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
          <RevealParts>
            <p>Some third-party players charge separately for a license or premium features.</p>
            <p>Tell support about any player already installed so we can check the appropriate account method.</p>
          </RevealParts>
        </div>
      </Container>
    </section>
  );
}
