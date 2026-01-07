import React from "react";
import { GridScan } from "../../utils/gridscan";

const Sub_Banner = () => {
  return (
    <div className="font-poppins relative w-full h-48 sm:h-60 md:h-72 flex items-center justify-center bg-[#fef5f4] bg-cover bg-center px-4 sm:px-6 md:px-10">

      {/* GridScan behind everything */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridScan
          sensitivity={0.55}
          lineThickness={0.2}
          linesColor="#FFFFFF"
          gridScale={0.1}
          scanColor="#fb2c36"
          scanOpacity={0.3}
          enablePost
          lineJitter={0}
          bloomIntensity={0.6}
          chromaticAberration={0}
          noiseIntensity={0.01}
        />
      </div>

      {/* Text on top */}
      <div className="relative z-10 max-w-4xl">
        <p className="text-[#000000] text-sm sm:text-base md:text-lg lg:text-[23px] font-semibold leading-relaxed text-left">
        Cogniitec Technology Partners helps organisations innovate, streamline processes, and offer first-rate digital experiences that enhance their ability to grow in a rapidly changing environment.

        </p>
      </div>

    </div>
  );
};

export default Sub_Banner;
