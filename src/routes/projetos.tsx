import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HandHeart,
  HeartHandshake,
  Sprout,
  GraduationCap,
  Network,
  Gift,
  ArrowRight,
} from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Nossos Projetos — Rede Sara Nordeste" },
      {
        name: "description",
        content:
          "Conheça os projetos da Rede Sara Nordeste: acolhimento, Jardim Sara Nordeste, capacitação, ações sociais e Embaixada do Reino.",
      },
      { property: "og:title", content: "Nossos Projetos — Rede Sara Nordeste" },
      {
        property: "og:description",
        content:
          "Acolhimento, geração de renda, capacitação e uma rede de mais de 30 ONGs.",
      },
    ],
  }),
  component: ProjectsPage,
});

const courses = [
  "Cursos de confeitaria e bolos artísticos (mais de 100 formados)",
  "Curso de marcenaria para mulheres (mais de 20 formadas)",
  "Capacitação empreendedora para autonomia financeira",
];

const socialActions = [
  "Doação de cestas básicas no sertão",
  "Apoio a catadores e carroceiros",
  "Distribuição de proteínas (como peixes)",
  "Apoio a famílias em situação de vulnerabilidade",
];

function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Nossos Projetos"
        title="Frentes que transformam vidas"
        description="Cada projeto da Rede Sara Nordeste nasce do propósito de gerar dignidade, autonomia e novos começos."
      />

      <section className="py-20 md:py-24">
        <div className="container-page space-y-8">
          {/* 1. Acolhimento */}
          <ProjectCard
            number="01"
            icon={HeartHandshake}
            title="Acolhimento e Recuperação"
          >
            <p>
              Realizamos o acolhimento de pessoas em situação de dependência química
              em um sítio estruturado para recuperação e reintegração social.
            </p>
          </ProjectCard>

          {/* 2. Jardim */}
          <ProjectCard
            number="02"
            icon={Sprout}
            title="Jardim Sara Nordeste"
            highlight
          >
            <p>
              Projeto desenvolvido dentro do espaço de acolhimento, onde os residentes
              produzem plantas ornamentais, promovendo ocupação, aprendizado e geração
              de renda. Os produtos são comercializados e toda a renda é revertida
              para a manutenção da instituição.
            </p>
            <p className="mt-3">
              O Jardim conecta diretamente com o mercado, atendendo arquitetos,
              paisagistas e clientes que buscam não apenas qualidade, mas propósito.
              Mais do que uma compra, é uma parceria. Ao adquirir produtos do Jardim
              Sara Nordeste, você se torna um colaborador direto dessa missão.
            </p>
            <Link
              to="/contato"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.03]"
            >
              Seja um parceiro do Jardim <ArrowRight className="h-4 w-4" />
            </Link>
          </ProjectCard>

          {/* 3. Capacitação */}
          <ProjectCard
            number="03"
            icon={GraduationCap}
            title="Capacitação e Geração de Renda"
          >
            <ul className="space-y-2">
              {courses.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </ProjectCard>

          {/* 4. Ações Sociais */}
          <ProjectCard number="04" icon={Gift} title="Ações Sociais">
            <ul className="space-y-2">
              {socialActions.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </ProjectCard>

          {/* 5. Embaixada do Reino */}
          <ProjectCard
            number="05"
            icon={Network}
            title="Embaixada do Reino"
          >
            <p>
              A Embaixada do Reino conecta mais de 30 ONGs em uma rede colaborativa.
              O objetivo é redistribuir recursos de forma inteligente, garantindo que
              nada seja desperdiçado e que cada doação chegue a quem realmente precisa.
            </p>
            <p className="mt-3">
              Uma ONG que recebe um item que não utiliza repassa para outra — fraldas
              geriátricas vão para asilos, absorventes são destinados a projetos que
              atendem mulheres, alimentos e insumos são redistribuídos conforme
              necessidade.
            </p>
          </ProjectCard>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Faça parte"
            title="Apoie um dos nossos projetos"
            description="Sua contribuição mantém vivas todas estas frentes de transformação."
          />
          <div className="mt-10 flex justify-center">
            <Link
              to="/como-ajudar"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-emerald px-7 py-3.5 text-sm font-bold text-white shadow-elegant transition-smooth hover:scale-[1.03]"
            >
              <HandHeart className="h-5 w-5" /> Quero ajudar
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ProjectCard({
  number,
  icon: Icon,
  title,
  children,
  highlight = false,
}: {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <article
      className={`grid gap-6 rounded-3xl border border-border bg-card p-8 shadow-soft md:grid-cols-[auto_1fr] md:gap-10 md:p-10 ${
        highlight ? "ring-2 ring-gold/40" : ""
      }`}
    >
      <div className="flex md:flex-col md:items-start md:gap-4">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-emerald text-white">
          <Icon className="h-7 w-7" />
        </div>
        <span className="ml-4 self-center bg-gradient-gold bg-clip-text text-4xl font-extrabold text-transparent md:ml-0 md:self-auto md:text-5xl">
          {number}
        </span>
      </div>
      <div>
        <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">{title}</h2>
        <div className="mt-4 text-base leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </article>
  );
}
