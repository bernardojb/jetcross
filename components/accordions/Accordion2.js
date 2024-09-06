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
  // {
  //   id: 4,
  //   steps: "005",
  //   title: "FOLLOW-UP",
  //   text: "Suporte técnico, aprimoramento e evolução do produto digital através de manutenção adaptativa, corretiva e preventiva com base em coleta de dados, estatísticas de desempenho e desk research.",
  //   tags: ["HOSPEDAGEM", "MANUTENÇÃO", "GARANTIA"],
  //   background: "bg-gradient-img-accordion-05",
  // },
];

// const AccordionSimpleCard = ({ i, expanded, setExpanded, ...props }) => {
//   const isOpen = i === expanded;
//   return (
//     <div className="group">
//       <motion.header
//         initial={false}
//         onClick={() => {
//           setExpanded(isOpen ? false : i);
//           console.log(isOpen);
//           console.log(i);
//         }}
//         className="w-full cursor-pointer"
//       >
//         <div className="flex flex-col pb-5">
//           <p className="uppercase text-primary-default ">{props.steps}</p>
//           <h1
//             className={` text-4xl font-bold sm:text-6xl ${
//               isOpen ? "text-typo-primary" : "text-typo-secondary"
//             } transition duration-200 ease-out hover:text-typo-primary hover:transition hover:duration-200 hover:ease-out`}
//           >
//             {props.title}
//           </h1>
//         </div>
//       </motion.header>
//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.section
//             key="content"
//             initial="collapsed"
//             animate="open"
//             exit="collapsed"
//             variants={{
//               open: { opacity: 1, height: "auto" },
//               collapsed: { opacity: 0, height: 0 },
//             }}
//             transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
//           >
//             <motion.div
//               variants={{ collapsed: { scale: 1 }, open: { scale: 1 } }}
//               transition={{ duration: 0.4 }}
//               className="pb-10"
//             >
//               <p className="pb-5 text-[22px] leading-[28px] tracking-[-1.1px] text-typo-secondary">
//                 {props.text}
//               </p>
//               <div
//                 className={`flex min-h-[82px] w-full flex-row flex-wrap items-center justify-start bg-cover bg-right bg-no-repeat pt-5 ${props.background}`}
//               >
//                 {props.tags.map((tag) => (
//                   <div className="mb-5 ml-5" key={tag}>
//                     <div
//                       key={tag}
//                       className="bg-bg-gradient flex h-[42px] w-fit items-center justify-center rounded-[21px] border border-[#303030] px-5 py-[10px]"
//                     >
//                       <span className="text-[18px] uppercase leading-[normal] tracking-[-0.54px] text-typo-secondary">
//                         {tag}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.section>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const Accordion2 = () => {
//   const [expanded, setExpanded] = useState(0);

//   return (
//     <div className="w-full">
//       {accordionSimpleData.map((item) => (
//         <AccordionSimpleCard
//           i={item.id}
//           expanded={expanded}
//           setExpanded={setExpanded}
//           key={item.id}
//           title={item.title}
//           text={item.text}
//           steps={item.steps}
//           tags={item.tags}
//           background={item.background}
//         />
//       ))}
//     </div>
//   );
// };

export default Accordion2;
