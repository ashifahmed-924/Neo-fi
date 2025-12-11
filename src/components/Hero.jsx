import React, { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import image1 from "../assets/image1.png";
import dothero from "../assets/dothero.svg";
import heroData from "../json/hero.json";

const Hero = () => {
  const [isRotating, setIsRotating] = useState(false);

  const handlePlay = () => {
    setIsRotating((prev) => !prev);
  };

  return (
    <section className="relative w-full bg-darkBg text-neoWhite overflow-hidden">
      {/* Blue glow background on left */}
      <div className="pointer-events-none absolute -left-40 md:-left-20 top-10 h-[300px] w-[300px] md:h-[420px] md:w-[420px] rounded-full bg-heroBlue blur-3xl opacity-30" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-14 md:pb-16 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 overflow-x-hidden">
        {/* LEFT CONTENT */}
        <div className="flex-1 w-full text-center lg:text-left">
          {/* Decentralised pill */}
          <div className="inline-flex items-center justify-center gap-2 rounded-[24px] border border-grayBorder bg-black/40 backdrop-blur-[20px] mb-6 sm:mb-8 w-[137px] h-[37px]">
            <span className="flex h-[9px] w-[9px] items-center justify-center">
              <img src={dothero} alt="dot" className="w-[9px] h-[9px]" />
            </span>
            <span className="text-neoGreen text-[12px] sm:text-[14px] font-normal font-alexandria">
              {heroData.pillLabel}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-alexandria font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-[110%] text-neoWhite capitalize max-w-full lg:max-w-[661px] mx-auto lg:mx-0">
            {heroData.titleLines[0]}
            <br />
            {heroData.titleLines[1]}
          </h1>

          {/* Description */}
            <p className="mt-4 sm:mt-5 text-neoGray font-inter text-[12px] sm:text-[16px] md:text-[18px] lg:text-[16px] leading-[140%] max-w-full lg:max-w-[583px] mx-auto lg:mx-0">
            {heroData.description.split(' ').slice(0, 6).join(' ')} <br className="hidden sm:block" />
            {heroData.description.split(' ').slice(6).join(' ')}
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            {/* Get Started */}
            <button className="w-[151px] h-[50px] flex items-center justify-center gap-[6px] px-5 sm:px-6 rounded-pill bg-neoGreen text-black font-alexandria text-[16px] sm:text-[18px] font-normal hover:brightness-110 transition">
              {heroData.primaryCta}
            </button>

            {/* Watch video */}
            <button
              onClick={handlePlay}
              className="w-auto h-[52px] flex items-center justify-center gap-[10px] px-5 sm:px-6 rounded-pill border border-[1.5px] border-grayBorder text-neoWhite font-alexandria text-[14px] sm:text-[16px] font-normal hover:bg-white/5 transition whitespace-nowrap"
            >
              <span className="flex items-center justify-center w-6 h-6">
                <FaPlay className="text-neoWhite w-4 h-4" />
              </span>
              <span>{heroData.secondaryCta}</span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 w-full flex justify-center lg:justify-end mt-6 lg:mt-0">
          <img
            src={image1}
            alt="NeoFi Hero"
            className={`w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] object-contain ${
              isRotating ? "rotate-continuous" : ""
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
