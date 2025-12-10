import React from "react";

const Stats = () => {
  return (
    <section className="relative w-full bg-[#0F0F0F] flex justify-center items-center py-12 px-6 overflow-hidden">
      {/* Inner container (max 1440px) */}
      <div className="relative w-full max-w-[1440px] flex justify-center items-center">
        {/* Stats card */}
        <div className="relative z-10 w-full max-w-[920px] mx-auto rounded-[24px] px-6 md:px-16 lg:px-[120px] h-[612px] flex flex-col items-center justify-center text-center gap-[32px]">
          {/* Blue glow behind card */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[606px] h-[425px] rounded-[606px] -z-10"
            style={{
              background: "rgba(74, 90, 236, 0.10)",
              filter: "blur(139.9px)",
            }}
          />
          {/* Pill */}
          <div className="inline-flex items-center justify-center rounded-[24px] border border-gradient1 bg-black/40 backdrop-blur-[20px] px-4 py-[10px]">
            <span className="text-neoGreen font-alexandria text-[14px] font-normal">
              Statistics
            </span>
          </div>

          {/* Heading & description */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-neoWhite font-alexandria font-semibold text-[28px] md:text-[36px] lg:text-[40px]">
              Completely Leverage Product
            </h2>
            <p className="text-neoGray font-inter text-[16px] md:text-[18px] leading-[140%] max-w-[640px]">
              Leading the way in blockchain innovation, we are redefining how
              the world connects, secures, and transacts, bringing a new era of
              decentralized technology.
            </p>
          </div>

          {/* Stats row */}
          <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Stat 1 */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-neoGreen font-alexandria text-[32px] md:text-[36px] font-semibold">
                2M+
              </span>
              <span className="text-neoWhite font-inter text-[14px] md:text-[16px]">
                Users
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-neoGreen font-alexandria text-[32px] md:text-[36px] font-semibold">
                500k+
              </span>
              <span className="text-neoWhite font-inter text-[14px] md:text-[16px]">
                Transactions
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-neoGreen font-alexandria text-[32px] md:text-[36px] font-semibold">
                35+
              </span>
              <span className="text-neoWhite font-inter text-[14px] md:text-[16px]">
                Countries
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
