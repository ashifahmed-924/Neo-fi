import React from "react";

import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import frame5 from "../assets/frame5.png";
import partnersData from "../json/partners.json";

// Image mapping
const imageMap = {
  frame1: frame1,
  frame2: frame2,
  frame3: frame3,
  frame4: frame4,
  frame5: frame5,
};

const Brands = () => {
  return (
    <section className="w-full bg-surfaceDark py-6 md:py-[40px] flex flex-col items-center gap-6 md:gap-[40px] px-4 md:px-0 overflow-x-hidden">
      
      {/* Heading */}
      <h3 className="text-neoGray text-center font-alexandria text-sm md:text-[16px] font-normal">
        {partnersData.heading}
      </h3>

      {/* Brand Logos */}
      <div className="flex items-center justify-center gap-6 md:gap-[72px] flex-wrap w-full max-w-7xl">
        {partnersData.brands.map((brand) => (
          <img 
            key={brand.id} 
            src={imageMap[brand.imageKey]} 
            alt={`brand${brand.id}`} 
            className="h-6 md:h-[40px] object-contain" 
          />
        ))}
      </div>

    </section>
  );
};

export default Brands;
