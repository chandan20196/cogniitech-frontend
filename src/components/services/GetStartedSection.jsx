import React from "react";
import { motion } from "framer-motion";
import stepImg from "../../assets/Images/services/getstared.png";

const GetStartedSection = ({
  heading,
  steps = [],
}) => {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 font-poppins">

      {heading && (
        <motion.h2
          className="text-center text-3xl md:text-4xl font-semibold leading-snug mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} >
          {heading}
        </motion.h2>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        <motion.img
          src={stepImg}
          alt="Get Started"
          className="rounded-3xl w-full object-cover"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.03 }}
        />

        <div className="space-y-6">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#F5F5F5] p-7 rounded-2xl shadow-sm flex gap-4"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className="w-10 h-10 bg-[#EC372D] shrink-0 text-white flex justify-center items-center rounded-full font-semibold">
                {item.number}
              </div>

              <div>
                {item.title && (
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                )}
                {item.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.buttonText && (
                  <motion.button
                    className="mt-4 border border-black px-5 py-1.5 rounded-full text-sm cursor-pointer hover:bg-gray-200 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.buttonText} →
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GetStartedSection;
