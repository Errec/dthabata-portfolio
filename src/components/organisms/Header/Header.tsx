"use client";

import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/atoms/Button";
import NavigationMenu from "@/components/molecules/NavigationMenu";
import { ThemeToggle } from "@/components/molecules/ThemeToggle";
import { NAVIGATION_LINKS } from "@/constants/navigation";
import { cn } from "@/utils/cn";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((previous) => !previous);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border/0 bg-background/0 backdrop-blur-0 transition-[background-color,backdrop-filter,border-color,border-opacity] duration-500 ease-in-out",
        isScrolled && "border-border/80 bg-background/90 backdrop-blur-lg",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="flex items-center gap-2 text-lg font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/60 text-sm font-bold text-primary-foreground">
            SN
          </span>
          <span className="hidden sm:inline">Thabata Dornelas</span>
        </Link>

        <div className="hidden md:block">
          <NavigationMenu links={NAVIGATION_LINKS} />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
            <span className="sr-only">Abrir menu de navegação</span>
          </Button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "md:hidden border-t border-border bg-background/95 backdrop-blur-md transition-[max-height] duration-300",
          isMobileMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden",
        )}
      >
        <div className="px-4 py-4">
          <NavigationMenu links={NAVIGATION_LINKS} orientation="vertical" onNavigate={closeMobileMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
