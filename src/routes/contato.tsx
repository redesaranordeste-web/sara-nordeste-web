import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Admissão — Sara Nordeste" },
      {
        name: "description",
        content:
          "Fale com a Sara Nordeste para admissão, parcerias ou voluntariado. Rua Uruaçu, 144 — Jaboatão dos Guararapes/PE.",
      },
      { property: "og:title", content: "Contato e Admissão — Sara Nordeste" },
      {
        property: "og:description",
        content: "Atendimento humano e acolhedor. Estamos prontos para ouvir você.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contato e Admissão"
        title="Estamos prontos para ouvir você"
        description="Fale conosco com sigilo, respeito e acolhimento."
      />

      <section className="py-20 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
            <h2 className="text-2xl font-extrabold text-foreground">Envie uma mensagem</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Nossa equipe responderá com a maior brevidade possível.
            </p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Mensagem enviada! Em breve entraremos em contato.");
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nome" name="name" required />
                <Field label="Telefone" name="phone" type="tel" required />
              </div>
              <Field label="E-mail" name="email" type="email" required />
              <Field label="Assunto" name="subject" />
              <div>
                <label className="text-sm font-semibold text-foreground">Mensagem</label>
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Conte-nos como podemos ajudar..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-emerald px-6 py-3.5 text-sm font-bold text-white shadow-elegant transition-smooth hover:scale-[1.02]"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-5">
            <InfoCard icon={MapPin} title="Endereço">
              Rua Uruaçu, 144<br />
              Jaboatão dos Guararapes — PE<br />
              CEP 54430-470
            </InfoCard>
            <InfoCard icon={Phone} title="Telefone / WhatsApp">
              <a href="tel:+5581000000000" className="hover:text-primary">
                (81) 0000-0000
              </a>
            </InfoCard>
            <InfoCard icon={Mail} title="E-mail">
              <a href="mailto:contato@saranordeste.org" className="hover:text-primary">
                contato@saranordeste.org
              </a>
            </InfoCard>
            <InfoCard icon={Clock} title="Atendimento">
              Acolhimento 24 horas<br />
              Visitas: aos domingos, das 14h às 17h
            </InfoCard>

            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Localização da Sara Nordeste"
                src="https://www.google.com/maps?q=Rua+Urua%C3%A7u+144+Jabot%C3%A3o+dos+Guararapes&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-emerald text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-base font-bold text-foreground">{title}</h3>
        <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
