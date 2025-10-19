"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/utils/cn";

type IconLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
  className?: string;
};

const baseClasses =
  "social-mask-icon group relative flex size-10 items-center justify-center overflow-hidden rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-primary";

const IconLink = ({ href, label, icon, className }: IconLinkProps) => (
  <Link
    href={href}
    target={href.startsWith("#") ? undefined : "_blank"}
    rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
    aria-label={label}
    className={cn(baseClasses, className)}
  >
    <span className="social-mask-icon__inner">{icon}</span>
  </Link>
);

export default IconLink;
