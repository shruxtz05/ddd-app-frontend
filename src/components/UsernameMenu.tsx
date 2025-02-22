import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const UsernameMenu = () => {
  const { isAuthenticated, user, logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  if (!isAuthenticated) return null; // Hide if not logged in

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (!document.getElementById("dropdown-menu")?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="relative">
      {/* User Icon & Email */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevents closing immediately
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-2 font-bold text-orange-500"
      >
        <CircleUserRound className="text-orange-500" />
        {user?.email}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          id="dropdown-menu"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border z-50"
        >
          <Link
            to="/user-profile"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={() => setIsOpen(false)} // Close on navigation
          >
            User Profile
          </Link>
          <Button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
          >
            Log Out
          </Button>
        </div>
      )}
    </div>
  );
};

export default UsernameMenu;
