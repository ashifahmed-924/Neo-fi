import React from "react";

// import your real SVGs
import hugeicn from "../assets/hugeicn.svg";
import blockchainicn from "../assets/blockchainicn.svg";
import materialicn from "../assets/materialicn.svg";

import imagetwo from "../assets/imagetwo.png";
import moreFeatureData from "../json/moreFeature.json";

// Icon mapping
const iconMap = {
  hugeicn: hugeicn,
  blockchainicn: blockchainicn,
  materialicn: materialicn,
};

const MoreFeature = () => {
  return (
    <section className="relative w-full bg-darkBg py-12 md:py-16 lg:py-24 overflow-hidden">
      {/* Blue glow */}
      <div
        className="pointer-events-none absolute left-1/2 -top-40 -translate-x-1/2 w-[606px] h-[425px] rounded-[606px] bg-blue-glow-soft blur-[139.9px]"
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
        {/* Feature Tag */}
        <div className="inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-3 rounded-[24px] border border-grayLine backdrop-blur-[20px]">
          <span className="text-neoGreen font-alexandria text-[12px] md:text-[14px] font-normal leading-normal">
            {moreFeatureData.pillLabel}
          </span>
        </div>

        {/* Main Heading + description */}
        <div className="flex flex-col items-center gap-4 md:gap-5">
          <h2 className="text-neoWhite font-alexandria text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[100%] text-center capitalize px-4">
            {moreFeatureData.title}
          </h2>

          <p className="text-neoGray font-inter text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[140%] text-center w-full max-w-[644px] px-4">
            {moreFeatureData.subtitle}
          </p>
        </div>

        {/* Image + Cards */}
        <div className="mt-4 md:mt-6 flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-[72px] w-full">
          {/* Left Image */}
          <div className="flex-1 flex justify-center lg:justify-start w-full">
            <img
              src={imagetwo}
              alt="Blockchain Visual"
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[460px] object-contain"
            />
          </div>

          {/* Right Cards */}
          <div className="flex-1 flex flex-col gap-3 md:gap-4 w-full">
            {moreFeatureData.items.map((item) => (
              <div
                key={item.id}
                className="w-full lg:w-[622px] h-auto md:h-[156px] flex flex-col justify-start items-start px-4 sm:px-5 py-6 md:py-[30px] rounded-section border border-grayBorder bg-surfaceDark"
              >
                {/* Icon + Title */}
                <div className="flex items-start gap-2 md:gap-3 w-full mb-2">
                  <img
                    src={iconMap[item.iconKey]}
                    className="w-6 h-6 md:w-8 md:h-8 object-contain flex-shrink-0 mt-1"
                    alt={item.title}
                  />

                  <h3 className="text-neoWhite font-inter text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[140%] flex-1">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-neoGray font-alexandria text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-normal w-full">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreFeature;
