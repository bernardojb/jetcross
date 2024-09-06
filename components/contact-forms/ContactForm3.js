"use client";

import { useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";
import Button1 from "../buttons/Button1";

export default function ContactForm3({ background, title, text }) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className={`${background} isolate px-6 py-24 sm:py-32 lg:px-8`}>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-primary text-3xl font-bold tracking-tight text-typo-primary sm:text-4xl">
          {title}
        </h2>
        <p className="mt-2 font-secondary text-lg leading-8 text-typo-secondary">
          {text}
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block font-primary text-sm font-semibold text-typo-primary"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="sm block w-full rounded-md border-0 bg-[#c0c0c033] px-3.5 py-2 text-typo-secondary shadow-sm ring-1 ring-inset ring-typo-secondary placeholder:text-typo-secondary focus:ring-2 focus:ring-inset focus:ring-primary-default sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block font-primary text-sm font-semibold text-typo-primary"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="sm block w-full rounded-md border-0 bg-[#c0c0c033] px-3.5 py-2 text-typo-secondary shadow-sm ring-1 ring-inset ring-typo-secondary placeholder:text-typo-secondary focus:ring-2 focus:ring-inset focus:ring-primary-default sm:text-sm"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block font-primary text-sm font-semibold text-typo-primary"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="sm block w-full rounded-md border-0 bg-[#c0c0c033] px-3.5 py-2 text-typo-secondary shadow-sm ring-1 ring-inset ring-typo-secondary placeholder:text-typo-secondary focus:ring-2 focus:ring-inset focus:ring-primary-default sm:text-sm"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block font-primary text-sm font-semibold text-typo-primary"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="sm block w-full rounded-md border-0 bg-[#c0c0c033] px-3.5 py-2 text-typo-secondary shadow-sm ring-1 ring-inset ring-typo-secondary placeholder:text-typo-secondary focus:ring-2 focus:ring-inset focus:ring-primary-default sm:text-sm"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block font-primary text-sm font-semibold text-typo-primary"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                className="sm block w-full rounded-md border-0 bg-[#c0c0c033] px-3.5 py-2 font-primary text-typo-secondary shadow-sm ring-1 ring-inset ring-typo-secondary placeholder:text-typo-secondary focus:ring-2 focus:ring-inset focus:ring-primary-default sm:text-sm"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block font-primary text-sm font-semibold text-typo-primary"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="sm block w-full rounded-md border-0 bg-[#c0c0c033] px-3.5 py-2 text-typo-secondary shadow-sm ring-1 ring-inset ring-typo-secondary placeholder:text-typo-secondary focus:ring-2 focus:ring-inset focus:ring-primary-default sm:text-sm"
                defaultValue={""}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-default data-[checked]:bg-primary-default"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm text-typo-secondary">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-primary-default">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10 w-fit">
          <Button1
            style="mr-0 sm:mr-6 mb-5 sm:mb-0 text-typo-primary"
            text="h studio btn"
            link="/"
          />
        </div>
      </form>
    </div>
  );
}
