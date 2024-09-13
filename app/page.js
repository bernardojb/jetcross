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

      <Marquee1 />

      <Content1
        subtitle={"MINI JETBOAT?"}
        title={"Mais que um simples barco, o off-road da água"}
        text={
          "Mini jetboats são barcos compactos que combinam desempenho, robustez e versatilidade. São navegáveis em qualquer tipo de água e perfeitos para todos os usos, seja para uma volta casual ou até para a prática de esportes radicais."
        }
        background="bg-black"
        image="/assets/images/mini-jetboats.png"
      />

      <Services1
        background="bg-initialGradient"
        subtitle="NOSSA PROPOSTA"
        title="quebrar as barreiras da navegação comum"
        text="A Jetcross chegou para quebrar as barreiras da navegação e proporcionar aventuras aquáticas através da fabricação e comercialização de mini jetboats customizáveis."
        pillColor="bg-primary-default"
      />

      <AccordionSection2
        background="bg-finalGradient"
        button={
          <Button1
            style="mr-0 sm:mr-6 mb-5 sm:mb-0 w-fit text-black"
            text="contato"
            link="/"
          />
        }
      />

      <section className="h-[324px] w-full bg-primary-default"></section>

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
    </>
  );
};

export default Home;
