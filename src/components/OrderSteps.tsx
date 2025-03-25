import { motion } from "framer-motion";
import { FaListAlt, FaUtensils, FaCreditCard, FaTruck } from "react-icons/fa";

const steps = [
  { id: 1, title: "Choose Your Plan", icon: <FaListAlt size={36} /> },
  { id: 2, title: "Select Menu", icon: <FaUtensils size={36} /> },
  { id: 3, title: "Place an Order", icon: <FaCreditCard size={36} /> },
  { id: 4, title: "Delivery", icon: <FaTruck size={36} /> },
];

const OrderSteps = () => {
  return (
    <motion.div
      className="text-center py-16 bg-white shadow-lg rounded-xl border-t-4 border-orange-600 mx-4 md:mx-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-4xl font-extrabold text-orange-700 mb-12 tracking-tight"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        How To Order A Meal
      </motion.h2>

      {/* Step Container */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10 relative">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex flex-col items-center relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            {/* Icon Container */}
            <motion.div
              className="w-20 h-20 flex items-center justify-center rounded-full text-white bg-orange-500 shadow-xl border-4 border-orange-700"
              whileHover={{ rotate: 10 }}
            >
              {step.icon}
            </motion.div>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <motion.div
                className="absolute top-10 left-24 md:left-auto md:top-auto md:bottom-10 md:w-20 md:h-1 bg-gray-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              ></motion.div>
            )}

            {/* Step Title */}
            <p className="mt-4 text-lg font-semibold text-gray-800">{step.title}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OrderSteps;
