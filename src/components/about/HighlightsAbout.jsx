import React from "react";
import { motion } from "framer-motion";

import YearsImg from "../../assets/Images/about/yearsAbout.svg";
import TechImg from "../../assets/Images/about/techAbout.svg";
import ClientsImg from "../../assets/Images/about/ClientsImgAbout.svg";
import PolygonalStyleBackground from "../../assets/Images/about/polygonal-style-background.svg";
import TeamSvgRepo from "../../assets/Images/about/team-svgrepo.svg";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerParent = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const HighlightsAbout = () => {
    const cards = [
        {
            title: "Years of\nService",
            img: YearsImg,
            height: "h-[540px]",
            textColor: "text-white",
        },
        {
            title: "",
            img: TechImg,
            height: "h-[400px]",
            textColor: "text-white",
        },
        {
            title: "Team\nStrength",
            bgColor: "bg-[#F3E8DD]",
            height: "h-[260px]",
            textColor: "text-[#5B4A3F]",
            icon: true,
        },
        {
            title: "Countries\nEstablished",
            bgColor: "bg-[#DFF0FF]",
            height: "h-[300px]",
            textColor: "text-[#1381D8]",
            globe: true,
        },
        {
            title: "Clients\nAcquired",
            img: ClientsImg,
            height: "h-[540px]",
            textColor: "text-white",
        },
    ];

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerParent}
            className="w-full bg-white py-0 px-6 lg:px-20"
        >
            <motion.h2
                variants={fadeUp}
                className="text-3xl font-semibold text-gray-800 mb-8 font-poppins"
            >
                Highlights
            </motion.h2>

            {/* GRID SECTION */}
            <motion.div
                variants={staggerParent}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-end"
            >
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className={`
                            ${card.bgColor || ""}
                            ${card.height}
                            bg-cover bg-center rounded-3xl 
                            p-6 flex flex-col justify-between
                            w-full cursor-pointer shadow-sm
                        `}
                        style={
                            card.img
                                ? { backgroundImage: `url(${card.img})` }
                                : {}
                        }
                    >
                        <div>
                            {card.icon && (
                                <img
                                    src={TeamSvgRepo}
                                    alt=""
                                    className="w-20 h-20 mb-4"
                                />
                            )}

                            <p
                                className={`
                                    whitespace-pre-line text-2xl sm:text-3xl font-semibold leading-tight font-poppins
                                    ${card.textColor}
                                `}
                            >
                                {card.title}
                            </p>
                        </div>

                        {card.globe && (
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                src={PolygonalStyleBackground}
                                className="w-[240px] sm:w-[300px] opacity-90 mx-auto"
                                alt=""
                            />
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default HighlightsAbout;
