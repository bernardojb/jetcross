"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Button1 = ({ link, text, style, target, arrow, onClick }) => {
  const clipPathVariants = {
    initial: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      scale: 1,
    },
    hover: {
      clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)",
      scale: 1,
      backgroundColor: "#ffffff",
      color: "black",
    },
  };

  return (
    <motion.div whileHover="hover" initial="initial">
      <Link href={link} target={target} onClick={onClick}>
        <motion.div
          variants={clipPathVariants}
          transition={{
            duration: 0.2,
            delay: 0,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`group flex flex-row items-center whitespace-nowrap px-10 py-4 ${style}`}
        >
          <p className="flex items-center justify-center break-keep font-primary text-sm font-bold uppercase">
            {text}
          </p>
          {arrow && (
            <Image
              width={20}
              height={20}
              src={"/assets/icons/general/arrow.svg"}
              alt=""
            />
          )}
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Button1;
