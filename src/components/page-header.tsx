type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: PageHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d7b57a]">{eyebrow}</p>
      <h1 className="mt-4 font-['Space_Grotesk',sans-serif] text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 text-base leading-7 text-stone-300 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
