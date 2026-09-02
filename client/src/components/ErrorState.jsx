import { AlertCircle, RefreshCw } from "lucide-react";

function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load the requested information.",
  onRetry,
}) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-red-100 bg-red-50 p-8 text-center">

      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600">
        <AlertCircle size={28} />
      </div>

      <h2 className="mt-5 text-xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary"
        >
          <RefreshCw size={17} />
          Try Again
        </button>
      )}

    </div>
  );
}

export default ErrorState;