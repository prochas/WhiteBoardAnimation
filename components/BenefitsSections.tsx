"use client";

import { WebflowReveal } from "@/utils/Reveal";
import { WebflowStagger } from "@/utils/Stagger";
import Image from "next/image";

export default function BenefitsSections() {
  return (
    <WebflowStagger className="max-w-[1380px] mx-auto pl-[30px] pr-[30px] lg:pb-[100px] pb-[50px]">
      <h2 className="lg:text-4xl text-3xl font-semibold leading-[1.2] text-[#000f29] lg:mb-15 mb-8 text-center lg:mt-0 mt-10">
        Key Benefits for Your Business
      </h2>
      <div className="flex flex-col lg:gap-[100px] gap-[70px]">
        {/* Boosted Conversions */}
        <div className="flex items-center lg:gap-[150px] gap-[50px] lg:flex-row flex-col">
          <WebflowReveal className="flex items-center justify-center w-full lg:max-w-[541px] lg:min-h-[506px] rounded-[24px] px-[20px] py-[40px] bg-gradient-to-b from-[#f99079] via-[#fcc7be] via-[42.8%] to-white">
            <Image
              src="/images/benefit-third.png"
              style={{ borderRadius: "8px", marginLeft: "40px", opacity: 0.9 }}
              alt="Boosted Conversions"
              width={550}
              height={550}
            />
          </WebflowReveal>
          <WebflowReveal className="flex flex-col items-start w-full max-w-[648px] gap-[48px]">
            <div className="flex flex-col items-start gap-[25px]">
              <div className="flex flex-row justify-start bg-[#f7f6f4] rounded-[24px] py-[6px] px-[14px]">
                <p className="opacity-90 text-[#0a0915] tracking-[-0.4px] text-[16px] font-normal">
                  Lorem Ipsum
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h2 className="max-w-[510px] lg:text-[40px] text-[32px] font-medium leading-[130%] text-[#11122c]">
                  Boosted Conversions
                </h2>
                <p className="text-[#52525a] tracking-[-0.4px] mt-0 text-[16px] font-normal leading-[180%]">
                  Inspire action. Whiteboard videos have been proven to boost
                  conversion rates, turning curious viewers into loyal
                  customers, driving growth, and contributing to your
                  business&apos;s success.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <a
                rel="noopener noreferrer"
                href="#"
                className="group inline-flex text-lg items-center gap-2 text-md font-medium text-[#ff7d46] hover:text-[#11122c] transition"
              >
                Learn more
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </WebflowReveal>
        </div>
        {/* Educational Focus */}
        <div className="flex items-center lg:gap-[150px] gap-[50px] lg:flex-row flex-col-reverse">
          <WebflowReveal className="flex flex-col items-start w-full max-w-[648px] gap-[48px]">
            <div className="flex flex-col items-start gap-[25px]">
              <div className="flex flex-row justify-start bg-[#f7f6f4] rounded-[24px] py-[6px] px-[14px]">
                <p className="opacity-90 text-[#0a0915] tracking-[-0.4px] text-[16px] font-normal">
                  Lorem Ipsum
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h2 className="max-w-[510px] lg:text-[40px] text-[32px] font-medium leading-[130%] text-[#11122c]">
                  Educational Focus
                </h2>
                <p className="text-[#52525a] tracking-[-0.4px] mt-0 text-[16px] font-normal leading-[180%]">
                  What’s more educational than a whiteboard? Whiteboard videos
                  are perfect for breaking down complex information, making it
                  easier to understand and more engaging for your audience.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                rel="noopener noreferrer"
                className="group inline-flex text-lg items-center gap-2 text-md font-medium text-[#ff7d46] hover:text-[#11122c] transition"
              >
                Learn more
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </WebflowReveal>
          <WebflowReveal className="flex items-center justify-center w-full lg:max-w-[541px] lg:min-h-[506px] rounded-[24px] px-[20px] py-[40px] bg-[linear-gradient(143.89deg,_#fff6,_#fff0_67.37%),linear-gradient(#f976b5,_#fa89bf_0%,_#fff_100%,_#fff)]">
            <Image
              src="/images/image-4.png"
              style={{ borderRadius: "8px", opacity: 0.9 }}
              alt="Boosted Conversions"
              width={550}
              height={550}
            />
          </WebflowReveal>
        </div>
        {/* Visual Storytelling */}
        <div className="flex items-center lg:gap-[150px] gap-[50px] lg:flex-row flex-col">
          <WebflowReveal className="flex items-center justify-center w-full lg:max-w-[541px] lg:min-h-[506px] rounded-[24px] px-[20px] py-[40px] bg-[linear-gradient(143.89deg,_#fff6,_#fff0_67.37%),linear-gradient(#7976f9,_#fff)]">
            <Image
              src="/images/ideja-three.png"
              style={{ borderRadius: "15px", opacity: 0.9 }}
              alt="Boosted Conversions"
              width={550}
              height={550}
            />
          </WebflowReveal>
          <WebflowReveal className="flex flex-col items-start w-full max-w-[648px] gap-[48px]">
            <div className="flex flex-col items-start gap-[25px]">
              <div className="flex flex-row justify-start bg-[#f7f6f4] rounded-[24px] py-[6px] px-[14px]">
                <p className="opacity-90 text-[#0a0915] tracking-[-0.4px] text-[16px] font-normal">
                  Lorem Ipsum
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h2 className="max-w-[510px] lg:text-[40px] text-[32px] font-medium leading-[130%] text-[#11122c]">
                  Visual Storytelling
                </h2>
                <p className="text-[#52525a] tracking-[-0.4px] mt-0 text-[16px] font-normal leading-[180%]">
                  Whiteboard animation brings ideas to life through visual
                  storytelling, turning complex messages into simple, memorable,
                  and easy-to-understand content.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                rel="noopener noreferrer"
                className="group inline-flex text-lg items-center gap-2 text-md font-medium text-[#ff7d46] hover:text-[#11122c] transition"
              >
                Learn more
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </WebflowReveal>
        </div>
      </div>
    </WebflowStagger>
  );
}
