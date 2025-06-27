import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/" },
    { label: "Contact", path: "/" },
  ];

  return (
    <header className="bg-slate-600/10  shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-indigo-600 hover:text-indigo-700">
          <Link to="/">Logo</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Register
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white shadow">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="block text-gray-700 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-200 flex flex-col gap-2">
            <Link
              to="/login"
              className="px-4 py-2 border border-indigo-600 hover:text-indigo-400 text-indigo-600 rounded"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-indigo-600 hover:text-indigo-400 text-white rounded"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
