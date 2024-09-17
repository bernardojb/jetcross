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
        Mini jetboats são barcos compactos alimentados a base de hidrojato,
        combinando desempenho, robustez e versatilidade. Navegáveis em água doce
        e salgada, são perfeitos para todos os usos, seja para uma pilotagem
        casual, pesca ou até mesmo para prática de esportes radicais. <br />
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
        <span className="text-primary-default underline">
          Faça o download da ficha técnica
        </span>{" "}
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
        <div className="flex flex-col pb-6">
          <p
            className={` mb-3 font-secondary uppercase ${isOpen ? "text-typo-primary" : "text-typo-secondary"}`}
          >
            {props.steps}
          </p>
          <h1
            className={`font-primary text-4xl font-bold uppercase sm:text-5xl ${
              isOpen ? "text-primary-default" : "text-typo-secondary"
            } transition duration-200 ease-out hover:text-typo-primary hover:transition hover:duration-200 hover:ease-out`}
          >
            {props.title}
          </h1>
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
              <p className="pb-6 text-[22px] leading-[28px] tracking-[-1.1px] text-typo-secondary">
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
