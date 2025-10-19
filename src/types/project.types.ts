export type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
};
