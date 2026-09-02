import { CheckCircle, Zap, Gift } from "lucide-react";

function EMIPlanCard({
  plan,
  productPrice,
  isSelected,
  onSelect,
  isRecommended,
}) {
  const calculateEMI = () => {
    const principal = productPrice;
    const months = plan.tenure;
    const annualRate = plan.interestRate || 0;

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

  const totalPayable = monthlyEMI * plan.tenure;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <button
      type="button"
      onClick={() => onSelect(plan)}
      className={`relative w-full overflow-hidden rounded-2xl border-2 p-5 text-left transition-all duration-300 ${
        isSelected
          ? "border-primary bg-purple-50 shadow-lg"
          : "border-slate-200 bg-white hover:-translate-y-1 hover:border-purple-200 hover:shadow-md"
      }`}
    >
      {isRecommended && (
        <div className="absolute right-0 top-0 rounded-bl-xl bg-primary px-3 py-1.5 text-xs font-bold text-white">
          Best Value
        </div>
      )}

      {isSelected && (
        <div className="absolute left-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
          <CheckCircle size={16} />
        </div>
      )}

      <div className={`${isSelected ? "ml-9" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-bold text-slate-950">
              {plan.tenure} Months
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Flexible monthly payment
            </p>
          </div>

          {plan.interestRate === 0 ? (
            <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-600">
              <Zap size={14} />
              0% Interest
            </div>
          ) : (
            <div className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-600">
              {plan.interestRate}% Interest
            </div>
          )}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 border-y border-slate-100 py-4">
          <div>
            <p className="text-xs text-slate-500">
              Monthly EMI
            </p>

            <p className="mt-1 text-xl font-black text-slate-950">
              {formatCurrency(monthlyEMI)}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Total Payable
            </p>

            <p className="mt-1 text-lg font-bold text-slate-900">
              {formatCurrency(totalPayable)}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-slate-500">
            {plan.tenure} easy installments
          </span>

          {plan.cashback > 0 && (
            <div className="flex items-center gap-1 text-sm font-semibold text-emerald-600">
              <Gift size={15} />
              ₹{plan.cashback.toLocaleString("en-IN")} cashback
            </div>
          )}
        </div>
      </div>
    </button>
  );
}

export default EMIPlanCard;