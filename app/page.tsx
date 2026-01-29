import React from "react";
import HeroSection from "@/components/HeroSection";
import VideosSection from "@/components/VideosSection";
import BenefitsSections from "@/components/BenefitsSections";
import FeatureSection from "@/components/FeatureSection";
import GetInTouch from "@/components/GetInTouch";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <React.Fragment>
      <section className="bg-[#f7f6f4]">
        <HeroSection />
      </section>
      <section className="bg-white lg:pt-[100px] pt-[70px]">
        <Brands />
      </section>
      <section className="lg:pt-[100px] pt-[70px] bg-white">
        <VideosSection />
      </section>
      <section className="bg-white">
        <BenefitsSections />
      </section>
      <section className="bg-white">
        <FeatureSection />
      </section>
      <section className="bg-white">
        <GetInTouch />
      </section>
    </React.Fragment>
  );
}
