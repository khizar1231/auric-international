import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-8xl font-extrabold text-blue-600">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-500 max-w-lg">
        Sorry, the page you're looking for doesn't exist or may have been
        moved.
      </p>

      <Link
        to="/"
        className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;