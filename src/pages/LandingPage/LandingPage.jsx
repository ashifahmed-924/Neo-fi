import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Brands from "../../components/brands";
import Features from "../../components/features";
import Stats from "../../components/Stats";
import MoreFeature from "../../components/MoreFeature";
import Testimonial from "../../components/Testimonial";
import FAQ from "../../components/FAQ";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";








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
      <FAQ />
      <CTA />
      <Footer/>
      
    </div>
  );
};

export default LandingPage;
