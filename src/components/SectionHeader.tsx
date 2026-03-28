interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  light?: boolean;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <p
        className={`text-sm font-medium tracking-[0.25em] uppercase mb-3 ${
          light ? "text-accent" : "text-primary"
        }`}
      >
        {subtitle}
      </p>
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-white" : "text-text-dark"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-20 h-1 mx-auto rounded-full mb-6 ${
          light ? "bg-accent" : "bg-primary"
        }`}
      />
      {description && (
        <p
          className={`max-w-2xl mx-auto text-lg leading-relaxed ${
            light ? "text-white/70" : "text-text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
