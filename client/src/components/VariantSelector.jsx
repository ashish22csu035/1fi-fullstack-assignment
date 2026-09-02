function VariantSelector({
  variants = [],
  selectedVariant,
  onVariantChange,
}) {
  if (!variants || variants.length === 0) {
    return null;
  }

  const hasStorage = variants.some(
    (variant) => variant.storage
  );

  const hasColor = variants.some(
    (variant) => variant.color
  );

  return (
    <div className="space-y-6">

      {/* Variant Heading */}
      <div>
        <p className="text-sm font-semibold text-slate-900">
          Choose your variant
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Select the configuration that suits you best.
        </p>
      </div>


      {/* Variant Cards */}
      <div className="grid gap-3 sm:grid-cols-2">

        {variants.map((variant) => {
          const isSelected =
            selectedVariant?._id === variant._id;

          return (
            <button
              key={variant._id}
              onClick={() => onVariantChange(variant)}
              className={`relative rounded-2xl border-2 p-4 text-left transition ${
                isSelected
                  ? "border-primary bg-primary-light shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >

              {isSelected && (
                <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                  ✓
                </div>
              )}

              {variant.storage && (
                <p className="text-sm font-bold text-slate-900">
                  {variant.storage}
                </p>
              )}

              {variant.color && (
                <p className="mt-1 text-sm text-slate-500">
                  {variant.color}
                </p>
              )}

              <p className="mt-3 text-base font-bold text-slate-900">
                ₹{variant.price.toLocaleString("en-IN")}
              </p>

              {variant.mrp > variant.price && (
                <p className="mt-1 text-xs text-slate-400 line-through">
                  ₹{variant.mrp.toLocaleString("en-IN")}
                </p>
              )}

            </button>
          );
        })}

      </div>

    </div>
  );
}

export default VariantSelector;