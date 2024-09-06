import React from "react";

function Hero1({ title, text, pill, button, background }) {
  return (
    <section
      className={`h-[100svh] w-full ${background} bg-cover bg-center px-4 text-white`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center text-center">
          {pill}
          <h1 className="mb-6 max-w-5xl text-center font-primary text-4xl font-bold text-typo-primary sm:text-6xl">
            {title}
          </h1>
          <p className="mb-11 max-w-xl text-center font-secondary text-lg font-normal text-typo-secondary">
            {text}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center sm:flex-row">
          {button}
        </div>
      </div>
    </section>
  );
}

export default Hero1;
