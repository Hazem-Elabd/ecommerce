function SkeletonCard() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="h-72 bg-slate-200"></div>

      <div className="space-y-4 p-5">
        <div className="h-4 w-24 rounded bg-slate-200"></div>

        <div className="h-6 rounded bg-slate-200"></div>

        <div className="h-6 w-3/4 rounded bg-slate-200"></div>

        <div className="h-4 w-20 rounded bg-slate-200"></div>

        <div className="mt-6 flex items-center justify-between">
          <div className="h-8 w-20 rounded bg-slate-200"></div>

          <div className="h-12 w-12 rounded-xl bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
