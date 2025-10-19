import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/atoms/Button";
import { Card, CardContent } from "@/components/atoms/Card";
import Section from "@/components/atoms/Section";
import SectionHeading from "@/components/atoms/SectionHeading";
import { SKILLS } from "@/constants/skills";

const AboutSection = () => (
  <Section id="about" aria-labelledby="about-heading">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        id="about-heading"
        title="Sobre mim"
        eyebrow="Quem sou"
        description="Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais, principalmente em termos de programação e tecnologia."
      />

      <div className="mb-16 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
        <article className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <div className="flex justify-center lg:justify-start">
            <span className="relative size-40 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg">
              <Image
                src="/professional-female-developer-avatar-illustration.jpg"
                alt="Retrato ilustrado de Thabata Dornelas"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 160px, 160px"
                priority
              />
            </span>
          </div>

          <h3 className="text-2xl font-semibold text-foreground">Conheça-me melhor</h3>
          <p>
            Sou uma <strong className="text-foreground">Desenvolvedora Full Stack</strong> focada em construir e gerenciar
            aplicações web que levam ao sucesso do produto geral. Confira alguns dos meus trabalhos na seção
            {" "}
            <Link href="#projects" className="font-medium text-primary transition-colors hover:underline">
              Projetos
            </Link>
            .
          </p>
          <p>
            Também gosto de compartilhar conteúdo relacionado às coisas que aprendi ao longo dos anos em
            {" "}
            <strong className="text-foreground">Desenvolvimento Web</strong> para ajudar outras pessoas da comunidade Dev.
            Sinta-se à vontade para se conectar ou me seguir no meu
            {" "}
            <Link
              href="https://linkedin.com/in/thabatadornelas"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary transition-colors hover:underline"
            >
              LinkedIn
            </Link>{" "}
            e
            {" "}
            <Link
              href="https://instagram.com/thabatadornelas"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary transition-colors hover:underline"
            >
              Instagram
            </Link>
            , onde posto conteúdo útil relacionado ao desenvolvimento web e programação.
          </p>
          <p>
            Estou aberta a oportunidades de <strong className="text-foreground">trabalho</strong> onde posso contribuir,
            aprender e crescer. Se você tem uma boa oportunidade que combina com minhas habilidades e experiência, não hesite
            em entrar em
            {" "}
            <Link href="#contact" className="font-medium text-primary transition-colors hover:underline">
              contato
            </Link>
            {" "}
            comigo.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="#contact">Entre em contato</Link>
          </Button>
        </article>

        <aside>
          <h3 className="mb-6 text-2xl font-semibold text-foreground">Minhas habilidades</h3>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label="Habilidades técnicas">
            {SKILLS.map((skill) => (
              <li key={skill}>
                <Card className="transition-shadow hover:shadow-md dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                  <CardContent className="flex min-h-[60px] items-center justify-center p-4 text-center text-sm font-medium">
                    {skill}
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="mx-auto max-w-3xl">
        <Card className="border-border bg-muted/50">
          <CardContent className="space-y-6 p-8 text-center sm:p-12">
            <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">Vamos trabalhar juntos?</h3>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Estou sempre aberta a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua visão.
            </p>
            <Button asChild size="lg">
              <Link href="#contact">Vamos conversar</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </Section>
);

export default AboutSection;
