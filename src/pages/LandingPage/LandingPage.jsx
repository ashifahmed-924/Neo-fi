import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Brands from "../../components/brands";
import Features from "../../components/features";
import Stats from "../../components/Stats";
import MoreFeature from "../../components/MoreFeature";
import Testimonial from "../../components/Testimonial";





const LandingPage = () => {
  return (
    <div className="bg-darkBg ">
      <Navbar />
      <Hero />
      <Brands />
      <Features />
      <Stats />
      <MoreFeature />
      <Testimonial /> 

    </div>
  );
};

export default LandingPage;
