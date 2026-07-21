import { cn } from "@/lib/utils/cn";

type FormWrapperProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
};

export default function FormWrapper({
  children,
  title,
  description,
  className,
  onSubmit,
}: FormWrapperProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8",
        className,
      )}
    >
      {(title || description) && (
        <div className="mb-8">
          {title && (
            <h2 className="text-3xl font-extrabold text-slate-950">
              {title}
            </h2>
          )}

          {description && (
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="grid gap-5">{children}</div>
    </form>
  );
}