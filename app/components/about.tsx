"use client"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Git",
  "GitHub",
  "Responsive Design",
  "SEO",
  "SASS",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Express.js",
  "REST APIs",
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">SOBRE MIM</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais, principalmente em
            termos de programação e tecnologia
          </p>
        </div>

        // TODO: Rethink the whole grid structure with the design pattern
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Get to know me */}
          <div>
            <div className="flex justify-center lg:justify-start mb-8">
              {/* TODO: Change picture and do something animated */}
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <Image src="/professional-female-developer-avatar-illustration.jpg" alt="Thabata Dornelas" fill className="object-cover" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-6">Conheça-me melhor</h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou uma <strong className="text-foreground">Desenvolvedora Full Stack</strong> focada em construir e
                gerenciar aplicações web que levam ao sucesso do produto geral. Confira alguns
                dos meus trabalhos na seção
                {" "}
                <Link href="#projects" className="text-primary hover:underline font-medium">
                  Projetos
                </Link>
                .
              </p>

              <p>
                Também gosto de compartilhar conteúdo relacionado às coisas que aprendi ao longo dos anos em{" "}
                <strong className="text-foreground">Desenvolvimento Web</strong> para que possa ajudar outras pessoas da
                comunidade Dev. Sinta-se à vontade para se conectar ou me seguir no meu
                {" "}
                <Link
                  href="https://linkedin.com/in/thabatadornelas"
                  target="_blank"
                  className="text-primary hover:underline font-medium"
                >
                  LinkedIn
                </Link>{" "}
                e
                {" "}
                <Link
                  href="https://instagram.com/thabatadornelas"
                  target="_blank"
                  className="text-primary hover:underline font-medium"
                >
                  Instagram
                </Link>{" "}
                onde posto conteúdo útil relacionado ao Desenvolvimento Web e Programação.
              </p>

              <p>
                Estou aberta a oportunidades de <strong className="text-foreground">trabalho</strong> onde posso
                contribuir, aprender e crescer. Se você tem uma boa oportunidade que combina com minhas habilidades e
                experiência, não hesite em entrar em
                {" "}
                <Link href="#contact" className="text-primary hover:underline font-medium">
                  contato
                </Link>{" "}
                comigo.
              </p>
            </div>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="#contact">CONTATO</Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Minhas habilidades</h3>

            <div className="grid grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="hover:shadow-md dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-shadow"
                >
                  <CardContent className="p-4 flex items-center justify-center min-h-[60px]">
                    <span className="text-sm font-medium text-center leading-tight">{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-muted/50 border-border">
            <CardContent className="p-8 sm:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Vamos trabalhar juntos?</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
                Estou sempre aberta a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua
                visão.
              </p>
              <Button asChild size="lg">
                <Link href="#contact">Vamos conversar</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
