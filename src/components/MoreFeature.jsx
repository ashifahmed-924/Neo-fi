import React from "react";

// import your real SVGs
import hugeicn from "../assets/hugeicn.svg";
import blockchainicn from "../assets/blockchainicn.svg";
import materialicn from "../assets/materialicn.svg";

import imagetwo from "../assets/imagetwo.png";

const cards = [
  {
    id: 1,
    icon: hugeicn,
    title: "Connectivity and ubiquity",
    description:
      "Connectivity and Ubiquity. The focal points of Web 3.0 emphasize connectivity and ubiquity, ensuring seamless interactions between users and devices within.",
  },
  {
    id: 2,
    icon: materialicn,
    title: "Secure Transaction",
    description:
      "Ensuring every transaction is protected with cutting-edge security, giving you the confidence to exchange, invest, and grow in a safe and trusted environment.",
  },
  {
    id: 3,
    icon: blockchainicn,
    title: "Blockchain and decentralization",
    description:
      "Most important of all, the assurance of blockchain and decentralization helps in encouraging communication between software and browser plugins.",
  },
];

const MoreFeature = () => {
  return (
    <section className="relative w-full bg-darkBg py-12 md:py-16 lg:py-24 overflow-hidden">
      {/* Blue glow */}
      <div
        className="pointer-events-none absolute left-1/2 -top-40 -translate-x-1/2 w-[606px] h-[425px] rounded-[606px]"
        style={{
          background: "rgba(74, 90, 236, 0.06)",
          filter: "blur(139.9px)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] flex flex-col items-center gap-6 md:gap-8 lg:gap-10">
        {/* Feature Tag */}
        <div className="inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-3 rounded-[24px] border border-[#2E2E2E] backdrop-blur-[20px]">
          <span className="text-neoGreen font-alexandria text-[12px] md:text-[14px] font-normal leading-normal">
            Feature
          </span>
        </div>

        {/* Main Heading + description */}
        <div className="flex flex-col items-center gap-4 md:gap-5">
          <h2 className="text-neoWhite font-alexandria text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[100%] text-center capitalize px-4">
            The Future Of Blockchain Technology
          </h2>

          <p className="text-neoGray font-inter text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[140%] text-center w-full max-w-[644px] px-4">
            Leading the way in blockchain innovation, we are redefining how the
            world connects, secures, and transacts, bringing a new era of
            decentralized technology.
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
            {cards.map(({ id, icon, title, description }) => (
              <div
                key={id}
                className="w-full lg:w-[622px] h-auto md:h-[156px] flex flex-col justify-center items-center px-4 sm:px-5 py-6 md:py-[30px] rounded-[20px] border border-[#4D4D4D] bg-[#0F0F0F]"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-2 md:gap-3 w-full mb-2">
                  <img
                    src={icon}
                    className="w-6 h-6 md:w-8 md:h-8 object-contain flex-shrink-0"
                    alt={title}
                  />

                  <h3 className="text-neoWhite font-inter text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[140%] w-full">
                    {title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-neoGray font-alexandria text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-normal w-full">
                  {description}
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
