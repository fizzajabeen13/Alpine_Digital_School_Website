import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md shadow-lg">
      <nav className="flex flex-wrap items-center gap-2 text-sm">
        <Link
          href="/"
          className="flex items-center gap-2 text-white/80 transition-all duration-300 hover:text-white"
        >
          <Home size={16} strokeWidth={2} />
          <span>Home</span>
        </Link>

        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <ChevronRight
              size={15}
              strokeWidth={2}
              className="text-white/40"
            />

            {item.href ? (
              <Link
                href={item.href}
                className="text-white/80 transition-all duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-white">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}