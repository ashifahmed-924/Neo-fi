import React from "react";

import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import frame5 from "../assets/frame5.png";

const Brands = () => {
  return (
    <section className="w-full bg-[#0F0F0F] py-6 md:py-[40px] flex flex-col items-center gap-6 md:gap-[40px] px-4 md:px-0">
      
      {/* Heading */}
      <h3 className="text-neoGray text-center font-alexandria text-sm md:text-[16px] font-normal">
        Satisfied partners
      </h3>

      {/* Brand Logos */}
      <div className="flex items-center justify-center gap-6 md:gap-[72px] flex-wrap w-full max-w-7xl">
        <img src={frame1} alt="brand1" className="h-6 md:h-[40px] object-contain" />
        <img src={frame2} alt="brand2" className="h-6 md:h-[40px] object-contain" />
        <img src={frame3} alt="brand3" className="h-6 md:h-[40px] object-contain" />
        <img src={frame4} alt="brand4" className="h-6 md:h-[40px] object-contain" />
        <img src={frame5} alt="brand5" className="h-6 md:h-[40px] object-contain" />
      </div>

    </section>
  );
};

export default Brands;
