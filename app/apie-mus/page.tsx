import React from "react";
import SmalsiaiMainLogo from "../../public/images/smalsiai-main-third.png";
import { WebflowStagger } from "@/utils/Stagger";
import { WebflowReveal } from "@/utils/Reveal";

import Experience from "../../public/images/experience.svg";
import WorldWide from "../../public/images/worldwide.svg";
import Procress from "../../public/images/process.svg";
import Quality from "../../public/images/quality.svg";
import Image, { StaticImageData } from "next/image";
import FaqSection from "@/components/FaqSection";

interface InfoItem {
  img: StaticImageData;
  name: string;
}

const Page = () => {
  const info: InfoItem[] = [
    {
      img: Experience,
      name: "Ilgametė patirtis",
    },
    {
      img: WorldWide,
      name: "Klientai visame pasaulyje",
    },
    {
      img: Procress,
      name: "Pritaikytas procesas",
    },
    {
      img: Quality,
      name: "5 žvaigždučių kokybė",
    },
  ];

  return (
    <React.Fragment>
      <WebflowStagger className="lg:flex-row flex flex-col max-w-[1380px] mx-auto lg:pl-[30px] lg:pr-[30px] pl-[20px] pr-[20px] lg:pt-[70px] pt-[30px] pb-[50px] lg:gap-15 gap-10">
        <WebflowReveal>
          <Image
            src={SmalsiaiMainLogo}
            alt="Apie Mus"
            width={400}
            height={400}
            style={{ objectFit: "contain" }}
            className="lg:w-[400px] w-full h-auto mx-auto"
          />
        </WebflowReveal>
        <WebflowReveal className="flex flex-col justify-center">
          <h1 className="lg:text-4xl text-3xl lg:text-left text-center font-bold mb-6 text-[#000f29]">Apie Mus</h1>
          <p className="mb-4 max-w-3xl text-justify text-lg">
            Sveiki atvykę į Smalsiai.lt Mes esame komanda, kuri siekia suteikti
            jums įdomią ir naudingą informaciją apie įvairias temas. Mūsų
            tikslas yra skatinti smalsumą ir žinių troškimą per mūsų turinį.
          </p>
          <p className="mb-4 max-w-3xl text-justify text-lg">
            Mūsų komanda susideda iš entuziastingų rašytojų, tyrinėtojų ir
            kūrėjų, kurie nuolat ieško naujų idėjų ir tendencijų. Mes tikime,
            kad žinios yra galia, ir norime pasidalinti šia galia su jumis.
          </p>
          <p className="mb-4 max-w-3xl text-justify text-lg">
            Dėkojame, kad lankotės Smalsiai.lt Tikimės, kad rasite čia tai, ko
            ieškote, ir kad mūsų turinys įkvėps jus būti smalsiais kiekvieną
            dieną!
          </p>
        </WebflowReveal>
      </WebflowStagger>
      <WebflowStagger className="max-w-[1380px] mx-auto lg:pl-[30px] lg:pr-[30px] pl-[20px] pr-[20px] lg:pb-[80px] pb-[50px] grid grid-cols-1 md:grid-cols-4 gap-8 lg:pt-[80px] pt-[20px]">
        {info.map((item, index) => (
          <WebflowReveal key={index}>
            <div className="flex flex-col items-center justify-center lg:p-6 p-3 rounded-lg h-full">
              <Image
                className="mb-7"
                src={item.img}
                alt={item.name}
                width={90}
                height={90}
              />
              <h2 className="text-xl text-center text-[#11122c]">
                {item.name}
              </h2>
            </div>
          </WebflowReveal>
        ))}
      </WebflowStagger>
      <FaqSection />
    </React.Fragment>
  );
};

export default Page;
