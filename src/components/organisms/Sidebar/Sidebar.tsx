"use client";

import IconLink from "@/components/atoms/IconLink";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/atoms/Tooltip";
import { SOCIAL_LINKS } from "@/constants/social-links";

const Sidebar = () => (
  <>
    <TooltipProvider delayDuration={100}>
      <aside className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 rounded-r-md border border-l-0 border-border bg-background/90 p-3 shadow-sm backdrop-blur-md lg:flex">
        <nav aria-label="Redes sociais" className="flex flex-col items-center">
          <ul className="flex flex-col items-center gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <IconLink
                        href={link.href}
                        label={link.label}
                        icon={<Icon aria-hidden className="size-5" />}
                        variant="animated"
                        accentColor={link.accentColor}
                      />
                    </TooltipTrigger>
                    <TooltipContent side="right">{link.label}</TooltipContent>
                  </Tooltip>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </TooltipProvider>

    <div className="mobile-social-links fixed inset-x-0 bottom-0 z-40 flex justify-center gap-3 border-t border-border bg-background/95 p-3 backdrop-blur-md lg:hidden">
      {SOCIAL_LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <IconLink
            key={link.href}
            href={link.href}
            label={link.label}
            icon={<Icon aria-hidden className="size-5" />}
            variant="animated"
            accentColor={link.accentColor}
          />
        );
      })}
    </div>
  </>
);

export default Sidebar;
