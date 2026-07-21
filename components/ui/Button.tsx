import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  disabled = false,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-bold transition disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary: "bg-blue-950 text-white hover:bg-blue-900",
    secondary: "bg-yellow-600 text-white hover:bg-yellow-700",
    outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
    ghost: "text-slate-700 hover:bg-slate-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}