interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <>
      {subtitle && (
        <p className="font-mono uppercase tracking-[0.4em] text-green-500 text-sm">
          {subtitle}
        </p>
      )}

      <h1 className="mt-3 text-4xl md:text-5xl font-bold">
        {title}
      </h1>
    </>
  );
}