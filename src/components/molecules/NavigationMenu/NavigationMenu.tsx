import Link from "next/link";

import { cn } from "@/utils/cn";
import type { NavigationLink } from "@/types/navigation.types";

type NavigationMenuProps = {
  links: NavigationLink[];
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
};

const orientationClassName: Record<NonNullable<NavigationMenuProps["orientation"]>, string> = {
  horizontal: "flex-row items-center gap-[36px]",
  vertical: "flex-col items-start gap-3",
};

const NavigationMenu = ({ links, orientation = "horizontal", onNavigate }: NavigationMenuProps) => (
  <nav aria-label="Navegação principal">
    <ul className={cn("flex", orientationClassName[orientation])}>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            onClick={onNavigate}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavigationMenu;
