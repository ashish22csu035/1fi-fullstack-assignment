import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  WalletCards,
  TrendingUp,
  Sparkles,
  ArrowDown,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import {
  ProductCardSkeleton,
} from "../components/LoadingSkeleton";
import ErrorState from "../components/ErrorState";

import { getProducts } from "../api/productApi";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getProducts();

      setProducts(response.data);
    } catch (err) {
      console.error(err);
      setError(
        "Unable to connect to our product service. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const scrollToProducts = () => {
    document
      .getElementById("products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      {/* HERO SECTION */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0">

          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />

        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-32">

          <div className="mx-auto max-w-4xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-light px-4 py-2 text-sm font-semibold text-primary">

              <Sparkles size={16} />

              <span>Smart purchases, smarter payments</span>

            </div>

            <h1 className="mt-7 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">

              Buy what you love.
              <span className="block bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                Pay your way.
              </span>

            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">

              Explore premium products and choose flexible EMI
              plans designed around your financial comfort.
              Transparent pricing. Simple decisions.

            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <button
                onClick={scrollToProducts}
                className="group flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-7 py-4 font-semibold text-white shadow-xl shadow-slate-900/20 transition hover:bg-primary"
              >
                Explore products

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />

              </button>

              <a
                href="#how-it-works"
                className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-primary hover:text-primary"
              >
                How it works

                <ArrowDown size={17} />

              </a>

            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-slate-600">

              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-500" />
                Transparent EMI plans
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-500" />
                Multiple payment tenures
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-500" />
                Instant plan comparison
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* TRUST BAR */}

      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

          <div className="flex items-center justify-center gap-3 px-6 py-6">
            <ShieldCheck className="text-primary" size={23} />

            <div>
              <p className="font-semibold text-slate-900">
                Secure & Transparent
              </p>

              <p className="text-xs text-slate-500">
                Clear pricing at every step
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 px-6 py-6">
            <Zap className="text-primary" size={23} />

            <div>
              <p className="font-semibold text-slate-900">
                Quick Plan Selection
              </p>

              <p className="text-xs text-slate-500">
                Compare options instantly
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 px-6 py-6">
            <WalletCards className="text-primary" size={23} />

            <div>
              <p className="font-semibold text-slate-900">
                Flexible EMIs
              </p>

              <p className="text-xs text-slate-500">
                Choose a tenure that suits you
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* PRODUCTS */}

      <section
        id="products"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

          <div>

            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Featured collection
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Find your next upgrade
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-slate-600">
              Browse our selection of premium smartphones
              and discover flexible payment plans.
            </p>

          </div>

          <div className="hidden text-sm text-slate-500 sm:block">
            {products.length > 0 &&
              `${products.length} products available`}
          </div>

        </div>


        <div className="mt-10">

          {loading && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {[1, 2, 3].map((item) => (
                <ProductCardSkeleton key={item} />
              ))}

            </div>
          )}


          {error && (
            <ErrorState
              title="Couldn't load products"
              message={error}
              onRetry={fetchProducts}
            />
          )}


          {!loading && !error && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                />
              ))}

            </div>
          )}

        </div>

      </section>


      {/* BENEFITS */}

      <section className="bg-slate-950 py-20 text-white">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Why choose flexible payments
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              More flexibility.
              <br />
              Better financial decisions.
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                <WalletCards size={24} />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Choose your tenure
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Compare multiple EMI durations and choose
                the payment timeline that fits your budget.
              </p>

            </div>


            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                <TrendingUp size={24} />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Understand your costs
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                See monthly payments, interest rates and
                cashback information before selecting a plan.
              </p>

            </div>


            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                <ShieldCheck size={24} />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Transparent information
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Every plan clearly displays the information
                you need to make a confident decision.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
      >

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Simple process
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            How it works
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
            A straightforward way to explore products
            and select a payment plan.
          </p>

        </div>


        <div className="relative mt-16 grid gap-10 md:grid-cols-3">

          <div className="text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-white shadow-lg shadow-primary/25">
              01
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Choose a product
            </h3>

            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
              Explore available products and select the
              variant you prefer.
            </p>

          </div>


          <div className="text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-white shadow-lg shadow-primary/25">
              02
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Compare EMI plans
            </h3>

            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
              Review tenure, monthly payments, interest
              and available cashback.
            </p>

          </div>


          <div className="text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-white shadow-lg shadow-primary/25">
              03
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Select your plan
            </h3>

            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
              Choose the option that works best for you
              and proceed.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-indigo-600 px-6 py-16 text-center text-white shadow-2xl sm:px-12">

          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">

            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to find your next upgrade?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Explore products and compare flexible EMI
              plans in one place.
            </p>

            <button
              onClick={scrollToProducts}
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-primary transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Browse products

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </section>


      <Footer />

    </div>
  );
}

export default Home;