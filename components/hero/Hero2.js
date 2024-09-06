import React from "react";

function Hero2({ title, text, background, pill, button }) {
  return (
    <section
      className={`h-[100svh] w-full text-white ${background} bg-cover bg-center bg-no-repeat px-4 pb-24`}
    >
      <div className="flex h-full w-full flex-col justify-end lg:grid lg:grid-cols-12">
        <div className="mb-6 lg:col-span-5 lg:col-start-2 lg:mb-0">
          <div className="flex h-full flex-col items-start justify-end">
            {pill}
            <h1 className=" font-primary text-4xl font-bold text-typo-primary lg:text-5xl xl:text-6xl">
              {title}
            </h1>
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-8">
          <div className="flex h-full flex-col items-start justify-end">
            <p className="mb-11 max-w-xl text-start font-secondary text-2xl font-normal text-typo-secondary">
              {text}
            </p>
            <div className="flex flex-row">{button}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
