function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">

      <div className="aspect-[4/3] animate-pulse bg-slate-200" />

      <div className="space-y-4 p-5">

        <div className="h-3 w-20 animate-pulse rounded bg-slate-200" />

        <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />

        <div className="h-4 w-full animate-pulse rounded bg-slate-100" />

        <div className="h-4 w-2/3 animate-pulse rounded bg-slate-100" />

        <div className="h-10 w-1/2 animate-pulse rounded bg-slate-200" />

      </div>

    </div>
  );
}

function ProductPageSkeleton() {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-4 py-10 sm:px-6 lg:px-8">

      <div className="grid gap-10 lg:grid-cols-2">

        <div className="aspect-square rounded-3xl bg-slate-200" />

        <div className="space-y-6">

          <div className="h-5 w-24 rounded bg-slate-200" />

          <div className="h-12 w-3/4 rounded bg-slate-200" />

          <div className="h-6 w-1/2 rounded bg-slate-200" />

          <div className="h-32 rounded-2xl bg-slate-100" />

          <div className="h-40 rounded-2xl bg-slate-100" />

        </div>

      </div>

    </div>
  );
}

export { ProductCardSkeleton, ProductPageSkeleton };