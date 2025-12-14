import React, { useEffect, useRef } from "react";

import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import frame5 from "../assets/frame5.png";
import partnersData from "../json/partners.json";

// Image mapping
const imageMap = {
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
};

const Brands = () => {
  const scrollRef = useRef(null);
  const rafRef = useRef(null);

  // duplicate list for infinite loop
  const brands = partnersData.brands;
  const loopBrands = [...brands, ...brands];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // ✅ speed: increase this if you want faster
    const SPEED = 1.8;

    const tick = () => {
      el.scrollLeft += SPEED;

      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) el.scrollLeft = 0;

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="w-full bg-surfaceDark py-6 md:py-8 lg:py-10 xl:py-[40px] flex flex-col items-center gap-6 md:gap-8 lg:gap-10 xl:gap-[40px] px-4 md:px-6 lg:px-8 xl:px-0 overflow-hidden">
      {/* Heading */}
      <h3 className="text-neoGray text-center font-alexandria text-sm md:text-[15px] lg:text-[16px] font-normal">
        {partnersData.heading}
      </h3>

      {/* ✅ MOBILE: autoplay slider */}
      <div className="w-full md:hidden relative">
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [-webkit-overflow-scrolling:touch]"
        >
          <div className="flex items-center gap-10 min-w-max px-2 py-2">
            {loopBrands.map((brand, idx) => (
              <img
                key={`${brand.id}-${idx}`}
                src={imageMap[brand.imageKey]}
                alt={`brand${brand.id}`}
                className="h-6 object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ✅ TABLET/DESKTOP: your original layout */}
      <div className="hidden md:flex items-center justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-[72px] flex-wrap w-full max-w-7xl px-4 md:px-0">
        {brands.map((brand) => (
          <img
            key={brand.id}
            src={imageMap[brand.imageKey]}
            alt={`brand${brand.id}`}
            className="h-6 md:h-8 lg:h-9 xl:h-[40px] object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default Brands;
