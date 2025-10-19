"use client";

import IconLink from "@/components/atoms/IconLink";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/atoms/Tooltip";
import { SOCIAL_LINKS } from "@/constants/social-links";

const Sidebar = () => (
  <>
    <TooltipProvider delayDuration={100}>
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-16 flex-col items-center justify-center border-r border-border bg-background/80 backdrop-blur-md lg:flex">
        <nav aria-label="Redes sociais">
          <ul className="flex flex-col items-center gap-4">
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
                        className={link.hoverClassName}
                      />
                    </TooltipTrigger>
                    <TooltipContent side="right">{link.label}</TooltipContent>
                  </Tooltip>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="absolute bottom-8 h-16 w-px bg-border" aria-hidden />
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
            className={link.hoverClassName}
          />
        );
      })}
    </div>
  </>
);

export default Sidebar;
