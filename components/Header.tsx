"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SmalsiaiLogo from "../public/images/logo.svg";
import Link from "next/link";

const ContactModal = dynamic(() => import("./ContactModal"), {
  ssr: false,
});

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <React.Fragment>
      <header
        className="absolute top-0 left-0 right-0 z-[9999] h-[92px] flex items-center"
        style={
          !isHomePage
            ? {
                boxShadow:
                  "0 3px 6px #00183905,0 6px 12px #00183905,0 12px 24px #00183905",
                backgroundColor: "#ffffff",
              }
            : { backgroundColor: "#f7f6f4" }
        }
      >
        <div className="max-w-[1380px] mx-auto pl-[30px] pr-[30px] items-start w-full">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src={SmalsiaiLogo}
                alt="Smalsiai Logo"
                className="object-contain cursor-pointer"
                width={150}
                height={92}
              />
            </Link>
            <div className="flex items-center gap-9">
              <nav>
                <ul className="flex pl-0 mb-0 mt-0 items-center justify-between gap-9">
                  <li className="opacity-85 text-[#0a0915] text-base">
                    <Link
                      href="/"
                      className="text-base hover:text-[#ff7d46] transition duration-300"
                    >
                      Pagrindinis
                    </Link>
                  </li>
                  <li className="opacity-85 text-[#0a0915] text-base">
                    <Link
                      href="/apie-mus"
                      className="text-base hover:text-[#ff7d46] transition duration-300"
                    >
                      Apie mus
                    </Link>
                  </li>
                  <li className="opacity-85 text-[#0a0915] text-base">
                    <Link
                      href="/kontaktai"
                      className="text-base hover:text-[#ff7d46] transition duration-300"
                    >
                      Kontaktai
                    </Link>
                  </li>
                </ul>
              </nav>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="border border-[#ff7d46] bg-[#ff7d46] text-white px-5 py-2 rounded-2xl text-base font-medium hover:bg-white hover:text-[#ff7d46] transition duration-400 cursor-pointer outline-none"
              >
                Gauti pasiūlymą!
              </button>
            </div>
          </div>
        </div>
      </header>
      {isOpen && (
        <ContactModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      )}
    </React.Fragment>
  );
}
