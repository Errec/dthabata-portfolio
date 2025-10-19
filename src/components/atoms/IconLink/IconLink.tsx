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
  wash: {
    background:
      "radial-gradient(120% 110% at 50% 35%, rgba(56, 189, 248, 0.35) 0%, rgba(56, 189, 248, 0) 70%)",
  } as const,
  droplet: {
    background:
      "radial-gradient(130% 125% at 25% 75%, rgba(244, 114, 182, 0.28) 0%, rgba(244, 114, 182, 0) 75%)",
  } as const,
  halo: {
    background:
      "radial-gradient(90% 90% at 50% 50%, rgba(59, 130, 246, 0.25) 0%, rgba(59, 130, 246, 0) 80%)",
  } as const,
};

const washVariants: Variants = {
  initial: {
    scale: 0.7,
    opacity: 0,
    rotate: -6,
  },
  hover: {
    scale: [0.7, 1.2, 1],
    opacity: [0, 0.45, 0.25],
    rotate: [-6, 4, 0],
    transition: {
      duration: 0.7,
      times: [0, 0.7, 1],
      ease: "easeOut",
    },
  },
};

const dropletVariants: Variants = {
  initial: {
    scale: 0.4,
    opacity: 0,
    rotate: 10,
  },
  hover: {
    scale: [0.4, 0.95, 0.75],
    opacity: [0, 0.5, 0.3],
    rotate: [10, -6, 0],
    transition: {
      duration: 0.6,
      times: [0, 0.55, 1],
      ease: "easeOut",
      delay: 0.05,
    },
  },
};

const haloVariants: Variants = {
  initial: { opacity: 0, scale: 0.75 },
  hover: {
    opacity: [0, 0.45, 0.2],
    scale: [0.75, 1.15, 1],
    transition: {
      duration: 0.65,
      times: [0, 0.65, 1],
      ease: "easeOut",
      delay: 0.08,
    },
  },
};

const rippleVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: [0, 0.25, 0],
    scale: [0.8, 1.3, 1.05],
    transition: {
      duration: 0.55,
      times: [0, 0.7, 1],
      ease: "easeOut",
    },
  },
};

const iconVariants: Variants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: [1, 1.08, 1],
    y: [0, -2, 0],
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
        className="pointer-events-none absolute inset-[-30%] -z-30 rounded-full blur-3xl mix-blend-screen"
        style={watercolorStyles.halo}
        variants={haloVariants}
        initial="initial"
        animate={animateState}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 rounded-[inherit] mix-blend-screen"
        style={watercolorStyles.wash}
        variants={washVariants}
        initial="initial"
        animate={animateState}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-[-20%] -z-10 rounded-[inherit] mix-blend-screen"
        style={watercolorStyles.droplet}
        variants={dropletVariants}
        initial="initial"
        animate={animateState}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 rounded-full border border-primary/20"
        variants={rippleVariants}
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
