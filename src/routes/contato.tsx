import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Rede Sara Nordeste" },
      {
        name: "description",
        content:
          "Fale com a Rede Sara Nordeste pelo WhatsApp (81) 98854-1655, e-mail saranordeste@hotmail.com ou Instagram @redesaranordeste.",
      },
      { property: "og:title", content: "Contato — Rede Sara Nordeste" },
      {
        property: "og:description",
        content: "Atendimento humano e acolhedor. Estamos prontos para ouvir você.",
      },
    ],
  }),
  component: ContactPage,
});

const WHATSAPP_URL =
  "https://wa.me/5581988541655?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Rede%20Sara%20Nordeste.";

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contato"
        title="Entre em contato com a Rede Sara Nordeste"
        description="Quero ajuda, quero ajudar ou quero ser parceiro? Fale com a gente."
      />

      <section className="py-20 md:py-24">
        <div className="container-page mx-auto max-w-5xl space-y-8">
          {/* WhatsApp — destaque */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start gap-5 rounded-3xl bg-gradient-emerald p-8 text-white shadow-elegant transition-smooth hover:scale-[1.01] md:flex-row md:items-center md:p-10"
          >
            <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <MessageCircle className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider opacity-90">
                WhatsApp
              </p>
              <p className="text-2xl font-extrabold md:text-3xl">(81) 98854-1655</p>
              <p className="mt-1 text-sm opacity-90 md:text-base">
                Toque para conversar agora — atendimento humano e acolhedor.
              </p>
            </div>
            <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-bold transition-smooth group-hover:bg-white/25">
              Conversar →
            </span>
          </a>

          {/* Demais canais */}
          <div className="grid gap-5 md:grid-cols-3">
            <ChannelCard
              icon={Mail}
              title="E-mail"
              subtitle="saranordeste@hotmail.com"
              text="Envie sua mensagem, respondemos em breve."
              href="mailto:saranordeste@hotmail.com"
            />
            <ChannelCard
              icon={Instagram}
              title="Instagram"
              subtitle="@redesaranordeste"
              text="Acompanhe nossas ações e envie uma DM."
              href="https://www.instagram.com/redesaranordeste"
              external
            />
            <ChannelCard
              icon={MapPin}
              title="Endereço"
              text="Rua VC UM, Setor Cinco — Enseadas dos Corais, Cabo de Santo Agostinho — PE"
            />
          </div>

          {/* Mapa */}
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="Localização da Rede Sara Nordeste"
              src="https://www.google.com/maps?q=Enseadas+dos+Corais+Cabo+de+Santo+Agostinho+PE&output=embed"
              className="h-80 w-full md:h-96"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ChannelCard({
  icon: Icon,
  title,
  subtitle,
  text,
  href,
  external = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle?: string;
  text: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-emerald text-white">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        {subtitle && (
          <p className="mt-1 text-sm font-semibold text-primary">{subtitle}</p>
        )}
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </>
  );

  const className =
    "flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth";

  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`${className} hover:-translate-y-0.5 hover:shadow-elegant`}
      >
        {content}
      </a>
    );
  }
  return <div className={className}>{content}</div>;
}
