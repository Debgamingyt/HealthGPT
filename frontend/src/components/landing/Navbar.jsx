import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          HealthGPT
        </Link>

        <div className="flex items-center gap-8 text-gray-700">

          <a href="#home" className="hover:text-blue-600">
            Home
          </a>

          <a href="#features" className="hover:text-blue-600">
            Features
          </a>

          <a href="#tech" className="hover:text-blue-600">
            Tech Stack
          </a>

          <Link
            to="/pricing"
            className="hover:text-blue-600"
          >
            Pricing
          </Link>

          <Link
            to="/login"
            className="hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;