import React from "react";
import { generalData } from "@/data/general-data";
import Image from "next/image";

function ContactForm2({
  subtitle,
  title,
  text,
  email,
  phone,
  social,
  socialLink,
  background,
}) {
  return (
    <section className={`px-4 py-32 ${background}`} id="contato">
      <div className="grid grid-cols-12 gap-4 gap-y-20 lg:gap-y-0">
        <div className="col-span-12 lg:col-span-3 lg:col-start-2">
          <div className="flex flex-col">
            <p className="mb-3 font-secondary text-base uppercase text-primary-light">
              {subtitle}
            </p>
            <h1 className="title mb-6 font-primary text-4xl font-bold uppercase text-typo-primary sm:text-5xl">
              {title}
            </h1>
            <p className="paragraph mb-12 max-w-lg font-secondary text-lg text-typo-secondary">
              {text}
            </p>
            <div className="flex flex-row">
              {generalData.links.map((i) => (
                <a target="_blank" href={i.href} className="mr-4">
                  <Image
                    src={i.image}
                    alt="Social media icon"
                    width={24}
                    height={24}
                    className="transition duration-200 ease-out hover:brightness-200 hover:transition hover:duration-200 hover:ease-out "
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-6">
          <div className="flex flex-col">
            <div className=" mb-16 ">
              <p className="mb-3 font-secondary text-base font-semibold uppercase italic text-typo-secondary">
                Email
              </p>
              <div className="w-fit">
                <a href={`mailto:${email}`}>
                  <h1 className="break-all lg:break-keep font-primary text-[22px] font-bold uppercase text-typo-primary transition duration-300 ease-out hover:text-primary-default hover:transition hover:duration-300 hover:ease-out sm:text-3xl lg:text-4xl xl:text-5xl">
                    {email}
                  </h1>
                </a>
              </div>
            </div>
            <div className=" mb-16 ">
              <p className="mb-3 font-secondary text-base font-semibold uppercase italic text-typo-secondary">
                Whatsapp
              </p>
              <div className="w-fit">
                <a href={`https://wa.me/5511992699869`} target="_blank">
                  <h1 className="font-primary text-[22px] font-bold uppercase text-typo-primary transition duration-300 ease-out hover:text-primary-default hover:transition hover:duration-300 hover:ease-out sm:text-3xl lg:text-4xl  xl:text-5xl">
                    {phone}
                  </h1>
                </a>
              </div>
            </div>
            <div className="">
              <p className="mb-3 font-secondary text-base font-semibold uppercase italic text-typo-secondary">
                Social
              </p>
              <div className="w-fit">
                <a href={socialLink} target="_blank">
                  <h1 className="font-primary text-[22px] font-bold uppercase text-typo-primary transition duration-300 ease-out hover:text-primary-default hover:transition hover:duration-300 hover:ease-out sm:text-3xl lg:text-4xl  xl:text-5xl">
                    {social}
                  </h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm2;
