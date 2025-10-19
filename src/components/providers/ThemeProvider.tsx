"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = true,
  storageKey,
  themes,
  forcedTheme,
  enableColorScheme,
  nonce,
  value,
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      storageKey={storageKey}
      themes={themes}
      forcedTheme={forcedTheme}
      enableColorScheme={enableColorScheme}
      nonce={nonce}
      value={value}
    >
      {children}
    </NextThemesProvider>
  );
}
