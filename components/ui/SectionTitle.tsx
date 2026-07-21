import { cn } from "@/lib/utils/cn";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(center && "text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-yellow-700">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-extrabold text-slate-950 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}