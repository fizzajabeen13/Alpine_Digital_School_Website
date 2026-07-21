import { cn } from "@/lib/utils/cn";

type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "outline";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export default function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  const variants: Record<BadgeVariant, string> = {
    primary:
      "bg-blue-100 text-blue-800 border border-blue-200",

    secondary:
      "bg-yellow-100 text-yellow-800 border border-yellow-200",

    success:
      "bg-green-100 text-green-800 border border-green-200",

    warning:
      "bg-orange-100 text-orange-800 border border-orange-200",

    danger:
      "bg-red-100 text-red-800 border border-red-200",

    info:
      "bg-sky-100 text-sky-800 border border-sky-200",

    outline:
      "bg-transparent text-slate-700 border border-slate-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}