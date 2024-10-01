"use client";
//Setup
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
//Components
import Button1 from "@/components/buttons/Button1";
import Content1 from "@/components/content/Content1";
import Services1 from "@/components/services/Services1";
//**Heroes*/
import Hero2 from "@/components/hero/Hero2";
//**Accordions*/
import AccordionSection2 from "./sections/accordion/AccordionSection2";
//**Contact Form*/
import ContactForm2 from "@/components/contact-forms/ContactForm2";
//**Timeline*/
import Marquee1 from "@/components/marquee/Marquee1";
import Content1_Inverted from "@/components/content/Content1_Inverted";
import Carrousel1 from "@/components/carrousels/Carrousel1";
// import Carrousel2 from "@/components/carrousels/Carrousel2";
import CarrouselTeste from "@/components/carrousels/CarrouselTeste";
import { motion } from "framer-motion";
import Animation from "@/components/animations/Animation";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [modal, setModal] = useState(false);

  const ctaPathVariants = {
    initial: {
      clipPath: "polygon(50px 0, 100% 0%, calc(100% - 50px) 100%, 0% 100%)",
      backgroundImage: "linear-gradient(90deg, #FAFF00 0%, #F6FF94 100%)",
      scale: 1,
    },
    hover: {
      clipPath: "polygon(0 0, calc(100% - 50px) 0, 100% 100%, 50px 100%)",
      scale: 1.05,
      backgroundImage: "linear-gradient(90deg, #fff 0%, #fff 100%)",
    },
  };

  const ctaFullPathVariants = {
    initial: {
      clipPath: "polygon(50px 0, 100% 0%, calc(100% - 50px) 100%, 0% 100%)",
      backgroundImage: "linear-gradient(90deg, #3ED1FF 0%, #9BE7FF 100%)",
      // scale: 1,
    },
    hover: {
      clipPath: "polygon(0 0, calc(100% - 50px) 0, 100% 100%, 50px 100%)",
      // scale: 1.05,
      backgroundImage: "linear-gradient(90deg, #fff 0%, #fff 100%)",
    },
  };

  const ctaFullPathVariantsBg = {
    initial: {
      backgroundColor: "#FAFF00",
      // filter: "drop-shadow(30px 10px 4px #00000000);",
      // height: "324px",
      paddingTop: "100px",
      paddingBottom: "100px",
    },
    hover: {
      backgroundColor: "#000000",
      paddingTop: "270px",
      paddingBottom: "270px",
    },
  };

  return (
    <Animation>
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
          className="absolute top-[100svh] max-w-[100vw]"
          style={{ zIndex: "10 !important" }}
        >
          <div className="rotate-[1.8deg]">
            <Marquee1 direction="left" />
          </div>
        </div>
        <div
          className="absolute top-[100svh] max-w-[100vw]"
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

        <motion.section className="flex justify-center bg-[#11190C] px-10 py-7">
          <motion.div initial="initial" whileHover="hover">
            <Link href="#contato">
              <motion.div
                variants={ctaPathVariants}
                transition={{
                  duration: 0.2,
                  delay: 0,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex max-w-[1342px] flex-row items-center justify-around bg-accentGradient px-[50px] sm:px-20 md:px-20"
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
              </motion.div>
            </Link>
          </motion.div>
        </motion.section>

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

        <div className="relative flex h-[730px] w-full items-center">
          <Link href="#contato" className="absolute w-full">
            <motion.section
              initial="initial"
              animate={isHovered ? "hover" : "initial"}
              variants={ctaFullPathVariantsBg}
              transition={{
                duration: 0.2,
                delay: 0,
                ease: [0.53, 0, 0, 1],
              }}
              className="relative flex w-full items-center justify-center overflow-hidden"
            >
              <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                variants={ctaFullPathVariants}
                transition={{
                  duration: 0.2,
                  delay: 0,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="z-10 mx-5 flex max-w-[1342px] flex-row items-center justify-around bg-complementaryGradient px-[50px] sm:px-20 md:px-20"
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
              </motion.div>
              <Image
                src="assets/icons/general/J.svg"
                width={1050}
                height={730}
                className="absolute left-[-150px] z-0 scale-150 sm:left-[-300px] md:sm:left-[-375px] md:scale-100"
              />
            </motion.section>
          </Link>
          {/* </motion.section> */}
        </div>

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

        {modal && (
          <div
            className="fixed left-0 top-0 z-[999] h-screen w-full bg-[#00000081] backdrop-blur-xl"
            onClick={() => setModal(false)}
          >
            <div className="mx-4 flex aspect-auto h-full items-center justify-center px-4 py-20">
              <iframe
                // width="1903"
                // height="750"
                src="https://www.youtube.com/embed/CfMy-qMR-ow"
                title="Aqua Seeker - Jetcross"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="h-full w-full"
              ></iframe>
            </div>
            <buton
              className="absolute right-5 top-5 cursor-pointer text-red-500"
              onClick={() => setModal(false)}
            >
              <div
                class={`flex h-10 w-[50px] items-center justify-center bg-primary-default hover:bg-typo-primary`}
                style={{
                  clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)",
                }}
              >
                <Image
                  src="/assets/icons/general/plus.svg"
                  width={24}
                  height={24}
                  className="rotate-45 brightness-0"
                />
              </div>
            </buton>
          </div>
        )}
      </div>
    </Animation>
  );
};

export default Home;
