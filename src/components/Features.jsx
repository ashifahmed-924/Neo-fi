import React from "react";

import icon from "../assets/Icons.svg";
import scale from "../assets/Scale.svg";
import blockchain from "../assets/blockchain.svg";

const features = [
  {
    id: 1,
    icon: blockchain,
    title: "Scalability",
    description:
      "Adapt and grow, no matter the demand on grow.",
  },
  {
    id: 2,
    icon: scale,
    title: "Decentralisation",
    description:
      "Decentralization. Web3 aims to move away from the centralized.",
  },
  {
    id: 3,
    icon: icon,
    title: "Connectivity",
    description:
      "Computers will be able to understand information similarly to humans.",
  },
];

const Features = () => {
  return (
    <section className="w-full bg-darkBg py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[120px] flex flex-col items-center gap-10">
        {/* Pill */}
        <div className="inline-flex items-center justify-center rounded-[24px] border border-gradient1 bg-black/40 backdrop-blur-[20px] px-4 py-[10px]">
          <span className="text-neoGreen font-alexandria text-[14px] font-normal">
            Features
          </span>
        </div>

        {/* Heading + Subtitle */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-neoWhite text-center font-alexandria font-bold text-[32px] md:text-[40px] lg:text-[48px]">
            Future Breakdown
          </h2>

          <p className="text-neoGray text-center font-inter text-[16px] md:text-[18px] leading-[140%] max-w-[640px]">
            Secure, scalable, and decentralized solutions for your digital
            assets—experience the future of financial freedom.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-[36px] flex-1 rounded-[12px] border border-gradient1 bg-white/5 px-[36px] py-[48px]"
            >
              {/* Icon */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 object-contain"
              />

              {/* Text block */}
              <div className="flex flex-col items-center gap-3 w-full">
                <h3 className="text-neoWhite text-center font-inter text-[20px] font-normal leading-[140%] w-full">
                  {item.title}
                </h3>

                <p className="text-neoGray text-center font-alexandria text-[16px] font-normal leading-normal w-full">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
