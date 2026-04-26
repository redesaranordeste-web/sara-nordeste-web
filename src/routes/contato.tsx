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

const WHATSAPP_NUMBER = "5581988541655"; // wa.me link format
const WHATSAPP_DISPLAY = "(81) 98854-1655";

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contato"
        title="Entre em contato com a Rede Sara Nordeste"
        description="Quero ajuda, quero ajudar ou quero ser parceiro? Fale com a gente."
      />

      <section className="py-20 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
            <h2 className="text-2xl font-extrabold text-foreground">
              Envie uma mensagem
            </h2>
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
              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-foreground"
                >
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="" disabled>
                    Selecione…
                  </option>
                  <option value="ajuda">Quero ajuda</option>
                  <option value="ajudar">Quero ajudar</option>
                  <option value="parceria">Parceria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-foreground"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
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
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-gradient-emerald p-6 text-white shadow-elegant transition-smooth hover:scale-[1.01]"
            >
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider opacity-90">
                  WhatsApp
                </p>
                <p className="text-lg font-extrabold">{WHATSAPP_DISPLAY}</p>
                <p className="text-xs opacity-90">Toque para conversar agora</p>
              </div>
            </a>

            <InfoCard icon={Mail} title="E-mail">
              <a
                href="mailto:saranordeste@hotmail.com"
                className="hover:text-primary"
              >
                saranordeste@hotmail.com
              </a>
            </InfoCard>

            <InfoCard icon={Instagram} title="Instagram">
              <a
                href="https://www.instagram.com/redesaranordeste"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                @redesaranordeste
              </a>
            </InfoCard>

            <InfoCard icon={MapPin} title="Endereço">
              Rua VC UM, Setor Cinco
              <br />
              Enseadas dos Corais
              <br />
              Cabo de Santo Agostinho — PE
            </InfoCard>

            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Localização da Rede Sara Nordeste"
                src="https://www.google.com/maps?q=Enseadas+dos+Corais+Cabo+de+Santo+Agostinho+PE&output=embed"
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
        <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}
