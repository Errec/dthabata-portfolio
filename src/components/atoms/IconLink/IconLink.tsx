"use client";

import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/utils/cn";

type IconLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
  className?: string;
  variant?: "animated" | "static";
  accentColor?: string;
};

const baseClasses =
  "social-icon group relative flex size-10 items-center justify-center overflow-hidden rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-primary";

const IconLink = ({
  href,
  label,
  icon,
  className,
  variant = "animated",
  accentColor,
}: IconLinkProps) => (
  <Link
    href={href}
    target={href.startsWith("#") ? undefined : "_blank"}
    rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
    aria-label={label}
    data-variant={variant}
    style={accentColor ? ({ "--icon-accent": accentColor } as CSSProperties) : undefined}
    className={cn(baseClasses, className)}
  >
    <span className="social-icon__inner">{icon}</span>
  </Link>
);

export default IconLink;
