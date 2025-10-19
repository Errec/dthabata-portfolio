import type React from "react";
import type { Metadata } from "next";
import { GeistMono, GeistSans } from "geist/font";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = GeistSans;

const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "Portfólio Thabata",
  description:
    "Portfólio profissional de desenvolvimento web com Next.js, React e tecnologias modernas.",
  keywords: ["desenvolvedor", "full stack", "react", "nextjs", "javascript", "typescript"],
  authors: [{ name: "Thabata Dornelas" }],
  creator: "Thabata Dornelas",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://thabatadornelas.com",
    title: "Portfólio Thabata",
    description: "Portfólio profissional de desenvolvimento web",
    siteName: "Portfólio Thabata",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio Thabata",
    description: "Portfólio profissional de desenvolvimento web",
    creator: "@thabatadornelas",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
