import Image from "next/image";

import SmalsiaiLogo from "../public/images/logo.svg";

import FacebookIcon from "../public/images/facebook.svg";
import YoutubeIcon from "../public/images/youtube.svg";
import InstagramIcon from "../public/images/instagram.svg";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-[1380px] mx-auto pl-[30px] pr-[30px] pb-[50px] pt-[50px] border-t border-[#e5e7eb]">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col w-[25%] gap-8">
            <Image
              src={SmalsiaiLogo}
              alt="Smalsiai Logo"
              className="object-contain cursor-pointer"
              width={124}
              height={35}
            />
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-8">
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="text-black hover:text-[#ff7d46] transition-colors duration-300"
                >
                  <Image
                    src={FacebookIcon}
                    alt="Facebook"
                    className="w-10 h-10"
                  />
                </a>
                <a
                  href="https://youtube.com"
                  aria-label="YouTube"
                  className="text-black hover:text-[#ff7d46] transition-colors duration-300"
                >
                  <Image src={YoutubeIcon} alt="YouTube" className="w-8 h-8" />
                </a>

                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  className="text-black hover:text-[#ff7d46] transition-colors duration-300"
                >
                  <Image
                    src={InstagramIcon}
                    alt="Instagram"
                    className="w-8 h-8"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm justify-end">
            <a
              href="#"
              className="text-[#11122c] hover:text-[#ff7d46] transition duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-[#11122c]">|</span>
            <a
              href="#"
              className="text-[#11122c] hover:text-[#ff7d46] transition duration-300"
            >
              Services
            </a>
            <span className="text-[#11122c]">|</span>
            <a
              href="#"
              className="text-[#11122c] hover:text-[#ff7d46] transition duration-300"
            >
              Contact Us
            </a>
            <span className="text-[#11122c]">|</span>
            <a
              href="#"
              className="text-[#11122c] hover:text-[#ff7d46] transition duration-300"
            >
              About Us
            </a>
          </div>

          <div className="flex justify-start">
            <span className="text-sm">
              © {new Date().getFullYear()} Smalsiai. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
