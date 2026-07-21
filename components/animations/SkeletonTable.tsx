type SkeletonTableProps = {
  rows?: number;
  columns?: number;
};

export default function SkeletonTable({
  rows = 5,
  columns = 4,
}: SkeletonTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <div className="grid border-b border-slate-200 bg-slate-50 p-4">
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: columns }).map((_, index) => (
            <div
              key={index}
              className="h-4 animate-pulse rounded-full bg-slate-200"
            />
          ))}
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="p-4">
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
              }}
            >
              {Array.from({ length: columns }).map((_, columnIndex) => (
                <div
                  key={columnIndex}
                  className="h-4 animate-pulse rounded-full bg-slate-200"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}