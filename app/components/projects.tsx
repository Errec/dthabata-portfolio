"use client"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Uma plataforma completa de e-commerce construída com Next.js, incluindo carrinho de compras, sistema de pagamento e painel administrativo.",
    image: "/modern-ecommerce-website.png",
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
    image: "/task-management-dashboard.png",
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
    image: "/weather-dashboard-interface.png",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "SASS"],
    liveUrl: "https://projeto3.com",
    githubUrl: "https://github.com/seuusuario/projeto3",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Site de portfólio responsivo com animações suaves, tema dark/light e otimizado para SEO.",
    image: "/portfolio-website-design.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "MDX"],
    liveUrl: "https://projeto4.com",
    githubUrl: "https://github.com/seuusuario/projeto4",
    featured: false,
  },
]

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">PROJETOS</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aqui você encontrará alguns dos projetos pessoais e profissionais que criei, cada projeto contém seu próprio
            estudo de caso
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Projetos em Destaque</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3">
                  <Button asChild size="sm">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Projeto
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Outros Projetos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-background border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Interessado em colaborar?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua
              visão.
            </p>
            <Button asChild size="lg">
              <Link href="#contact">Vamos Conversar</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
