"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BurgerIcon from "../public/images/burger-icon.svg";
import CloseIcon from "../public/images/close-mobile.svg";
import Link from "next/link";
import SmalsiaiLogo from "../public/images/logo.svg";

const ContactModal = dynamic(() => import("./ContactModal"), {
  ssr: false,
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
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
        <div className="max-w-[1380px] mx-auto px-[30px] w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <Image
                src={SmalsiaiLogo}
                alt="Smalsiai Logo"
                width={150}
                height={92}
                className="object-contain"
              />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-9">
              <nav>
                <ul className="flex items-center gap-9">
                  <li>
                    <Link href="/" className="hover:text-[#ff7d46] transition">
                      Pagrindinis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/apie-mus"
                      className="hover:text-[#ff7d46] transition"
                    >
                      Apie mus
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kontaktai"
                      className="hover:text-[#ff7d46] transition"
                    >
                      Kontaktai
                    </Link>
                  </li>
                </ul>
              </nav>

              <button
                onClick={() => setIsOpen(true)}
                className="border border-[#ff7d46] bg-[#ff7d46] text-white px-5 py-2 rounded-2xl hover:bg-white hover:text-[#ff7d46] transition cursor-pointer outline-none"
              >
                Gauti pasiūlymą!
              </button>
            </div>

            {/* Burger button (mobile) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1"
              aria-label="Toggle menu"
            >
              <Image
                src={isMenuOpen ? CloseIcon : BurgerIcon}
                alt="Menu"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`absolute top-[92px] left-0 w-full bg-white shadow-lg md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
          style={{ backgroundColor: !isHomePage ? "#ffffff" : "#f7f6f4" }}
        >
          <nav
            className={`px-6 py-6 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-y-0" : "-translate-y-2"}`}
          >
            <ul className="flex flex-col gap-6">
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  Pagrindinis
                </Link>
              </li>
              <li>
                <Link href="/apie-mus" onClick={() => setIsMenuOpen(false)}>
                  Apie mus
                </Link>
              </li>
              <li>
                <Link href="/kontaktai" onClick={() => setIsMenuOpen(false)}>
                  Kontaktai
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsOpen(true);
                  }}
                  className="w-full border border-[#ff7d46] bg-[#ff7d46] text-white py-3 rounded-2xl"
                >
                  Gauti pasiūlymą!
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {isOpen && (
        <ContactModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
