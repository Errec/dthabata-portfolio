import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

import type { SocialLink } from "@/types/social-link.types";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/dthabata",
    icon: Github,
    hoverClassName: "hover:text-foreground",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/thabatadornelas",
    icon: Linkedin,
    hoverClassName: "hover:text-blue-600",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/thabatadornelas",
    icon: Instagram,
    hoverClassName: "hover:text-pink-600",
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/thabatadornelas",
    icon: Twitter,
    hoverClassName: "hover:text-blue-400",
  },
  {
    label: "Email",
    href: "mailto:dornelasthabata@gmail.com",
    icon: Mail,
    hoverClassName: "hover:text-green-600",
  },
];
