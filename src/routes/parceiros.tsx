import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Handshake, Lightbulb, UtensilsCrossed } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import leveMaisLogo from "@/assets/parceiro-leve-mais.png";
import sosGenteLogo from "@/assets/parceiro-sos-gente.png";
import doceModestinaLogo from "@/assets/parceiro-doce-modestina.png";
import nutrifoodLogo from "@/assets/parceiro-nutrifood.png";
import feitosaEletroLogo from "@/assets/parceiro-feitosa-eletro.png";

export const Route = createFileRoute("/parceiros")({
  head: () => ({
    meta: [
      { title: "Parceiros — Rede Sara Nordeste" },
      {
        name: "description",
        content:
          "Conheça empresas e instituições que caminham com a Rede Sara Nordeste — Leve Mais, SOS Gente, Doce Modestina, Nutrifood, Feitosa Eletro e outras.",
      },
      { property: "og:title", content: "Parceiros — Rede Sara Nordeste" },
      {
        property: "og:description",
        content: "Empresas que transformam lucro em propósito apoiando a Rede Sara Nordeste.",
      },
    ],
  }),
  component: PartnersPage,
});

const WHATS_PARCERIA =
  "https://wa.me/5581988541655?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20uma%20parceria%20com%20a%20Rede%20Sara%20Nordeste.";

type Partner = {
  name: string;
  logo: string;
  badge: string;
  description: string;
  highlight?: string;
  cta: { label: string; href: string; external: boolean };
};

const partners: Partner[] = [
  {
    name: "Leve Mais Supermercado",
    logo: leveMaisLogo,
    badge: "Troco Solidário",
    description:
      "A cada compra no Leve Mais Supermercado, você pode arredondar seu troco e doá-lo diretamente para a Rede Sara Nordeste. Um gesto pequeno que, somado a milhares de clientes, gera um impacto enorme.",
    cta: { label: "Saiba como funciona ↓", href: "#troco-solidario", external: false },
  },
  {
    name: "Instituto SOS Gente",
    logo: sosGenteLogo,
    badge: "Parceiro Institucional",
    description:
      "O Instituto SOS Gente é um parceiro estratégico da Rede Sara Nordeste, fortalecendo nossas ações sociais e ampliando o impacto junto às comunidades vulneráveis.",
    cta: { label: "Conhecer o Instituto →", href: "https://sosgente.org.br/", external: true },
  },
  {
    name: "Hotel e Café Doce Modestina",
    logo: doceModestinaLogo,
    badge: "20% do lucro da cafeteria",
    description:
      "O Hotel e Café Doce Modestina destina 20% do lucro da sua cafeteria diretamente para a Rede Sara Nordeste. Cada café servido é também um gesto de solidariedade.",
    highlight: "Cada xícara serve a quem mais precisa.",
    cta: {
      label: "Ver no Instagram →",
      href: "https://www.instagram.com/hoteldocemodestina/",
      external: true,
    },
  },
  {
    name: "Nutrifood",
    logo: nutrifoodLogo,
    badge: "+200 refeições/mês",
    description:
      "A Nutrifood doa mais de 200 refeições prontas por mês para as pessoas acolhidas pela Rede Sara Nordeste. Nutrição de qualidade como parte do processo de recuperação e dignidade.",
    highlight: "Alimentar o corpo faz parte de restaurar a vida.",
    cta: {
      label: "Ver no Instagram →",
      href: "https://www.instagram.com/nutrifoodpiedade/",
      external: true,
    },
  },
  {
    name: "Feitosa Eletro",
    logo: feitosaEletroLogo,
    badge: "Oferta Mensal",
    description:
      "A Feitosa Eletro realiza ofertas mensais em benefício da Rede Sara Nordeste, contribuindo com recursos que mantêm nossas atividades e projetos funcionando.",
    cta: {
      label: "Ver no Instagram →",
      href: "https://www.instagram.com/feitosaeletro/",
      external: true,
    },
  },
];

const trocoSteps = [
  { emoji: "🛒", text: "Você faz suas compras no Leve Mais Supermercado normalmente." },
  {
    emoji: "💰",
    text: "No caixa, arredonde seu troco — o atendente perguntará se deseja doar o troco.",
  },
  { emoji: "💚", text: "O valor é destinado diretamente à Rede Sara Nordeste." },
  {
    emoji: "🌱",
    text: "Sua moeda vira vida — alimentação, acolhimento e dignidade para quem precisa.",
  },
];

const partnershipForms = [
  {
    icon: Handshake,
    emoji: "🤝",
    title: "Parceria comercial",
    text: "Destine uma porcentagem do faturamento ou uma oferta mensal.",
  },
  {
    icon: UtensilsCrossed,
    emoji: "🍽️",
    title: "Doação de alimentos",
    text: "Refeições prontas, proteínas, cestas ou qualquer insumo alimentar.",
  },
  {
    icon: Lightbulb,
    emoji: "💡",
    title: "Troco solidário",
    text: "Implemente o troco solidário na sua empresa em benefício da ONG.",
  },
];

const collectiveImpact = [
  { value: "+200", label: "refeições prontas por mês", source: "Nutrifood" },
  { value: "20%", label: "do lucro da cafeteria revertido", source: "Doce Modestina" },
  { value: "+30", label: "ONGs na rede colaborativa", source: "Embaixada do Reino" },
];

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <article className="group flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
      <div className="flex items-start gap-5">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-white p-2">
          <img
            src={partner.logo}
            alt={`Logo ${partner.name}`}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="min-w-0 flex-1">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
            style={{ backgroundColor: "var(--jardim)" }}
          >
            {partner.badge}
          </span>
          <h3 className="mt-2 text-xl font-extrabold text-foreground md:text-2xl">
            {partner.name}
          </h3>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
        {partner.description}
      </p>

      {partner.highlight && (
        <p className="mt-4 rounded-2xl bg-secondary/70 p-4 text-sm font-semibold italic leading-relaxed text-foreground/85">
          “{partner.highlight}”
        </p>
      )}

      <div className="mt-auto pt-6">
        <a
          href={partner.cta.href}
          {...(partner.cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-smooth hover:scale-[1.03] hover:bg-primary/90"
        >
          {partner.cta.label}
          {partner.cta.external && <ExternalLink className="h-3.5 w-3.5" />}
        </a>
      </div>
    </article>
  );
}

function PartnersPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-emerald">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_45%)]" />
        <div className="container-page relative py-16 text-center md:py-24">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Parceiros
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Quem caminha com a gente
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
            A Rede Sara Nordeste não age sozinha. Cada parceiro representa uma decisão de
            transformar o lucro em propósito e os negócios em bênção para quem mais precisa.
          </p>
        </div>
      </section>

      {/* CARDS DOS PARCEIROS */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Nossa rede"
            title="Empresas e instituições parceiras"
            description="Cada parceria é construída na confiança e no compromisso com quem é acolhido."
          />
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
            {partners.map((p) => (
              <PartnerCard key={p.name} partner={p} />
            ))}
          </div>
        </div>
      </section>

      {/* TROCO SOLIDÁRIO */}
      <section id="troco-solidario" className="scroll-mt-24 bg-gradient-emerald py-20 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
              Troco Solidário
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              Leve Mais Supermercado
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
              Como funciona?
            </p>
          </div>

          <ol className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-4">
            {trocoSteps.map((step, i) => (
              <li
                key={step.text}
                className="relative rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm"
              >
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-elegant">
                  <span aria-hidden>{step.emoji}</span>
                </div>
                <div className="mt-4 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">
                  Etapa {i + 1}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/90">{step.text}</p>
                {i < trocoSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden text-2xl text-white/70 md:absolute md:-right-4 md:top-1/2 md:block md:-translate-y-1/2"
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>

          <p className="mx-auto mt-12 max-w-3xl rounded-3xl bg-white/10 p-8 text-center text-lg font-semibold leading-relaxed text-white backdrop-blur-sm md:text-xl">
            “Uma moeda pode parecer pouco. Mas quando milhares de pessoas fazem o mesmo, ela muda
            vidas.”
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#seja-parceiro"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-smooth hover:bg-white hover:text-petrol"
            >
              Seja um parceiro também
            </a>
          </div>
        </div>
      </section>

      {/* SEJA UM PARCEIRO */}
      <section id="seja-parceiro" className="scroll-mt-24 py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Junte-se à rede"
            title="Sua empresa pode fazer parte disso"
            description="Seja através do troco solidário, doações mensais, refeições, produtos ou qualquer outra forma de contribuição — a Rede Sara Nordeste está aberta a novas parcerias. Juntos, chegamos mais longe."
          />

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {partnershipForms.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-7 text-center shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-emerald text-3xl">
                  <span aria-hidden>{f.emoji}</span>
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={WHATS_PARCERIA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-elegant transition-smooth hover:scale-[1.03]"
            >
              Quero ser parceiro <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* IMPACTO COLETIVO */}
      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Impacto coletivo"
            title="O que a rede de parceiros gera juntos"
            description="Resultado real do trabalho conjunto entre empresas, instituições e a Rede Sara Nordeste."
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {collectiveImpact.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft"
              >
                <p className="bg-gradient-emerald bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
                  {item.value}
                </p>
                <p className="mt-3 text-sm font-semibold text-foreground">{item.label}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {item.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
