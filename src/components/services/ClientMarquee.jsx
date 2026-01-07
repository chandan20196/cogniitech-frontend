import React from "react";
import { motion } from "framer-motion";

import logo1 from "../../assets/Images/services/Image [css-ducv57] (1).png";
import logo2 from "../../assets/Images/services/Image [css-ducv57] (2).png";
import logo3 from "../../assets/Images/services/Image [css-ducv57] (3).png";
import logo4 from "../../assets/Images/services/Image [css-ducv57] (4).png";
import logo5 from "../../assets/Images/services/Image [css-ducv57] (5).png";
import logo6 from "../../assets/Images/services/Image [css-ducv57] (6).png";
import logo7 from "../../assets/Images/services/Image [css-ducv57] (7).png";
import logo8 from "../../assets/Images/services/Image [css-ducv57] (8).png";
import logo9 from "../../assets/Images/services/Image [css-ducv57] (9).png";

const logosRow1 = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
const logosRow2 = [logo8, logo9, logo5, logo1, logo2, logo3, logo4];

const ClientsMarquee = () => {
  return (
    <section className="py-16 w-full bg-white overflow-hidden">
      <motion.h2
        className="text-center text-2xl md:text-4xl font-semibold text-[#00000073] mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Trusted by <span className="font-bold text-[#000]">25,000+</span> companies from <br />
        startups to enterprise
      </motion.h2>


      <motion.div
        className="marquee mt-8 pt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="marquee-track marquee-track--right">
          {[...logosRow1, ...logosRow1].map((logo, i) => (
            <motion.img
              key={i}
              src={logo}
              alt="client logo"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </motion.div>


      <motion.div
        className="marquee mt-8 pt-15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="marquee-track marquee-track--left">
          {[...logosRow2, ...logosRow2].map((logo, i) => (
            <motion.img
              key={i}
              src={logo}
              alt="client logo"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ClientsMarquee;
