import React from "react";
import HeroSection from "@/components/HeroSection";
import VideosSection from "@/components/VideosSection";

export default function Home() {
  return (
    <React.Fragment>
      <section className="pt-[180px] bg-[#f7f6f4]">
        <HeroSection />
      </section>
      <section className="pt-[100px] bg-white">
        <VideosSection />
      </section>
    </React.Fragment>
  );
}
