import React from "react";

const CTA = () => {
  return (
    <section className="w-full bg-darkBg py-12 md:py-16 lg:py-[80px] flex flex-col items-center text-center px-4 sm:px-6">

      {/* CTA Pill */}
      <div 
        className="flex items-center justify-center gap-2 rounded-[24px] border border-[#2E2E2E] backdrop-blur-[20px] mb-5"
        style={{ padding: '10px 16px' }}
      >
        <span 
          className="font-alexandria text-[12px] sm:text-[13px] md:text-[14px] font-normal"
          style={{ color: '#9DFF3A', lineHeight: 'normal' }}
        >
          Revolutionary
        </span>
      </div>

      {/* Heading */}
      <h2 
        className="font-alexandria text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-normal leading-[100%] capitalize text-center max-w-[960px] mb-5 px-4"
        style={{ color: '#E5E5E5' }}
      >
        Enhance Your Design Workflow <br className="hidden sm:block" /> With Seamless Landing Pages
      </h2>

      {/* Subtext */}
      <p 
        className="font-inter text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[140%] text-center max-w-[720px] mb-5 px-4"
        style={{ color: '#999' }}
      >
        Join a thriving community committed to safeguarding digital assets,
        empowering your financial journey with trust, innovation, and security
      </p>

      {/* CTA Button */}
      <button 
        className="bg-neoGreen flex items-center justify-center gap-1.5  hover:brightness-110 transition py-3 px-5 md:py-3.5 md:px-6"
      >
        <span 
          className="font-alexandria text-[16px] sm:text-[17px] md:text-[18px] font-normal"
          style={{ color: '#000', lineHeight: 'normal' }}
        >
          Get Started
        </span>
      </button>

    </section>
  );
};

export default CTA;
