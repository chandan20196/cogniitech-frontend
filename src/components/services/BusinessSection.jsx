import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/Images/services/business2.png";
import img2 from "../../assets/Images/services/business1.png";

const BusinessSection = ({
  topHeading,
  sec1Title,
  sec1Description,
  sec1ButtonText,
  sec2Title,
  sec2Description,
  sec2ButtonText,
}) => {
  return (
    <section className="w-full bg-[#F5F6F7] py-20 px-6 md:px-12 lg:px-20 font-poppins">

      {topHeading && (
        <motion.h2
          className="text-center text-3xl md:text-4xl font-semibold mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {topHeading}
        </motion.h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {sec1Title && <h3 className="text-[38px] font-semibold">{sec1Title}</h3>}

          {sec1Description && (
            <p className="text-gray-600 mt-3 text-[18px] leading-relaxed">
              {sec1Description}
            </p>
          )}

          {sec1ButtonText && (
            <motion.button
              className="mt-6 border bg-white cursor-pointer transition duration-300 border-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {sec1ButtonText} →
            </motion.button>
          )}
        </motion.div>

        <motion.div
          className="p-4 rounded-3xl"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src={img1}
            alt="service"
            className="rounded-2xl w-[100%] max-h-[600px] object-cover"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
      </div>

      <div className="mt-20"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <motion.div
          className="bg-[#EDE8FF] rounded-3xl"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src={img2}
            alt="service"
            className="rounded-3xl w-[100%] max-h-[600px] object-cover"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {sec2Title && <h3 className="text-[38px] font-semibold">{sec2Title}</h3>}

          {sec2Description && (
            <p className="text-gray-600 mt-3 text-[18px] leading-relaxed">
              {sec2Description}
            </p>
          )}

          {sec2ButtonText && (
            <motion.button
              className="mt-6 border bg-white cursor-pointer transition duration-300 border-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {sec2ButtonText} →
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSection;
