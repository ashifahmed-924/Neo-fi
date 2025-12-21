import React, { useState } from "react";
import neologo from "../assets/neologo.png";
import navbarData from "../json/navbar.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-darkBg border-b border-darkBorder overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between py-4 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-6">

        {/* LEFT: Logo + (desktop nav) */}
        <div className="flex items-center gap-6 md:gap-8 lg:gap-12">

          {/* Logo + Brand */}
          <div className="flex items-center gap-4">
            <img
              src={neologo}
              alt="NeoFi Logo"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            />
          </div>

          {/* CENTER: Nav links (tablet landscape and desktop) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
            {navbarData.navItems.map((item, idx) => (
              <button
                key={item}
                className={`text-[14px] md:text-[15px] lg:text-[16px] font-alexandria font-normal transition whitespace-nowrap ${
                  idx === 0 ? "text-neoWhite" : "text-neoGray hover:text-neoWhite"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — Log in + CTA (tablet landscape and desktop) */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <button className="text-neoWhite text-[14px] md:text-[15px] lg:text-[16px] font-alexandria font-normal hover:text-neoWhite/80 transition whitespace-nowrap">
            {navbarData.loginText}
          </button>

          <button className="flex h-9 md:h-10 px-4 md:px-5 lg:px-6 py-2 justify-center items-center gap-[6px] rounded-pill bg-neoGreen text-black text-[14px] md:text-[15px] lg:text-[16px] font-alexandria font-normal hover:brightness-110 transition whitespace-nowrap">
            {navbarData.ctaText}
          </button>
        </div>

        {/* HAMBURGER (mobile & tablet portrait) */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 transition"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block w-5 h-[2px] bg-neoWhite transition-transform ${
              isOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-neoWhite transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-neoWhite transition-transform ${
              isOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE & TABLET PORTRAIT MENU */}
      {isOpen && (
        <div className="md:hidden border-t border-darkBorder bg-darkBg px-6 pb-4">
          <div className="flex flex-col gap-4 pt-4">
            {navbarData.navItems.map((item, idx) => (
              <button
                key={item}
                className={`text-[16px] font-alexandria font-normal text-left ${
                  idx === 0 ? "text-neoWhite" : "text-neoGray"
                } hover:text-neoWhite transition`}
              >
                {item}
              </button>
            ))}

            <button className="mt-2 text-neoWhite text-[16px] font-alexandria font-normal text-left hover:text-neoWhite/80 transition">
              {navbarData.loginText}
            </button>

            <button className="mt-1 flex h-10 px-6 py-2 justify-center items-center gap-[6px] rounded-pill bg-neoGreen text-black text-[16px] font-alexandria font-normal hover:brightness-110 transition">
              {navbarData.ctaText}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
