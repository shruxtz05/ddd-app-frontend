import { motion } from "framer-motion";
import hero from "../assets/hero.png";

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
            {/* Left Content */}
            
            <motion.div 
                className="md:w-1/2 text-left"
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-orange-600 leading-tight">
                    India’s Best <br /> Online Tiffin Service
                </h1>
                <p className="text-lg text-gray-700 mt-4">
                    Enjoy homemade, nutritious, and delicious meals delivered straight to your doorstep. <br />
                    "Ghar ka khana, just the way you want!"
                </p>
                <motion.button 
                    className="mt-6 bg-orange-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                 <a href="http://localhost:5173/about">About Page</a> 
                   
                </motion.button>
            </motion.div>
            
            {/* Right Image */}
            <motion.div 
                className="md:w-1/2 flex justify-end mt-8 md:mt-0"
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
                <img src={hero} className="w-[90%] md:w-[80%] lg:w-[70%] object-contain" alt="Tiffin Meal" />
            </motion.div>
        </div>
    );
};

export default Hero;
