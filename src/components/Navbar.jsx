import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Resume", path: "/resume" },
    { name: "ATS Score", path: "/ats score" },
    { name: "FAQ", path: "#faq", type: "anchor" },
    { name: "Login", path: "/login" },
    { name: "Sign Up", path: "/signup" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with PenTool icon */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <PenTool className="w-7 h-7 text-purple-600" />
          Skillfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`relative hover:text-purple-400 transition-colors duration-300 ${
                link.name === "Sign Up"
                  ? "bg-purple-700 px-4 py-2 rounded-lg"
                  : ""
              }`}
            >
              {link.name}
              {link.badge && (
                <span className="absolute top-0 -right-2 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute right-6 top-16 bg-gray-800 shadow-lg w-40 overflow-hidden z-50"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="relative hover:text-purple-400 transition-colors duration-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name === "Sign Up" ? (
                    <span className="bg-purple-700 px-1 py-1 rounded-lg">
                      {link.name}
                    </span>
                  ) : (
                    link.name
                  )}
                  {link.badge && (
                    <span className="absolute top-1 left-16 w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
