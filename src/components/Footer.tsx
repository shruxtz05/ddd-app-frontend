const Footer = () => {
  return (
    <div className="bg-orange-500 py-6 w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        {/* Website Name with Red Dot */}
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-600 rounded-full"></span> {/* Red dot */}
          <span className="text-xl md:text-2xl text-white font-bold tracking-tight">
            DailyDabbaDelivery.com
          </span>
        </div>

        {/* Privacy Policy & Terms */}
        <div className="flex space-x-6">
          <span className="text-white font-medium text-sm md:text-base cursor-pointer">
            Privacy Policy
          </span>
          <span className="text-white font-medium text-sm md:text-base cursor-pointer">
            Terms of Service
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
