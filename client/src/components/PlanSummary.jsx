import { ArrowRight, ShieldCheck, Gift } from "lucide-react";

function PlanSummary({
  product,
  variant,
  selectedPlan,
  onProceed,
}) {
  if (!product || !variant || !selectedPlan) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <p className="text-sm text-slate-500">
          Select an EMI plan to see your payment summary.
        </p>
      </div>
    );
  }

  const calculateEMI = () => {
    const principal = variant.price;
    const months = selectedPlan.tenure;
    const annualRate = selectedPlan.interestRate || 0;

    if (annualRate === 0) {
      return Math.round(principal / months);
    }

    const monthlyRate = annualRate / 12 / 100;

    const emi =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    return Math.round(emi);
  };

  const monthlyEMI = calculateEMI();

  const totalPayable = monthlyEMI * selectedPlan.tenure;

  const interestAmount = Math.max(
    totalPayable - variant.price,
    0
  );

  const cashback = selectedPlan.cashback || 0;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="sticky top-24 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
      
      <div className="bg-slate-950 p-6 text-white">
        <p className="text-sm text-slate-400">
          Your selected plan
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          {selectedPlan.tenure} month EMI
        </h3>

        <p className="mt-2 text-sm text-purple-300">
          {selectedPlan.interestRate === 0
            ? "0% interest financing"
            : `${selectedPlan.interestRate}% annual interest`}
        </p>
      </div>

      <div className="p-6">

        {/* Product */}
        <div className="flex gap-4 border-b border-slate-100 pb-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100 p-2">
            <img
              src={variant.images?.[0]}
              alt={product.name}
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <p className="font-semibold text-slate-900">
              {product.name}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {variant.storage} {variant.color && `• ${variant.color}`}
            </p>
          </div>
        </div>

        {/* EMI */}
        <div className="mt-5 rounded-2xl bg-purple-50 p-4">
          <p className="text-sm text-slate-600">
            Monthly EMI
          </p>

          <p className="mt-1 text-3xl font-black text-primary">
            {formatCurrency(monthlyEMI)}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            for {selectedPlan.tenure} months
          </p>
        </div>

        {/* Breakdown */}
        <div className="mt-6 space-y-4 text-sm">

          <div className="flex justify-between">
            <span className="text-slate-500">
              Product price
            </span>

            <span className="font-semibold text-slate-900">
              {formatCurrency(variant.price)}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">
              Interest
            </span>

            <span className="font-semibold text-slate-900">
              {formatCurrency(interestAmount)}
            </span>
          </div>

          {cashback > 0 && (
            <div className="flex justify-between text-emerald-600">
              <span className="flex items-center gap-1">
                <Gift size={15} />
                Cashback
              </span>

              <span className="font-semibold">
                -{formatCurrency(cashback)}
              </span>
            </div>
          )}

          <div className="border-t border-slate-200 pt-4">
            <div className="flex justify-between">
              <span className="font-semibold text-slate-900">
                Total payable
              </span>

              <span className="text-lg font-bold text-slate-950">
                {formatCurrency(totalPayable)}
              </span>
            </div>
          </div>

        </div>

        {/* CTA */}
        <button
          onClick={onProceed}
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 font-bold text-white transition hover:opacity-90 active:scale-[0.98]"
        >
          Proceed with this plan
          <ArrowRight size={18} />
        </button>

        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500">
          <ShieldCheck size={15} className="text-emerald-600" />
          Secure and transparent financing
        </div>

      </div>
    </div>
  );
}

export default PlanSummary;