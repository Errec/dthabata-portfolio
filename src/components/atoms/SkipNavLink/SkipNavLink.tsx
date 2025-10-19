import type { AnchorHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

type SkipNavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  targetId?: string;
};

const SkipNavLink = ({ targetId = "main-content", className, children, ...props }: SkipNavLinkProps) => (
  <a
    {...props}
    href={`#${targetId}`}
    className={cn(
      "sr-only inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
      className,
    )}
  >
    {children ?? "Pular para o conteúdo principal"}
  </a>
);

export default SkipNavLink;
