"use client";
//Setup
import * as React from "react";
import Image from "next/image";
import { generalData } from "@/data/general-data";

function Home() {
  return (
    <div>
      <section className="flex h-screen flex-col items-center justify-center bg-[#11190C] px-5 text-center">
        <Image
          src="/assets/main/LOGO_HORIZONTAL.svg"
          height={88}
          width={520}
          className=" mb-8"
        />
        <p className="mb-8 font-primary font-semibold text-typo-primary">
          Estamos chegando para redefinir a experiência da navegação comum.
        </p>
        <div className="mb-1 flex flex-row">
          {generalData.links.map((i) => (
            <a target="_blank" href={i.href} className="mr-4">
              <Image
                src={i.image}
                alt={`asd ${i.name}`}
                width={28}
                height={28}
                className="brightness-200"
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
