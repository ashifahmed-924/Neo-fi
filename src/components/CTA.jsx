import React from "react";
import ctaData from "../json/cta.json";

const CTA = () => {
  return (
    <section className="w-full bg-surfaceDark py-12 md:py-16 lg:py-[80px] flex flex-col items-center text-center px-4 sm:px-6 overflow-x-hidden">

      {/* CTA Pill */}
      <div 
        className="flex items-center justify-center gap-2 rounded-[24px] border border-grayLine backdrop-blur-[20px] mb-5 px-4 py-[10px]"
      >
        <span 
          className="font-alexandria text-[12px] sm:text-[13px] md:text-[14px] font-normal text-neoGreen leading-normal"
        >
          {ctaData.pillLabel}
        </span>
      </div>

      {/* Heading */}
      <h2 
        className="font-alexandria text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-normal leading-[100%] capitalize text-center max-w-[960px] mb-5 px-4 text-neoWhite"
      >
        {ctaData.title.split(' ').slice(0, 4).join(' ')} <br className="hidden sm:block" /> {ctaData.title.split(' ').slice(4).join(' ')}
      </h2>

      {/* Subtext */}
      <p 
        className="font-inter text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[140%] text-center max-w-[720px] mb-5 px-4 text-neoGray"
      >
        {ctaData.subtitle}
      </p>

      {/* CTA Button */}
      <button 
        className="bg-neoGreen flex items-center justify-center gap-1.5 hover:brightness-110 transition py-3 px-5 md:py-3.5 md:px-6 "
      >
        <span 
          className="font-alexandria text-[16px] sm:text-[17px] md:text-[18px] font-normal text-black leading-normal"
        >
          {ctaData.buttonText}
        </span>
      </button>

    </section>
  );
};

export default CTA;
