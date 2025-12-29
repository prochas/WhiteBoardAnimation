import Image from "next/image";

export default function Home() {
  return (
    <section className="pt-[180px] bg-[#f7f6f4]">
      <div className="max-w-[1380px] mx-auto pl-[30px] pr-[30px] pb-[100px]">
        <div className="flex items-center justify-between gap-10">
          <div className="flex max-w-[650px] flex-col gap-6">
            <div className="flex flex-col gap-5">
              <h1 className="text-6xl font-semibold leading-[1.2] text-[#090a15]">
                Let’s Create Your Next Whiteboard Animation!
              </h1>
              <p className="text-lg text-[#3c3a4a]">
                Turning ideas into engaging stories with a great whiteboard
                video.
              </p>
            </div>
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="w-fit border border-[#ff7d46] bg-[#ff7d46] text-white px-7 py-3 rounded-3xl text-lg font-medium hover:bg-white hover:text-[#ff7d46] transition duration-400"
              >
                Get an Offer!
              </a>
              <a
                className="text-base font-medium text-black transition duration-300 ease-in-out hover:text-[#ff7d46]"
                href="#"
              >
                Watch Video{" "}
                <span aria-hidden="true" className="ml-1">
                  →
                </span>
              </a>
            </div>
          </div>
          <div className="z-[1] w-full max-w-[668px] h-[560px] relative">
            <div className="z-[1] w-full h-[468px] relative overflow-hidden flex items-center justify-center">
              <div className="w-[100%] h-[95%] rounded-2xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="metadata"
                >
                  <source
                    src="https://tchke5jlslnwcioi.public.blob.vercel-storage.com/yt-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="z-[-1] flex items-center w-full h-full absolute inset-0">
              <div className="absolute -z-10 top-[-40px] w-[90%] h-full rounded-full left-[25px] bg-gradient-to-b from-[#ff7d46] to-[#f7f6f4]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
