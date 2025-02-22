import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import UsernameMenu from "./UsernameMenu";
import MainNav from "./MainNav"; // ✅ Import MainNav (Full-Screen Login Button)
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="border-b-2 border-b-orange-500 py-6 relative">
      <div className="w-full mx-auto flex justify-between items-center px-8">
        {/* Website Logo */}
        <Link to="/" className="text-3xl font-bold tracking-tight text-orange-500">
          DailyDabbaDelivery.com
        </Link>

        {/* ✅ Full-Screen Login Button (from MainNav) */}
        <div className="hidden md:flex items-center gap-4">
          <MainNav /> 
        </div>

        {/* ✅ Mobile Navigation - Show only on mobile */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
