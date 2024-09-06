"use client";
import React from "react";
import validate from "@/app/contato/validateInfo";
import useForm from "@/app/contato/useForm";
import Image from "next/image";
import Animation from "../animations/Animation";
import Link from "next/link";
// import Title from '../texts/Title';
// import Content from '../texts/Content';
import { generalData } from "@/data/general-data";
import ContactAnimation from "../animations/ContactAnimation";

const ContactForm = () => {
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
    <section className="w-full bg-black">
      <section className="bot-bg-gradient w-full py-40">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="order-1 col-span-12 mb-20 lg:order-2 lg:col-span-7 lg:col-start-7 lg:mb-0">
              {isSubmitting ? (
                <ContactAnimation>
                  <div className="z-[9999]">
                    <div className="flex h-full flex-col items-center justify-center">
                      <Image
                        src="/assets/main/main-logo-icon.svg"
                        width={50}
                        height={50}
                        alt="M3D Icon"
                        className="mb-8"
                      />
                      <h1 className="font-cairo mb-4 text-center text-xl font-semibold text-white">
                        Obrigado!
                      </h1>
                      <h1 className="font-cairo mb-20 text-center text-base font-semibold text-white">
                        Entraremos em contato em breve!!
                      </h1>
                      {/* <Content className="max-w-[536px] text-center mb-20" text="Bienvenidos a M3D, ¡pronto nos comunicaremos!" /> */}
                      <a
                        onClick={() => setSubmitting(false)}
                        className="pointer-events-auto flex w-fit cursor-pointer flex-row items-center justify-center transition duration-500 ease-out hover:brightness-[1000%] hover:transition hover:duration-500 hover:ease-out"
                      >
                        {/* <Content text="Cerrar" className="tracking-[4px] uppercase text-green hover:transition transition ease-out duration-500 hover:ease-out hover:duration-500 mr-2 text-sm" /> */}
                        <p className="mr-4">Fechar</p>
                        <Image
                          src="/assets/icons/general/arrow.svg"
                          width={20}
                          height={20}
                          alt="Arrow Icon"
                        />
                      </a>
                    </div>
                  </div>
                </ContactAnimation>
              ) : (
                <Animation>
                  <form className="flex flex-col">
                    <div className="mb-10">
                      <div className="mb-5">
                        {/* <Title text="Habla con M3D" className="text-3xl" /> */}
                      </div>
                      {/* <Content className="max-w-[536px]" text="Descubra el potencial de nuestras soluciones 3D para elevar los estándares de la atención quirúrgica personalizada." /> */}
                    </div>
                    <div className="border-green-border mb-4 w-full rounded-xl border px-3 py-3 no-underline">
                      <span className="relative my-2 no-underline">
                        <input
                          className={`font-manrope font-regular w-full bg-[transparent] ps-2 text-base uppercase no-underline outline-0 ${values.name ? "text-white" : "text-gray"}`}
                          type="text"
                          name="name"
                          id="name"
                          value={values.name}
                          onChange={handleChange}
                          placeholder="Nome"
                        ></input>
                        {errors.name && (
                          <div className="absolute right-1 top-[50%] -translate-y-1/2">
                            <Image
                              src="/assets/icons/general/warning.svg"
                              width={16}
                              height={16}
                              alt="Error"
                            />{" "}
                          </div>
                        )}
                      </span>
                    </div>
                    <div className="flex flex-row ">
                      <div className="border-green-border mb-4 mr-2 w-full rounded-xl border px-3 py-3 no-underline">
                        <span className="relative my-2 no-underline ">
                          <input
                            className={`font-manrope font-regular w-full bg-[transparent] ps-2 text-base uppercase no-underline outline-0 ${values.email ? "text-white" : "text-gray"}`}
                            type="text"
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Email"
                          ></input>
                          {errors.email && (
                            <div className="absolute right-1 top-[50%] -translate-y-1/2">
                              <Image
                                src="/assets/icons/general/warning.svg"
                                width={16}
                                height={16}
                                alt="Error"
                              />{" "}
                            </div>
                          )}
                        </span>
                      </div>
                      <div className="border-green-border mb-4 ml-2 w-full rounded-xl border px-3 py-3 no-underline">
                        <span className="relative my-2 no-underline">
                          <input
                            className={`font-manrope font-regular w-full bg-[transparent] ps-2 text-base uppercase no-underline outline-0 ${values.phone ? "text-white" : "text-gray"}`}
                            type="text"
                            name="phone"
                            id="phone"
                            value={values.phone}
                            onChange={handleChange}
                            placeholder="Telefone"
                          ></input>
                          {errors.phone && (
                            <div className="absolute right-1 top-[50%] -translate-y-1/2">
                              <Image
                                src="/assets/icons/general/warning.svg"
                                width={16}
                                height={16}
                                alt="Error"
                              />{" "}
                            </div>
                          )}
                        </span>
                      </div>
                    </div>
                    {/* <div className='flex flex-row '>
                                            <div className='w-full rounded-xl px-3 py-3 border border-green-border no-underline mb-4 mr-2'>
                                                <span className="relative no-underline my-2">
                                                    <input
                                                        className={`no-underline uppercase bg-[transparent] text-base ps-2 w-full outline-0 font-manrope font-regular ${values.office ? ('text-white') : ('text-gray')}`}
                                                        type='text'
                                                        name='office'
                                                        id='office'
                                                        value={values.office}
                                                        onChange={handleChange}
                                                        placeholder='Actuación'
                                                    >
                                                    </input>
                                                    {errors.office && <div className='absolute right-1 top-[50%] -translate-y-1/2'><Image src="/assets/icons/warning.svg" width={16} height={16} alt='Error' /> </div>}
                                                </span>
                                            </div>
                                            <div className='w-full rounded-xl px-3 py-3 border border-green-border no-underline mb-4 ml-2'>
                                                <span className="relative no-underline my-2">
                                                    <input
                                                        className={`no-underline uppercase bg-[transparent] text-base ps-2 w-full outline-0 font-manrope font-regular ${values.institution ? ('text-white') : ('text-gray')}`}
                                                        type='text'
                                                        name='institution'
                                                        id='institution'
                                                        value={values.institution}
                                                        onChange={handleChange}
                                                        placeholder='Institución'
                                                    >
                                                    </input>
                                                    {errors.institution && <div className='absolute right-1 top-[50%] -translate-y-1/2'><Image src="/assets/icons/warning.svg" width={16} height={16} alt='Error' /> </div>}
                                                </span>
                                            </div>
                                        </div> */}
                    <div className="border-green-border mb-10 w-full rounded-xl border px-3 py-3 no-underline">
                      <span className="relative my-2 no-underline">
                        <input
                          className={`font-manrope font-regular w-full bg-[transparent] ps-2 text-base uppercase no-underline outline-0 ${values.message ? "text-white" : "text-gray"}`}
                          type="text"
                          name="message"
                          id="message"
                          value={values.message}
                          onChange={handleChange}
                          placeholder="MENSAGEM"
                        ></input>
                        {errors.message && (
                          <div className="absolute right-1 top-[50%] -translate-y-1/2">
                            <Image
                              src="/assets/icons/general/warning.svg"
                              width={16}
                              height={16}
                              alt="Error"
                            />{" "}
                          </div>
                        )}
                      </span>
                    </div>
                    <div className="flex flex-col justify-between sm:flex-row">
                      <div className="order-2 flex flex-row items-center sm:order-1">
                        <div className="mr-4">
                          <Image
                            src="/assets/main/main-logo-icon.svg"
                            className="brightness-[800%] grayscale"
                            width={24}
                            height={24}
                            alt=""
                          />
                        </div>
                        <p className="font-raleway text-gray group w-full text-xs font-medium sm:max-w-[248px]">
                          Ao enviar esse formulário, você concorda com a nossa{" "}
                          <Link
                            href="/politica-de-privacidade"
                            className="hover:text-accent font-bold transition duration-200 ease-out hover:transition hover:duration-200 hover:ease-out"
                          >
                            Política de Privacidade.
                          </Link>
                        </p>
                      </div>
                      <button
                        disabled={isLoading ? true : false}
                        onClick={handlePress}
                        className="order-1 mb-4 ml-auto sm:order-2 sm:mb-0 md:ml-0"
                      >
                        <div className="flex flex-row items-center">
                          {isLoading ? (
                            <div className="pointer-events-auto flex w-fit flex-row transition duration-500 ease-out hover:brightness-[1000%] hover:transition hover:duration-500 hover:ease-out">
                              {/* <Content text="ENVIAR MENSAJE" className="tracking-[4px] text-green mr-2 text-sm " /> */}
                              <p className="mr-4 text-white">Enviar</p>
                              <Image
                                src="/assets/icons/general/arrow.svg"
                                width={20}
                                height={20}
                                alt="Arrow Icon"
                              />
                            </div>
                          ) : (
                            <div className="pointer-events-auto flex w-fit flex-row transition duration-500 ease-out hover:brightness-[1000%] hover:transition hover:duration-500 hover:ease-out">
                              {/* <Content text="ENVIAR MENSAJE" className="tracking-[4px] text-green mr-2 text-sm " /> */}
                              <p className="mr-4 text-white">Enviar</p>
                              <Image
                                src="/assets/icons/general/arrow.svg"
                                width={20}
                                height={20}
                                alt="Arrow Icon"
                              />
                            </div>
                          )}
                        </div>
                      </button>
                    </div>
                  </form>
                </Animation>
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactForm;
