import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronRight,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  BadgeCheck,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGallery from "../components/ProductGallery";
import VariantSelector from "../components/VariantSelector";
import { ProductPageSkeleton } from "../components/LoadingSkeleton";
import ErrorState from "../components/ErrorState";
import EMIPlanList from "../components/EMIPlanList";
import PlanSummary from "../components/PlanSummary";

import { getProductBySlug } from "../api/productApi";

function ProductPage() {
  const { slug } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getProductBySlug(slug);

      setProduct(response.data);

      if (response.data?.variants?.length > 0) {
        setSelectedVariant(response.data.variants[0]);
      }
    } catch (err) {
      console.error(err);

      setError(
        "We couldn't find this product. Please check the URL or try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [slug]);

  const formatCurrency = (amount) => {
    if (!amount) return "₹0";

    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateDiscount = () => {
    if (!selectedVariant) return 0;

    const { mrp, price } = selectedVariant;

    if (!mrp || mrp <= price) return 0;

    return Math.round(((mrp - price) / mrp) * 100);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleProceed = () => {
    if (!selectedPlan) {
      alert("Please select an EMI plan first.");
      return;
    }

    alert(
      `Plan selected successfully!\n\nProduct: ${product.name}\nPlan: ${selectedPlan.tenure} month EMI`
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <ProductPageSkeleton />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />

        <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <ErrorState
            title="Product not found"
            message={error}
            onRetry={fetchProduct}
          />

          <Link
            to="/"
            className="mx-auto mt-8 block w-fit rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Back to products
          </Link>
        </main>
      </div>
    );
  }

  const discount = calculateDiscount();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}

        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link
            to="/"
            className="transition hover:text-primary"
          >
            Home
          </Link>

          <ChevronRight size={16} />

          <span>Products</span>

          <ChevronRight size={16} />

          <span className="max-w-[150px] truncate font-medium text-slate-900">
            {product.name}
          </span>
        </nav>

        {/* Main Product Section */}

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Product Gallery */}

          <div>
            <ProductGallery
              images={selectedVariant?.images || []}
              productName={product.name}
            />
          </div>

          {/* Product Details */}

          <div className="lg:pt-2">
            {/* Brand */}

            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              {product.brand}
            </p>

            {/* Product Name */}

            <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              {product.name}
            </h1>

            {/* Rating */}

            {product.rating && (
              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-sm font-semibold text-emerald-700">
                  <Star
                    size={15}
                    className="fill-emerald-600 text-emerald-600"
                  />

                  <span>{product.rating}</span>
                </div>

                <span className="text-sm text-slate-500">
                  {product.reviewCount
                    ? product.reviewCount.toLocaleString("en-IN")
                    : 0}{" "}
                  reviews
                </span>
              </div>
            )}

            {/* Description */}

            <p className="mt-6 leading-7 text-slate-600">
              {product.description || product.shortDescription}
            </p>

            {/* Price */}

            {selectedVariant && (
              <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex flex-wrap items-end gap-3">
                  <span className="text-3xl font-black text-slate-950">
                    {formatCurrency(selectedVariant.price)}
                  </span>

                  {selectedVariant.mrp > selectedVariant.price && (
                    <span className="text-sm text-slate-400 line-through">
                      {formatCurrency(selectedVariant.mrp)}
                    </span>
                  )}

                  {discount > 0 && (
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                      {discount}% OFF
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm text-slate-500">
                  Inclusive of all taxes
                </p>
              </div>
            )}

            {/* Variant Selector */}

            <div className="mt-8 border-t border-slate-200 pt-8">
              <VariantSelector
                variants={product.variants || []}
                selectedVariant={selectedVariant}
                onVariantChange={(variant) => {
                  setSelectedVariant(variant);
                  setSelectedPlan(null);
                }}
              />
            </div>

            {/* Trust Features */}

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <ShieldCheck
                  size={20}
                  className="text-primary"
                />

                <p className="mt-3 text-sm font-semibold text-slate-900">
                  Secure plans
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Transparent pricing
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <Truck
                  size={20}
                  className="text-primary"
                />

                <p className="mt-3 text-sm font-semibold text-slate-900">
                  Quick process
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Simple selection
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <RotateCcw
                  size={20}
                  className="text-primary"
                />

                <p className="mt-3 text-sm font-semibold text-slate-900">
                  Flexible choice
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Multiple tenures
                </p>
              </div>
            </div>

            {/* Selected Configuration */}

            {selectedVariant && (
              <div className="mt-8 rounded-2xl bg-slate-900 p-5 text-white">
                <div className="flex items-center gap-2 text-purple-300">
                  <BadgeCheck size={19} />

                  <span className="text-sm font-semibold">
                    Selected configuration
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  {selectedVariant.storage && (
                    <div>
                      <p className="text-xs text-slate-400">
                        Storage
                      </p>

                      <p className="mt-1 font-semibold">
                        {selectedVariant.storage}
                      </p>
                    </div>
                  )}

                  {selectedVariant.color && (
                    <div>
                      <p className="text-xs text-slate-400">
                        Color
                      </p>

                      <p className="mt-1 font-semibold">
                        {selectedVariant.color}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* EMI PLANS SECTION */}

        <section className="mt-20 border-t border-slate-200 pt-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
            {/* Left Side */}

            <div>
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-widest text-primary">
                  Flexible payments
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-950">
                  Choose your EMI plan
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Compare flexible payment options and choose the plan
                  that works best for your budget.
                </p>
              </div>

              {/* EMI Plans */}

              <div className="mt-8">
                <EMIPlanList
                  plans={selectedVariant?.emiPlans || []}
                  productPrice={selectedVariant?.price || 0}
                  selectedPlan={selectedPlan}
                  onSelectPlan={handlePlanSelect}
                />
              </div>
            </div>

            {/* Right Side - Plan Summary */}

            <div>
              <PlanSummary
                product={product}
                variant={selectedVariant}
                selectedPlan={selectedPlan}
                onProceed={handleProceed}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ProductPage;