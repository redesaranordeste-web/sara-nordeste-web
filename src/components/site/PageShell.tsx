import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-emerald">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_45%)]" />
      <div className="container-page relative py-16 text-center md:py-24">
        {eyebrow && (
          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
