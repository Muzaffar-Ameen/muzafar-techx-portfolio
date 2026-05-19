interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-16 max-w-3xl">

      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent">
        {label}
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-relaxed text-textSecondary">
          {description}
        </p>
      )}

    </div>
  );
}

export default SectionHeading;