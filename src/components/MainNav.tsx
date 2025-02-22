import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu"; // Import the dropdown component

const MainNav: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="hidden md:flex space-x-4 items-center">
      {isAuthenticated ? (
        <UsernameMenu /> // Show dropdown when logged in
      ) : (
        <Button
          variant="ghost"
          className="font-bold text-orange-500 hover:text-orange-600 hover:bg-white"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </div>
  );
};

export default MainNav;
