import React from "react";
import AboutVideo from "../../assets/video/about/VideoProject1.mp4";

const AboutUsVideoSection = () => {
    return (
        <div className="w-full bg-white mt-15 md:mt-20 flex flex-col items-center justify-center px-4 md:px-0">

            <h2 className="
                font-narin font-semibold
                text-[22px] sm:text-[28px] md:text-[40px] lg:text-[50px]
                leading-tight md:leading-[70px] lg:leading-[80px]
                tracking-[-0.03em]
                text-center
                translate-y-4 md:translate-y-8
                mb-6
            ">
                Better business systems lead <br />
                to better daily experiences.
            </h2>

            {/* Single Video */}
            <div className="w-full max-w-6xl">
                <video
                    src={AboutVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="
                        w-full
                        h-[200px] sm:h-[300px] md:h-[420px] lg:h-[500px]
                        object-cover
                        rounded-xl
                    "
                />
            </div>
        </div>
    );
};

export default AboutUsVideoSection;
