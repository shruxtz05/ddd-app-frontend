import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import tiffinImage1 from "../assets/tiffin-1796180_1280 (2).jpg";
import Header from "@/components/Header";

const AboutUs = () => {
  return (
    <div><Header/><div className="flex flex-col md:flex-row items-center justify-center p-10 bg-gray-50 min-h-screen">
    
      {/* Image Section */}
      <motion.div
        className="md:w-1/3 w-full flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={tiffinImage1}
          alt="Tiffin Service"
          className="rounded-lg w-4/5 md:w-full h-auto object-cover shadow-lg"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="md:w-2/3 w-full bg-white shadow-lg rounded-xl p-8 md:ml-10 mt-10 md:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-orange-600 mb-4">About Daily Dabba Delivery</h1>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-bold text-orange-500">Daily Dabba Delivery</span> is your go-to platform for delicious, homemade tiffins delivered straight to your doorstep. Whether you're a busy professional, a student, or a family looking for nutritious meals, we've got you covered.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          We partner with trusted home chefs and tiffin providers to ensure every meal is fresh, hygienic, and full of authentic flavors. With a seamless ordering process, multiple meal plans, and doorstep delivery, your daily meals are just a click away!
        </p>

        {/* Features Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-orange-500">Why Choose Us?</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center">
              <FaCheckCircle className="text-orange-500 mr-2" />
              Curated home-cooked meals
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-orange-500 mr-2" />
              Hassle-free daily ordering
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-orange-500 mr-2" />
              Affordable pricing & flexible plans
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-orange-500 mr-2" />
              Hygiene and quality assurance
            </li>
          </ul>
        </div>

        {/* Testimonials */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-orange-500">What Our Customers Say</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <motion.div className="bg-gray-100 p-4 rounded-lg shadow-md" whileHover={{ scale: 1.03 }}>
              <p className="text-gray-700 italic">"The best tiffin service in town! Super fresh and delicious meals every day!"</p>
              <span className="block text-right font-semibold">- Priya S.</span>
            </motion.div>
            <motion.div className="bg-gray-100 p-4 rounded-lg shadow-md" whileHover={{ scale: 1.03 }}>
              <p className="text-gray-700 italic">"Reliable, hygienic, and tasty. Just like homemade meal!"</p>
              <span className="block text-right font-semibold">- Rohit M.</span>
            </motion.div>
            <motion.div className="bg-gray-100 p-4 rounded-lg shadow-md" whileHover={{ scale: 1.03 }}>
              <p className="text-gray-700 italic">"Affordable meal plans with great variety. Highly recommended!"</p>
              <span className="block text-right font-semibold">- Anjali D.</span>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
          >
            Explore Meals
          </Link>
        </div>
      </motion.div>
    </div></div>
    
  );
};

export default AboutUs;
