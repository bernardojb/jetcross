"use client";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const accordionSimpleData = [
  {
    id: 0,
    steps: "001",
    title: "O que é um mini jetboat?",
    text: (
      <>
        Mini jetboats são barcos compactos alimentados a base de hidrojato,
        combinando desempenho, robustez e versatilidade. Navegáveis em água doce
        e salgada, são perfeitos para todos os usos, seja para uma pilotagem
        casual, pesca ou até mesmo para prática de esportes radicais. <br />
        <br />{" "}
        <Link href="#contato" className="text-primary-default underline">
          {" "}
          Entre em contato com nossa equipe
        </Link>{" "}
        para saber mais sobre informações.
      </>
    ),
    tags: ["BRIEFING", "PESQUISA", "DEFINIÇÃO", "ESTRATÉGIA"],
    background: "bg-gradient-img-accordion-01",
  },
  {
    id: 1,
    steps: "002",
    title: "Qual o prazo de entrega?",
    text: (
      <>
        Como nossos projetos são customizados sob medida para cada cliente, o
        prazo de entrega pode variar de acordo com o nível de personalização
        escolhida.
        <br />
        <br />{" "}
        <Link href="#contato" className="text-primary-default underline">
          {" "}
          Entre em contato com nossa equipe
        </Link>{" "}
        para obter informações detalhadas sobre esse processo.
      </>
    ),
    tags: ["BRANDING", "IDENTIDADE", "COMUNICAÇÃO", "POSICIONAMENTO"],
    background: "bg-gradient-img-accordion-02",
  },
  {
    id: 2,
    steps: "003",
    title: "posso customizar meu jetboat?",
    text: (
      <>
        Sim! Oferecemos uma lista completa de personalização para nossos
        produtos. Além da estética, oferecemos uma extensa lista de opcionais
        para você adequar seu mini jetboat para seu uso.
        <br />
        <br />
        <a
          href="/assets/main/FichaTécnica-AquaSeeker.pdf"
          target="_blank"
          className="text-primary-default underline"
        >
          Faça o download da ficha técnica
        </a>{" "}
        para obter todas as opções de customização para o Aqua Seeker.
      </>
    ),
    tags: ["FRONT-END", "BACK-END", "INTEGRAÇÕES", "API’S"],
    background: "bg-gradient-img-accordion-03",
  },
  {
    id: 3,
    steps: "004",
    title: "meu jetboat tem garantia?",
    text: (
      <>
        Mas é claro! Todos os nossos jetboats vão para sua casa com 1 ano de
        garantia para cobrir qualquer possível defeito de fábrica. Além disso,
        ao adquirir seu jetboat, o nosso valor destina-se a cobrir tudo o que é
        necessário para deixar o seu barco pronto para entrar na água, sem
        surpresas ou custos adicionais
        <br />
        <br />
        <Link href="#contato" className="text-primary-default underline">
          Entre em contato com nossa equipe
        </Link>{" "}
        para adquirir seu jetboat.
      </>
    ),
    tags: ["QA", "SETUP", "DNS"],
    background: "bg-gradient-img-accordion-04",
  },
];

const AccordionSimpleCard = ({ i, expanded, setExpanded, ...props }) => {
  const isOpen = i === expanded;
  return (
    <div className="group">
      <motion.header
        initial={false}
        onClick={() => {
          setExpanded(isOpen ? false : i);
          console.log(isOpen);
          console.log(i);
        }}
        className="w-full cursor-pointer"
      >
        <div className="group flex flex-col pb-6">
          <p
            className={` mb-3 font-secondary uppercase transition duration-300 ease-out hover:ease-out group-hover:text-typo-primary group-hover:transition group-hover:duration-300 ${isOpen ? "text-typo-primary" : "text-typo-secondary"} italic`}
          >
            {props.steps}
          </p>
          <div className="relative">
            <h1
              className={`title font-primary text-4xl font-bold uppercase sm:text-5xl ${
                isOpen ? "text-primary-default" : "text-typo-secondary"
              } mr-6 transition duration-300 ease-out group-hover:text-primary-default group-hover:transition group-hover:duration-300 group-hover:ease-out `}
            >
              {props.title}
            </h1>
            <div
              className={`absolute right-0 top-[50%] translate-y-[-50%] ${isOpen ? "-rotate-90" : "rotate-90"}  transition duration-300 ease-in-out`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_941_3192)">
                  <path
                    d="M11.3003 12.0005L2.52103 24L22.5 11.9942H22.4579L2.5 0L11.2793 11.9995"
                    fill={isOpen ? "#FAFF00" : "#C0C0C0"}
                    className="transition duration-300 ease-out group-hover:fill-[#FAFF00] group-hover:transition group-hover:duration-300 group-hover:ease-out"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_941_3192">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{ collapsed: { scale: 1 }, open: { scale: 1 } }}
              transition={{ duration: 0.4 }}
              className="pb-10"
            >
              <p className="paragraph pb-6 font-secondary text-lg text-typo-secondary">
                {props.text}
              </p>
              <div className="h-[1px] w-full bg-[#C0C0C033]"></div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion1 = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <div className="w-full">
      {accordionSimpleData.map((item) => (
        <AccordionSimpleCard
          i={item.id}
          expanded={expanded}
          setExpanded={setExpanded}
          key={item.id}
          title={item.title}
          text={item.text}
          steps={item.steps}
          tags={item.tags}
          background={item.background}
        />
      ))}
    </div>
  );
};

export default Accordion1;
