import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-800">Optica</Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-[16px] font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="hover:text-blue-600">
              {link.name}
            </Link>
          ))}

          {/* Contact Button */}
          <Link
            to="/contact"
            className="ml-4 px-4 py-1 border border-blue-700 text-blue-700 rounded hover:bg-blue-700 hover:text-white transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 px-4 py-2 border border-blue-700 text-blue-700 rounded text-center hover:bg-blue-700 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
