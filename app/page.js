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
import Marquee from "react-fast-marquee";
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

const Home = () => {
  return (
    <>
      <Hero1
        title="Hokup studio. Custom template websites made on demand."
        text="We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
        background="bg-hero"
        pill={
          <Pill1
            text="Hokup studio pill component."
            link="/"
            pillHighlightText="See more"
            pillHighlightColor="text-typo-primary"
          />
        }
        button={
          <>
            <Button1
              style="mr-0 sm:mr-6 mb-5 sm:mb-0"
              text="h studio btn"
              link="/"
            />
            <Button1
              style="bg-transparent"
              text="h studio btn"
              link="/"
              arrow
            />
          </>
        }
      />

      <Hero2
        background="bg-hero"
        pill={
          <Pill1
            text="Hokup studio pill component."
            link="/"
            pillHighlightText="See more"
            pillHighlightColor="text-typo-primary"
          />
        }
        title="Hokup studio. Custom template websites made on demand."
        text="We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
        button={
          <>
            <Button1
              style="mr-0 sm:mr-6 mb-5 sm:mb-0"
              text="h studio btn"
              link="/"
            />
            <Button1
              style="bg-transparent"
              text="h studio btn"
              link="/"
              arrow
            />
          </>
        }
      />

      <LogoClouds1
        title="Over 10.000 projects created."
        background="bg-black"
      />

      <LogoClouds2
        title="Over 10.000 projects created."
        background="bg-black"
      />

      <Content1
        subtitle={"A better solution"}
        title={"Hokup studio. Custom template websites made on demand."}
        text={
          "We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
        }
        background="bg-black"
        image="/assets/images/image-1.jpg"
      />

      <Content2
        subtitle={"A better solution"}
        title={"Hokup studio. Custom template websites made on demand."}
        text={
          "We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
        }
        background="bg-gray-900"
        button={
          <Button1
            style="mr-0 sm:mr-6 mb-5 sm:mb-0 text-typo-primary"
            text="h studio btn"
            link="/"
          />
        }
      />

      <Services1
        background="bg-initialGradient"
        subtitle="A better solution"
        title="Hokup studio. Custom template websites made on demand."
        text="We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
        pillColor="bg-primary-default"
      />

      <Stats1 background="bg-middleGradient" />

      <Stats2
        background=""
        title="Stats title"
        text="Short description pagrapha about how this stats are awesome."
      />

      <AccordionSection2
        background="bg-finalGradient"
        button={
          <Button1
            style="mr-0 sm:mr-6 mb-5 sm:mb-0 w-fit text-typo-primary"
            text="h studio btn"
            link="/"
          />
        }
      />

      <Testimonial1
        name="Judith Black"
        image="/assets/icons/general/placeholder-testimonial.svg"
        logo="/assets/icons/logos/logo-hokup.svg"
        text=" “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”"
        position="CEO of Workcation"
        background="bg-transparent"
      />

      <Teams1
        title="Meet our leadership"
        text="We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
        background="bg-black"
      />

      <ContactForm2
        background="bg-contactGradient"
        subtitle="Contact"
        title="Get in touch."
        text="We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
        socialLink="https://www.instagram.com/"
        email="contact@hokup.com.br"
        phone="+55 11 9 9697-8140"
        social="@hokup.studio"
      />

      {/* <ContactForm3
        title="Get in touch."
        text="We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
      /> */}

      <ContactForm4
        title="Get in touch."
        text="We design, build and ship custom websites by combining design and technology to create unique web projects for your brand."
      />

      {/* <Timeline1 /> */}

      {/* <Accordion3 /> */}
    </>
  );
};

export default Home;
