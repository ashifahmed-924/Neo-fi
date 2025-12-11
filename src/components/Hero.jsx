import React, { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import image1 from "../assets/image1.png";
import dothero from "../assets/dothero.svg";
// import image2 from "../assets/image2.png";
// import image3 from "../assets/image3.png";

const Hero = () => {
  const [isRotating, setIsRotating] = useState(false);

  const handlePlay = () => {
    setIsRotating(!isRotating);
  };

  return (
    <section className="relative w-full bg-darkBg text-neoWhite overflow-hidden">
      {/* Blue glow background on left */}
      <div className="pointer-events-none absolute -left-40 md:-left-20 top-10 h-[300px] w-[300px] md:h-[420px] md:w-[420px] rounded-full bg-[#19085C] blur-3xl opacity-30" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-14 md:pb-16 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20">
        {/* LEFT CONTENT */}
        <div className="flex-1 w-full text-center lg:text-left">
          {/* Decentralised pill */}
          <div className="inline-flex items-center gap-2 rounded-[24px] border border-gradient1 bg-black/40 backdrop-blur-[20px] px-3 py-[10px] mb-6 sm:mb-8">
            <span className="flex h-[9px] w-[9px] items-center justify-center">
              <img src={dothero} alt="dot" className="w-[9px] h-[9px]" />
            </span>
            <span className="text-neoGreen text-[12px] sm:text-[14px] font-normal font-alexandria">
              Decentralised
            </span>
          </div>

          {/* Title */}
          <h1 className="font-alexandria font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-[110%] text-neoWhite capitalize max-w-full lg:max-w-[661px] mx-auto lg:mx-0">
            Revolutionizing
            <br />
            Web3 Finance
          </h1>

          {/* Description */}
          <p className="mt-4 sm:mt-5 text-neoGray font-inter text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[140%] max-w-full lg:max-w-[583px] mx-auto lg:mx-0">
            Secure, scalable, and decentralized solutions for your digital
            assets—experience the future of financial freedom.
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            {/* Get Started */}
            <button className="w-full sm:w-auto flex items-center justify-center gap-[6px] px-5 sm:px-6 py-3 sm:py-[14px] rounded-pill bg-neoGreen text-black font-alexandria text-[16px] sm:text-[18px] font-normal hover:brightness-110 transition">
              Get Started
            </button>

            {/* Watch video */}
            <button
              onClick={handlePlay}
              className="w-full sm:w-auto flex items-center justify-center gap-[10px] px-5 sm:px-6 py-3 sm:py-[14px] rounded-pill border border-[1.5px] border-gradient1 text-neoWhite font-alexandria text-[16px] sm:text-[18px] font-normal hover:bg-white/5 transition"
            >
              <span className="flex items-center justify-center w-6 h-6 aspect-square">
                <FaPlay className="text-neoWhite w-6 h-6" />
              </span>
              <span>Watch video</span>
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
