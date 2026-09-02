import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Star,
  BadgeIndianRupee,
} from "lucide-react";

function ProductCard({ product }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const discount = Math.round(
    ((product.originalPrice - product.startingPrice) /
      product.originalPrice) *
      100
  );

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200"
    >

      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">

        {product.badge && (
          <div className="absolute left-4 top-4 z-10 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-bold tracking-wide text-white">
            {product.badge}
          </div>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition group-hover:bg-primary group-hover:text-white">
          <ArrowUpRight size={18} />
        </div>

      </div>

      <div className="p-5">

        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          {product.brand}
        </p>

        <h3 className="mt-1 text-lg font-bold text-slate-900">
          {product.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
          {product.shortDescription}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm">
          <Star
            size={16}
            className="fill-amber-400 text-amber-400"
          />

          <span className="font-semibold text-slate-800">
            {product.rating}
          </span>

          <span className="text-slate-400">
            ({product.reviewCount} reviews)
          </span>
        </div>

        <div className="mt-5 border-t border-slate-100 pt-4">

          <div className="flex items-end justify-between">

            <div>
              <p className="text-xs text-slate-500">
                Starting from
              </p>

              <p className="mt-1 text-xl font-bold text-slate-900">
                {formatCurrency(product.startingPrice)}
              </p>

              <p className="mt-1 text-xs text-slate-400 line-through">
                {formatCurrency(product.originalPrice)}
              </p>
            </div>

            {discount > 0 && (
              <div className="rounded-lg bg-emerald-50 px-2.5 py-2 text-right">
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                  <BadgeIndianRupee size={13} />
                  Save {discount}%
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </Link>
  );
}

export default ProductCard;