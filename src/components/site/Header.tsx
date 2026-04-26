import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-sara-nordeste.png";

const links = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/projetos", label: "Projetos" },
  { to: "/como-ajudar", label: "Como Ajudar" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Rede Sara Nordeste" className="h-10 w-10 rounded-full object-cover md:h-12 md:w-12" />
          <div className="leading-tight">
            <p className="text-base font-extrabold text-petrol md:text-lg">Rede Sara Nordeste</p>
            <p className="hidden text-[11px] font-medium text-muted-foreground sm:block">
              Transformando vidas desde 2009
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary bg-accent" }}
              inactiveProps={{ className: "text-foreground/75 hover:text-primary hover:bg-accent/60" }}
              className="rounded-full px-4 py-2 text-sm font-semibold transition-smooth"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/como-ajudar"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-2 text-sm font-bold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.03]"
          >
            Doar agora
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-accent" }}
                inactiveProps={{ className: "text-foreground/80" }}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-semibold transition-smooth"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/como-ajudar"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-3 text-sm font-bold text-gold-foreground shadow-gold"
            >
              Doar agora
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
