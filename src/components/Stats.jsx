import React from "react";
import statsData from "../json/stats.json";

const Stats = () => {
  return (
    <section className="relative w-full bg-surfaceDark flex justify-center items-center py-12 sm:py-16 md:py-20 lg:py-[120px] px-4 sm:px-6 overflow-hidden">
      {/* Inner container (max 1440px) */}
      <div className="relative w-full max-w-[1440px] flex justify-center items-center">
        {/* Stats card */}
        <div className="relative z-10 w-full max-w-[920px] mx-auto rounded-[24px] px-4 sm:px-6 md:px-16 lg:px-[120px] py-8 sm:py-12 md:py-16 lg:py-[72px] flex flex-col items-center text-center gap-6 sm:gap-8 md:gap-[32px]">
          {/* Blue glow behind card */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[606px] h-[425px] rounded-[606px] -z-10 bg-blue-glow-strong blur-[139.9px]"
          />
          {/* Pill */}
          <div className="inline-flex items-center justify-center rounded-[24px] border border-grayBorder bg-black/40 backdrop-blur-[20px] px-4 py-[10px]">
            <span className="text-neoGreen font-alexandria text-[14px] font-normal">
              {statsData.pillLabel}
            </span>
          </div>

          {/* Heading & description */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-neoWhite font-alexandria font-semibold text-[28px] md:text-[36px] lg:text-[40px]">
              {statsData.title}
            </h2>
            <p className="text-neoGray font-inter text-[16px] md:text-[18px] leading-[140%] max-w-[640px]">
              {statsData.subtitle}
            </p>
          </div>

          {/* Stats row */}
          <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {statsData.items.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center gap-2">
                <span className="text-neoGreen font-alexandria text-[32px] md:text-[36px] font-semibold">
                  {stat.value}
                </span>
                <span className="text-neoWhite font-inter text-[14px] md:text-[16px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
