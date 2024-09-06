"use client";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const accordionSimpleData = [
  {
    id: 0,
    steps: "001",
    title: "First big f*cking title",
    text: "Criação do escopo através de sessões de brainstorm e análise de mercado para explorar oportunidades de negócio e traduzi-las em soluções criativas para o projeto.",
    tags: ["BRIEFING", "PESQUISA", "DEFINIÇÃO", "ESTRATÉGIA"],
    background: "bg-gradient-img-accordion-01",
  },
  {
    id: 1,
    steps: "002",
    title: "Second big f*cking title",
    text: "Refinamento do escopo através da estruturação de experiências, alinhamento da identidade visual, design de interface e prototipação digital.",
    tags: ["BRANDING", "IDENTIDADE", "COMUNICAÇÃO", "POSICIONAMENTO"],
    background: "bg-gradient-img-accordion-02",
  },
  {
    id: 2,
    steps: "003",
    title: "Third big f*cking title",
    text: "Materialização e produção do escopo através do desenvolvimento front-end e back-end, estruturação do banco de dados e implementação das APIs.",
    tags: ["FRONT-END", "BACK-END", "INTEGRAÇÕES", "API’S"],
    background: "bg-gradient-img-accordion-03",
  },
  {
    id: 3,
    steps: "004",
    title: "Fourth big f*cking title",
    text: "Quality assurance através de testes com usuários e definição estratégica para o lançamento e publicação do produto digital.",
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
        <div className="flex flex-col pb-5">
          <p
            className={`font-primary font-semibold uppercase ${isOpen ? "text-primary-default" : "text-typo-secondary"}`}
          >
            {props.steps}
          </p>
          <h1
            className={` text-4xl font-bold sm:text-6xl ${
              isOpen ? "text-typo-primary" : "text-typo-secondary"
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
              <p className="pb-5 text-[22px] leading-[28px] tracking-[-1.1px] text-typo-secondary">
                {props.text}
              </p>
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
