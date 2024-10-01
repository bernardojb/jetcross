"use client";
import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Image1 from "@/public/assets/images/mobile/aquaseeker-01.png";
import Image2 from "@/public/assets/images/mobile/aquaseeker-02.png";
import Image3 from "@/public/assets/images/mobile/aquaseeker-03.png";
import Image4 from "@/public/assets/images/mobile/aquaseeker-04.png";
import Image5 from "@/public/assets/images/mobile/aquaseeker-05.png";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Carrousel2() {
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

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      spaceBetween={0}
      effect={"fade"}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(swiper) => console.log(swiper)}
    >
      {slides.map((i) => (
        <SwiperSlide>
          <div className="relative mx-auto mb-3 h-[300px] w-full max-w-[1428px] md:h-[350px] lg:h-[500px]">
            <Image
              src={i.image}
              alt={i.title}
              layout="fill"
              objectPosition="center"
              priority
              quality={100}
              className="object-contain"
            />
          </div>
          <div className="flex flex-row">
            {i.infos.map((i) => (
              <div className="mx-4 mb-5 w-full text-center">
                <h2 className="font-primary text-[26px] uppercase text-typo-primary lg:text-5xl">
                  {i.title}
                  <span className="text-[26px] lg:text-3xl">
                    {i.complement}
                  </span>
                </h2>
                <p className="text-center font-secondary text-xs text-typo-secondary lg:text-base">
                  {i.description}
                </p>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
