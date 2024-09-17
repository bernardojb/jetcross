"use client";
//Setup
import * as React from "react";

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
        pill={<></>}
        title="REDEFININDO A EXPERIÊNCIA DE NAVEGAÇÃO COMUM"
        text="A Jetcross chegou para quebrar as barreiras da navegação e proporcionar aventuras aquáticas através da fabricação e comercialização de mini jetboats customizáveis."
        button={
          <>
            <Button1
              style="mr-0 sm:mr-6 mb-5 sm:mb-0 text-black bg-primary-default"
              text="Produtos"
              link="/"
            />
            <Button1
              style="bg-[#FFFFFF1A] text-typo-primary"
              text="Contato"
              link="/"
            />
          </>
        }
      />

      {/* <Marquee1 direction="right" style="rotate-12" /> */}
      {/* <Marquee1 direction="left" style="" /> */}

      <Content1
        subtitle={"MINI JETBOAT?"}
        title={"Mais que um simples barco, o off-road da água"}
        text={
          "Mini jetboats são barcos compactos que combinam desempenho, robustez e versatilidade. São navegáveis em qualquer tipo de água e perfeitos para todos os usos, seja para uma volta casual ou até para a prática de esportes radicais."
        }
        background="bg-black"
        image="/assets/images/mini-jetboats.png"
      />

      <section className="bg-carrouselGradient flex flex-col h-screen items-center justify-center pb-10">
        <div className="flex flex-col justify-center items-center">
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
          <p className="text-typo-secondary font-secondary text-lg mb-14">O equilíbrio perfeito entre um design espaçoso e ótimo desempenho.</p>
        </div>
        <Carousel1 />
      </section>

      <section className="flex justify-center px-4 py-7">
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
          <h1 className=" px-5 py-8 text-center font-primary text-5xl text-black">
            PEÇA SEU JETCROSS AGORA
          </h1>
          <Image
            src="assets/icons/general/cta-arrow.svg"
            width={74}
            height={26}
            className=" rotate-180"
          />
        </div>
      </section>

      <Services1
        background="bg-initialGradient"
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
        background="bg-finalGradient"
        button={
          <Button1
            style="mb-5 sm:mb-0 text-black bg-primary-default w-fit"
            text="Produtos"
            link="/"
          />
        }
      />

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
          <h1 className=" px-5 py-8 text-center font-primary text-5xl text-black">
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

      <section className="">
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
