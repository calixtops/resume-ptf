import { personalInfo } from '@/data/resume'
import { NoSSR } from './NoSSR'

function FooterContent() {
  return (
    <p className="text-muted-foreground mb-2">
      © {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.
    </p>
  )
}

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container-max">
        <div className="text-center">
          <NoSSR fallback={<p className="text-muted-foreground mb-2">© 2024 {personalInfo.name}. Todos os direitos reservados.</p>}>
            <FooterContent />
          </NoSSR>
          <p className="text-muted-foreground/70 text-sm">
            Desenvolvido usando Next.js, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}