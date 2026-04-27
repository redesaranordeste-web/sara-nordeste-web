import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-sara-nordeste.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-petrol text-petrol-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Rede Sara Nordeste" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="text-lg font-extrabold">Rede Sara Nordeste</p>
              <p className="text-xs opacity-80">Transformando vidas desde 2009</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed opacity-85">
            Organização social que promove acolhimento, capacitação e ações sociais
            no Nordeste do Brasil.
          </p>
          <p className="mt-4 text-xs opacity-75">
            CNPJ regularizado desde 2013.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider opacity-90">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="opacity-85 hover:opacity-100">Início</Link></li>
            <li><Link to="/quem-somos" className="opacity-85 hover:opacity-100">Quem Somos</Link></li>
            <li><Link to="/projetos" className="opacity-85 hover:opacity-100">Projetos</Link></li>
            <li><Link to="/jardim" className="opacity-85 hover:opacity-100">Jardim Sara Nordeste</Link></li>
            <li><Link to="/parceiros" className="opacity-85 hover:opacity-100">Conheça nossos parceiros →</Link></li>
            <li><Link to="/como-ajudar" className="opacity-85 hover:opacity-100">Como Ajudar</Link></li>
            <li><Link to="/contato" className="opacity-85 hover:opacity-100">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider opacity-90">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span className="opacity-85">
                Rua VC UM, Setor Cinco — Enseadas dos Corais<br />
                Cabo de Santo Agostinho — PE
              </span>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 shrink-0" />
              <a
                href="https://wa.me/5581988541655"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-85 hover:opacity-100"
              >
                WhatsApp (81) 98854-1655
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href="mailto:saranordeste@hotmail.com" className="opacity-85 hover:opacity-100">
                saranordeste@hotmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider opacity-90">Acompanhe</h3>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.instagram.com/redesaranordeste"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @redesaranordeste"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-smooth hover:bg-gold hover:text-gold-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/5581988541655"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-smooth hover:bg-gold hover:text-gold-foreground"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="mailto:saranordeste@hotmail.com"
              aria-label="E-mail"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-smooth hover:bg-gold hover:text-gold-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-4 text-xs opacity-80">@redesaranordeste</p>
          <Link
            to="/como-ajudar"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-bold text-gold-foreground shadow-gold"
          >
            Quero Doar
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs opacity-80 md:flex-row">
          <p>© {new Date().getFullYear()} Rede Sara Nordeste — Todos os direitos reservados.</p>
          <p>Feito com fé e propósito 💚</p>
        </div>
      </div>
    </footer>
  );
}
