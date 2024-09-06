import React from "react";
import { motion } from "framer-motion";
import AccordionSimple from "@/components/accordions/Accordion1";

function AccordionSection1() {
  return (
    <section id="scroll-approach" className=" px-[10px] lg:px-4">
      <div className="pt-[80px]">
        <motion.div
          viewport={{ once: true, margin: "-300px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            ease: [0.2, 0.65, 0.3, 0.9],
            duration: 0.8,
          }}
          className="flex flex-row items-center justify-between pb-[20px] text-typo-secondary"
        >
          <motion.p className="text-[14px]">APPROACH</motion.p>
          <motion.p className="text-[14px]">OUR VISION TO CREATION</motion.p>
        </motion.div>
        <div className="pb-[80px]">
          <div
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <motion.h1
              initial={{ y: "1.1em", opacity: 0 }}
              whileInView={{ y: "0em", opacity: 1 }}
              transition={{
                delay: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9],
                duration: 0.8,
              }}
              viewport={{ once: true, margin: "-200px" }}
              className="text-[40px] font-[400] leading-[normal] tracking-tighter text-typo-primary md:text-[80px]"
            >
              Projetos criativos,
            </motion.h1>
          </div>
          <div
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <motion.h1
              initial={{ y: "1.1em", opacity: 0 }}
              whileInView={{ y: "0em", opacity: 1 }}
              transition={{
                delay: 1.2,
                ease: [0.2, 0.65, 0.3, 0.9],
                duration: 0.8,
              }}
              viewport={{ once: true, margin: "-100px" }}
              className=" text-[40px] font-bold leading-[normal] tracking-tighter text-typo-primary md:text-[80px] "
            >
              da idealização ao lançamento
            </motion.h1>
          </div>
        </div>
        <motion.div
          initial={{ y: "1.1em", opacity: 0 }}
          whileInView={{ y: "0em", opacity: 1 }}
          transition={{
            delay: 2,
            ease: [0.2, 0.65, 0.3, 0.9],
            duration: 0.8,
          }}
          viewport={{ once: true, margin: "0px" }}
          className="grid grid-cols-12"
        >
          <AccordionSimple
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default AccordionSection1;
