"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { RevealParts } from "@/components/animation/reveal-parts";
import { DEVICE_GUIDES, type DeviceGuide } from "@/data/device-guides";
import { routes } from "@/lib/routes";

const DEVICES = DEVICE_GUIDES;

function GuideBody({ device }: { device: DeviceGuide }) {
  return (
    <div className="space-y-6">
      <RevealParts>
      {device.intro ? (
        <p className="text-[15px] leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
          {device.intro}
        </p>
      ) : null}

      {device.steps ? (
        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {device.steps.map((step, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-xl border bg-transparent p-4 text-sm leading-[1.7] sm:text-[15px]"
              style={{
                borderColor: "rgba(212, 168, 75, 0.45)",
                color: "var(--feature-body)",
              }}
            >
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--hero-accent) 18%, transparent)",
                  color: "var(--hero-accent)",
                }}
              >
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      ) : null}

      {device.alternative ? (
        <p className="text-sm leading-[1.75] sm:text-[15px]" style={{ color: "var(--hero-muted)" }}>
          {device.alternative}
        </p>
      ) : null}

      {device.note ? (
        <p
          className="rounded-xl border px-4 py-3 text-sm leading-[1.7]"
          style={{
            borderColor: "var(--feature-card-border)",
            color: "var(--hero-muted)",
            backgroundColor: "transparent",
          }}
        >
          <span className="font-semibold" style={{ color: "var(--hero-heading)" }}>
            Note:{" "}
          </span>
          {device.note}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <a
          href="#choose-device"
          className="inline-flex items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold"
          style={{ borderColor: "var(--hero-btn-border)", color: "var(--hero-heading)" }}
        >
          Change Device
        </a>
        <Link
          href={`${routes.contactUs}?enquiry=installation`}
          className="inline-flex items-center justify-center rounded-xl bg-gradient-brand px-4 py-3 text-sm font-bold text-black"
        >
          {device.helpLabel}
        </Link>
      </div>
      </RevealParts>
    </div>
  );
}

export function InstallationDeviceSelector() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(DEVICES[0].id);
  const active = DEVICES.find((device) => device.id === activeId) ?? DEVICES[0];

  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.replace("#", "");
      if (DEVICES.some((device) => device.id === id)) setActiveId(id);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  function selectDevice(id: string) {
    setActiveId(id);
    const next = `${window.location.pathname}${window.location.search}#${id}`;
    window.history.replaceState(null, "", next);
  }

  return (
    <section
      id="choose-device"
      className="relative isolate overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Container className="relative z-10">
        <FadeIn delay={0.05}>
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--hero-accent)" }}
          >
            Choose your device
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
            style={{ color: "var(--hero-heading)" }}
          >
            Choose Your Device for Strong 8k Setup Instructions
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.75]" style={{ color: "var(--hero-muted)" }}>
            Select the box that matches your device. Your recommended apps and installation steps will appear below.
          </p>
        </FadeIn>

        <div className="mt-10 flex flex-wrap gap-2 sm:gap-3" role="tablist" aria-label="Device guides">
          {DEVICES.map((device) => {
            const Icon = device.Icon;
            const selected = device.id === active.id;
            return (
              <motion.button
                key={device.id}
                type="button"
                role="tab"
                id={`tab-${device.id}`}
                aria-selected={selected}
                aria-controls="device-guide-panel"
                onClick={() => selectDevice(device.id)}
                whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                className={`${selected ? "btn-shine" : ""} inline-flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors duration-200`}
                style={
                  selected
                    ? {
                        background: "var(--grad-brand)",
                        color: "#000000",
                        boxShadow: "var(--hero-cta-primary-shadow)",
                      }
                    : {
                        backgroundColor: "var(--feature-card-bg)",
                        color: "var(--hero-heading)",
                        boxShadow: "var(--glass-shadow)",
                      }
                }
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
                <span className="hidden sm:inline">{device.label}</span>
                <span className="sm:hidden">{device.shortLabel}</span>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={active.id}
            id="device-guide-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="mt-8 scroll-mt-28 rounded-2xl border p-6 sm:p-8 md:p-10"
            style={{
              borderColor: "var(--feature-card-border)",
              backgroundColor: "var(--feature-card-bg)",
            }}
            initial={reduceMotion ? false : { opacity: 0, y: 14, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8, filter: "blur(6px)" }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[34px]"
              style={{ color: "var(--hero-heading)" }}
            >
              {active.title}
            </h2>
            <div className="mt-6">
              <GuideBody device={active} />
            </div>
          </motion.article>
        </AnimatePresence>
      </Container>
    </section>
  );
}
