import Link from "next/link";

import { ArrowDown, Download } from "lucide-react";

import { Button } from "@/components/atoms/Button";
import Section from "@/components/atoms/Section";
import SectionHeading from "@/components/atoms/SectionHeading";

const HeroSection = () => (
  <Section id="home" aria-labelledby="hero-heading" className="flex min-h-screen items-center justify-center pt-24">
    <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
      <div className="mb-6">
        <span className="inline-block rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
          Olá, pode me chamar de...
        </span>
      </div>
      <SectionHeading
        headingLevel={1}
        id="hero-heading"
        title="Thabata Dornelas"
        description="Desenvolvedora Full Stack especializada em criar experiências web modernas que conectam design e funcionalidade."
      />
      <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
        Construo interfaces digitais acessíveis e performáticas usando as mais modernas tecnologias web. Confira alguns dos
        meus projetos pessoais e profissionais!
      </p>
      <div className="mb-16 flex flex-col items-center gap-4 sm:flex-row">
        <Button asChild size="lg" className="px-8 py-3 text-base">
          <Link href="#projects">
            Ver projetos
            <ArrowDown aria-hidden className="ml-2 size-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="px-8 py-3 text-base" asChild>
          <a href="/cv-thabata-dornelas.pdf" download="Thabata_Dornelas_CV.pdf">
            <Download aria-hidden className="mr-2 size-4" />
            Download CV
          </a>
        </Button>
      </div>
      <div className="flex flex-col items-center">
        <span className="mb-4 text-sm text-muted-foreground">Role para baixo</span>
        <div className="flex h-10 w-6 items-center justify-center rounded-full border-2 border-muted-foreground">
          <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-muted-foreground" aria-hidden />
        </div>
      </div>
    </div>
  </Section>
);

export default HeroSection;
