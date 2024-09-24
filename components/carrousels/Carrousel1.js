"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Image1 from "@/public/assets/images/mobile/aquaseeker-01.png";
import Image2 from "@/public/assets/images/mobile/aquaseeker-02.png";
import Image3 from "@/public/assets/images/mobile/aquaseeker-03.png";
import Image4 from "@/public/assets/images/mobile/aquaseeker-04.png";
import Image5 from "@/public/assets/images/mobile/aquaseeker-05.png";

const slides = [
  {
    id: 1,
    image: Image1,
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
    image: Image2,
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
    image: Image3,
    infos: [
      {
        id: 1,
        title: "customização completa",
        complement: "",
        description:
          "Personalize nosso layout exclusivo Jetcross da forma que quiser.",
      },
    ],
  },
  {
    id: 4,
    image: Image4,
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
    image: Image5,
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
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [canNavigate, setCanNavigate] = useState(true);
  // const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // const autoPlayRef = useRef();

  // const navigate = useCallback(
  //   (direction) => {
  //     if (!canNavigate) return;

  //     setCanNavigate(false);
  //     setCurrentIndex((prevIndex) => {
  //       if (direction === "prev") {
  //         return prevIndex === 0 ? slides.length - 1 : prevIndex - 1;
  //       } else {
  //         return prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
  //       }
  //     });

  //     // Re-enable navigation after a delay
  //     setTimeout(() => setCanNavigate(true), 1000);
  //   },
  //   [canNavigate],
  // );

  // const handlePrevious = useCallback(() => navigate("prev"), [navigate]);
  // const handleNext = useCallback(() => navigate("next"), [navigate]);

  // useEffect(() => {
  //   autoPlayRef.current = handleNext;
  // }, [handleNext]);

  // useEffect(() => {
  //   slides.forEach((slide) => {
  //     const img = new Image();
  //     img.src = slide.image.src;
  //   });
  // }, []);

  // useEffect(() => {
  //   const play = () => {
  //     if (isAutoPlaying) {
  //       autoPlayRef.current();
  //     }
  //   };

  //   const autoPlayInterval = setInterval(play, 3000);

  //   return () => {
  //     clearInterval(autoPlayInterval);
  //     setCanNavigate(true);
  //   };
  // }, [isAutoPlaying]);

  // const handleMouseEnter = () => setIsAutoPlaying(false);
  // const handleMouseLeave = () => setIsAutoPlaying(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [canNavigate, setCanNavigate] = useState(true);

  const navigate = useCallback(
    (direction) => {
      if (!canNavigate) return;

      setCanNavigate(false);
      setCurrentIndex((prevIndex) => {
        if (direction === "prev") {
          return prevIndex === 0 ? slides.length - 1 : prevIndex - 1;
        } else {
          return prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
        }
      });

      setTimeout(() => setCanNavigate(true), 500);
    },
    [canNavigate],
  );

  const handlePrevious = useCallback(() => navigate("prev"), [navigate]);
  const handleNext = useCallback(() => navigate("next"), [navigate]);

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.image.src;
    });
  }, []);

  const setCurrentIndexCallback = useCallback((index) => {
    setCurrentIndex(index);
    setCanNavigate(false);
    setTimeout(() => setCanNavigate(true), 500);
  }, []);

  return (
    <div className="relative mx-auto w-full">
      <div className="image-shaddow mb-6 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mx-auto mb-3 h-[300px] w-full max-w-[1428px] md:h-[350px] lg:h-[500px]">
              <Image
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                layout="fill"
                objectPosition="center"
                priority
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="mx-auto flex max-w-[1428px] flex-col items-center justify-center lg:flex-row">
              {slides[currentIndex].infos.map((i) => (
                <div className="mx-4 mb-5 w-full text-center">
                  <h2 className="font-primary text-[26px] uppercase text-typo-primary lg:text-5xl">
                    {i.title}
                    <span className="text-[26px] lg:text-3xl">
                      {" "}
                      {i.complement}
                    </span>
                  </h2>
                  <p className="text-center font-secondary text-xs text-typo-secondary lg:text-base">
                    {i.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-[-3rem] left-0 right-0 flex items-center justify-center space-x-4">
        <motion.button
          initial={{ backgroundColor: "#faff00" }}
          whileHover={{ backgroundColor: "#fff" }}
          transition={{
            duration: 0.2,
            delay: 0,
            ease: [0.16, 1, 0.3, 1],
          }}
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
        </motion.button>

        <div className="flex space-x-2 ">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (canNavigate) {
                  setCurrentIndexCallback(index);
                }
              }}
              className={`h-3 w-3 rounded-full ${index === currentIndex ? "bg-primary-default" : "bg-white"} `}
              aria-label={`Go to slide ${index + 1}`}
              disabled={!canNavigate}
            />
          ))}
        </div>

        <motion.button
          initial={{ backgroundColor: "#faff00" }}
          whileHover={{ backgroundColor: "#fff" }}
          transition={{
            duration: 0.2,
            delay: 0,
            ease: [0.16, 1, 0.3, 1],
          }}
          onClick={handleNext}
          class={`flex h-10 w-[50px] items-center justify-center bg-primary-default`}
          style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
        >
          <Image src="/assets/icons/general/arrow.svg" width={24} height={24} />
        </motion.button>
      </div>
    </div>
  );
}
