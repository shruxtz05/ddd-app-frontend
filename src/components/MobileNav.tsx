import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <div className="md:hidden">
      <Sheet>
        {/* Animated Menu Icon */}
        <SheetTrigger>
          <Menu className="text-orange-500 w-8 h-8 cursor-pointer transition-transform hover:rotate-90 hover:scale-110" />
        </SheetTrigger>
        
        {/* Mobile Menu Container */}
        <SheetContent className="space-y-6 bg-white shadow-lg rounded-2xl p-6 text-orange-600 border border-gray-200">
          
          {/* Title Section */}
          <SheetTitle className="text-xl font-bold tracking-wide">
            {isAuthenticated ? (
              <div className="flex items-center gap-3 text-orange-600">
                <CircleUserRound className="w-7 h-7 text-orange-500" />
                {user?.email}
              </div>
            ) : (
              <span className="text-orange-600">
                Welcome to <span className="text-orange-500 font-extrabold">DailyDabbaDelivery</span> 🚀
              </span>
            )}
          </SheetTitle>

          <Separator className="border-gray-300 opacity-50" />

          {/* Navigation & Button */}
          <SheetDescription className="flex flex-col gap-6">
            {isAuthenticated ? (
              <MobileNavLinks />
            ) : (
              <Button
                
                onClick={() => loginWithRedirect()}
                className="w-full py-3 text-lg font-bold bg-orange-500 text-white hover:bg-orange-600 transition-all rounded-xl shadow-md"
              >
                Log In 🚀
              </Button>
            )}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
