import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Briefcase, Brain, HeartHandshake, Sprout, Users } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Nossos Serviços e Metodologia — Sara Nordeste" },
      {
        name: "description",
        content:
          "Conheça os serviços e a metodologia da Sara Nordeste: acolhimento integral, espiritualidade, terapia, laborterapia e reinserção social.",
      },
      { property: "og:title", content: "Serviços e Metodologia — Sara Nordeste" },
      {
        property: "og:description",
        content: "Acolhimento integral, espiritualidade, terapia e reinserção social.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: HeartHandshake,
    title: "Acolhimento Integral",
    text: "Recepção 24h, abrigo seguro, alimentação, vestuário e cuidados básicos de saúde.",
  },
  {
    icon: BookOpen,
    title: "Acompanhamento Espiritual",
    text: "Estudos, orações e vivências que cultivam fé, propósito e novos valores.",
  },
  {
    icon: Brain,
    title: "Apoio Psicossocial",
    text: "Atendimentos individuais e em grupo conduzidos por equipe técnica voluntária.",
  },
  {
    icon: Briefcase,
    title: "Laborterapia",
    text: "Atividades produtivas que resgatam disciplina, autoestima e qualificação profissional.",
  },
  {
    icon: Users,
    title: "Apoio Familiar",
    text: "Acolhimento e orientação a familiares durante todo o processo de recuperação.",
  },
  {
    icon: Sprout,
    title: "Reinserção Social",
    text: "Encaminhamento para trabalho, estudos e retomada do convívio comunitário.",
  },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Serviços e Metodologia"
        title="Cuidado integral, do acolhimento à nova vida"
        description="Trabalhamos cada dimensão da pessoa — física, emocional, espiritual e social."
      />

      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-emerald text-white transition-smooth group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Metodologia"
            title="Um processo de 9 a 12 meses"
            description="Tempo é parte essencial da restauração. Caminhamos juntos, em fases."
          />
          <div className="mx-auto mt-14 max-w-3xl space-y-4">
            {[
              { n: "01", t: "Triagem e desintoxicação", d: "Avaliação inicial e cuidado nos primeiros dias." },
              { n: "02", t: "Adaptação", d: "Integração à rotina e ao convívio em comunidade." },
              { n: "03", t: "Aprofundamento", d: "Trabalho terapêutico, espiritual e laboral." },
              { n: "04", t: "Reinserção", d: "Preparação para a volta ao convívio familiar e social." },
            ].map((p) => (
              <div
                key={p.n}
                className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="bg-gradient-emerald bg-clip-text text-4xl font-extrabold text-transparent">
                  {p.n}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{p.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
