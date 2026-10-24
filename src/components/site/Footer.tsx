import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-forest text-ivory">
      <div className="container-x grid gap-14 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo onDarkBackground />
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-ivory/65">
            Site demonstrativo para aprovação visual. Projetos, textos e fotografias são ilustrativos e não representam obras reais da TAVARES.
          </p>
        </div>
        <nav className="md:col-span-3" aria-label="Rodapé">
          <p className="eyebrow text-champagne">Navegação</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li><Link to="/" className="hover:text-champagne">Início</Link></li>
            <li><Link to="/projetos" className="hover:text-champagne">Projetos</Link></li>
            <li><Link to="/sobre" className="hover:text-champagne">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-champagne">Contato</Link></li>
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="eyebrow text-champagne">Contato</p>
          <p className="mt-6 text-sm text-ivory/65">Dados de contato a definir pelo cliente.</p>
          <Link to="/contato" className="mt-6 inline-block font-serif text-3xl underline decoration-champagne/50 underline-offset-8 hover:decoration-champagne">
            Iniciar uma conversa
          </Link>
        </div>
      </div>
      <div className="container-x flex flex-col justify-between gap-2 border-t border-ivory/10 py-6 text-xs text-ivory/50 md:flex-row">
        <span>© {new Date().getFullYear()} TAVARES Construção — Modelo 01 · Cinematic Architecture</span>
        <span>Fotografias ilustrativas: Unsplash</span>
      </div>
    </footer>
  );
}
