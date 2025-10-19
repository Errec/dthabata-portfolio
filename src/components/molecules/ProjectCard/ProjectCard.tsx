import Image from "next/image";
import Link from "next/link";

import { ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/atoms/Card";
import type { Project } from "@/types/project.types";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "standard";
};

const ProjectCard = ({ project, variant = "standard" }: ProjectCardProps) => {
  if (variant === "featured") {
    return (
      <Card className="group overflow-hidden transition-shadow hover:shadow-lg dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
        {project.image ? (
          <div className="relative overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/5" aria-hidden />
          </div>
        ) : null}
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription className="text-base">{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <Badge variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex gap-3">
          <Button asChild size="sm">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink aria-hidden className="mr-2 size-4" />
              Ver projeto
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github aria-hidden className="mr-2 size-4" />
              Código
            </Link>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="transition-shadow hover:shadow-md dark:hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild className="size-8">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Abrir código de {project.title}</span>
                <Github aria-hidden className="size-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="size-8">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Visitar {project.title}</span>
                <ExternalLink aria-hidden className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Badge variant="outline" className="text-xs">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
