import { createFileRoute, Link } from "@tanstack/react-router";
import { Banknote, Heart, Package, Users } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/como-ajudar")({
  head: () => ({
    meta: [
      { title: "Como Ajudar — Doações | Sara Nordeste" },
      {
        name: "description",
        content:
          "Doe via PIX, transferência ou seja voluntário. Sua contribuição mantém o acolhimento da Sara Nordeste.",
      },
      { property: "og:title", content: "Como Ajudar — Sara Nordeste" },
      {
        property: "og:description",
        content: "PIX, transferência, doações de itens e voluntariado.",
      },
    ],
  }),
  component: HelpPage,
});

const ways = [
  {
    icon: Banknote,
    title: "Doação financeira",
    text: "Mensal ou única — toda contribuição mantém alimentação, cuidado e estrutura.",
  },
  {
    icon: Package,
    title: "Doação de itens",
    text: "Alimentos, roupas, materiais de higiene, medicamentos e itens de construção.",
  },
  {
    icon: Users,
    title: "Voluntariado",
    text: "Compartilhe seu tempo, profissão ou habilidade — toda mão é bem-vinda.",
  },
  {
    icon: Heart,
    title: "Apadrinhamento",
    text: "Apadrinhe um interno e acompanhe de perto sua jornada de recuperação.",
  },
];

function HelpPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Como Ajudar"
        title="Junte-se a quem transforma vidas"
        description="Existem muitos jeitos de fazer parte. Escolha o seu e venha conosco."
      />

      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ways.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-border bg-card p-7 text-center shadow-soft"
              >
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-emerald text-white">
                  <w.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {w.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Faça sua doação"
            title="Dados para contribuição"
            description="Sua generosidade chega rápido a quem precisa."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <span className="inline-block rounded-full bg-gradient-gold px-3 py-1 text-xs font-bold text-gold-foreground">
                PIX
              </span>
              <h3 className="mt-4 text-xl font-bold text-foreground">Chave PIX</h3>
              <p className="mt-3 break-all rounded-lg bg-muted p-4 font-mono text-sm text-foreground">
                contato@saranordeste.org
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                Em nome de: ONG Sara Nordeste
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <span className="inline-block rounded-full bg-petrol px-3 py-1 text-xs font-bold text-petrol-foreground">
                Conta Bancária
              </span>
              <h3 className="mt-4 text-xl font-bold text-foreground">Transferência</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground">
                <li><strong>Banco:</strong> 000 — Banco Exemplo</li>
                <li><strong>Agência:</strong> 0000</li>
                <li><strong>Conta Corrente:</strong> 00000-0</li>
                <li><strong>CNPJ:</strong> 00.000.000/0001-00</li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-gradient-emerald p-10 text-center shadow-elegant">
            <h3 className="text-2xl font-extrabold text-white md:text-3xl">
              Quer ser voluntário ou apadrinhar?
            </h3>
            <p className="mt-3 text-white/90">
              Entre em contato e receba todas as informações.
            </p>
            <Link
              to="/contato"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-bold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.03]"
            >
              Falar com a equipe
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
