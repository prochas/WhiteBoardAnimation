import React from "react";
import Image from "next/image";

import SmalsiaiLogo from "../public/images/logo.svg";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-[9999] h-[92px] flex items-center">
      <div className="max-w-[1380px] mx-auto pl-[30px] pr-[30px] items-start w-full">
        <div className="flex items-center justify-between">
          <Image
            src={SmalsiaiLogo}
            alt="Smalsiai Logo"
            className="object-contain cursor-pointer"
            width={150}
            height={92}
          />
          <div className="flex items-center gap-9">
            <nav>
              <ul className="flex pl-0 mb-0 mt-0 items-center justify-between gap-9">
                <li className="opacity-85 text-[#0a0915] text-base">
                  <a
                    href="#"
                    className="text-base hover:text-[#ff7d46] transition duration-300"
                  >
                    Pagrindinis
                  </a>
                </li>
                <li className="opacity-85 text-[#0a0915] text-base">
                  <a
                    href="#"
                    className="text-base hover:text-[#ff7d46] transition duration-300"
                  >
                    Apie mus
                  </a>
                </li>
                <li className="opacity-85 text-[#0a0915] text-base">
                  <a
                    href="#"
                    className="text-base hover:text-[#ff7d46] transition duration-300"
                  >
                    Paslaugos
                  </a>
                </li>
                <li className="opacity-85 text-[#0a0915] text-base">
                  <a
                    href="#"
                    className="text-base hover:text-[#ff7d46] transition duration-300"
                  >
                    Kontaktai
                  </a>
                </li>
              </ul>
            </nav>
            <a
              href="#"
              className="border border-[#ff7d46] bg-[#ff7d46] text-white px-5 py-2 rounded-2xl text-base font-medium hover:bg-white hover:text-[#ff7d46] transition duration-400"
            >
              Gauti pasiūlymą!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
