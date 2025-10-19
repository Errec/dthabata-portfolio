import Link from "next/link";

import { cn } from "@/utils/cn";

type IconLinkProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
};

const IconLink = ({ href, label, icon, className }: IconLinkProps) => (
  <Link
    href={href}
    target={href.startsWith("#") ? undefined : "_blank"}
    rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
    aria-label={label}
    className={cn(
      "flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-primary",
      className,
    )}
  >
    {icon}
  </Link>
);

export default IconLink;
