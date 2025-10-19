"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState, type CSSProperties } from "react";

import { cn } from "@/utils/cn";

type IconLinkProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
  accentColor?: string;
};

type RGB = {
  r: number;
  g: number;
  b: number;
};

const hexToRgb = (hex: string): RGB | null => {
  const normalized = hex.replace("#", "");

  if (normalized.length === 3) {
    const [r, g, b] = normalized.split("");
    return {
      r: parseInt(r + r, 16),
      g: parseInt(g + g, 16),
      b: parseInt(b + b, 16),
    };
  }

  if (normalized.length === 6) {
    return {
      r: parseInt(normalized.slice(0, 2), 16),
      g: parseInt(normalized.slice(2, 4), 16),
      b: parseInt(normalized.slice(4, 6), 16),
    };
  }

  return null;
};

const mixWithWhite = (color: RGB, amount: number): RGB => ({
  r: Math.round(color.r + (255 - color.r) * amount),
  g: Math.round(color.g + (255 - color.g) * amount),
  b: Math.round(color.b + (255 - color.b) * amount),
});

const toRgba = (color: RGB, alpha: number) => `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;

const createWatercolorLayers = (accent?: string) => {
  if (!accent) {
    return null;
  }

  const rgb = hexToRgb(accent);

  if (!rgb) {
    return null;
  }

  const tint20 = mixWithWhite(rgb, 0.2);
  const tint45 = mixWithWhite(rgb, 0.45);
  const tint65 = mixWithWhite(rgb, 0.65);

  return {
    accentVariable: { "--icon-accent": accent } as CSSProperties,
    splash: {
      backgroundImage: [
        `radial-gradient(circle at 22% 28%, ${toRgba(tint45, 0.55)} 0%, ${toRgba(tint45, 0)} 58%)`,
        `radial-gradient(circle at 78% 32%, ${toRgba(tint65, 0.5)} 0%, ${toRgba(tint65, 0)} 62%)`,
        `radial-gradient(circle at 48% 78%, ${toRgba(rgb, 0.48)} 0%, ${toRgba(rgb, 0)} 66%)`,
      ].join(", "),
    } satisfies CSSProperties,
    halo: {
      backgroundImage: `radial-gradient(circle at center, ${toRgba(tint20, 0.55)} 0%, ${toRgba(tint45, 0.18)} 38%, ${toRgba(tint45, 0)} 72%)`,
    } satisfies CSSProperties,
  };
};

const watercolorVariants = {
  initial: { scale: 0.45, opacity: 0 },
  hover: {
    scale: [0.45, 1.05, 1.45],
    opacity: [0, 0.5, 0],
    transition: { duration: 0.9, times: [0, 0.48, 1], ease: "easeOut" },
  },
};

const haloVariants = {
  initial: { scale: 0.75, opacity: 0 },
  hover: {
    scale: [0.75, 1.35, 1.75],
    opacity: [0, 0.25, 0],
    transition: { duration: 1.05, times: [0, 0.52, 1], ease: "easeOut" },
  },
};

const IconLink = ({ href, label, icon, className, accentColor }: IconLinkProps) => {
  const [isInteracting, setIsInteracting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const watercolorStyles = useMemo(() => createWatercolorLayers(accentColor), [accentColor]);

  const animationState = prefersReducedMotion ? "initial" : isInteracting ? "hover" : "initial";

  return (
    <Link
      href={href}
      target={href.startsWith("#") ? undefined : "_blank"}
      rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
      aria-label={label}
      className={cn(
        "group/icon relative isolate flex size-11 items-center justify-center overflow-visible rounded-2xl border border-border/40 bg-background/70 text-muted-foreground shadow-[0_12px_35px_-18px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-20px_rgba(15,23,42,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-primary",
        className,
      )}
      style={watercolorStyles?.accentVariable}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocus={() => setIsInteracting(true)}
      onBlur={() => setIsInteracting(false)}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-white/70 transition group-hover/icon:bg-white"
      />
      {watercolorStyles ? (
        <>
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-20 rounded-[inherit] blur-2xl mix-blend-screen"
            style={watercolorStyles.splash}
            variants={watercolorVariants}
            initial="initial"
            animate={animationState}
          />
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-30 rounded-[inherit]"
            style={watercolorStyles.halo}
            variants={haloVariants}
            initial="initial"
            animate={animationState}
          />
        </>
      ) : null}
      <motion.span
        className="relative z-10"
        animate={{ scale: prefersReducedMotion ? 1 : isInteracting ? 1.1 : 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        {icon}
      </motion.span>
    </Link>
  );
};

export default IconLink;
