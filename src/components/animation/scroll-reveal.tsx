"use client";

import { useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { useCallback, useState } from "react";
import {
  cardRevealVariants,
  createScrollRevealVariants,
  getMotionComponent,
  motionViewport,
  type ScrollRevealVariant,
} from "@/lib/motion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  variant?: ScrollRevealVariant;
  as?: "div" | "article" | "li" | "p" | "section" | "details";
  style?: CSSProperties;
  /** @deprecated Kept for call-site compatibility — viewport is always once. */
  once?: boolean;
  /**
   * @deprecated Legacy directional slide.
   * When set (without an explicit variant), uses the card blur-reveal preset
   * so existing card grids keep Strong 8k card timings (y 20 / blur 10 / 0.56s).
   */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** @deprecated Duration comes from the variant preset. */
  duration?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y,
  variant,
  as = "div",
  style,
  direction,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;
  const useCardPreset = direction != null && variant == null;
  const variants = useCardPreset
    ? cardRevealVariants
    : createScrollRevealVariants(variant ?? "text", y);
  const [settled, setSettled] = useState(false);

  const handleComplete = useCallback(() => {
    setSettled(true);
  }, []);

  if (reduceMotion) {
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  const MotionTag = getMotionComponent(as);

  return (
    <MotionTag
      className={`s8k-motion-reveal${settled ? " motion-settled" : ""}${className ? ` ${className}` : ""}`}
      style={style}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      variants={variants}
      onAnimationComplete={handleComplete}
    >
      {children}
    </MotionTag>
  );
}
