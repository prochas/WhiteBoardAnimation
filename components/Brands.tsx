import Image from "next/image";

import BrandOne from "@/public/images/brand-one.svg";
import BrandTwo from "@/public/images/brand-two.svg";
import BrandThree from "@/public/images/brand-three.svg";
import BrandFour from "@/public/images/brand-four.svg";
import BrandFive from "@/public/images/brand-five.svg";
import BrandSix from "@/public/images/brand-six.svg";
import BrandSeven from "@/public/images/brand-seven.svg";
import { WebflowStagger } from "@/utils/Stagger";
import { WebflowReveal } from "@/utils/Reveal";

const brands = [
  BrandOne,
  BrandTwo,
  BrandThree,
  BrandFour,
  BrandFive,
  BrandSix,
  BrandSeven,
];

export default function Brands() {
  return (
    <WebflowStagger className="max-w-[1380px] mx-auto px-[30px]">
      <p className="text-center text-md text-[#52525a] uppercase">
        Loved by over 1 million users from companies like
      </p>

      {/* Mobile marquee */}
      <div className="overflow-hidden mt-10 lg:hidden">
        <div className="flex w-max gap-8 brand-marquee">
          {[...brands, ...brands].map((brand, index) => (
            <Image
              key={index}
              src={brand}
              alt={`Brand ${index + 1}`}
              className="h-16 object-contain opacity-50"
            />
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <WebflowReveal className="hidden lg:flex flex-wrap justify-center gap-10 mt-10 max-w-[900px] mx-auto">
        {brands.map((brand, index) => (
          <Image
            key={index}
            src={brand}
            alt={`Brand ${index + 1}`}
            className="h-16 object-contain opacity-50"
          />
        ))}
      </WebflowReveal>
    </WebflowStagger>
  );
}
