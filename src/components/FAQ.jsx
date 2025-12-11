import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import faqData from "../json/faq.json";

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full bg-darkBg py-12 md:py-16 lg:py-24 overflow-hidden">
      {/* Top blue glow */}
      <div
        className="pointer-events-none absolute left-1/2 -top-40 -translate-x-1/2 w-[300px] md:w-[450px] lg:w-[606px] h-[200px] md:h-[300px] lg:h-[425px] rounded-[606px] bg-blue-glow-soft blur-[139.9px]"
      />

      <div className="relative max-w-[960px] mx-auto px-4 sm:px-6 md:px-8 lg:px-6 flex flex-col items-center gap-6 md:gap-8 lg:gap-10 overflow-x-hidden">
        {/* FAQ pill */}
        <div 
          className="flex items-center justify-center gap-2 rounded-[24px] border border-grayLine backdrop-blur-[20px] py-2 px-4 md:py-3 md:px-5"
        >
          <span 
            className="font-alexandria text-[12px] md:text-[14px] font-normal text-neoGreen leading-normal"
          >
            {faqData.badge}
          </span>
        </div>

        {/* Heading + subtitle */}
        <div className="flex flex-col items-center gap-4 md:gap-5 text-center px-4">
          <h2 
            className="font-alexandria text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-normal leading-[100%] capitalize text-neoWhite"
          >
            {faqData.title}
          </h2>

          <p 
            className="font-inter text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[140%] text-center w-full max-w-[658px] text-neoGray"
          >
            {faqData.subtitle}
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-6 md:mt-8 w-full space-y-3 flex flex-col items-center">
          {faqData.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-grayLine bg-faqDark rounded-[4px] overflow-hidden w-full max-w-[792px] min-h-[52px]"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between px-4 sm:px-5 md:px-6 text-left min-h-[52px]"
                >
                  <span 
                    className="font-alexandria text-[14px] sm:text-[15px] md:text-[16px] font-normal pr-2 text-neoWhite leading-normal flex-1"
                  >
                    {item.question}
                  </span>
                  {isOpen ? (
                    <FiMinus className="text-neoWhite w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  ) : (
                    <FiPlus className="text-neoWhite w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 md:px-6 pb-4 pt-1">
                    <p className="text-neoGray font-alexandria text-[13px] sm:text-[14px] md:text-[15px] leading-[150%]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
