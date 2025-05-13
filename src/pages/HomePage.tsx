import landingImage from "../assets/mobile.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import OrderSteps from "@/components/OrderSteps";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import WhyDailyDabba from "@/components/why";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12 px-6 md:px-32 py-8">
      
      {/* Header Section with Animation */}
      <motion.div
        className="bg-white rounded-lg shadow-md py-6 px-4 flex flex-col gap-3 text-center border-2 border-orange-500"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.h1
          className="text-4xl font-bold tracking-tight text-orange-600 drop-shadow-sm"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tuck into a takeaway today
        </motion.h1>
        <motion.span
          className="text-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meal is just a click away!
        </motion.span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </motion.div>

      <WhyDailyDabba />

      <OrderSteps />

      {/* Image Section with Animations */}
      <div className="grid md:grid-cols-2 gap-5 items-center">
        
        {/* Landing Image with Entrance Animation */}
        <motion.img
          src={landingImage}
          alt="Delicious meal landing"
          className="rounded-lg shadow-md w-3/4 h-60 object-contain"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.08, rotate: 2 }}
        />

        {/* App Download Section */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="font-bold text-2xl tracking-tighter"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Order takeaway even faster!
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Download the <strong>Daily Dabba Delivery</strong> App for faster ordering and personalized recommendations.
          </motion.span>

          {/* App Download Image with Animation */}
          <motion.img
            src={appDownloadImage}
            alt="App download options"
            className="rounded-lg shadow-md w-3/4 h-60 object-contain"
            whileHover={{ scale: 1.1, rotate: -2 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
