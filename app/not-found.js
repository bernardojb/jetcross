// import { BtnChev } from '@/components/buttons/BtnChev'
import Image from "next/image";
import React from "react";
import Link from "next/link";

const notFound = () => {
  return (
    <section className="bg-cream flex h-screen items-center justify-center">
      <div className="container flex flex-col items-center justify-center">
        <Image
          className="mb-4"
          src="/assets/main/main-logo-icon.svg"
          width={50}
          height={50}
          alt="Main Logo"
        />
        <h1 className="text-primary mb-4 text-center text-xl font-semibold">
          Não conseguimos encontrar essa página!
        </h1>
        <p className="text-secondary mb-20 text-center text-base">
          Parece que o conteúdo que você está buscando não existe.
        </p>
        <Link
          href="/"
          className="rounded-full bg-white px-4 py-1 font-bold text-black"
        >
          {" "}
          Voltar para home
        </Link>
      </div>
    </section>
  );
};

export default notFound;
