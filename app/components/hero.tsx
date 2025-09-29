"use client"

import { Button } from "@/app/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-4">
            Olá, pode me chamar de...
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          <span className="block">THABATA DORNELAS</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light max-w-3xl mx-auto">
          Desenvolvedora Full Stack especializada em criar experiências web modernas e aplicações que conectam design e
          funcionalidade
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Construo interfaces digitais acessíveis e performáticas usando as mais modernas tecnologias web. 
          Confira alguns dos meus projetos pessoais e profissionais!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button asChild size="lg" className="text-base px-8 py-3">
            <Link href="#projects">
              Ver projetos
              <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button variant="outline" size="lg" className="text-base px-8 py-3 bg-transparent" asChild>
            <a href="/cv-thabata-dornelas.pdf" download="Thabata_Dornelas_CV.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-4">Role para baixo</span>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
