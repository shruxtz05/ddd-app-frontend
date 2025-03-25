import landingImage from "../assets/landing.png";
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
      <motion.div
        className="bg-white rounded-lg shadow-md py-6 px-4 flex flex-col gap-3 text-center border-2 border-orange-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-orange-600 drop-shadow-sm">
          Tuck into a takeaway today
        </h1>
        <span className="text-lg">meal is just a click away!</span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </motion.div>

      <WhyDailyDabba />

      <OrderSteps />

    
      <div className="grid md:grid-cols-2 gap-5 items-center">
        
        <motion.img
          src={landingImage}
          alt="Delicious meal landing"
          className="rounded-lg shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

      
        <motion.div
          className="flex flex-col items-center justify-center gap-4 text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="font-bold text-2xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the <strong>Daily Dabba Delivery</strong> App for faster ordering and personalized recommendations.
          </span>
          <motion.img
            src={appDownloadImage}
            alt="App download options"
            className="w-56"
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
