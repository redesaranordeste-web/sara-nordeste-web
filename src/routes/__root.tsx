import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-20">
        {/* Decorative heart */}
        <svg
          viewBox="0 0 200 180"
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06] md:h-[640px] md:w-[640px]"
        >
          <path
            d="M100 158 C 30 110, 18 60, 52 38 C 78 22, 100 44, 100 64 C 100 44, 122 22, 148 38 C 182 60, 170 110, 100 158 Z"
            fill="none"
            stroke="var(--petrol)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="relative max-w-xl text-center">
          <p
            className="font-serif-display text-8xl font-extrabold leading-none md:text-[10rem]"
            style={{ color: "var(--petrol)" }}
          >
            404
          </p>
          <h1 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">
            Essa página não existe, mas sua história pode mudar aqui.
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            O caminho que você procurou não foi encontrado. Que tal voltar ao início
            ou descobrir como ajudar?
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-gradient-emerald px-7 py-3.5 text-sm font-bold text-white shadow-elegant transition-smooth hover:scale-[1.03]"
            >
              Voltar para o início
            </Link>
            <Link
              to="/como-ajudar"
              className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-bold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.03]"
            >
              Como ajudar
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rede Sara Nordeste — Transformando vidas com amor, fé e ação social" },
      {
        name: "description",
        content:
          "Rede Sara Nordeste: acolhimento, capacitação e ação social no Nordeste do Brasil desde 2009.",
      },
      { name: "author", content: "Rede Sara Nordeste" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Rede Sara Nordeste — Transformando vidas com amor, fé e ação social" },
      { name: "twitter:title", content: "Rede Sara Nordeste — Transformando vidas com amor, fé e ação social" },
      { name: "description", content: "A Rede Sara Nordeste acolhe, capacita e transforma vidas desde 2009. Conheça nossos projetos e descubra como você pode fazer parte dessa missão." },
      { property: "og:description", content: "A Rede Sara Nordeste acolhe, capacita e transforma vidas desde 2009. Conheça nossos projetos e descubra como você pode fazer parte dessa missão." },
      { name: "twitter:description", content: "A Rede Sara Nordeste acolhe, capacita e transforma vidas desde 2009. Conheça nossos projetos e descubra como você pode fazer parte dessa missão." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/cc192e1f-752f-444c-a509-23c612500464" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/cc192e1f-752f-444c-a509-23c612500464" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <WhatsAppFloat />
    </>
  );
}
