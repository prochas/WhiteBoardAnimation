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

export default function Brands() {
  return (
    <WebflowStagger className="max-w-[1380px] mx-auto pl-[30px] pr-[30px]">
      <p className="text-center text-md text-[#52525a] uppercase">
        Loved by over 1 million users from companies like
      </p>

      <WebflowReveal className="flex flex-wrap justify-center gap-10 mt-10 max-w-[900px] mx-auto">
        <Image
          src={BrandOne}
          alt="Brand 1"
          className="h-16 object-contain opacity-50"
        />
        <Image
          src={BrandTwo}
          alt="Brand 2"
          className="h-16 object-contain opacity-50"
        />
        <Image
          src={BrandThree}
          alt="Brand 3"
          className="h-16 object-contain opacity-50"
        />
        <Image
          src={BrandFour}
          alt="Brand 4"
          className="h-16 object-contain opacity-50"
        />
        <Image
          src={BrandFive}
          alt="Brand 5"
          className="h-16 object-contain opacity-50"
        />
        <Image
          src={BrandSix}
          alt="Brand 6"
          className="h-16 object-contain opacity-50"
        />
        <Image
          src={BrandSeven}
          alt="Brand 7"
          className="h-16 object-contain opacity-50"
        />
      </WebflowReveal>
    </WebflowStagger>
  );
}
