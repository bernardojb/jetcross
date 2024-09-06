"use client";

import { useState, useEffect } from "react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";
import Button1 from "../buttons/Button1";
import Image from "next/image";
import validate from "@/app/contato/validateInfo";
import useForm from "@/app/contato/useForm";

export default function ContactForm4({ background, title, text }) {
  // const [agreed, setAgreed] = useState(false);
  const {
    isSubmitting,
    handleChange,
    values,
    handlePress,
    errors,
    setValues,
    isLoading,
    setSubmitting,
  } = useForm(validate);

  return (
    <div
      className={`${background} isolate mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8`}
    >
      <div className="max-w-2xl text-start">
        <h2 className="font-primary text-3xl font-bold tracking-tight text-typo-primary sm:text-4xl">
          {title}
        </h2>
        <p className="mt-2 font-secondary text-lg leading-8 text-typo-secondary">
          {text}
        </p>
      </div>

      <div className="mx-auto mt-16 flex w-full max-w-6xl flex-col sm:mt-20 lg:flex-row">
        <form className="mx-auto mb-20 w-full max-w-2xl lg:mb-0 lg:mr-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block font-primary text-sm font-semibold text-typo-primary"
              >
                Nome
              </label>
              <div className="relative mt-2.5">
                <input
                  value={values.name}
                  onChange={handleChange}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Seu nome"
                  className={`mb-2 block w-full rounded-md border-0 bg-[#c0c0c033] px-3.5 py-2 text-typo-secondary shadow-sm ring-1 ring-inset ring-typo-secondary ${errors.name && "ring-danger"} placeholder:text-typo-secondary focus:ring-2 focus:ring-inset focus:ring-primary-default sm:text-sm`}
                />
                {errors.name && (
                  <div className="absolute right-[0.65rem] top-[0.65rem] ">
                    <Image
                      src="/assets/icons/general/warning.svg"
                      width={15}
                      height={15}
                      alt="Error"
                    />{" "}
                  </div>
                )}
                {errors.name && (
                  <p className="text-danger absolute top-11 font-secondary text-sm">
                    {errors.name}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="organization"
                className="block font-primary text-sm font-semibold text-typo-primary"
              >
                Empresa
              </label>
              <div className="relative mt-2.5">
                <input
                  value={values.organization}
                  onChange={handleChange}
                  placeholder="Nome da empresa"
                  id="organization"
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  className={`mb-2 block w-full rounded-md border-0 bg-[#c0c0c033] px-3.5 py-2 text-typo-secondary shadow-sm ring-1 ring-inset ring-typo-secondary placeholder:text-typo-secondary focus:ring-2 focus:ring-inset focus:ring-primary-default sm:text-sm ${errors.organization && "ring-danger"}`}
                />
                {errors.organization && (
                  <div className="absolute right-[0.65rem] top-[0.65rem] ">
                    <Image
                      src="/assets/icons/general/warning.svg"
                      width={15}
                      height={15}
                      alt="Error"
                    />{" "}
                  </div>
                )}
                {errors.organization && (
                  <p className="text-danger absolute top-11 font-secondary text-sm">
                    {errors.organization}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block font-primary text-sm font-semibold text-typo-primary"
              >
                Orçamento disponível
              </label>
              <div className="relative mt-2.5">
                <input
                  value={values.budget}
                  onChange={handleChange}
                  placeholder="R$ 1.000,00"
                  id="budget"
                  name="budget"
                  type="text"
                  // autoComplete="given-name"
                  className={`mb-2 block w-full rounded-md border-0 bg-[#c0c0c033] px-3.5 py-2 text-typo-secondary shadow-sm ring-1 ring-inset ring-typo-secondary placeholder:text-typo-secondary focus:ring-2 focus:ring-inset focus:ring-primary-default sm:text-sm ${errors.budget && "ring-danger"}`}
                />
                {errors.budget && (
                  <div className="absolute right-[0.65rem] top-[0.65rem] ">
                    <Image
                      src="/assets/icons/general/warning.svg"
                      width={15}
                      height={15}
                      alt="Error"
                    />{" "}
                  </div>
                )}
                {errors.budget && (
                  <p className="text-danger absolute top-11 font-secondary text-sm">
                    {errors.budget}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-primary text-sm font-semibold text-typo-primary"
              >
                Email
              </label>
              <div className="relative mt-2.5">
                <input
                  value={values.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`mb-2 block w-full rounded-md border-0 bg-[#c0c0c033] px-3.5 py-2 text-typo-secondary shadow-sm ring-1 ring-inset ring-typo-secondary placeholder:text-typo-secondary focus:ring-2 focus:ring-inset focus:ring-primary-default sm:text-sm ${errors.email && "ring-danger"}`}
                />
                {errors.email && (
                  <div className="absolute right-[0.65rem] top-[0.65rem] ">
                    <Image
                      src="/assets/icons/general/warning.svg"
                      width={15}
                      height={15}
                      alt="Error"
                    />{" "}
                  </div>
                )}
                {errors.email && (
                  <p className="text-danger absolute top-11 font-secondary text-sm">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block font-primary text-sm font-semibold text-typo-primary"
              >
                Como podemos te ajudar?
              </label>
              <div className="relative mt-2.5">
                <textarea
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Fale sobre seu projeto"
                  id="message"
                  name="message"
                  rows={1}
                  className={`mb-2 block w-full rounded-md border-0 bg-[#c0c0c033] px-3.5 py-2 text-typo-secondary shadow-sm ring-1 ring-inset ring-typo-secondary placeholder:text-typo-secondary focus:ring-2 focus:ring-inset focus:ring-primary-default sm:text-sm ${errors.message && "ring-danger"}`}
                  // defaultValue={""}
                />
                {errors.message && (
                  <div className="absolute right-[0.65rem] top-[0.65rem]">
                    <Image
                      src="/assets/icons/general/warning.svg"
                      width={15}
                      height={15}
                      alt="Error"
                    />{" "}
                  </div>
                )}
                {errors.message && (
                  <p className="text-danger absolute top-11 font-secondary text-sm ">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="mb-4 mt-10 w-fit">
            <Button1
              style="mr-0 sm:mr-6 mb-5 sm:mb-0 text-typo-primary"
              text="h studio btn"
              link="#"
              onClick={handlePress}
            />
          </div>
          <p className="text-sm text-typo-secondary">
            By submitting this form, I agree to the{" "}
            <a href="#" className="font-semibold text-primary-default">
              privacy&nbsp;policy
            </a>
            .
          </p>
        </form>

        <div className="flex w-full max-w-2xl flex-col items-start justify-start lg:mx-0 lg:items-start lg:justify-center">
          <div className="max-w-xs">
            <Image
              width={92}
              height={25}
              alt=""
              src="/assets/icons/logos/logo-hokup.svg"
              className="mb-12"
            />
            <figure className="">
              <blockquote className="mb-10 font-primary font-bold leading-8 text-typo-primary">
                <p>
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  expedita voluptas culpa sapiente alias molestiae. Numquam
                  corrupti in laborum sed rerum et corporis.”
                </p>
              </blockquote>

              <figcaption className="flex flex-row">
                <Image
                  width={40}
                  height={40}
                  alt=""
                  src="/assets/icons/general/placeholder-testimonial.svg"
                  className="mr-6 rounded-full"
                />
                <div>
                  <div className="font-primary text-base text-typo-primary">
                    Brenna Goyette
                  </div>
                  <div className="font-secondary text-sm text-typo-secondary">
                    CEO of Workcation
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
