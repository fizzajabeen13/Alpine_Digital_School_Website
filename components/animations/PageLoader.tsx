import LoadingSpinner from "./LoadingSpinner";

type PageLoaderProps = {
  text?: string;
};

export default function PageLoader({
  text = "Loading...",
}: PageLoaderProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <LoadingSpinner size="lg" />

      <p className="text-sm font-semibold text-slate-600">
        {text}
      </p>
    </div>
  );
}