import Link from "next/link";

import { Heart } from "lucide-react";

import IconLink from "@/components/atoms/IconLink";
import { SOCIAL_LINKS } from "@/constants/social-links";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Thabata Dornelas</h2>
            <p className="max-w-md text-sm text-muted-foreground">
              Acredito que a tecnologia é ponte entre pessoas e possibilidades. Escrevo soluções eficientes e sustentáveis
              para impulsionar resultados.
            </p>
          </div>
          <div className="md:text-right">
            <h3 className="mb-4 text-lg font-semibold text-foreground">Social</h3>
            <nav aria-label="Canais sociais" className="flex justify-start gap-3 md:justify-end">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <IconLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    icon={<Icon aria-hidden className="size-5" />}
                    variant="static"
                    accentColor={link.accentColor}
                  />
                );
              })}
            </nav>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>© {currentYear} Thabata Dornelas. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1">
              <span>Feito com</span>
              <Heart aria-hidden className="size-4 text-red-500" />
              <span>
                usando
                {" "}
                <Link
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground transition-colors hover:text-primary"
                >
                  Next.js
                </Link>
                {" "}&
                {" "}
                <Link
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground transition-colors hover:text-primary"
                >
                  Tailwind CSS
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
