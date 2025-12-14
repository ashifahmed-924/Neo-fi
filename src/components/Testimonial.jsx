import React, { useEffect, useRef } from "react";
import profile from "../assets/profile.svg";
import testimonialsData from "../json/testimonials.json";

// Reusable card component (UNCHANGED)
const TestimonialCard = ({ item }) => (
  <div className="w-[280px] sm:w-[320px] md:w-[340px] lg:w-[373px] h-auto min-h-[204px] flex-shrink-0 flex flex-col items-start gap-6 sm:gap-8 p-5 sm:p-6 md:p-8 rounded-[16px] border border-grayBorder bg-darkBg backdrop-blur-[4.59px]">
    <p className="text-cardText font-alexandria text-[14px] sm:text-[16px] leading-normal w-full">
      {item.quote}
    </p>
    <div className="flex items-center gap-3 w-full">
      <img
        src={profile}
        alt={item.name}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="font-alexandria text-[13px] sm:text-[14px] leading-normal bg-gradient-text-white bg-clip-text text-transparent">
          {item.name}
        </span>
        <span className="text-mutedLabel font-alexandria text-[12px] leading-normal">
          {item.role}
        </span>
      </div>
    </div>
  </div>
);

const Testimonial = () => {
  // ✅ remove 2 cards (keeps first 8 out of 10)
  const items = testimonialsData.items.slice(0, testimonialsData.items.length - 2);

  // ✅ duplicate for infinite loop
  const loopItems = [...items, ...items];

  const scrollRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const SPEED = 2;   // smooth & faster (recommended)

    const tick = () => {
      el.scrollLeft += SPEED;

      // seamless reset (because list duplicated)
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
    <section className="relative w-full bg-surfaceDark pt-[80px] pb-24 overflow-hidden">
      {/* Soft Blue Glow Behind Title */}
      <div className="pointer-events-none absolute left-1/2 -top-40 -translate-x-1/2 w-[606px] h-[425px] rounded-[606px] bg-blue-glow-soft blur-[139.9px]" />

      {/* Content Wrapper */}
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[120px] flex flex-col items-center">
        {/* Testimonial Tag */}
        <div className="inline-flex items-center justify-center px-5 py-2 rounded-[24px] border border-grayLine backdrop-blur-[20px] mb-5">
          <span className="text-neoGreen font-alexandria text-[14px]">
            {testimonialsData.badge}
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-neoWhite font-alexandria text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[110%] text-center capitalize mb-5">
          {testimonialsData.title}
        </h2>

        {/* Subtitle */}
        <p className="text-neoGray font-inter text-[16px] md:text-[18px] leading-[140%] text-center max-w-[644px]">
          {testimonialsData.subtitle}
        </p>
      </div>

      {/* ✅ One-row Horizontal Auto Scroll (never stops) */}
      <div className="relative w-full mt-8 mb-8">
        {/* Left Smoke Overlay */}
        <div className="absolute left-0 top-0 bottom-0 z-20 pointer-events-none w-[100px] bg-gradient-overlay-left" />
        {/* Right Smoke Overlay */}
        <div className="absolute right-0 top-0 bottom-0 z-20 pointer-events-none w-[100px] bg-gradient-overlay-right" />

        <div
          ref={scrollRef}
          className="relative w-full overflow-x-auto scrollbar-hide scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [-webkit-overflow-scrolling:touch]"
          // ✅ user can scroll, but autoplay won't stop
        >
          <div className="flex gap-5 min-w-max px-4 pb-2">
            {loopItems.map((item, idx) => (
              <TestimonialCard key={`${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
