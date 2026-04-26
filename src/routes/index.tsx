import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HandHeart, HeartHandshake, Home, Sparkles, Users } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import heroImg from "@/assets/hero-recovery.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sara Nordeste — Acolhimento, recuperação e nova vida" },
      {
        name: "description",
        content:
          "ONG Sara Nordeste: comunidade terapêutica em Jaboatão dos Guararapes que acolhe, restaura e transforma vidas. Aqui morre o homem e nasce o herói.",
      },
      { property: "og:title", content: "Sara Nordeste — Nova vida começa aqui" },
      {
        property: "og:description",
        content:
          "Acolhimento humano e espiritual para quem busca recuperação. Conheça nosso trabalho no Nordeste do Brasil.",
      },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "+1.200", label: "Vidas transformadas" },
  { value: "+15", label: "Anos de atuação" },
  { value: "+800", label: "Famílias restauradas" },
  { value: "24h", label: "Acolhimento disponível" },
];

const steps = [
  {
    icon: HeartHandshake,
    title: "1. Primeiro contato",
    text: "Receba escuta acolhedora por telefone ou presencialmente. Avaliamos sua história com sigilo e respeito.",
  },
  {
    icon: Home,
    title: "2. Acolhimento",
    text: "Espaço seguro, alimentação, cuidado e rotina estruturada para iniciar o processo de restauração.",
  },
  {
    icon: Sparkles,
    title: "3. Tratamento",
    text: "Acompanhamento espiritual, psicológico e laboral em comunidade — o caminho da nova vida.",
  },
  {
    icon: Users,
    title: "4. Reinserção",
    text: "Apoio à reintegração familiar, social e profissional. Você não caminha sozinho.",
  },
];

const testimonials = [
  {
    name: "Carlos M.",
    time: "3 anos limpo",
    text: "A Sara Nordeste me devolveu a dignidade. Hoje sou pai presente e tenho propósito.",
  },
  {
    name: "Ricardo L.",
    time: "1 ano e meio",
    text: "Cheguei sem esperança. Encontrei uma família e uma nova chance de viver.",
  },
  {
    name: "Família Santos",
    time: "Restaurada",
    text: "Recebemos nosso filho de volta. Gratidão por cada pessoa que nos acolheu.",
  },
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Pessoa diante do nascer do sol simbolizando recuperação e nova vida"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-page relative py-24 md:py-36 lg:py-44">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
              Comunidade Terapêutica · Nordeste do Brasil
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
              Aqui morre o homem <br className="hidden md:block" />
              <span className="text-gold">e nasce o herói.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              A Sara Nordeste acolhe, cuida e restaura vidas marcadas pela dependência
              química e pelo sofrimento. Um caminho de fé, esperança e dignidade.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-base font-bold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.03]"
              >
                Buscar Ajuda <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/como-ajudar"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition-smooth hover:bg-white hover:text-petrol"
              >
                <HandHeart className="h-5 w-5" /> Como Ajudar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-card">
        <div className="container-page grid grid-cols-2 gap-6 py-12 md:grid-cols-4 md:py-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="bg-gradient-emerald bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-muted-foreground md:text-base">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Como funciona"
            title="Um caminho simples e seguro"
            description="Cada pessoa é única. Caminhamos junto em quatro etapas para a restauração integral."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-emerald text-white transition-smooth group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Histórias reais"
            title="Vidas que voltaram a sonhar"
            description="Cada testemunho é prova de que a restauração é possível."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <blockquote className="text-base leading-relaxed text-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold font-bold text-gold-foreground">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.time}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/depoimentos"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              Ver todos os depoimentos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DONATION CTA */}
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
                Cada contribuição mantém o acolhimento, a alimentação e o tratamento de
                quem mais precisa. Faça parte dessa história.
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
