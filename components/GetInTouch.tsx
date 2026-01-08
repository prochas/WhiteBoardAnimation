import Image from "next/image";

import AddressIcon from "@/public/images/address.svg";
import EmailIcon from "@/public/images/email.svg";
import PhoneIcon from "@/public/images/phone.svg";
import ContactForm from "./ContactForm";
import { WebflowStagger } from "@/utils/Stagger";
import { WebflowReveal } from "@/utils/Reveal";

export default function GetInTouch() {
  return (
    <WebflowStagger className="max-w-[1380px] mx-auto pl-[30px] pr-[30px] pb-[100px]">
      <h2 className="text-4xl font-semibold leading-[1.2] text-[#000f29] mb-15 text-center">
        Get in Touch
      </h2>
      <div className="flex items-center justify-between gap-10 items-stretch">
        <WebflowReveal className="flex flex-col w-full bg-[#f7f6f4] p-10 rounded-xl max-w-[550px]">
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-semibold text-[#000f29]">Contacts</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Image
                  src={EmailIcon}
                  alt="email icon"
                  width={32}
                  height={32}
                />
                <span className="text-lg font-medium text-[#000f29]">
                  Email
                </span>
              </div>
              <span className="text-base text-[#52525a]">
                For any inquiries, support, or feedback, feel free to email us.
                Our team will get back to you within 24-48 hours.
              </span>
              <a
                href="mailto:hello@calentask.app"
                className="text-md mt-2 text-[#11122c] font-medium"
              >
                smalsiai@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <div className="flex items-center gap-3">
                <Image
                  src={PhoneIcon}
                  alt="phone icon"
                  width={32}
                  height={32}
                />
                <span className="text-lg font-medium text-[#000f29]">
                  Phone
                </span>
              </div>
              <span className="text-base text-[#52525a]">
                Need immediate assistance? Our customer support team is
                available Monday to Friday, from 9 AM to 6 PM.
              </span>
              <a
                href="tel:+1234567890"
                className="text-md mt-2 text-[#11122c] font-medium"
              >
                +375 (44) 123-45-67
              </a>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <div className="flex items-center gap-3">
                <Image
                  src={AddressIcon}
                  alt="location icon"
                  width={32}
                  height={32}
                />
                <span className="text-lg font-medium text-[#000f29]">
                  Location
                </span>
              </div>
              <span className="text-base text-[#52525a]">
                Feel free to stop by during office hours or send us mail at your
                convenience.
              </span>
              <div className="text-md mt-2 text-[#11122c] font-medium">
                L. Asanavičiūtės g. 20, Vilnius, Lithuania
              </div>
            </div>
          </div>
        </WebflowReveal>
        <WebflowReveal className="flex flex-col w-full bg-[#f7f6f4] p-10 rounded-xl">
          <ContactForm />
        </WebflowReveal>
      </div>
    </WebflowStagger>
  );
}
