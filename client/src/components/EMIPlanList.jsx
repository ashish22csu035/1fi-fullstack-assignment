import EMIPlanCard from "./EMIPlanCard";

function EMIPlanList({
  plans = [],
  productPrice,
  selectedPlan,
  onSelectPlan,
}) {
  if (!plans || plans.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
        <p className="font-semibold text-slate-700">
          No EMI plans available for this configuration.
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Please try selecting another product variant.
        </p>
      </div>
    );
  }

  // Recommend the longest 0% interest plan.
  const zeroInterestPlans = plans.filter(
    (plan) => Number(plan.interestRate) === 0
  );

  const recommendedPlan =
    zeroInterestPlans.length > 0
      ? zeroInterestPlans.reduce((best, plan) =>
          plan.tenure > best.tenure ? plan : best
        )
      : plans[0];

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {plans.map((plan, index) => (
        <EMIPlanCard
          key={plan._id || `${plan.tenure}-${index}`}
          plan={plan}
          productPrice={productPrice}
          isSelected={
            selectedPlan?._id
              ? selectedPlan._id === plan._id
              : selectedPlan?.tenure === plan.tenure
          }
          onSelect={onSelectPlan}
          isRecommended={
            recommendedPlan?._id
              ? recommendedPlan._id === plan._id
              : recommendedPlan?.tenure === plan.tenure
          }
        />
      ))}
    </div>
  );
}

export default EMIPlanList;