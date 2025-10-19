import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/atoms/Button";
import { Card, CardContent } from "@/components/atoms/Card";
import Section from "@/components/atoms/Section";
import SectionHeading from "@/components/atoms/SectionHeading";
import { SkillCard, type SkillCardProps } from "@/components/molecules/SkillCard";

const SKILLS: SkillCardProps[] = [
  {
    name: "HTML5",
    icon: "/icons/html.svg",
    summary: "Estruturo páginas semânticas e acessíveis que garantem SEO forte e fácil manutenção.",
    accent: "#f16529",
  },
  {
    name: "CSS3",
    icon: "/icons/css.svg",
    summary: "Crio interfaces responsivas com foco em detalhes, animações suaves e consistência visual.",
    accent: "#2965f1",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript.svg",
    summary: "Desenvolvo experiências dinâmicas com código organizado, testes e boas práticas modernas.",
    accent: "#f0db4f",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    summary: "Uso tipagem estática para prevenir bugs, ganhar produtividade e documentar melhor os projetos.",
    accent: "#3178c6",
  },
  {
    name: "React",
    icon: "/icons/react.svg",
    summary: "Construo aplicações componentizadas, performáticas e orientadas a hooks e padrões atuais.",
    accent: "#61dafb",
  },
  {
    name: "Next.js",
    icon: "/icons/nextjs.svg",
    summary: "Implemento SSR, SSG e otimização de imagens para entregar experiências velozes e escaláveis.",
    accent: "#111111",
  },
  {
    name: "Node.js",
    icon: "/icons/nodejs.svg",
    summary: "Desenvolvo APIs robustas e seguras com Express, autenticação moderna e integrações confiáveis.",
    accent: "#3c873a",
  },
  {
    name: "Python",
    icon: "/icons/python.svg",
    summary: "Automatizo tarefas, crio scripts de dados e serviços backend com foco em clareza e testes.",
    accent: "#3776ab",
  },
  {
    name: "Git",
    icon: "/icons/git.svg",
    summary: "Versiono projetos com fluxo GitFlow, PR reviews e integração contínua para entregas seguras.",
    accent: "#f03c2e",
  },
  {
    name: "GitHub",
    icon: "/icons/github.svg",
    summary: "Organizo repositórios colaborativos, issues e automações que aceleram o ciclo de entrega.",
    accent: "#24292e",
  },
  {
    name: "Responsive Design",
    icon: "/icons/responsive-design.svg",
    summary: "Planejo layouts fluidos que funcionam perfeitamente em qualquer dispositivo e densidade.",
    accent: "#0e8388",
  },
  {
    name: "SEO",
    icon: "/icons/seo.svg",
    summary: "Alinho performance, semântica e conteúdo para aumentar visibilidade orgânica e conversão.",
    accent: "#2e4f4f",
  },
  {
    name: "SASS",
    icon: "/icons/sass.svg",
    summary: "Estruturo estilos escaláveis com variáveis, mixins e componentes reutilizáveis.",
    accent: "#cf649a",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwind.svg",
    summary: "Prototipo interfaces velozes com design system consistente e tokens configuráveis.",
    accent: "#38bdf8",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/postgresql.svg",
    summary: "Modelo dados relacionais, escrevo queries eficientes e mantenho integrações confiáveis.",
    accent: "#336791",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb.svg",
    summary: "Projeto esquemas flexíveis e pipelines agregados para aplicações orientadas a documentos.",
    accent: "#13aa52",
  },
  {
    name: "Express.js",
    icon: "/icons/express.svg",
    summary: "Crio serviços REST enxutos com middlewares bem definidos e tratamento de erros consistente.",
    accent: "#1f1f1f",
  },
  {
    name: "REST APIs",
    icon: "/icons/rest-apis.svg",
    summary: "Planejo contratos claros, versionamento e documentação que facilitam a integração com squads.",
    accent: "#0e8388",
  },
];

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
                src="/thabata-avatar.svg"
                alt="Retrato ilustrado de Thabata Dornelas"
                width={160}
                height={160}
                className="size-full object-cover"
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
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-label="Habilidades técnicas">
            {SKILLS.map((skill) => (
              <li key={skill.name}>
                <SkillCard {...skill} />
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
