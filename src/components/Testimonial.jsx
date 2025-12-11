import React from "react";
import profile from "../assets/profile.svg";
import testimonialsData from "../json/testimonials.json";

// Reusable card component
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
        <span
          className="font-alexandria text-[13px] sm:text-[14px] leading-normal bg-gradient-text-white bg-clip-text text-transparent"
        >
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
  return (
    <section className="relative w-full bg-darkBg pt-[80px] pb-24 overflow-hidden">
      {/* Soft Blue Glow Behind Title */}
      <div
        className="pointer-events-none absolute left-1/2 -top-40 -translate-x-1/2 w-[606px] h-[425px] rounded-[606px] bg-blue-glow-soft blur-[139.9px]"
      />

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

      {/* Testimonial Cards */}
      <div className="relative w-full mt-8 mb-8">
        {/* Left Smoke Overlay */}
        <div
          className="absolute left-0 top-0 bottom-0 z-20 pointer-events-none w-[100px] bg-gradient-overlay-left"
        />
        {/* Right Smoke Overlay */}
        <div
          className="absolute right-0 top-0 bottom-0 z-20 pointer-events-none w-[100px] bg-gradient-overlay-right"
        />

        {/* MOBILE: 1 row, horizontal swipe */}
        <div
          className="relative w-full overflow-x-auto scrollbar-hide md:hidden scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [-webkit-overflow-scrolling:touch]"
        >
          <div className="flex gap-4 min-w-max px-4 pb-2">
            {testimonialsData.items.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* TABLET: 3 rows, horizontal swipe */}
        <div
          className="hidden md:block lg:hidden relative w-full overflow-x-auto scrollbar-hide scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [-webkit-overflow-scrolling:touch]"
        >
          <div className="inline-flex flex-col gap-5 min-w-max px-4">
            {/* Row 1 */}
            <div className="flex gap-5">
              {testimonialsData.items.slice(0, 4).map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex gap-5">
              {testimonialsData.items.slice(4, 7).map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </div>
            {/* Row 3 */}
            <div className="flex gap-5">
              {testimonialsData.items.slice(7).map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP: your original 2-row brick layout */}
        <div
          className="hidden lg:block relative w-full overflow-x-auto scrollbar-hide scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [-webkit-overflow-scrolling:touch]"
        >
          <div className="inline-flex flex-col gap-5 min-w-max px-4">
            {/* First Row – even indexes */}
            <div className="flex gap-5">
              {testimonialsData.items.map((item, index) =>
                index % 2 === 0 ? (
                  <TestimonialCard key={item.id} item={item} />
                ) : null
              )}
            </div>

            {/* Second Row – odd indexes, offset for brick effect */}
            <div className="flex gap-5 ml-[196.5px]">
              {testimonialsData.items.map((item, index) =>
                index % 2 === 1 ? (
                  <TestimonialCard key={item.id} item={item} />
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
