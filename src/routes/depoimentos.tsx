import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: [
      { title: "Depoimentos — Sara Nordeste" },
      {
        name: "description",
        content:
          "Histórias reais de pessoas e famílias restauradas pela Sara Nordeste. Conheça quem viveu a transformação.",
      },
      { property: "og:title", content: "Depoimentos — Sara Nordeste" },
      {
        property: "og:description",
        content: "Histórias reais de transformação e recuperação.",
      },
    ],
  }),
  component: TestimonialsPage,
});

const items = [
  {
    name: "Carlos M.",
    time: "3 anos limpo",
    text: "Eu estava perdido, sem família, sem futuro. Aqui aprendi a me amar de novo, voltei a estudar e hoje sou pai presente. A Sara Nordeste é minha segunda família.",
  },
  {
    name: "Ricardo L.",
    time: "1 ano e meio em recuperação",
    text: "A acolhida foi sem julgamento. Cada dia foi um passo. Encontrei fé, propósito e amigos verdadeiros. Hoje trabalho ajudando outros que chegam como eu cheguei.",
  },
  {
    name: "Família Santos",
    time: "Família restaurada",
    text: "Recebemos nosso filho de volta. As lágrimas hoje são de alegria. Gratidão eterna a cada voluntário, líder e doador que tornou isso possível.",
  },
  {
    name: "João P.",
    time: "5 anos limpo",
    text: "Eu morei na rua por 8 anos. A Sara Nordeste me devolveu dignidade. Tenho casa, trabalho e, principalmente, paz.",
  },
  {
    name: "Marcos A.",
    time: "Egresso, hoje voluntário",
    text: "O que recebi de graça, dou de graça. Voltar como voluntário é a forma mais bonita de agradecer.",
  },
  {
    name: "Dona Maria",
    time: "Mãe de interno",
    text: "Achei que tinha perdido meu filho. Aqui ele renasceu — e eu também. Obrigada por cuidarem dele como cuidaria de mim.",
  },
];

function TestimonialsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Depoimentos"
        title="Vidas que voltaram a sonhar"
        description="Cada nome aqui é um milagre, uma história e um convite à esperança."
      />

      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((t) => (
              <figure
                key={t.name}
                className="group relative rounded-2xl border border-border bg-card p-8 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              >
                <Quote className="h-8 w-8 text-gold opacity-70" />
                <blockquote className="mt-4 text-base leading-relaxed text-foreground">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-emerald font-bold text-white">
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
        </div>
      </section>
    </PageShell>
  );
}
