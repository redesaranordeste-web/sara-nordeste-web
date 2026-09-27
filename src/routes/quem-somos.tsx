import { createFileRoute } from "@tanstack/react-router";
import { Heart, Eye, Compass, HandHeart, Shield, Sparkles, Users } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import houseImg from "@/assets/fachada-sara-nordeste.jpg";
import fundadoresImg from "@/assets/equipe/fundadores.jpeg";
import edvaldoImg from "@/assets/equipe/edvaldo-santos.jpeg";
import livroOReinoImg from "@/assets/o-reino-itamar-felix-damazio.jpeg";
import { TeamSection } from "@/components/site/TeamSection";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Rede Sara Nordeste" },
      {
        name: "description",
        content:
          "Fundada em 2009 por Itamar Felix e Lucélia Feitosa, a Rede Sara Nordeste acolhe e transforma vidas em situação de vulnerabilidade no Nordeste do Brasil.",
      },
      { property: "og:title", content: "Quem Somos — Rede Sara Nordeste" },
      {
        property: "og:description",
        content: "Nossa história, missão, visão e valores na transformação social desde 2009.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Compass,
    title: "Missão",
    text: "Promover transformação social por meio do acolhimento, capacitação e apoio a pessoas em situação de vulnerabilidade, incentivando dignidade, autonomia e novos caminhos de vida.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser referência no Nordeste como uma rede de apoio social que transforma vidas de forma sustentável e colaborativa.",
  },
];

const values = [
  { icon: Sparkles, label: "Fé" },
  { icon: HandHeart, label: "Solidariedade" },
  { icon: Users, label: "Dignidade humana" },
  { icon: Shield, label: "Compromisso social" },
  { icon: Eye, label: "Transparência" },
  { icon: Heart, label: "Amor ao próximo" },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Quem Somos"
        title="Uma rede que transforma vidas"
        description="Desde 2009 acolhendo, capacitando e restaurando histórias no Nordeste do Brasil."
      />

      <div className="container-page pt-8 text-center">
        <a
          href="#equipe"
          className="inline-flex rounded-full border border-primary px-6 py-3 text-sm font-bold text-primary hover:bg-accent"
        >
          Conheça nossa equipe ↓
        </a>
      </div>

      <section className="py-20 md:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Nossa história
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
              De comunidade terapêutica a Rede Sara Nordeste.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                A ONG Sara Nordeste teve início no ano de 2009, sendo fundada por{" "}
                <strong className="text-foreground">Itamar Félix Damazio</strong> — hoje conhecido
                como Pastor Itamar Félix Damazio — ao lado de sua esposa{" "}
                <strong className="text-foreground">Lucélia Lima Feitosa Damazio</strong>.
              </p>
              <p>
                Desde sua origem, a instituição nasceu com o propósito de acolher e transformar
                vidas, especialmente de pessoas em situação de vulnerabilidade social. Em 2013, a
                ONG foi oficialmente regularizada, consolidando sua atuação de forma legal e
                estruturada.
              </p>
              <p>
                Com o passar dos anos, evoluiu de comunidade terapêutica para a{" "}
                <strong className="text-foreground">Rede Sara Nordeste</strong>, ampliando suas
                ações e seu impacto social.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={houseImg}
              alt="Espaço de acolhimento da Rede Sara Nordeste"
              className="rounded-3xl object-cover shadow-elegant"
              loading="lazy"
              width={1600}
              height={1067}
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-gradient-gold px-6 py-4 text-gold-foreground shadow-gold md:block">
              <p className="text-3xl font-extrabold">2009</p>
              <p className="text-xs font-semibold uppercase tracking-wider">Início da jornada</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-emerald opacity-10 blur-3xl" />
            <div className="overflow-hidden rounded-3xl bg-gradient-to-b from-secondary/60 to-background p-6 shadow-elegant">
              <img
                src={fundadoresImg}
                alt="Itamar Félix e Lucélia Feitosa"
                className="mx-auto h-auto w-full max-w-md object-contain"
                loading="lazy"
                width={1080}
                height={1350}
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Fundadores
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
              Itamar Félix e Lucélia Feitosa
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Pastor Itamar Félix Damazio</strong> e sua esposa{" "}
              <strong className="text-foreground">Lucélia Lima Feitosa Damazio</strong> são o
              coração da Rede Sara Nordeste. Movidos por fé e amor ao próximo, dedicam suas vidas ao
              acolhimento de pessoas em situação de vulnerabilidade, conduzindo desde 2009 uma
              missão de restauração, dignidade e esperança no Nordeste do Brasil.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Liderança
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  Pastor Itamar Félix Damazio
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Fundador e presidente</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Cofundadora
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  Lucélia Lima Feitosa Damazio
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Acolhimento e gestão</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-page mt-12">
          <div className="grid items-center gap-8 rounded-3xl bg-foreground p-6 text-background shadow-elegant sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:p-10">
            <img
              src={livroOReinoImg}
              alt="Capa do livro O Reino, de Itamar Félix Damazio"
              className="mx-auto w-full max-w-48 rounded-lg shadow-lg"
              loading="lazy"
              width={853}
              height={1280}
            />
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground">
                Livro do fundador
              </span>
              <h3 className="mt-3 text-3xl font-extrabold md:text-4xl">O Reino</h3>
              <p className="mt-3 text-base leading-relaxed text-background/80">
                Obra de Itamar Félix Damazio, fundador da Rede Sara Nordeste.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20" aria-labelledby="vice-president-title">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img
              src={edvaldoImg}
              alt="Edvaldo Santos"
              className="aspect-[4/3] w-full object-cover object-[50%_38%] lg:aspect-[4/4]"
              loading="lazy"
            />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Vice-presidência
            </span>
            <h2
              id="vice-president-title"
              className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl"
            >
              Edvaldo Santos
            </h2>
            <p className="mt-3 text-lg font-semibold text-primary">Vice-presidente</p>
            <p className="mt-2 text-base font-semibold text-foreground">
              Educador em técnica de cultivo de plantas ornamentais
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Cultivar também é cuidar. O aprendizado com plantas ornamentais aproxima a natureza da
              construção de novos caminhos.
            </p>
          </div>
        </div>
      </section>

      <TeamSection />

      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-8 shadow-soft"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-emerald text-white">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-soft">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Nossos valores
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-foreground">
              O que nos move todos os dias
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="flex items-center gap-3 rounded-xl bg-secondary/70 p-4"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-gold text-gold-foreground">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-foreground">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
