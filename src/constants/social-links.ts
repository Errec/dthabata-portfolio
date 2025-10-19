import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

import type { SocialLink } from "@/types/social-link.types";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/dthabata",
    icon: Github,
    accentColor: "#181717",
    hoverClassName: "hover:text-[#181717]",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/thabatadornelas",
    icon: Linkedin,
    accentColor: "#0A66C2",
    hoverClassName: "hover:text-[#0A66C2]",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/thabatadornelas",
    icon: Instagram,
    accentColor: "#E4405F",
    hoverClassName: "hover:text-[#E4405F]",
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/thabatadornelas",
    icon: Twitter,
    accentColor: "#1DA1F2",
    hoverClassName: "hover:text-[#1DA1F2]",
  },
  {
    label: "Email",
    href: "mailto:dornelasthabata@gmail.com",
    icon: Mail,
    accentColor: "#16A34A",
    hoverClassName: "hover:text-[#16A34A]",
  },
];
