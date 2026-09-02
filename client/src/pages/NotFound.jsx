import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="text-gray-500">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="rounded-lg bg-primary px-5 py-3 font-medium text-white"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;