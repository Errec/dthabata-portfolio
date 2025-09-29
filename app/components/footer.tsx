import Link from "next/link"
import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/thabatadornelas",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/dthabata",
    icon: Github,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/thabatadornelas",
    icon: Instagram,
  },
  {
    name: "Email",
    href: "mailto:dornelasthabata@gmail.com",
    icon: Mail,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Info */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">THABATA DORNELAS</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Acredito que a tecnologia é ponte entre pessoas e possibilidades.
            </p>
            <p className="text-sm text-muted-foreground">
              Escrevo em linhas de código soluções eficientes e sustentáveis para impulsionar resultados.
            </p>
          </div>

          {/* Right side - Social Links */}
          <div className="md:text-right">
            <h4 className="text-lg font-semibold text-foreground mb-4">SOCIAL</h4>
            <div className="flex md:justify-end gap-4 mb-6">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Thabata Dornelas. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>usando</span>
              <Link
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary font-medium"
              >
                Next.js
              </Link>
              <span>&</span>
              <Link
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary font-medium"
              >
                Tailwind CSS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
