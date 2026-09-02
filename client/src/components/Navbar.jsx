import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? "text-primary"
        : "text-slate-600 hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
            <Sparkles size={18} />
          </div>

          <div>
            <p className="text-xl font-bold tracking-tight text-slate-900">
              1Fi
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <a
            href="#products"
            className="text-sm font-medium text-slate-600 transition hover:text-primary"
          >
            Products
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 transition hover:text-primary"
          >
            How it works
          </a>
        </nav>

        <div className="hidden md:block">
          <a
            href="#products"
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary"
          >
            Explore products
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-5 md:hidden">
          <nav className="flex flex-col gap-5">

            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <a
              href="#products"
              className="text-sm font-medium text-slate-600"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-600"
              onClick={() => setIsOpen(false)}
            >
              How it works
            </a>

            <a
              href="#products"
              className="rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Explore products
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;