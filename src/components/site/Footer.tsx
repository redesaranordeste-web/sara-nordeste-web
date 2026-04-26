import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import logo from "@/assets/logo-sara-nordeste.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-petrol text-petrol-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Sara Nordeste" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="text-lg font-extrabold">Sara Nordeste</p>
              <p className="text-xs opacity-80">Uma Comunidade do Reino</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed opacity-85">
            Aqui morre o homem e nasce o herói. Acolhimento, recuperação e nova vida para
            quem busca um novo começo.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider opacity-90">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="opacity-85 hover:opacity-100">Início</Link></li>
            <li><Link to="/quem-somos" className="opacity-85 hover:opacity-100">Quem Somos</Link></li>
            <li><Link to="/servicos" className="opacity-85 hover:opacity-100">Serviços</Link></li>
            <li><Link to="/como-ajudar" className="opacity-85 hover:opacity-100">Como Ajudar</Link></li>
            <li><Link to="/depoimentos" className="opacity-85 hover:opacity-100">Depoimentos</Link></li>
            <li><Link to="/contato" className="opacity-85 hover:opacity-100">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider opacity-90">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span className="opacity-85">
                Rua Uruaçu, 144 — Jaboatão dos Guararapes/PE — CEP 54430-470
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:+5581000000000" className="opacity-85 hover:opacity-100">
                (81) 0000-0000
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href="mailto:contato@saranordeste.org" className="opacity-85 hover:opacity-100">
                contato@saranordeste.org
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider opacity-90">Acompanhe</h3>
          <div className="mt-4 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-smooth hover:bg-gold hover:text-gold-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
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
          <p>© {new Date().getFullYear()} Sara Nordeste — Todos os direitos reservados.</p>
          <p>Feito com fé e propósito 💚</p>
        </div>
      </div>
    </footer>
  );
}
