import { Link } from "react-router-dom";
import { PenTool } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Name (same as Navbar) */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-white"
          >
            <PenTool className="w-7 h-7 text-purple-600" />
            Skillfolio
          </Link>
          <p className="text-sm mt-2 text-gray-400">
            Create your best portfolio & resume effortlessly.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Plans & Pricing</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Skillfolio. All rights reserved.
      </div>
    </footer>
  );
}
