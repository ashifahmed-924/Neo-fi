import React from "react";
import neologofooter from "../assets/neologofooter.png";
import { FiArrowRight } from "react-icons/fi";
import footerData from "../json/footer.json";

const Footer = () => {
  return (
    <footer className="w-full bg-darkBg mt-12 sm:mt-16 md:mt-20 lg:mt-[80px] overflow-x-hidden">
      {/* TOP SECTION */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-[120px] pt-12 sm:pt-16 md:pt-20 lg:pt-20 xl:pt-24 pb-8 sm:pb-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-12 lg:gap-16 xl:gap-24 w-full justify-between">
          {/* LEFT: Logo + Columns */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 xl:gap-20 w-full md:w-auto items-center md:items-start">
            {/* Logo - centered and aligned with headings */}
            <div className="flex items-center justify-center">
              <img
                src={neologofooter}
                alt="NeoFi Logo"
                className="w-[107px] h-[31px] object-contain"
              />
            </div>

            {/* Link Columns */}
            <div className="flex flex-col sm:flex-row gap-10 md:gap-12 lg:gap-14 xl:gap-16 justify-center">
              {/* Quick Links */}
              <div>
                <h4 className="text-neoWhite font-inter text-[18px] mb-4 text-center sm:text-left">
                  Quick links
                </h4>
                <ul className="space-y-2 text-center sm:text-left">
                  {footerData.quickLinks.map((item) => (
                    <li
                      key={item}
                      className="text-neoGray font-alexandria text-[14px] cursor-pointer hover:text-neoWhite"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help */}
              <div>
                <h4 className="text-neoWhite font-inter text-[18px] mb-4 text-center sm:text-left">
                  Help
                </h4>
                <ul className="space-y-2 text-center sm:text-left">
                  {footerData.helpLinks.map((item) => (
                    <li
                      key={item}
                      className="text-neoGray font-alexandria text-[14px] cursor-pointer hover:text-neoWhite"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-neoWhite font-inter text-[18px] mb-4 text-center sm:text-left">
                  Social Media
                </h4>
                <ul className="space-y-2 text-center sm:text-left">
                  {footerData.socialLinks.map((item) => (
                    <li
                      key={item}
                      className="text-neoGray font-alexandria text-[14px] cursor-pointer hover:text-neoWhite"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT: Newsletter */}
          <div className="w-full md:w-[320px] lg:w-[340px] xl:w-[360px] flex flex-col gap-3">
            <p className="text-neoWhite font-inter text-[16px] md:text-[17px] lg:text-[18px] leading-[130%] text-center md:text-left">
              {footerData.newsletterTitle.split(' ').slice(0, 4).join(' ')} <br className="hidden md:block" /> {footerData.newsletterTitle.split(' ').slice(4).join(' ')}
            </p>

            <div className="flex items-center border-b border-grayLine pb-2 mt-2">
              <input
                type="email"
                placeholder={footerData.newsletterPlaceholder}
                className="w-full bg-transparent border-none outline-none text-[14px] font-alexandria text-neoGray placeholder:text-neoGray"
              />
              <button className="ml-3 w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-9 rounded-full bg-neoGreen flex items-center justify-center hover:brightness-110 transition">
                <FiArrowRight className="text-black w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="w-full bg-black py-4">
        <p className="text-center text-neoGray font-alexandria text-[12px]">
          {footerData.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
