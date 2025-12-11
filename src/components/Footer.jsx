import React from "react";
import neologo from "../assets/neologo.png";
import { TbArrowRight } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="w-full bg-darkBg mt-12 md:mt-16 lg:mt-[80px]">

      {/* MAIN CONTAINER */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] py-12 md:py-16 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0">

        {/* LOGO SECTION */}
        <div className="flex flex-col gap-4 w-full lg:w-auto">
          <img src={neologo} alt="NeoFi Logo" className="w-auto h-auto " />
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-auto items-center lg:items-start">
          <h3 
            className="font-inter text-[18px] md:text-[20px] font-normal leading-[140%]"
            style={{ color: '#E5E5E5' }}
          >
            Quick links
          </h3>

          <ul className="flex flex-col gap-2 items-center lg:items-start">
            <li 
              className="font-alexandria text-[13px] md:text-[14px] font-normal cursor-pointer hover:text-neoWhite"
              style={{ color: '#999', lineHeight: 'normal' }}
            >
              Home
            </li>
            <li 
              className="font-alexandria text-[13px] md:text-[14px] font-normal cursor-pointer hover:text-neoWhite"
              style={{ color: '#999', lineHeight: 'normal' }}
            >
              Features
            </li>
            <li 
              className="font-alexandria text-[13px] md:text-[14px] font-normal cursor-pointer hover:text-neoWhite"
              style={{ color: '#999', lineHeight: 'normal' }}
            >
              Community
            </li>
            <li 
              className="font-alexandria text-[13px] md:text-[14px] font-normal cursor-pointer hover:text-neoWhite"
              style={{ color: '#999', lineHeight: 'normal' }}
            >
              Support
            </li>
          </ul>
        </div>

        {/* HELP LINKS */}
        <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-auto items-center lg:items-start">
          <h3 
            className="font-inter text-[18px] md:text-[20px] font-normal leading-[140%]"
            style={{ color: '#E5E5E5' }}
          >
            Help
          </h3>

          <ul className="flex flex-col gap-2 items-center lg:items-start">
            <li 
              className="font-alexandria text-[13px] md:text-[14px] font-normal cursor-pointer hover:text-neoWhite"
              style={{ color: '#999', lineHeight: 'normal' }}
            >
              Help Centre
            </li>
            <li 
              className="font-alexandria text-[13px] md:text-[14px] font-normal cursor-pointer hover:text-neoWhite"
              style={{ color: '#999', lineHeight: 'normal' }}
            >
              FAQ
            </li>
            <li 
              className="font-alexandria text-[13px] md:text-[14px] font-normal cursor-pointer hover:text-neoWhite"
              style={{ color: '#999', lineHeight: 'normal' }}
            >
              Forum
            </li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-auto items-center lg:items-start">
          <h3 
            className="font-inter text-[18px] md:text-[20px] font-normal leading-[140%]"
            style={{ color: '#E5E5E5' }}
          >
            Social Media
          </h3>

          <ul className="flex flex-col gap-2 items-center lg:items-start">
            <li 
              className="font-alexandria text-[13px] md:text-[14px] font-normal cursor-pointer hover:text-neoWhite"
              style={{ color: '#999', lineHeight: 'normal' }}
            >
              Facebook
            </li>
            <li 
              className="font-alexandria text-[13px] md:text-[14px] font-normal cursor-pointer hover:text-neoWhite"
              style={{ color: '#999', lineHeight: 'normal' }}
            >
              Instagram
            </li>
            <li 
              className="font-alexandria text-[13px] md:text-[14px] font-normal cursor-pointer hover:text-neoWhite"
              style={{ color: '#999', lineHeight: 'normal' }}
            >
              LinkedIn
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="flex flex-col gap-3 w-full lg:w-auto lg:ml-[126px] mt-6 lg:mt-0">
          <h3 
            className="font-inter text-[18px] md:text-[20px] font-normal leading-[140%]"
            style={{ color: '#D8D8D8' }}
          >
            Join our mailing list <br className="hidden sm:block" /> for updates
          </h3>

          {/* INPUT FIELD */}
          <div className="relative mt-2 w-full lg:w-[385px]">
            <div className="flex items-center justify-between">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border-b border-[#2E2E2E] pt-2 pb-4 outline-none placeholder:text-[#999] flex-1 text-[13px] md:text-[14px]"
                style={{
                  color: '#999',
                  fontFamily: 'Alexandria',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  borderBottom: '0.5px solid #999'
                }}
              />

              <button className="ml-auto w-8 h-8 md:w-10 md:h-10 bg-neoGreen rounded-full flex items-center justify-center hover:brightness-110 transition flex-shrink-0">
                <TbArrowRight className="text-black w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div 
        className="w-full text-center font-alexandria text-[11px] md:text-[12px] font-normal"
        style={{ 
          marginTop: '40px',
          marginBottom: '40px',
          paddingTop: '40px',
          paddingBottom: '40px',
          backgroundColor: '#000',
          color: '#999',
          lineHeight: 'normal'
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px]">
          © 2025. All rights reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;
