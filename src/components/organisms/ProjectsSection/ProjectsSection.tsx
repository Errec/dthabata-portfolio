import Link from "next/link";

import { Button } from "@/components/atoms/Button";
import { Card, CardContent } from "@/components/atoms/Card";
import Section from "@/components/atoms/Section";
import SectionHeading from "@/components/atoms/SectionHeading";
import ProjectCard from "@/components/molecules/ProjectCard";
import { PROJECTS } from "@/constants/projects";

const ProjectsSection = () => {
  const featuredProjects = PROJECTS.filter((project) => project.featured);
  const otherProjects = PROJECTS.filter((project) => !project.featured);

  return (
    <Section id="projects" aria-labelledby="projects-heading" className="bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="projects-heading"
          title="Projetos"
          eyebrow="Destaques"
          description="Aqui você encontrará alguns dos projetos pessoais e profissionais que criei, cada um contendo seu próprio estudo de caso."
        />

        <section aria-labelledby="featured-projects-heading" className="mb-16">
          <div className="mb-8 flex flex-col gap-2 text-left">
            <h3 id="featured-projects-heading" className="text-2xl font-semibold text-foreground">
              Projetos em destaque
            </h3>
            <p className="max-w-3xl text-muted-foreground">
              Soluções recentes com maior impacto, que envolvem integrações complexas, design system escalável e foco em
              performance.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="featured" />
            ))}
          </div>
        </section>

        <section aria-labelledby="other-projects-heading">
          <div className="mb-8 flex flex-col gap-2 text-left">
            <h3 id="other-projects-heading" className="text-2xl font-semibold text-foreground">
              Outros projetos
            </h3>
            <p className="max-w-3xl text-muted-foreground">
              Experimentos, provas de conceito e aplicações que complementam meu repertório técnico.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <div className="mx-auto mt-16 max-w-3xl">
          <Card className="border-border bg-background/80">
            <CardContent className="space-y-6 p-8 text-center sm:p-12">
              <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">Interessado em colaborar?</h3>
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
};

export default ProjectsSection;
