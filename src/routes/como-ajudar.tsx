import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Package, Repeat, Rocket } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/como-ajudar")({
  head: () => ({
    meta: [
      { title: "Como Ajudar — Rede Sara Nordeste" },
      {
        name: "description",
        content:
          "Doe via Pix, seja parceiro mensal, doe itens ou gere impacto maior com a Rede Sara Nordeste.",
      },
      { property: "og:title", content: "Como Ajudar — Rede Sara Nordeste" },
      {
        property: "og:description",
        content: "Pix, parceria mensal, doação de itens e parcerias estratégicas.",
      },
    ],
  }),
  component: HelpPage,
});

const ways = [
  {
    icon: Heart,
    emoji: "💛",
    title: "Doação via Pix",
    text: "Com apenas alguns segundos, você já estará ajudando alguém.",
    detail: (
      <div className="mt-4 space-y-2 rounded-xl bg-muted p-4 text-sm">
        <p>
          <strong>Chave Pix:</strong>{" "}
          <span className="text-muted-foreground">(em breve)</span>
        </p>
        <p>
          <strong>Nome:</strong> Rede Sara Nordeste
        </p>
      </div>
    ),
  },
  {
    icon: Repeat,
    emoji: "🤝",
    title: "Parceiro Mensal",
    text: "Pequenos valores, quando constantes, geram grandes transformações. Doe a partir de R$ 10/mês via cartão de crédito ou contribuição automática mensal.",
  },
  {
    icon: Package,
    emoji: "📦",
    title: "Doe o que você tem",
    text: "Aceitamos roupas e calçados, alimentos não perecíveis, produtos de higiene pessoal e proteínas (carne, peixe, etc.).",
  },
  {
    icon: Rocket,
    emoji: "🚀",
    title: "Gere impacto maior",
    text: "Doação de bens como motos e veículos, apoio com contatos e conexões, indicação de empresas parceiras e apoio em editais e projetos.",
  },
];

function HelpPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Como Ajudar"
        title="Transforme Vidas. Seja Parte Dessa Missão."
        description="Todos os dias, a Rede Sara Nordeste acolhe pessoas, alimenta famílias, restaura histórias e constrói novos começos. Mas nada disso acontece sozinho. Você pode ser a diferença entre alguém desistir… ou recomeçar."
      />

      <section className="py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Formas de contribuir"
            title="Escolha a sua forma de ajudar"
            description="Toda contribuição — financeira, material ou de tempo — gera impacto real."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {ways.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-border bg-card p-8 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-emerald text-2xl">
                    <span aria-hidden>{w.emoji}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-foreground">
                    {w.title}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {w.text}
                </p>
                {w.detail}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-emerald p-10 text-center shadow-elegant md:p-14">
            <h3 className="text-2xl font-extrabold text-white md:text-3xl">
              Sua contribuição muda histórias.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
              Quando você contribui com a Rede Sara Nordeste, você está restaurando
              famílias, tirando pessoas das drogas, gerando renda para mulheres,
              alimentando quem tem fome e dando dignidade a quem precisa recomeçar.
            </p>
            <Link
              to="/contato"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-bold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.03]"
            >
              Falar com a equipe
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
