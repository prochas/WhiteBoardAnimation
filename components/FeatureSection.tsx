"use client";

import Image from "next/image";

import { WebflowStagger } from "@/utils/Stagger";
import { WebflowReveal } from "@/utils/Reveal";

import FeatureOne from "../public/images/one-min.jpg";
import FeatureTwo from "../public/images/two-min.jpg";
import FeatureThree from "../public/images/three-min.jpg";
import FeatureFour from "../public/images/four-min.jpg";
import FeatureFive from "../public/images/five-min.jpg";
import FeatureSix from "../public/images/six-min.jpg";
import FeatureSeven from "../public/images/seven-min.jpg";
import FeatureEight from "../public/images/eight-min.jpg";
import FeatureNine from "../public/images/nine-min.jpg";
import FeatureTen from "../public/images/ten-min.jpg";

import FeatureBackground from "../public/images/feature-background.svg";

export default function FeatureSection() {
  return (
    <WebflowStagger className="max-w-[1380px] mx-auto lg:pl-[30px] lg:pr-[30px] pl-[20px] pr-[20px] lg:pb-[100px] pb-[70px] lg:mt-[50px]">
      <div
        className="flex flex-col lg:gap-16 gap-10 bg-[#0a0915] rounded-[24px] pt-[70px] pb-[100px] relative z-[1]"
        style={{
          backgroundImage: `url(${FeatureBackground.src})`,
          backgroundSize: "100% auto",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <WebflowReveal className="flex flex-col items-center gap-10 text-center px-5">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="opacity-70 text-white tracking-[2px] uppercase text-[12px] font-normal">
              Features
            </p>
            <h2 className="max-w-[800px] lg:text-[40px] text-[32px] font-medium leading-[130%] text-white">
              Discover the Power of Our Whiteboard Animation Services
            </h2>
            <p className="max-w-[700px] text-white tracking-[-0.4px] mt-0 lg:text-[16px] text-[14px] font-normal leading-[180%]">
              Our whiteboard animation services are designed to bring your ideas
              to life with engaging visuals and compelling storytelling. Explore
              the features that set us apart and make us the ideal partner for
              your next project.
            </p>
          </div>
          <a
            className="border border-[#ff7d46] bg-[#ff7d46] text-white px-5 py-2 rounded-2xl text-base font-medium hover:bg-white hover:text-[#ff7d46] transition duration-400"
            href="https://www.youtube.com/@Smalsiai/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Our Features
          </a>
        </WebflowReveal>
        <WebflowReveal className="relative overflow-hidden mt-10">
          {/* Fade edges (optional but recommended) */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0a0915] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0a0915] to-transparent z-10" />

          <div className="whitespace-nowrap overflow-hidden">
            <div className="flex w-max animate-scroll-right gap-10">
              {/* First batch */}
              {[
                FeatureOne,
                FeatureTwo,
                FeatureThree,
                FeatureFour,
                FeatureFive,
                FeatureSix,
                FeatureSeven,
                FeatureEight,
                FeatureNine,
                FeatureTen,
              ].map((img, index) => (
                <Image
                  key={`first-${index}`}
                  src={img}
                  alt=""
                  className="rounded-xl select-none pointer-events-none opacity-80 lg:w-[300px] lg:h-[160px] w-[200px] h-[120px]"
                  width={300}
                  height={160}
                  draggable={false}
                  priority={false}
                />
              ))}

              {/* Duplicate batch for seamless loop */}
              {[
                FeatureOne,
                FeatureTwo,
                FeatureThree,
                FeatureFour,
                FeatureFive,
                FeatureSix,
                FeatureSeven,
                FeatureEight,
                FeatureNine,
                FeatureTen,
              ].map((img, index) => (
                <Image
                  key={`second-${index}`}
                  src={img}
                  alt=""
                  className="rounded-xl select-none pointer-events-none opacity-80 lg:w-[300px] lg:h-[160px] w-[200px] h-[120px]"
                  width={300}
                  height={160}
                  draggable={false}
                  priority={false}
                />
              ))}
            </div>
          </div>
        </WebflowReveal>
      </div>
    </WebflowStagger>
  );
}
