import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import logo from "../assets/logo1.png";

const Header = () => {
  return (
    <div>
      {/* Top Bar for Contact Info */}
      <div className="bg-orange-500 text-white text-sm py-2 px-8 flex justify-end gap-6">
        <a href="mailto:info@dailydabba.com" className="flex items-center gap-2 hover:underline">
          <FaEnvelope />
          <span>info@dailydabba.com</span>
        </a>
        <a href="tel:+919876543210" className="flex items-center gap-2 hover:underline">
          <FaPhoneAlt />
          <span>+91 9876543210</span>
        </a>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b-2 border-b-orange-500 py-4 relative bg-white">
        <div className="w-full mx-auto flex justify-between items-center px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Daily Dabba Delivery Logo" width="180" />
          </Link>

          {/* Login & Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <MainNav />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
