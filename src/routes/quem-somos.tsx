import { createFileRoute } from "@tanstack/react-router";
import { Heart, Eye, Compass } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import houseImg from "@/assets/community-house.jpg";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Sara Nordeste" },
      {
        name: "description",
        content:
          "Conheça a história, missão e valores da Sara Nordeste, comunidade terapêutica que restaura vidas no Nordeste do Brasil.",
      },
      { property: "og:title", content: "Quem Somos — Sara Nordeste" },
      {
        property: "og:description",
        content: "Nossa história, missão e valores na restauração de vidas.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Compass,
    title: "Missão",
    text: "Acolher, restaurar e reinserir homens em situação de vulnerabilidade através de um trabalho humano, espiritual e profissional.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser referência no Nordeste em recuperação humana integral, levando dignidade e esperança a milhares de famílias.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Fé, dignidade, respeito, transparência, amor ao próximo e compromisso com a transformação de vidas.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Quem Somos"
        title="Uma comunidade do Reino"
        description="Há mais de uma década restaurando vidas marcadas pela dependência e pelo abandono."
      />

      <section className="py-20 md:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Nossa história
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
              Um sonho que virou casa, abrigo e família.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                A Sara Nordeste nasceu do desejo de ver vidas restauradas no coração do
                Nordeste brasileiro. Localizada em Jaboatão dos Guararapes, nossa
                comunidade acolhe homens que enfrentam a dependência química e
                circunstâncias de profunda vulnerabilidade.
              </p>
              <p>
                Acreditamos que onde a sociedade vê um problema, Deus vê um herói em
                construção. Por isso nosso lema:{" "}
                <strong className="text-foreground">
                  “aqui morre o homem e nasce o herói.”
                </strong>
              </p>
              <p>
                Nosso trabalho une espiritualidade, escuta, disciplina e oportunidade —
                criando um ambiente onde a transformação acontece com tempo, cuidado e
                propósito.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={houseImg}
              alt="Casa de acolhimento da Sara Nordeste ao entardecer"
              className="rounded-3xl object-cover shadow-elegant"
              loading="lazy"
              width={1600}
              height={1067}
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-gradient-gold px-6 py-4 text-gold-foreground shadow-gold md:block">
              <p className="text-3xl font-extrabold">+15</p>
              <p className="text-xs font-semibold uppercase tracking-wider">
                anos de história
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-8 shadow-soft"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-emerald text-white">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
