"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact-forms/ContactForm";
import Animation from "@/components/animations/Animation";

const Home = () => {
  return (
    <>
      {/* INTRO */}
      <section className="flex h-screen w-full flex-col items-center justify-center bg-black">
        <h1 className="text-[100px] text-[#fff]">HOKUP TEMPLATE</h1>
        <h1 className="text-[100px] text-[#fff]">SOBRE</h1>
      </section>
      {/* CONTATO */}
      <ContactForm />
    </>
  );
};

export default Home;
