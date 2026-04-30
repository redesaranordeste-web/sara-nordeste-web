import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  Copy,
  GraduationCap,
  Heart,
  Home as HomeIcon,
  Sparkles,
  Zap,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import qrCodePix from "@/assets/qrcode-pix.png";

export const Route = createFileRoute("/como-ajudar")({
  head: () => ({
    meta: [
      { title: "Como Ajudar — Rede Sara Nordeste" },
      {
        name: "description",
        content:
          "Doe via Pix (CNPJ 20.248.317/0001-59), entregue itens ou conheça o impacto da sua doação na Rede Sara Nordeste.",
      },
      { property: "og:title", content: "Como Ajudar — Rede Sara Nordeste" },
      {
        property: "og:description",
        content:
          "Pix, doação de itens e o impacto real da sua contribuição na Rede Sara Nordeste.",
      },
    ],
  }),
  component: HelpPage,
});

const PIX_KEY_RAW = "20248317000159";
const PIX_KEY_FORMATTED = "20.248.317/0001-59";
const WHATS_ITEMS_URL =
  "https://wa.me/5581988541655?text=Ol%C3%A1!%20Quero%20fazer%20uma%20doa%C3%A7%C3%A3o%20de%20itens%20para%20a%20Rede%20Sara%20Nordeste.";

const stats = [
  { value: 100, prefix: "+", suffix: "", label: "pessoas capacitadas" },
  { value: 30, prefix: "+", suffix: "", label: "ONGs parceiras" },
  { value: 2009, prefix: "Desde ", suffix: "", label: "atuando no Nordeste", raw: true },
];

const items = [
  { emoji: "👕", title: "Roupas e calçados" },
  { emoji: "🥫", title: "Alimentos não perecíveis" },
  { emoji: "🧴", title: "Produtos de higiene pessoal" },
  { emoji: "🐟", title: "Proteínas (carne, peixe...)" },
];

const impact = [
  { icon: Heart, emoji: "💛", title: "Você doa", text: "Sua contribuição entra na rede." },
  { icon: HomeIcon, emoji: "🏠", title: "Mantemos o acolhimento", text: "Famílias seguem amparadas." },
  { icon: GraduationCap, emoji: "📚", title: "Financiamos cursos", text: "Geração de renda e dignidade." },
  { icon: Sparkles, emoji: "🌱", title: "Vidas são restauradas", text: "Histórias recomeçam." },
];

function useCountUp(target: number, durationMs = 1600, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const begin = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - begin) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, start]);
  return value;
}

function StatsCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const v0 = useCountUp(stats[0].value, 1500, visible);
  const v1 = useCountUp(stats[1].value, 1500, visible);
  const v2 = useCountUp(stats[2].value, 1800, visible);
  const values = [v0, v1, v2];

  return (
    <div
      ref={ref}
      className="mx-auto mt-6 grid max-w-4xl grid-cols-3 gap-2 md:mt-10 md:gap-4"
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="rounded-2xl border border-white/20 bg-white/10 px-3 py-4 text-center backdrop-blur-sm md:px-6 md:py-5"
        >
          <div className="text-xl font-extrabold text-white md:text-4xl">
            {s.raw ? (
              <>
                {s.prefix}
                {values[i]}
              </>
            ) : (
              <>
                {s.prefix}
                {values[i]}
                {s.suffix}
              </>
            )}
          </div>
          <div className="mt-1 text-xs font-medium text-white/85 md:text-sm">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function HelpHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-emerald">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_45%)]" />
      <div className="container-page relative py-10 text-center md:py-24">
        <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
          Como Ajudar
        </span>
        <h1 className="mt-4 text-2xl font-extrabold text-white md:text-5xl lg:text-6xl">
          Transforme Vidas. Seja Parte Dessa Missão.
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/90 md:mt-5 md:text-lg">
          Todos os dias, a Rede Sara Nordeste acolhe pessoas, alimenta famílias e
          constrói novos começos. Sua doação mantém essa missão viva.
        </p>
        <StatsCounters />
      </div>
    </section>
  );
}

function PixCard() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY_RAW);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // fallback silencioso
    }
  };

  return (
    <div
      className="rounded-3xl border-2 p-6 shadow-elegant md:p-10"
      style={{
        backgroundColor: "var(--jardim-soft)",
        borderColor: "var(--jardim)",
      }}
    >
      <div className="grid gap-8 md:grid-cols-[1fr,auto] md:items-center">
        <div>
          <div className="flex items-center gap-3">
            <div
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-jardim"
              style={{ backgroundColor: "var(--jardim)" }}
            >
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-extrabold text-foreground md:text-3xl">
              Doação via Pix — Rápido e Direto
            </h3>
          </div>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Com apenas alguns segundos, você já estará ajudando alguém.
          </p>

          <div className="mt-6 rounded-2xl border border-border bg-card p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                CNPJ
              </span>
              <span className="font-mono text-lg font-bold text-foreground md:text-xl">
                {PIX_KEY_FORMATTED}
              </span>
            </div>
            <button
              type="button"
              onClick={onCopy}
              aria-live="polite"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-smooth hover:scale-[1.03] hover:bg-primary/90"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copiar chave
                </>
              )}
            </button>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong className="text-foreground">Favorecido:</strong> ONG Sara
              Nordeste
            </p>
          </div>

          <p className="mt-6 text-base font-medium italic text-foreground/80">
            “Uma simples atitude pode mudar uma história inteira.”
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          {/* TODO: gerar QR Code no app do banco apontando para o CNPJ 20248317000159 e substituir esta imagem se necessário */}
          <div className="rounded-2xl border border-border bg-white p-3 shadow-soft">
            <img
              src={qrCodePix}
              alt="QR Code Pix da Rede Sara Nordeste"
              className="h-48 w-48 object-contain md:h-56 md:w-56"
              loading="lazy"
            />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Aponte a câmera do seu banco
          </span>
        </div>
      </div>
    </div>
  );
}

function HelpPage() {
  return (
    <PageShell>
      <HelpHero />

      {/* PIX — FASE 1 */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Doe agora"
            title="A forma mais rápida de ajudar"
            description="Pix direto para o CNPJ oficial da Rede Sara Nordeste."
          />
          <div className="mx-auto mt-12 max-w-5xl">
            <PixCard />
          </div>
        </div>
      </section>

      {/* DOE O QUE VOCÊ TEM */}
      <section className="bg-secondary/60 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Doação de itens"
            title="Doe o que você tem"
            description="Cada item entregue chega a uma família ou pessoa em recomeço."
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((it) => (
              <div
                key={it.title}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-emerald text-3xl">
                  <span aria-hidden>{it.emoji}</span>
                </div>
                <h4 className="mt-4 text-base font-extrabold text-foreground">
                  {it.title}
                </h4>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={WHATS_ITEMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-elegant transition-smooth hover:scale-[1.03]"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.46 0 .12 5.34.12 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.58 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.17-3.45-8.43Zm-8.48 18.3h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.62-.23-.37a9.88 9.88 0 1 1 18.34-5.25c0 5.46-4.45 9.86-9.97 9.86Zm5.45-7.39c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              </svg>
              Combinar entrega de doação
            </a>
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className="bg-gradient-emerald py-20 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
              Impacto real
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              O que acontece com sua doação?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
              Cada contribuição percorre um caminho de transformação real.
            </p>
          </div>

          <ol className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-4">
            {impact.map((step, i) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm"
              >
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-elegant">
                  <span aria-hidden>{step.emoji}</span>
                </div>
                <div className="mt-4 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">
                  Etapa {i + 1}
                </div>
                <h3 className="mt-3 text-lg font-extrabold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  {step.text}
                </p>
                {i < impact.length - 1 && (
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

          <p className="mx-auto mt-14 max-w-3xl rounded-3xl bg-white/10 p-8 text-center text-lg font-semibold leading-relaxed text-white backdrop-blur-sm md:text-xl">
            “Talvez você nunca conheça a pessoa que será ajudada. Mas ela vai
            sentir o impacto da sua decisão.”
          </p>
        </div>
      </section>
    </PageShell>
  );
}
