import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

import type { SocialLink } from "@/types/social-link.types";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/dthabata",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/thabatadornelas",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/thabatadornelas",
    icon: Instagram,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/thabatadornelas",
    icon: Twitter,
  },
  {
    label: "Email",
    href: "mailto:dornelasthabata@gmail.com",
    icon: Mail,
  },
];
