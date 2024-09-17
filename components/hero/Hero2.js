import React from "react";
import Image from "next/image";

function Hero2({ title, text, background, button, marquee }) {
  return (
    <div className="relative h-full overflow-hidden">
      <section 
        className={`h-[95svh] w-full text-white ${background} bg-cover bg-center bg-no-repeat px-4`}
      >
        <div className="flex h-full w-full flex-col justify-end lg:grid lg:grid-cols-12 lg:gap-4">
          <div className="mb-6 lg:col-span-5 lg:col-start-2 lg:mb-24">
            <div className="flex h-full flex-col items-start justify-end">
              <Image
                src="assets/icons/general/custom-minijets.svg"
                height={15}
                width={379}
                alt=""
                className="mb-8"
              />
              <h1 className="title font-primary text-4xl uppercase tracking-[-0.1875rem] text-typo-primary lg:text-5xl xl:text-6xl">
                {title}
              </h1>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-8 lg:mb-24">
            <div className="flex h-full flex-col items-start justify-end">
              <p
                className="paragraph mb-11 text-start font-secondary text-2xl text-typo-primary"
                id="hero"
              >
                {text}
              </p>
              <div className="flex flex-row">{button}</div>
            </div>
          </div>
        </div>
      </section>
      {marquee}
    </div>
  );
}

export default Hero2;
