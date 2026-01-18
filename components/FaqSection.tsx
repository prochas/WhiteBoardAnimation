"use client";

import React, { useState } from "react";
import Image from "next/image";

import FaqArrow from "../public/images/faq-arrow.svg";
import { WebflowStagger } from "@/utils/Stagger";
import { WebflowReveal } from "@/utils/Reveal";

interface faqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const faqs: faqItem[] = [
    {
      question: "Kaip galiu susisiekti su jumis?",
      answer:
        "Galite susisiekti su mumis užpildydami kontaktinę formą mūsų svetainėje arba siųsdami el. laišką adresu",
    },
    {
      question: "Kiek laiko užtrunka atsakymas į mano užklausą?",
      answer: "Paprastai atsakome per 24-48 valandas darbo dienomis.",
    },
    {
      question: "Ar teikiate techninę pagalbą?",
      answer:
        "Taip, mūsų komanda teikia techninę pagalbą darbo dienomis nuo 9 iki 18 valandos.",
    },
    {
      question: "Kur esate įsikūrę?",
      answer:
        "Mūsų biuras yra Vilniuje, Lietuvoje. Tačiau mes dirbame su klientais visame pasaulyje.",
    },
  ];

  return (
    <WebflowStagger className="max-w-[1380px] mx-auto pl-[30px] pr-[30px] pt-[70px] pb-[150px]">
      <div className="flex justify-between gap-8">
        <WebflowReveal className="flex flex-col gap-6 max-w-[500px]">
          <h2 className="text-5xl font-[500] leading-[1.2] text-[#000f29]">
            Dažniausiai užduodami klausimai
          </h2>
          <p className="text-[#52525a] tracking-[-0.4px] text-[16px] font-normal leading-[180%]">
            Jei turite daugiau klausimų, nedvejodami susisiekite su mumis. Mūsų
            komanda yra pasirengusi jums padėti ir suteikti reikiamą
            informaciją.
          </p>
        </WebflowReveal>
        <WebflowReveal className="flex flex-col w-[600px] gap-2">
          {faqs.map((faq, index) => (
            <React.Fragment key={index}>
              <div
                className="flex gap-4 bg-[#f7f6f4] p-3.5 cursor-pointer rounded-xl items-center"
                onClick={() => setIsOpen(isOpen === index ? null : index)}
                style={{
                  background:
                    isOpen === index ? "rgb(10, 9, 21)" : "rgb(247, 246, 244)",
                }}
              >
                <div
                  key={index}
                  className="flex bg-[rgb(247, 246, 244)] w-[550px]"
                >
                  <h3
                    className="text-[#0a0915] cursor-pointer letter-spacing-[-0.4px] text-[18px]"
                    style={{
                      color: isOpen === index ? "white" : "rgb(10, 9, 21)",
                    }}
                  >
                    {faq.question}
                  </h3>
                </div>
                <div
                  className="ml-auto flex items-center rounded-xl px-2 cursor-pointer"
                  style={{
                    background: isOpen === index ? "white" : "rgb(10, 9, 21)",
                  }}
                >
                  <Image
                    src={FaqArrow}
                    className={
                      isOpen === index
                        ? "transform rotate-180 transition-transform"
                        : "transition-transform"
                    }
                    style={{
                      filter: isOpen === index ? "invert(1)" : "invert(0)",
                    }}
                    alt="Arrow"
                    width={25}
                    height={25}
                  />
                </div>
              </div>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p
                    className={`p-2 text-[16px] font-normal leading-[180%] tracking-[-0.4px] transition-opacity duration-300 ${
                      isOpen === index
                        ? "opacity-100 text-[#000f29]"
                        : "opacity-0 text-[#52525a]"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </WebflowReveal>
      </div>
    </WebflowStagger>
  );
}
