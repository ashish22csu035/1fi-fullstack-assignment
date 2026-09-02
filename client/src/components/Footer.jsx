import { Sparkles, Code2, ArrowUpRight } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-20 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Sparkles size={19} />
              </div>

              <span className="text-2xl font-bold">
                1Fi
              </span>
            </div>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Smart purchases powered by flexible EMI plans.
              Choose your product, select a plan, and make
              your next purchase more affordable.
            </p>
          </div>


          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">

              <a
                href="#products"
                className="transition hover:text-white"
              >
                Products
              </a>

              <a
                href="#how-it-works"
                className="transition hover:text-white"
              >
                How it works
              </a>

              <button
                onClick={scrollToTop}
                className="w-fit text-left transition hover:text-white"
              >
                Back to top
              </button>

            </div>
          </div>


          {/* Project Info */}
          <div>
            <h3 className="font-semibold text-white">
              Assignment Project
            </h3>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Built as part of the 1Fi Full Stack Developer
              technical assignment using modern full-stack
              web technologies.
            </p>

            <div className="mt-5 flex gap-4">

              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800"
                title="Full Stack Project"
              >
                <Code2 size={17} />
              </div>

              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800"
                title="1Fi Assignment"
              >
                <ArrowUpRight size={17} />
              </div>

            </div>
          </div>

        </div>


        {/* Bottom Footer */}
        <div className="mt-14 border-t border-slate-800 pt-6 text-sm text-slate-500">

          © {new Date().getFullYear()} 1Fi Assignment Project.
          Built with React, Node.js, Express and MongoDB.

        </div>

      </div>
    </footer>
  );
}

export default Footer;