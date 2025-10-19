"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/utils/cn";

type IconLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
  className?: string;
};

const baseClasses =
  "group relative flex size-10 items-center justify-center overflow-hidden rounded-full text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-primary";

const watercolorStyles = {
  splash: {
    background:
      "radial-gradient(120% 120% at 50% 15%, rgba(56, 189, 248, 0.35) 0%, rgba(56, 189, 248, 0) 65%)",
  } as const,
  glow: {
    background:
      "radial-gradient(90% 120% at 50% 50%, rgba(59, 130, 246, 0.25) 0%, rgba(59, 130, 246, 0) 70%)",
  } as const,
};

const watercolorVariants: Variants = {
  initial: {
    scale: 0.85,
    opacity: 0.15,
  },
  hover: {
    scale: [0.85, 1.05, 1],
    opacity: [0.15, 0.45, 0.3],
    transition: {
      duration: 0.75,
      times: [0, 0.65, 1],
      ease: "easeInOut",
    },
  },
};

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.85 },
  hover: {
    opacity: [0, 0.45, 0.25],
    scale: [0.85, 1.1, 1.02],
    transition: {
      duration: 0.65,
      times: [0, 0.7, 1],
      ease: "easeOut",
    },
  },
};

const iconVariants: Variants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: [1, 1.05, 1],
    y: [0, -1.5, 0],
    transition: {
      duration: 0.45,
      times: [0, 0.6, 1],
      ease: "easeOut",
    },
  },
};

const IconLink = ({ href, label, icon, className }: IconLinkProps) => {
  const [animationState, setAnimationState] = useState<"initial" | "hover">("initial");
  const shouldReduceMotion = useReducedMotion();

  const handleActivate = () => {
    if (!shouldReduceMotion) {
      setAnimationState("hover");
    }
  };

  const handleDeactivate = () => {
    if (!shouldReduceMotion) {
      setAnimationState("initial");
    }
  };

  const animateState = shouldReduceMotion ? "initial" : animationState;

  return (
    <Link
      href={href}
      target={href.startsWith("#") ? undefined : "_blank"}
      rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
      aria-label={label}
      className={cn(baseClasses, className)}
      onPointerEnter={handleActivate}
      onPointerLeave={handleDeactivate}
      onFocus={handleActivate}
      onBlur={handleDeactivate}
    >
      <span className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] bg-background/60" aria-hidden />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 rounded-[inherit] blur-2xl mix-blend-screen"
        style={watercolorStyles.splash}
        variants={watercolorVariants}
        initial="initial"
        animate={animateState}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-[-40%] -z-30 rounded-full"
        style={watercolorStyles.glow}
        variants={glowVariants}
        initial="initial"
        animate={animateState}
      />
      <motion.span
        className="relative z-10 flex size-full items-center justify-center"
        variants={iconVariants}
        initial="initial"
        animate={animateState}
      >
        {icon}
      </motion.span>
    </Link>
  );
};

export default IconLink;
