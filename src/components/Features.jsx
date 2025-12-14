import React from "react";

import icon from "../assets/Icons.svg";
import scale from "../assets/Scale.svg";
import blockchain from "../assets/blockchain.svg";
import featuresData from "../json/features.json";

// Icon mapping
const iconMap = {
  blockchain: blockchain,
  scale: scale,
  connectivity: icon,
};

const Features = () => {
  return (
    <section className="relative w-full bg-darkBg py-20">
      {/* Top blue glow */}
      <div
        className="pointer-events-none absolute left-1/2 -top-36 -translate-x-1/2 w-[606px] h-[425px] rounded-[606px] bg-blue-glow-soft blur-[139.9px]"
      />

      {/* Bottom blue glow */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-[-160px] -translate-x-1/2 w-[606px] h-[425px] rounded-[606px] bg-blue-glow-soft blur-[139.9px]"
      />

      {/* CONTENT */}
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-[120px] flex flex-col items-center gap-8 md:gap-10">
        {/* Pill */}
        <div className="inline-flex items-center justify-center rounded-[24px] border border-grayBorder bg-black/40 backdrop-blur-[20px] px-4 py-[10px]">
          <span className="text-neoGreen font-alexandria text-[14px] font-normal">
            {featuresData.pillLabel}
          </span>
        </div>

        {/* Heading + Subtitle */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-neoWhite text-center font-alexandria font-bold text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px]">
            {featuresData.title}
          </h2>

          <p className="text-neoGray text-center font-inter text-[16px] md:text-[17px] lg:text-[18px] leading-[140%] max-w-[600px] md:max-w-[620px] lg:max-w-[640px]">
            {featuresData.subtitle}
          </p>
        </div>

        {/* Cards row */}
        <div className="mt-8 md:mt-10 flex flex-col md:flex-row justify-center gap-6 md:gap-6 lg:gap-8 w-full px-2 sm:px-0">
          {featuresData.items.map((item) => {
            // Handle line break for Decentralisation description
            const description = item.description.includes("Web3 aims to move") 
              ? (
                  <>
                    {item.description.split("Web3 aims to move")[0]}Web3 aims to move <br />
                    away from the centralized.
                  </>
                )
              : item.description;

            return (
              <div
                key={item.id}
                className="w-full md:w-[300px] lg:w-[340px] xl:w-[384px] h-auto min-h-[264px] mx-auto rounded-card border border-grayBorder bg-white/5 px-6 sm:px-8 md:px-6 lg:px-8 xl:px-[36px] pt-8 sm:pt-10 md:pt-10 lg:pt-12 xl:pt-[48px] pb-8 sm:pb-10 md:pb-10 lg:pb-12 xl:pb-[48px] flex flex-col items-center"
              >
                {/* Icon */}
                <img
                  src={iconMap[item.iconKey]}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />

                {/* Title */}
                <h3 className="mt-[36px] text-neoWhite text-center font-inter text-[18px] font-normal leading-[140%]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-[16px] text-neoGray text-center font-alexandria text-[12px] font-normal leading-normal">
                  {description}
                </p>
                {/* bottom gap comes from pb-[48px] */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
