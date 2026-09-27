import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HandHeart, Heart, Users, Sprout, Calendar, Quote } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import heroImg from "@/assets/hero-recovery.jpg";
import leveMaisLogo from "@/assets/parceiro-leve-mais.png";
import sosGenteLogo from "@/assets/parceiro-sos-gente.png";
import doceModestinaLogo from "@/assets/parceiro-doce-modestina.png";
import nutrifoodLogo from "@/assets/parceiro-nutrifood.png";
import feitosaEletroLogo from "@/assets/parceiro-feitosa-eletro.png";

const partnerLogos = [
  { name: "Leve Mais Supermercado", logo: leveMaisLogo },
  { name: "Instituto SOS Gente", logo: sosGenteLogo },
  { name: "Hotel e Café Doce Modestina", logo: doceModestinaLogo },
  { name: "Nutrifood", logo: nutrifoodLogo },
  { name: "Feitosa Eletro", logo: feitosaEletroLogo },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rede Sara Nordeste — Transformando vidas com amor, fé e ação social" },
      {
        name: "description",
        content:
          "A Rede Sara Nordeste atua desde 2009 promovendo acolhimento, recuperação e desenvolvimento humano em comunidades em situação de vulnerabilidade no Nordeste.",
      },
      {
        property: "og:title",
        content: "Rede Sara Nordeste — Transformando vidas com amor, fé e ação social",
      },
      {
        property: "og:description",
        content: "Desde 2009, acolhimento, capacitação e ações sociais transformando comunidades.",
      },
    ],
  }),
  component: HomePage,
});

const stats = [
  { icon: Users, value: "+100", label: "Pessoas formadas em cursos profissionalizantes" },
  { icon: Calendar, value: "Desde 2009", label: "Transformando vidas" },
  { icon: Sprout, value: "+30", label: "ONGs parceiras na rede" },
  { icon: Heart, value: "24h", label: "Acolhimento contínuo de dependentes químicos" },
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Mãos unidas representando acolhimento e transformação"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-page relative py-24 md:py-36 lg:py-44">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
              Rede Sara Nordeste · Desde 2009
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
              Transformando vidas com <span className="text-gold">amor, fé e ação social.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              A Rede Sara Nordeste é uma organização social que atua desde 2009 promovendo
              acolhimento, recuperação e desenvolvimento humano. Com diversas frentes de atuação,
              impactamos comunidades em situação de vulnerabilidade por meio de ações concretas,
              capacitação e apoio contínuo.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/quem-somos"
                hash="equipe"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-petrol shadow-elegant transition-smooth hover:scale-[1.03]"
              >
                Conheça nossa equipe <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/projetos"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition-smooth hover:bg-white hover:text-petrol"
              >
                Nossos projetos
              </Link>
              <Link
                to="/como-ajudar"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-base font-bold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.03]"
              >
                <HandHeart className="h-5 w-5" /> Como ajudar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-card">
        <div className="container-page grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:py-16 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5 shadow-soft"
            >
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-emerald text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="bg-gradient-emerald bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Nossas frentes"
            title="O que fazemos"
            description="Diversas frentes de atuação que transformam realidades — do acolhimento à geração de renda."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Acolhimento e Recuperação",
                text: "Sítio estruturado para recuperação de pessoas em dependência química e reintegração social.",
              },
              {
                title: "Jardim Sara Nordeste",
                text: "Produção de plantas ornamentais que gera renda, ocupação e propósito para os residentes.",
              },
              {
                title: "Capacitação e Renda",
                text: "Cursos de confeitaria, marcenaria para mulheres e capacitação empreendedora.",
              },
              {
                title: "Ações Sociais",
                text: "Cestas básicas no sertão, apoio a catadores, distribuição de proteínas e apoio a famílias.",
              },
              {
                title: "Embaixada do Reino",
                text: "Rede colaborativa que conecta mais de 30 ONGs para redistribuir recursos com inteligência.",
              },
              {
                title: "Apoio Comunitário",
                text: "Presença contínua junto a comunidades vulneráveis no Nordeste do Brasil.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              >
                <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              Ver todos os projetos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Vidas transformadas"
            title="Histórias que nos movem"
            description="Cada pessoa acolhida carrega uma história única de recomeço, fé e esperança."
          />

          <div className="mt-12 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
            {[
              {
                texto:
                  "Cheguei sem rumo, hoje tenho família, trabalho e fé. A Rede Sara Nordeste me devolveu a vida.",
                nome: "João S., 2 anos de recuperação",
              },
              {
                texto:
                  "No Jardim aprendi mais que cuidar de plantas — aprendi a cuidar de mim. Cada muda que cresce me lembra do meu próprio recomeço.",
                nome: "Anônimo, 1 ano e meio em recuperação",
              },
              {
                texto:
                  "Os cursos mudaram a vida da minha família. Hoje sustento meus filhos com o que aprendi aqui.",
                nome: "Maria L., participante dos cursos",
              },
            ].map((d) => (
              <article
                key={d.nome}
                className="relative min-w-[85%] shrink-0 snap-center rounded-3xl border border-border bg-card p-7 shadow-soft md:min-w-0 md:shrink"
              >
                <Quote className="h-8 w-8 text-primary/30" aria-hidden="true" />
                <p className="mt-3 text-base leading-relaxed text-foreground">“{d.texto}”</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-primary">
                  <Heart className="h-4 w-4 fill-current" />
                  {d.nome}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              Compartilhe sua história <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERS LOGO STRIP */}
      <section className="border-y border-border bg-card py-14 md:py-16">
        <div className="container-page text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Quem caminha conosco
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-foreground md:text-3xl">
            Parceiros que transformam lucro em propósito
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {partnerLogos.map((p) => (
              <div
                key={p.name}
                className="flex h-16 w-28 items-center justify-center grayscale transition-smooth hover:grayscale-0 md:h-20 md:w-36"
                title={p.name}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/parceiros"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              Ver todos os parceiros <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-emerald p-10 text-center shadow-elegant md:p-16">
            <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_30%_20%,white,transparent_45%),radial-gradient(circle_at_75%_80%,white,transparent_45%)]" />
            <div className="relative mx-auto max-w-2xl">
              <HandHeart className="mx-auto h-12 w-12 text-gold" />
              <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
                Sua doação transforma uma vida hoje.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
                Cada contribuição mantém o acolhimento, a alimentação, a capacitação e as ações
                sociais da Rede Sara Nordeste.
              </p>
              <Link
                to="/como-ajudar"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-base font-bold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.03]"
              >
                Quero Doar Agora <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
