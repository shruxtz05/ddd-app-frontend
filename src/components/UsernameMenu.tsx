import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
        <CircleUserRound className="text-orange-500" />
        {user?.email}
      </DropdownMenuTrigger>

      {/* Dropdown Content */}
      <DropdownMenuContent className="bg-white shadow-lg border rounded-md w-48">
        <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100">
          <Link to="/manage-restaurant" className="font-bold text-gray-700">
            Manage Restaurant
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100">
          <Link to="/user-profile" className="font-bold text-gray-700">
            User Profile
          </Link>
        </DropdownMenuItem>

        <Separator />

        <DropdownMenuItem className="px-4 py-2">
          <Button
            onClick={() => logout()}
            className="w-full bg-orange-500 text-white font-bold py-2 rounded-md hover:bg-orange-600"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu; 
