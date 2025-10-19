"use client";

import IconLink from "@/components/atoms/IconLink";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/atoms/Tooltip";
import { SOCIAL_LINKS } from "@/constants/social-links";

const Sidebar = () => (
  <>
    <TooltipProvider delayDuration={100}>
      <aside className="hidden lg:block lg:sticky lg:top-36 lg:z-40">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-background/80 p-4 shadow-[0_32px_60px_-40px_rgba(15,23,42,0.75)] backdrop-blur-md">
          <nav aria-label="Redes sociais">
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
                          className={link.hoverClassName}
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
          <div className="h-12 w-px bg-border/60" aria-hidden />
        </div>
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
            accentColor={link.accentColor}
          />
        );
      })}
    </div>
  </>
);

export default Sidebar;
