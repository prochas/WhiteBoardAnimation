import React from "react";
import HeroSection from "@/components/HeroSection";
import VideosSection from "@/components/VideosSection";
import BenefitsSections from "@/components/BenefitsSections";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <section className="pt-[180px] bg-[#f7f6f4]">
        <HeroSection />
      </section>
      <section className="pt-[100px] bg-white">
        <VideosSection />
      </section>
      <section className="bg-white">
        <BenefitsSections />
      </section>
      <section className="pb-[100px] bg-white">
        <FeatureSection />
      </section>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
