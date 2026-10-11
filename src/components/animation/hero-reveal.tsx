"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type CSSProperties, type ReactNode } from "react";
import {
  createScrollRevealVariants,
  heroRevealAnimate,
  heroRevealDuration,
  heroRevealInitial,
  motionEase,
  type ScrollRevealVariant,
} from "@/lib/motion";
import { useMeshReady } from "@/lib/mesh-ready";

type HeroRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: ScrollRevealVariant;
  style?: CSSProperties;
};

/**
 * Hero mount blur-reveal (not scroll). Duration 0.72s; cta uses 0.52s.
 */
export function HeroReveal({
  children,
  className,
  delay = 0,
  variant = "text",
  style,
}: HeroRevealProps) {
  const reduceMotion = useReducedMotion();
  const meshReady = useMeshReady();
  const [settled, setSettled] = useState(false);
  const preset = createScrollRevealVariants(variant);
  const initial = variant === "text" ? heroRevealInitial : preset.hidden;
  const duration =
    variant === "logo" || variant === "logoHero"
      ? preset.visible(0).transition.duration
      : variant === "cta"
        ? 0.52
        : heroRevealDuration;
  const shown =
    variant === "logo" || variant === "logoHero"
      ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
      : heroRevealAnimate;

  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`telvis-motion-reveal${settled ? " motion-settled" : ""}${className ? ` ${className}` : ""}`}
      style={style}
      initial={initial}
      animate={meshReady ? shown : initial}
      transition={{
        duration,
        delay,
        ease: motionEase,
      }}
      onAnimationComplete={() => {
        if (meshReady) setSettled(true);
      }}
    >
      {children}
    </motion.div>
  );
}
