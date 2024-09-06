import React from "react";
import ContactForm from "@/components/contact-forms/ContactForm";
import Animation from "@/components/animations/Animation";

const page = () => {
  return (
    <>
      <section className="flex h-screen w-full flex-col items-center justify-center bg-black">
        <h1 className="text-[100px] text-[#fff]">HOKUP TEMPLATE</h1>
        <h1 className="text-[100px] text-[#fff]">CONTATO</h1>
      </section>
      <ContactForm />
    </>
  );
};

export default page;
