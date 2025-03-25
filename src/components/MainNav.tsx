import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";
import { FaHome, FaClipboardList } from "react-icons/fa";
 
const MainNav: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="flex justify-between items-center w-full px-6 py-2 bg-white shadow-md text-sm">
      <div className="flex space-x-6">
      <Link to="/" className="flex items-center space-x-1 font-bold text-gray-700 hover:text-orange-500">
  <FaHome className="text-orange-500" size={16} />
  <span>Home</span>
</Link>

        <Link to="/about" className="flex items-center space-x-1 font-bold text-gray-700 hover:text-orange-500">
          <FaHome className="text-orange-500" size={16} />
          <span>About Us</span>
        </Link>

        <Link to="/order-status" className="flex items-center space-x-1 font-bold text-gray-700 hover:text-orange-500">
          <FaClipboardList className="text-orange-500" size={16} />
          <span>Order Status</span>
        </Link>
      </div>

    
      <div className="flex items-center space-x-3">
        {isAuthenticated ? (
          <div className="flex items-center space-x-1 font-bold text-gray-700">
            <UsernameMenu />
          </div>
        ) : (
          <Button 
            variant="ghost"
            className="text-orange-500 hover:text-orange-600 font-bold"
            onClick={async () => await loginWithRedirect()}
          >
            Log In
          </Button>
        )}
      </div>
    </div>
  );
};

export default MainNav;
