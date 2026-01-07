import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import BannerGrid from "../../assets/Images/home/banner_grid.png";
import ContactModal from "../../components/Model/ContactModal";

const Hero_banner = () => {
   const [open, setOpen] = useState(false);
  const textVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
    <section
      className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-40 overflow-hidden min-h-[80vh]"
      style={{
        backgroundImage: `url(${BannerGrid})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <motion.h1
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={1}
          className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight"
        >
          Shaping the Future of  Through<br className="hidden md:block" />
           Technology and Innovation
        </motion.h1>

        <motion.p
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={2}
          className="mt-4 text-gray-500 max-w-xl mx-auto text-sm md:text-base font-poppins"
        >
         At Cogniitec, we combine the strength of collaboration and the power of innovation to help businesses grow through technology.
        </motion.p>

        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={3}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="font-poppins text-sm cursor-pointer group flex items-center justify-center border-2 border-[#ec372d] bg-[#ec372d] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#c72a22]" onClick={() => setOpen(true)}
          >
            Explore Capabilities
            <ArrowUpRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.location.href = "/contact-us"}
            className="font-poppins text-sm cursor-pointer group flex items-center justify-center border-2 border-[#ec372d] bg-[#fef5f4] text-[#ec372d] font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#ec372d] hover:text-white"
          >
            Request for Initial Proposal
            <ArrowUpRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </motion.div>
      </div>

    </section>
          <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Hero_banner;
