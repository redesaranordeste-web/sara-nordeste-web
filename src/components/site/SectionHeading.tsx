interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <div
      className={
        "mx-auto max-w-3xl " + (align === "center" ? "text-center" : "text-left")
      }
    >
      {eyebrow && (
        <span className="inline-block rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
