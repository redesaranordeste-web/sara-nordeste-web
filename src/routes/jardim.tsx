import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Leaf, Sprout, Users, MessageCircle, Mail } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import logoJardim from "@/assets/logo-jardim-sara-nordeste.png";

export const Route = createFileRoute("/jardim")({
  head: () => ({
    meta: [
      { title: "Jardim Sara Nordeste — Das Ruínas, Deus Criou Um Jardim" },
      {
        name: "description",
        content:
          "Plantas ornamentais cultivadas por mãos que estão sendo restauradas. Cada planta do Jardim Sara Nordeste é uma história de recomeço.",
      },
      { property: "og:title", content: "Jardim Sara Nordeste" },
      {
        property: "og:description",
        content: "Das Ruínas, Deus Criou Um Jardim. Conheça o projeto que une paisagismo e propósito.",
      },
    ],
    links: [
      { rel: "icon", href: "/jardim-favicon.png", type: "image/png" },
    ],
  }),
  component: JardimPage,
});

const SLOGAN = "Das Ruínas, Deus Criou Um Jardim.";

function JardimPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-white">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, var(--jardim-soft), transparent 55%), radial-gradient(circle at 85% 80%, var(--jardim-soft), transparent 50%)",
            }}
          />
          <div className="container-page relative py-16 text-center md:py-24">
            <img
              src={logoJardim}
              alt="Jardim Sara Nordeste — Das Ruínas, Deus Criou Um Jardim"
              className="mx-auto h-48 w-48 object-contain md:h-60 md:w-60"
            />
            <h1
              className="font-serif-display mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.1] md:text-6xl"
              style={{ color: "var(--jardim)" }}
            >
              {SLOGAN}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Cultivado por mãos que estão sendo restauradas. Cada planta é uma
              história de recomeço.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/5581988541655?text=Ol%C3%A1!%20Quero%20conhecer%20o%20Jardim%20Sara%20Nordeste."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-jardim transition-smooth hover:scale-[1.03]"
                style={{ backgroundImage: "var(--gradient-jardim)" }}
              >
                <MessageCircle className="h-5 w-5" /> Falar com o Jardim
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-3.5 text-sm font-bold transition-smooth hover:bg-jardim-soft"
                style={{ borderColor: "var(--jardim)", color: "var(--jardim)" }}
              >
                Seja um parceiro <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section style={{ backgroundColor: "var(--jardim-soft)" }} className="py-20 md:py-24">
          <div className="container-page grid gap-10 md:grid-cols-[1fr_2fr] md:items-center">
            <HeartMark />
            <div>
              <span
                className="inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest text-white"
                style={{ backgroundColor: "var(--jardim)" }}
              >
                O Projeto
              </span>
              <h2
                className="font-serif-display mt-4 text-3xl font-bold md:text-4xl"
                style={{ color: "var(--jardim)" }}
              >
                Onde havia ruína, hoje floresce vida
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                O Jardim Sara Nordeste nasce dentro do nosso espaço de acolhimento.
                Os residentes em processo de recuperação cultivam plantas
                ornamentais — encontrando ocupação, aprendizado e geração de renda.
                Toda a renda é revertida para a manutenção da instituição.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Mais do que uma compra, é uma parceria. Atendemos arquitetos,
                paisagistas e clientes que buscam não apenas qualidade, mas
                propósito em cada planta.
              </p>
            </div>
          </div>
        </section>

        {/* O QUE OFERECEMOS */}
        <section className="bg-white py-20 md:py-24">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                className="font-serif-display text-3xl font-bold md:text-4xl"
                style={{ color: "var(--jardim)" }}
              >
                O que cultivamos
              </h2>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                Plantas com história. Paisagismo com propósito.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <FeatureCard
                icon={Sprout}
                title="Plantas ornamentais"
                description="Variedade cuidadosamente cultivada por residentes em recuperação, prontas para compor ambientes com vida."
              />
              <FeatureCard
                icon={Leaf}
                title="Paisagismo com propósito"
                description="Atendimento direto a arquitetos e paisagistas que valorizam qualidade e impacto social em seus projetos."
              />
              <FeatureCard
                icon={Heart}
                title="Compra que transforma"
                description="Cada venda sustenta o acolhimento e oferece dignidade a quem está reconstruindo a própria história."
              />
            </div>
          </div>
        </section>

        {/* CTA PARCERIA */}
        <section style={{ backgroundColor: "var(--jardim-soft)" }} className="py-20 md:py-24">
          <div className="container-page">
            <div
              className="relative overflow-hidden rounded-3xl bg-white p-10 shadow-elegant md:p-14"
              style={{ borderTop: "6px solid var(--jardim)" }}
            >
              <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
                <div
                  className="inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-jardim"
                  style={{ backgroundImage: "var(--gradient-jardim)" }}
                >
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <h3
                    className="font-serif-display text-2xl font-bold md:text-3xl"
                    style={{ color: "var(--jardim)" }}
                  >
                    Seja um parceiro do Jardim
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground md:text-lg">
                    Arquitetos, paisagistas, lojistas e empresas: vamos cultivar
                    juntos um futuro com mais beleza e mais propósito.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <a
                    href="https://wa.me/5581988541655?text=Ol%C3%A1!%20Quero%20ser%20parceiro%20do%20Jardim%20Sara%20Nordeste."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-jardim transition-smooth hover:scale-[1.03]"
                    style={{ backgroundImage: "var(--gradient-jardim)" }}
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                  <a
                    href="mailto:saranordeste@hotmail.com?subject=Parceria%20Jardim%20Sara%20Nordeste"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-bold transition-smooth"
                    style={{ borderColor: "var(--jardim)", color: "var(--jardim)" }}
                  >
                    <Mail className="h-4 w-4" /> E-mail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RODAPÉ DA PÁGINA — slogan + logo */}
        <section className="bg-white py-16 text-center">
          <div className="container-page">
            <img
              src={logoJardim}
              alt="Jardim Sara Nordeste"
              className="mx-auto h-32 w-32 object-contain"
            />
            <p
              className="font-serif-display mx-auto mt-4 max-w-xl text-2xl font-semibold md:text-3xl"
              style={{ color: "var(--jardim)" }}
            >
              {SLOGAN}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <article
      className="group rounded-3xl border bg-white p-8 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
      style={{ borderColor: "color-mix(in oklab, var(--jardim) 25%, transparent)" }}
    >
      <div
        className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-jardim"
        style={{ backgroundImage: "var(--gradient-jardim)" }}
      >
        <Icon className="h-7 w-7" />
      </div>
      <h3
        className="font-serif-display mt-5 text-xl font-bold md:text-2xl"
        style={{ color: "var(--jardim)" }}
      >
        {title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        {description}
      </p>
    </article>
  );
}

/** Coração estilizado isolado (inspirado na logo) — elemento decorativo */
function HeartMark() {
  return (
    <div className="flex justify-center">
      <svg
        viewBox="0 0 200 180"
        className="h-44 w-44 md:h-60 md:w-60"
        aria-hidden="true"
      >
        <path
          d="M100 158 C 30 110, 18 60, 52 38 C 78 22, 100 44, 100 64 C 100 44, 122 22, 148 38 C 182 60, 170 110, 100 158 Z"
          fill="none"
          stroke="var(--jardim)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
