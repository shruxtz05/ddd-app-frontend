import { motion } from "framer-motion";
import { FaLeaf, FaBox, FaMapMarkerAlt, FaClipboardCheck, FaHome, FaCreditCard } from "react-icons/fa";

const features = [
  { id: 1, title: "Assurance of Fresh Ingredients", icon: <FaLeaf size={30} />, description: "We ensure that every meal is made from the freshest ingredients, with no preservatives or artificial colors." },
  { id: 2, title: "Good Packaging & Hygiene", icon: <FaBox size={30} />, description: "Our meal is packed in high-quality, BPA-free, and eco-friendly containers, maintaining hygiene and safety." },
  { id: 3, title: "Available in Your Area", icon: <FaMapMarkerAlt size={30} />, description: "We deliver across multiple cities, ensuring you get your favorite tiffin services wherever you are." },
  { id: 4, title: "Easy Ordering & Cancellation", icon: <FaClipboardCheck size={30} />, description: "Order with just a few clicks, and cancel hassle-free whenever required—your convenience matters." },
  { id: 5, title: "Ghar Ka Khana", icon: <FaHome size={30} />, description: "Enjoy homemade-style meals that bring the comfort of home-cooked meal, fresh and delicious every day." },
  { id: 6, title: "Simple & Secure Payment", icon: <FaCreditCard size={30} />, description: "Multiple payment options with secure transactions, making checkout fast and stress-free." },
];

const WhyDailyDabba = () => {
  return (
    <motion.div 
      className="py-12 px-6 md:px-32 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-orange-600 mb-8">Why Daily Dabba Delivery?</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center border-t-4 border-orange-500"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-orange-500 mb-3">{feature.icon}</div>
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyDailyDabba;
