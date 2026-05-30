import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-20">
        <svg viewBox="0 0 200 180" aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06] md:h-[640px] md:w-[640px]">
          <path d="M100 158 C 30 110, 18 60, 52 38 C 78 22, 100 44, 100 64 C 100 44, 122 22, 148 38 C 182 60, 170 110, 100 158 Z" fill="none" stroke="var(--petrol)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="relative max-w-xl text-center">
          <p className="font-serif-display text-8xl font-extrabold leading-none md:text-[10rem]" style={{ color: "var(--petrol)" }}>404</p>
          <h1 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">Essa página não existe, mas sua história pode mudar aqui.</h1>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/" className="inline-flex items-center justify-center rounded-full bg-gradient-emerald px-7 py-3.5 text-sm font-bold text-white shadow-elegant transition-smooth hover:scale-[1.03]">Voltar para o início</Link>
            <Link to="/como-ajudar" className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-bold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.03]">Como ajudar</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <WhatsAppFloat />
    </>
  );
}