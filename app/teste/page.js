"use client";
//Setup
import * as React from "react";
import Image from "next/image";
import CarrouselTeste from "@/components/carrousels/CarrouselTeste";

const Teste = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <section
        className="w-full bg-carrouselGradient pb-20 pt-[160px]"
        id="produtos"
      >
        <div className="flex flex-col items-center justify-center px-4">
          <Image
            src="/assets/icons/general/jetcross-type-logo.svg"
            height={20}
            width={190}
            className="mb-3"
          />
          <Image
            src="/assets/icons/general/aquaseeker-logo.svg"
            height={70}
            width={630}
            className="mb-3"
          />
          <p className="text-center font-secondary text-lg text-typo-secondary">
            O equilíbrio perfeito entre um design espaçoso e ótimo desempenho.
          </p>
        </div>

        <CarrouselTeste />

        <div className="flex flex-row items-center justify-center px-4 pt-24">
          <div
            class={`mr-4 flex h-10 w-[50px] shrink-0 items-center justify-center bg-primary-default`}
            style={{
              clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)",
            }}
          >
            <Image
              src="/assets/icons/general/play.svg"
              width={24}
              height={24}
              className="shrink-0"
            />
          </div>
          <p className="font-secondary text-lg text-typo-secondary">
            <a
              target="_blank"
              className="cursor-pointer text-primary-default underline transition duration-300 ease-out hover:text-typo-primary hover:transition hover:duration-200 hover:ease-out"
              onClick={() => setModal(true)}
            >
              Assista o vídeo de demonstração do AquaSeeker!
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Teste;
