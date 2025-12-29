"use client";

import { useMemo, useState } from "react";
import IconFirst from "../public/images/videoIconOne.svg";
import IconSecond from "../public/images/videoIconTwo.svg";
import IconThird from "../public/images/videoIconThree.svg";
import Image from "next/image";
import { YouTubePlayerWithOverlay } from "./YouTubePlayerWithOverlay";

interface VideoItem {
  title: string;
  icon: string;
  description: string;
  youtubeUrl: string;
}

export default function VideosSection() {
  const videos: VideoItem[] = useMemo(
    () => [
      {
        title: "Naglis Kardelis apie „Valstybę“ ir teisingumo sampratą",
        icon: IconFirst,
        description:
          "„Platonas mano, jog tarp etikos ir politikos yra tiesioginė priklausomybė: tam, kad sukurtum teisingą valstybę, reikia sukurti moralų asmenį“, – teigia profesorius Naglis Kardelis.",
        youtubeUrl: "https://www.youtube.com/watch?v=evkuRmROz98",
      },
      {
        title: "Naglis Kardelis apie „Gorgiją“ ir įtikinėjimo galią",
        icon: IconSecond,
        description:
          "„Gorgijas“ šiuolaikinės politikos kontekste labai svarbus, nes nemaža dalis politikų mano, kad žmonės tai yra kaip tam tikra banda, kuri labai lengvai ganoma“, – teigia profesorius Naglis Kardelis.",
        youtubeUrl: "https://www.youtube.com/watch?v=psJSXFWSm7U",
      },
      {
        title: "IDĖJOS: Leonidas Donskis ir „Nežinomybės žmoguje magija“",
        icon: IconThird,
        description:
          "„Žmogus kultūroje yra nepažįstamasis. Ir baisus pavojus slypi ambicijoje iki galo pažinti žmogų“, – teigė Leonidas Donskis. ",
        youtubeUrl: "https://www.youtube.com/watch?v=aEmxpku8lTY",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-[1380px] mx-auto pl-[30px] pr-[30px] pb-[100px]">
      <h2 className="text-4xl font-semibold leading-[1.2] text-[#000f29] mb-10 text-center">
        Our Latest Videos
      </h2>
      <div className="flex overflow-hidden flex-start">
        <div className="flex max-w-[500px] w-full flex-col gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`p-5 cursor-pointer transition duration-200 ${
                index === activeIndex
                  ? "bg-[#f7f6f480] border-l-4 border-l-[#ff7d46] rounded-r-md"
                  : "border-l-4 border-l-transparent"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-start gap-4 mb-3">
                <Image
                  src={video.icon}
                  alt={video.title}
                  width={30}
                  height={30}
                />
                <h3 className="text-[20px] font-semibold mb-2 text-[#11122c]">
                  {video.title}
                </h3>
              </div>
              <p className="text-base text-[#52525a]">{video.description}</p>
            </div>
          ))}
        </div>
        <div className="w-full max-w-[871px] ml-[65px] flex items-center justify-center p-6">
          <div className="relative w-full">
            <YouTubePlayerWithOverlay
              youtubeUrl={videos[activeIndex].youtubeUrl}
              title={videos[activeIndex].title}
            />
            <div className="mt-4 flex justify-end">
              <a
                href="https://www.youtube.com/@Smalsiai/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-md font-medium text-[#11122c] hover:text-[#ff7d46] transition"
              >
                Check all videos
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
