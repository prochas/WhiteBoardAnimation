"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion, type Variants } from "framer-motion";

const ContactModal = dynamic(() => import("./ContactModal"), {
  ssr: false,
});

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const media: Variants = {
    hidden: { opacity: 0, y: 14, scale: 0.98, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <React.Fragment>
      <div className="max-w-[1380px] mx-auto pl-[30px] pr-[30px] pt-[30px]">
        <motion.div
          className="flex items-center justify-between gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* LEFT (staggered) */}
          <div className="flex max-w-[650px] flex-col gap-6 mb-[5rem]">
            <div className="flex flex-col gap-5">
              <motion.h1
                className="text-6xl font-semibold leading-[1.2] text-[#090a15]"
                variants={item}
              >
                Let’s Create Your Next Whiteboard Animation!
              </motion.h1>
              <motion.p className="text-lg text-[#3c3a4a]" variants={item}>
                Turning ideas into engaging stories with a great whiteboard
                video.
              </motion.p>
            </div>

            <motion.div className="flex items-center gap-8" variants={item}>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="w-fit border border-[#ff7d46] bg-[#ff7d46] text-white px-7 py-3 rounded-3xl text-lg font-medium hover:bg-white hover:text-[#ff7d46] transition duration-400 cursor-pointer outline-none"
              >
                Get an Offer!
              </button>

              <a
                className="text-base font-medium text-black transition duration-300 ease-in-out hover:text-[#ff7d46]"
                href="#"
              >
                Watch Video{" "}
                <span aria-hidden="true" className="ml-1">
                  →
                </span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT (revealed media) */}
          <motion.div
            className="z-[1] w-full max-w-[668px] h-[560px] relative"
            variants={media}
          >
            <div className="z-[1] w-full h-[468px] relative overflow-hidden flex items-center justify-center">
              <div className="rounded-xl px-[20px] py-[20px] bg-gradient-to-b from-[#f99079] via-[#f99079] via-[100%] to-white">
                <div className="w-[100%] h-[95%] rounded-xl overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="metadata"
                  >
                    <source
                      src="https://tchke5jlslnwcioi.public.blob.vercel-storage.com/hero-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {isOpen && (
        <ContactModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      )}
    </React.Fragment>
  );
}
