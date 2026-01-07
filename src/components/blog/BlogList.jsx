import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ChatGPTimg from "../../assets/Images/blog/ChatGPTimg.svg";
import AGIimg from "../../assets/Images/blog/AGIimg.svg";
import Blockchainimg from "../../assets/Images/blog/Blockchainimg.svg";
import Shopifyimg from "../../assets/Images/blog/Shopifyimg.svg";
import Workshopimg from "../../assets/Images/blog/Workshopimg.svg";

const blogData = [
  {
    img: ChatGPTimg,
    title:
      "Mastering ChatGPT Blog Creation : Do’s & Don’ts for SaaS Marketing Managers",
    time: "4 Min",
    date: "August 19, 2022",
  },
  {
    img: Blockchainimg,
    title: "Fundamental of Blockchain and Cryptocurrency",
    time: "4 Min",
    date: "August 19, 2022",
  },
  {
    img: AGIimg,
    title: "How AGI will take over AI and Gen AI in the future",
    time: "4 Min",
    date: "August 19, 2022",
  },
  {
    img: Shopifyimg,
    title:
      "Shopify platform to build and boost your business with AIO features",
    time: "4 Min",
    date: "August 19, 2022",
  },
  {
    img: Workshopimg,
    title: "Workshop Coffee Brewing",
    time: "4 Min",
    date: "August 19, 2022",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const BlogList = () => {
  return (
    <div className="max-w-7xl mx-auto py-15 px-4">
      {blogData.map((blog, index) => (
        <motion.div
          key={index}
          className="py-13 border-t border-[#979797]"
          variants={fadeUp}
          custom={index}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Link to={"/blogdetials"}>
            <motion.div
              className="flex flex-col md:flex-row gap-4"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Thumbnail */}
              <motion.img
                src={blog.img}
                alt={blog.title}
                className="
                  w-full 
                  h-48 
                  object-cover 
                  rounded-md 
                  md:w-80 
                  md:h-60
                "
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div>
                <h1
                  className="
                    text-2xl  
                    md:text-[38px] 
                    font-medium 
                    text-gray-900 
                    leading-snug 
                    hover:text-red-500 
                    cursor-pointer 
                    transition
                    font-poppins
                  "
                >
                  {blog.title}
                </h1>

                <p className="text-sm md:text-[16px] text-gray-500 mt-1  font-poppins">
                  {blog.time} · {blog.date}
                </p>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}

      {/* Load More Button */}
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link to={"/blogdetials"}>
          <button className="px-6 py-3 text-sm font-medium border border-red-400 text-red-500  hover:bg-red-500 hover:text-white transition cursor-pointer">
            Load More
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default BlogList;
