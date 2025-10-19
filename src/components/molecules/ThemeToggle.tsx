"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/atoms/Button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextTheme = useMemo(() => (theme === "light" ? "dark" : "light"), [theme]);

  const runThemeAnimation = useCallback(() => {
    const root = window.document.documentElement;

    root.classList.remove("theme-animating");
    window.requestAnimationFrame(() => {
      root.classList.add("theme-animating");
      window.setTimeout(() => {
        root.classList.remove("theme-animating");
      }, 800);
    });
  }, []);

  const handleToggle = useCallback(() => {
    runThemeAnimation();
    setTheme(nextTheme);
  }, [nextTheme, runThemeAnimation, setTheme]);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9 transition-colors duration-300 ease-out">
        <Sun className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className="h-9 w-9 transition-colors duration-300 ease-out hover:bg-muted"
    >
      {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
