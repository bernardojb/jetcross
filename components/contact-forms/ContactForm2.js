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
    <section className={`px-4 py-32 ${background}`}>
      <div className="grid grid-cols-12 gap-4 gap-y-20 lg:gap-y-0">
        <div className="col-span-12 lg:col-span-3 lg:col-start-2">
          <div className="flex flex-col">
            <p className="mb-3 font-primary text-base font-semibold text-primary-default">
              {subtitle}
            </p>
            <h1 className="mb-6 font-primary text-3xl font-bold text-typo-primary sm:text-5xl">
              {title}
            </h1>
            <p className="mb-12 max-w-lg font-secondary text-lg text-typo-secondary">
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
                    className="transition duration-200 ease-out hover:brightness-200"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-6">
          <div className="flex flex-col">
            <div className=" mb-16 ">
              <p className="mb-3 font-primary text-base font-semibold text-typo-secondary">
                Email
              </p>
              <div className="w-fit">
                <a href={`mailto:${email}`}>
                  <h1 className="mb-6 font-primary text-3xl font-bold text-typo-primary hover:text-typo-secondary sm:text-4xl">
                    {email}
                  </h1>
                </a>
              </div>
            </div>
            <div className=" mb-16 ">
              <p className="mb-3 font-primary text-base font-semibold text-typo-secondary">
                Phone
              </p>
              <div className="w-fit">
                <a href={`tel:${phone}`}>
                  <h1 className="mb-6 font-primary text-3xl font-bold text-typo-primary hover:text-typo-secondary sm:text-4xl">
                    {phone}
                  </h1>
                </a>
              </div>
            </div>
            <div className="">
              <p className="mb-3 font-primary text-base font-semibold text-typo-secondary">
                Social
              </p>
              <div className="w-fit">
                <a href={socialLink} target="_blank">
                  <h1 className="mb-6 font-primary text-3xl font-bold text-typo-primary hover:text-typo-secondary sm:text-4xl">
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
