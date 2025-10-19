import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

import type { SocialLink } from "@/types/social-link.types";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/dthabata",
    icon: Github,
    accentColor: "#24292e",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/thabatadornelas",
    icon: Linkedin,
    accentColor: "#0a66c2",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/thabatadornelas",
    icon: Instagram,
    accentColor: "#e4405f",
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/thabatadornelas",
    icon: Twitter,
    accentColor: "#1d9bf0",
  },
  {
    label: "Email",
    href: "mailto:dornelasthabata@gmail.com",
    icon: Mail,
    accentColor: "#0e8388",
  },
];
