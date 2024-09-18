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

import Carrousel1 from "@/components/carrousels/Carrousel1";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <Hero2
        background="bg-hero"
        title="REDEFININDO A EXPERIÊNCIA DE NAVEGAÇÃO COMUM"
        text="A Jetcross chegou para quebrar as barreiras da navegação e proporcionar aventuras aquáticas através da fabricação e comercialização de mini jetboats customizáveis."
        button={
          <>
            <Button1
              style="mr-6 mb-5 sm:mb-0 text-black bg-primary-default"
              text="Produtos"
              link="#produtos"
            />
            <Button1 style="bg-[#FFFFFF1A]" text="Contato" link="#contato" />
          </>
        }
      />

      <div
        className="absolute top-[100vh] max-w-[100vw]"
        style={{ zIndex: "10 !important" }}
      >
        <div className="rotate-[1.8deg]">
          <Marquee1 direction="left" />
        </div>
      </div>
      <div
        className="absolute top-[100vh] max-w-[100vw]"
        style={{ zIndex: "10 !important" }}
      >
        <div className="rotate-[-1.13deg]">
          <Marquee1 direction="right" />
        </div>
      </div>

      <Content1
        subtitle={"MINI JETBOAT?"}
        title={
          <>
            Mais que um simples barco, o{" "}
            <span className="text-primary-light">off-road</span> da água
          </>
        }
        text={
          "Mini jetboats são barcos compactos que combinam desempenho, robustez e versatilidade. São navegáveis em qualquer tipo de água e perfeitos para todos os usos, seja para uma volta casual ou até para a prática de esportes radicais."
        }
        background="bg-content1Gradient"
        image="/assets/images/mini-jetboats.png"
      />

      <section
        className="flex flex-col items-center justify-center bg-carrouselGradient px-4 pb-20 pt-[160px]"
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
          <p className="mb-14 text-center font-secondary text-lg text-typo-secondary">
            O equilíbrio perfeito entre um design espaçoso e ótimo desempenho.
          </p>
        </div>
        <Carrousel1 />
        <div className="flex flex-row items-center pt-24">
          <div
            class={`mr-4 flex h-10 w-[50px] shrink-0 items-center justify-center bg-primary-default`}
            style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
          >
            <Image
              src="/assets/icons/general/download.svg"
              width={24}
              height={24}
              className="shrink-0"
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
            className="flex max-w-[1342px] flex-row items-center justify-around bg-accentGradient px-[50px] sm:px-20 md:px-20"
            style={{
              clipPath:
                "polygon(50px 0, 100% 0%, calc(100% - 50px) 100%, 0% 100%)",
            }}
          >
            <div className="relative hidden h-[26px] w-[74px] object-cover md:block">
              <Image src="assets/icons/general/cta-arrow.svg" fill />
            </div>
            <div className="relative h-[24px] w-[24px] shrink-0 object-cover md:hidden">
              <Image src="assets/icons/general/arrow.svg" fill />
            </div>

            <h1 className="title px-5 py-5 text-center font-primary text-2xl tracking-[-1.3px] text-black md:max-w-none md:px-5 md:py-8 md:text-5xl">
              PEÇA SEU JETCROSS AGORA
            </h1>

            <div className="relative hidden h-[26px] w-[74px] object-cover md:block">
              <Image
                fill
                src="assets/icons/general/cta-arrow.svg"
                className="rotate-180"
              />
            </div>

            <div className="relative h-[24px] w-[24px] shrink-0 object-cover md:hidden">
              <Image
                fill
                src="assets/icons/general/arrow.svg"
                className="rotate-180"
              />
            </div>
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
            className="z-10 mx-5 flex max-w-[1342px] flex-row items-center justify-around bg-complementaryGradient px-[50px] sm:px-20 md:px-20"
            style={{
              clipPath:
                "polygon(50px 0, 100% 0%, calc(100% - 50px) 100%, 0% 100%)",
            }}
          >
            <div className="relative hidden h-[26px] w-[74px] object-cover md:block">
              <Image src="assets/icons/general/cta-arrow.svg" fill />
            </div>
            <div className="relative h-[24px] w-[24px] shrink-0 object-cover md:hidden">
              <Image src="assets/icons/general/arrow.svg" fill />
            </div>

            <h1 className="title px-5 py-5 text-center font-primary text-2xl tracking-[-1.3px] text-black md:max-w-none md:px-5 md:py-8 md:text-5xl">
              PEÇA SEU JETCROSS AGORA
            </h1>

            <div className="relative hidden h-[26px] w-[74px] object-cover md:block">
              <Image
                fill
                src="assets/icons/general/cta-arrow.svg"
                className="rotate-180"
              />
            </div>

            <div className="relative h-[24px] w-[24px] shrink-0 object-cover md:hidden">
              <Image
                fill
                src="assets/icons/general/arrow.svg"
                className="rotate-180"
              />
            </div>
          </div>
          <Image
            src="assets/icons/general/J.svg"
            width={1050}
            height={730}
            className="absolute left-[-150px] z-0 scale-150 sm:left-[-300px] md:sm:left-[-375px] md:scale-100"
          />
        </section>
      </Link>

      <ContactForm2
        background="bg-contactGradient"
        subtitle="contato"
        title="fale conosco"
        text="Entre em contato com nossa equipe de vendas, estamos prontos para te ajudar."
        socialLink="https://www.instagram.com/jetcrossboats/"
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
            <div className="flex flex-col justify-center py-5 text-center md:flex-row md:justify-between md:text-start">
              <p className="mb-3 font-secondary text-base uppercase text-typo-secondary md:mb-0">
                JETCROSS LTDA © 2024
              </p>
              <a href="https://www.hokup.com.br/" target="_blank">
                <p className="font-secondary text-base uppercase text-typo-secondary transition duration-200 ease-out hover:text-primary-default hover:transition hover:duration-200 hover:ease-out">
                  website crafted by hokup.com.br
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
