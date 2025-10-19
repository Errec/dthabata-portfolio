import type { Project } from "@/types/project.types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Uma plataforma completa de e-commerce construída com Next.js, incluindo carrinho de compras, sistema de pagamento e painel administrativo.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    liveUrl: "https://projeto1.com",
    githubUrl: "https://github.com/seuusuario/projeto1",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real, drag & drop e notificações.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "https://projeto2.com",
    githubUrl: "https://github.com/seuusuario/projeto2",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Dashboard meteorológico interativo com previsões detalhadas, mapas e gráficos de tendências climáticas.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "SASS"],
    liveUrl: "https://projeto3.com",
    githubUrl: "https://github.com/seuusuario/projeto3",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Site de portfólio responsivo com animações suaves, tema dark/light e otimizado para SEO.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "MDX"],
    liveUrl: "https://projeto4.com",
    githubUrl: "https://github.com/seuusuario/projeto4",
  },
];
