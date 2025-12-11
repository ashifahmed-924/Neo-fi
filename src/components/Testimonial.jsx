import React from "react";
import profile from "../assets/profile.svg";

const testimonials = [
  {
    id: 1,
    name: "Kathryn Murphy",
    role: "Co-founder",
    quote:
      "“AI streamlines international client coordination by scheduling emails for optimal inbox timing.”",
  },
  {
    id: 2,
    name: "Eleanor Pena",
    role: "Co-founder",
    quote:
      "“AI streamlines international client coordination by scheduling emails for optimal inbox timing.”",
  },
  {
    id: 3,
    name: "Darrell Steward",
    role: "Co-founder",
    quote:
      "“AI streamlines international client coordination by scheduling emails for optimal inbox timing.”",
  },
  {
    id: 4,
    name: "Bessie Cooper",
    role: "Co-founder",
    quote:
      "“AI streamlines international client coordination by scheduling emails for optimal inbox timing.”",
  },
  {
    id: 5,
    name: "Jerome Bell",
    role: "Co-founder",
    quote:
      "“AI streamlines international client coordination by scheduling emails for optimal inbox timing.”",
  },
  {
    id: 6,
    name: "Guy Hawkins",
    role: "Co-founder",
    quote:
      "“AI streamlines international client coordination by scheduling emails for optimal inbox timing.”",
  },
  {
    id: 7,
    name: "Robert Fox",
    role: "Co-founder",
    quote:
      "“AI streamlines international client coordination by scheduling emails for optimal inbox timing.”",
  },
  {
    id: 8,
    name: "Cameron Williamson",
    role: "Co-founder",
    quote:
      "“AI streamlines international client coordination by scheduling emails for optimal inbox timing.”",
  },
  {
    id: 9,
    name: "Jane Smith",
    role: "Co-founder",
    quote:
      "“AI streamlines international client coordination by scheduling emails for optimal inbox timing.”",
  },
  {
    id: 10,
    name: "John Doe",
    role: "Co-founder",
    quote:
      "“AI streamlines international client coordination by scheduling emails for optimal inbox timing.”",
  },
];

// Reusable card component
const TestimonialCard = ({ item }) => (
  <div className="w-[280px] sm:w-[320px] md:w-[340px] lg:w-[373px] h-[204px] flex-shrink-0 flex flex-col items-start gap-8 p-6 sm:p-8 rounded-[16px] border border-[#4D4D4D] bg-[#000] backdrop-blur-[4.59px]">
    <p className="text-[#EDEDF2] font-alexandria text-[14px] sm:text-[16px] leading-normal w-full">
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
          className="font-alexandria text-[13px] sm:text-[14px] leading-normal"
          style={{
            background: "linear-gradient(0deg, #FFF 0%, #FFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {item.name}
        </span>
        <span className="text-[#4D4D4D] font-alexandria text-[12px] leading-normal">
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
        className="pointer-events-none absolute left-1/2 -top-40 -translate-x-1/2 w-[606px] h-[425px] rounded-[606px]"
        style={{
          background: "rgba(74, 90, 236, 0.06)",
          filter: "blur(139.9px)",
        }}
      />

      {/* Content Wrapper */}
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-[120px] flex flex-col items-center">
        {/* Testimonial Tag */}
        <div className="inline-flex items-center justify-center px-5 py-2 rounded-[24px] border border-[#2E2E2E] backdrop-blur-[20px] mb-5">
          <span className="text-neoGreen font-alexandria text-[14px]">
            Testimonial
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-neoWhite font-alexandria text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[110%] text-center capitalize mb-5">
          Trusted By Innovators
        </h2>

        {/* Subtitle */}
        <p className="text-neoGray font-inter text-[16px] md:text-[18px] leading-[140%] text-center max-w-[644px]">
          Secure your digital assets with the peace of mind that comes from
          knowing you are protected by the best technology in the blockchain
          space.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="relative w-full mt-8 mb-8">
        {/* Left Smoke Overlay */}
        <div
          className="absolute left-0 top-0 bottom-0 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(83deg, #1B1B1B 4.91%, rgba(27, 27, 27, 0.00) 94.64%)",
            width: "100px",
          }}
        />
        {/* Right Smoke Overlay */}
        <div
          className="absolute right-0 top-0 bottom-0 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(263deg, #1B1B1B 4.91%, rgba(27, 27, 27, 0.00) 94.64%)",
            width: "100px",
          }}
        />

        {/* MOBILE: 1 row, horizontal swipe */}
        <div
          className="relative w-full overflow-x-auto scrollbar-hide md:hidden"
          style={{
            scrollBehavior: "smooth",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex gap-5 min-w-max px-4">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* TABLET: 3 rows, horizontal swipe */}
        <div
          className="hidden md:block lg:hidden relative w-full overflow-x-auto scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="inline-flex flex-col gap-5 min-w-max px-4">
            {/* Row 1 */}
            <div className="flex gap-5">
              {testimonials.slice(0, 4).map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex gap-5">
              {testimonials.slice(4, 7).map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </div>
            {/* Row 3 */}
            <div className="flex gap-5">
              {testimonials.slice(7).map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP: your original 2-row brick layout */}
        <div
          className="hidden lg:block relative w-full overflow-x-auto scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="inline-flex flex-col gap-5 min-w-max px-4">
            {/* First Row – even indexes */}
            <div className="flex gap-5">
              {testimonials.map((item, index) =>
                index % 2 === 0 ? (
                  <TestimonialCard key={item.id} item={item} />
                ) : null
              )}
            </div>

            {/* Second Row – odd indexes, offset for brick effect */}
            <div className="flex gap-5 ml-[196.5px]">
              {testimonials.map((item, index) =>
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
