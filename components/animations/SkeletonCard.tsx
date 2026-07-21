import { cn } from "@/lib/utils/cn";

type SkeletonCardProps = {
  className?: string;
};

export default function SkeletonCard({ className }: SkeletonCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",
        className,
      )}
    >
      <div className="h-48 animate-pulse rounded-2xl bg-slate-200" />

      <div className="mt-6 space-y-3">
        <div className="h-4 w-24 animate-pulse rounded-full bg-slate-200" />
        <div className="h-5 w-3/4 animate-pulse rounded-full bg-slate-200" />
        <div className="h-4 w-full animate-pulse rounded-full bg-slate-200" />
        <div className="h-4 w-2/3 animate-pulse rounded-full bg-slate-200" />
      </div>
    </div>
  );
}