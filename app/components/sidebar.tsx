"use client"

import Link from "next/link"
import { Github, Linkedin, Instagram, Mail, Twitter } from 'lucide-react'
import { Button } from "@/app/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/app/components/ui/tooltip"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/dthabata",
    icon: Github,
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/thabatadornelas",
    icon: Linkedin,
    color: "hover:text-blue-600",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/thabatadornelas",
    icon: Instagram,
    color: "hover:text-pink-600",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/thabatadornelas",
    icon: Twitter,
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    href: "mailto:dornelasthabata@gmail.com",
    icon: Mail,
    color: "hover:text-green-600",
  },
]

export function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-16 bg-background/80 backdrop-blur-md border-r border-border hidden lg:flex flex-col items-center justify-center">
        <TooltipProvider>
          <nav className="flex flex-col space-y-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Tooltip key={link.name}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className={`w-10 h-10 text-muted-foreground transition-colors ${link.color}`}
                    >
                      <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                        <Icon className="h-5 w-5" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>{link.name}</p>
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </nav>

          {/* Vertical line decoration */}
          <div className="absolute bottom-8 w-px h-16 bg-border"></div>
        </TooltipProvider>
      </aside>

      {/* Mobile Social Links - Fixed at bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 mobile-social-links">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <Button
              key={link.name}
              variant="ghost"
              size="icon"
              asChild
              className={`w-10 h-10 text-muted-foreground transition-colors ${link.color}`}
            >
              <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <Icon className="h-5 w-5" />
              </Link>
            </Button>
          )
        })}
      </div>
    </>
  )
}
