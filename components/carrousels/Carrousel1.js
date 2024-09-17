"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/assets/images/aquaseeker-01.png",
    infos: [
      {
        id: 1,
        title: "325",
        complement: "hp",
        description: "ROTAX® ACE 1630 de 130 até 325 HP",
      },
      {
        id: 2,
        title: "4",
        complement: "assentos",
        description: "Individuais com estofado náutico",
      },
    ],
  },
  {
    id: 2,
    image: "/assets/images/aquaseeker-02.png",
    infos: [
      {
        id: 1,
        title: "405",
        complement: "kg",
        description: "Leve e compacto",
      },
      {
        id: 2,
        title: "3.44",
        complement: "m",
        description: "De comprimento sem a plataforma",
      },
      {
        id: 3,
        title: "1.5",
        complement: "m",
        description: "De largura",
      },
    ],
  },
  {
    id: 3,
    image: "/assets/images/aquaseeker-03.png",
    infos: [
      {
        id: 1,
        title: "customização completa",
        complement: "",
        description: "Personalize nosso layout exclusivo Jetcross da forma que quiser.",
      },
    //   {
    //     id: 2,
    //     title: "para-brisa",
    //     complement: "",
    //     description: "Sport em fibra",
    //   },
    //   {
    //     id: 3,
    //     title: "Volante",
    //     complement: "",
    //     description: "Esportivo",
    //   },
    ],
  },
  {
    id: 4,
    image: "/assets/images/aquaseeker-04.png",
    infos: [
        {
          id: 1,
          title: "Tapetes",
          complement: "",
          description: "Com layout exclusivo Jetcross em EVA",
        },
        {
          id: 2,
          title: "para-brisa",
          complement: "",
          description: "Sport em fibra",
        },
        {
          id: 3,
          title: "Volante",
          complement: "",
          description: "Esportivo",
        },
      ],
  },
  {
    id: 5,
    image: "/assets/images/aquaseeker-05.png",
    infos: [
      {
        id: 1,
        title: "som",
        complement: "",
        description: "Sistema completo Boss marine",
      },
      {
        id: 2,
        title: "amplificador",
        complement: "",
        description: "400W com Bluetooth",
      },
      {
        id: 3,
        title: "bomba",
        complement: "",
        description: "De porão com dispositivo liga/desliga",
      },
    ],
  },
];

export default function Carousel1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canNavigate, setCanNavigate] = useState(true)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative mx-auto w-full">
      <div className="mb-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mx-auto mb-3 h-[500px] w-[1428px]">
              <Image
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="flex flex-row justify-center items-center max-w-[1428px] mx-auto">
              {slides[currentIndex].infos.map((i) => (
                <div className="min-w-[460px] w-full text-center">
                  <h2 className="font-primary text-5xl uppercase text-typo-primary">
                    {i.title}
                    <span className="text-3xl"> {i.complement}</span>
                  </h2>
                  <p className="font-secondary text-base text-typo-secondary">
                    {i.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-[-3rem] left-0 right-0 flex items-center justify-center space-x-4">
        <button
          onClick={handlePrevious}
          class={`flex h-10 w-[50px] items-center justify-center bg-primary-default`}
          style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
        >
          <Image
            src="/assets/icons/general/arrow.svg"
            width={24}
            height={24}
            className="rotate-180"
          />
        </button>

        <div className="flex space-x-2 ">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? "bg-primary-default" : "bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          class={`flex h-10 w-[50px] items-center justify-center bg-primary-default`}
          style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
        >
          <Image src="/assets/icons/general/arrow.svg" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
