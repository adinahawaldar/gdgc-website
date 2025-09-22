import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Floating shapes */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-purple-500/20 animate-spin-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-yellow-400/20 animate-spin-slow-reverse"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        {/* 404 Number */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-gradient bg-clip-text text-transparent mb-4 animate-bounce">
          404
        </h1>

        {/* Message */}
        <p className="text-xl md:text-2xl text-gray-700 mb-6 animate-fade-in delay-100">
          Oops! The page you are looking for doesn’t exist.
        </p>
        <p className="text-gray-500 mb-8 animate-fade-in delay-200">
          You may have mistyped the URL or the page may have moved.
        </p>

        {/* CTA Button */}
        <Link to="/">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all animate-fade-in delay-300">
            Go Back Home
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>

        {/* Optional Illustration / Decorative */}
        <div className="mt-12 animate-fade-in delay-400">
          <img
            src="https://images.unsplash.com/photo-1581090700227-77f0f5b72c32?auto=format&fit=crop&w=800&q=80"
            alt="Lost illustration"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Footer Hint */}
      <div className="absolute bottom-4 text-gray-400 text-sm animate-bounce">
        Check the URL or return to the homepage
      </div>
    </div>
  );
};

export default NotFound;
