"use client";
//Setup
import * as React from "react";
import Link from "next/link";
//Components
import LogoClouds1 from "@/components/logo-clouds/LogoClouds1";
import LogoClouds2 from "@/components/logo-clouds/LogoClouds2";
import Testimonial1 from "@/components/testimonials/Testimonial1";
import Pill1 from "@/components/pills/Pill1";
import Button1 from "@/components/buttons/Button1";
import Stats1 from "@/components/stats/Stats1";
import Stats2 from "@/components/stats/Stats2";
import Content1 from "@/components/content/Content1";
import Content2 from "@/components/content/Content2";
import ContactForm from "@/components/contact-forms/ContactForm";
import Services1 from "@/components/services/Services1";

//**Heroes*/
import Hero1 from "@/components/hero/Hero1";
import Hero2 from "@/components/hero/Hero2";
//**Accordions*/
import AccordionSection1 from "./sections/accordion/AccordionSection1";
import AccordionSection2 from "./sections/accordion/AccordionSection2";
import Accordion3 from "@/components/accordions/Accordion3";
//**Teams*/
import Teams1 from "@/components/teams/Teams1";
//**Contact Form*/
import ContactForm2 from "@/components/contact-forms/ContactForm2";
import ContactForm3 from "@/components/contact-forms/ContactForm3";
import ContactForm4 from "@/components/contact-forms/ContactForm4";
//**Timeline*/
import Timeline1 from "@/components/timelines/Timeline1";
import Marquee1 from "@/components/marquee/Marquee1";
import Image from "next/image";
import Content1_Inverted from "@/components/content/Content1_Inverted";

import Carousel1 from "@/components/carrousels/Carrousel1";

const Home = () => {
  return (
    <>
      <Hero2
        background="bg-hero"
        title="REDEFININDO A EXPERIÊNCIA DE NAVEGAÇÃO COMUM"
        text="A Jetcross chegou para quebrar as barreiras da navegação e proporcionar aventuras aquáticas através da fabricação e comercialização de mini jetboats customizáveis."
        button={
          <>
            <Button1
              style="mr-0 sm:mr-6 mb-5 sm:mb-0 text-black bg-primary-default"
              text="Produtos"
              link="#produtos"
            />
            <Button1
              style="bg-[#FFFFFF1A] text-typo-primary"
              text="Contato"
              link="#contato"
            />
          </>
        }
      />

      <div className="relative h-[120px] w-full overflow-x-hidden bg-red-600">
        <div
          className="absolute top-[25%] rotate-[-1.8deg] overflow-hidden"
          style={{ zIndex: "999 !important" }}
        >
          <Marquee1 direction="left" />
        </div>
        <div
          className="absolute top-[25%] rotate-[1.3deg] overflow-hidden"
          style={{ zIndex: "999 !important" }}
        >
          <Marquee1 direction="right" />
        </div>
      </div>

      <Content1
        subtitle={"MINI JETBOAT?"}
        title={"Mais que um simples barco, o off-road da água"}
        text={
          "Mini jetboats são barcos compactos que combinam desempenho, robustez e versatilidade. São navegáveis em qualquer tipo de água e perfeitos para todos os usos, seja para uma volta casual ou até para a prática de esportes radicais."
        }
        background="bg-content1Gradient"
        image="/assets/images/mini-jetboats.png"
      />

      <section
        className="bg-carrouselGradient flex flex-col items-center justify-center pb-20 pt-[160px]"
        id="produtos"
      >
        <div className="flex flex-col items-center justify-center">
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
          <p className="mb-14 font-secondary text-lg text-typo-secondary">
            O equilíbrio perfeito entre um design espaçoso e ótimo desempenho.
          </p>
        </div>
        <Carousel1 />
        <div className="flex flex-row items-center pt-24">
          <div
            class={`mr-4 flex h-10 w-[50px] items-center justify-center bg-primary-default`}
            style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
          >
            <Image
              src="/assets/icons/general/download.svg"
              width={24}
              height={24}
            />
          </div>
          <p className="font-secondary text-lg text-typo-secondary">
            <a
              target="_blank"
              href="/assets/main/FichaTécnica-AquaSeeker.pdf"
              className="text-primary-default underline"
            >
              Faça o download da ficha técnica
            </a>{" "}
            para visualizar as informações completas do Aqua Seeker
          </p>
        </div>
      </section>

      <section className="flex justify-center bg-[#11190C] px-4 py-7">
        <Link href="#contato">
          <div
            className="bg-accentGradient mx-6 flex w-full max-w-[1342px] flex-row items-center justify-around px-20"
            style={{
              clipPath:
                "polygon(50px 0, 100% 0%, calc(100% - 50px) 100%, 0% 100%)",
            }}
          >
            <Image
              src="assets/icons/general/cta-arrow.svg"
              width={74}
              height={26}
            />
            <h1 className=" title px-5 py-8 text-center font-primary text-5xl text-black">
              PEÇA SEU JETCROSS AGORA
            </h1>
            <Image
              src="assets/icons/general/cta-arrow.svg"
              width={74}
              height={26}
              className=" rotate-180"
            />
          </div>
        </Link>
      </section>

      <Services1
        background="bg-servicesGradient"
        subtitle="NOSSA PROPOSTA"
        title="quebrar as barreiras da navegação comum"
        text="A Jetcross chegou para quebrar as barreiras da navegação e proporcionar aventuras aquáticas através da fabricação e comercialização de mini jetboats customizáveis."
        pillColor="bg-primary-default"
      />

      <Content1_Inverted
        subtitle={"MINI JETBOAT?"}
        title={"Mais que um simples barco, o off-road da água"}
        text={
          "Mini jetboats são barcos compactos que combinam desempenho, robustez e versatilidade. São navegáveis em qualquer tipo de água e perfeitos para todos os usos, seja para uma volta casual ou até para a prática de esportes radicais."
        }
        background="bg-black"
        image="/assets/images/mini-jetboats.png"
      />

      <AccordionSection2
        background="bg-black"
        button={
          <Button1
            style="mb-5 sm:mb-0 text-black bg-primary-default w-fit"
            text="Produtos"
            link="#produtos"
          />
        }
      />

      <Link href="#contato">
        <section className="relative flex h-[324px] w-full items-center justify-center overflow-hidden bg-primary-default">
          <div
            className="bg-complementaryGradient z-10 mx-6 flex w-full max-w-[1342px] flex-row items-center justify-around px-20"
            style={{
              clipPath:
                "polygon(50px 0, 100% 0%, calc(100% - 50px) 100%, 0% 100%)",
            }}
          >
            <Image
              src="assets/icons/general/cta-arrow.svg"
              width={74}
              height={26}
            />
            <h1 className=" title px-5 py-8 text-center font-primary text-5xl text-black">
              PEÇA SEU JETCROSS AGORA
            </h1>
            <Image
              src="assets/icons/general/cta-arrow.svg"
              width={74}
              height={26}
              className="rotate-180"
            />
          </div>
          <Image
            src="assets/icons/general/J.svg"
            width={1050}
            height={730}
            className="absolute left-[-375px] z-0"
          />
        </section>
      </Link>

      <ContactForm2
        background="bg-contactGradient"
        subtitle="contato"
        title="fale conosco"
        text="Entre em contato com nossa equipe de vendas, estamos prontos para te ajudar."
        socialLink="https://www.instagram.com/"
        email="contato@jetcross.com.br"
        phone="+55 11 9 9269-9869"
        social="@jetcrossboats"
      />

      <section className="bg-[#11190C]">
        <div className="grid grid-cols-12">
          <div className="col-span-10 col-start-2 pb-9 pt-14">
            <Image
              src="assets/icons/general/jetcross-type-logo.svg"
              width={1570}
              height={175}
            />
          </div>
          <div className="col-span-10 col-start-2">
            <div className="h-[1px] w-full bg-[#FFFFFF1A]" />
          </div>
          <div className="col-span-10 col-start-2">
            <div className="flex flex-row justify-between">
              <p className="py-5 font-secondary text-base uppercase text-typo-secondary">
                JETCROSS LTDA © 2024
              </p>
              <p className="py-5 font-secondary text-base uppercase text-typo-secondary">
                website crafted by hokup.com.br
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
