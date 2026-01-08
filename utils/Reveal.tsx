"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

const webflowReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 18, // becomes translate3d(0, 18px, 0)
    scale: 0.98, // like scale3d
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    skewX: 0,
    skewY: 0,
  },
  show: {
    opacity: 1,
    y: 0, // translate3d(0,0,0)
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    skewX: 0,
    skewY: 0,
    transition: {
      duration: 0.5, // ~400ms like Webflow
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function WebflowReveal({
  children,
  className,
  delay = 0.2,
  once = true,
  amount = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={webflowReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ delay }}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
}
