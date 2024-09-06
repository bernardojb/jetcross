import React from "react";
import Link from "next/link";
import Image from "next/image";

const Button1 = ({ link, text, style, target, arrow, onClick }) => {
  return (
    <Link href={link} target={target} onClick={onClick}>
      <div
        className={`group flex flex-row items-center whitespace-nowrap rounded-lg bg-primary-default px-10 py-4 transition-all ${style}`}
      >
        <p className="flex items-center justify-center break-keep font-primary text-sm font-bold">
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
      </div>
    </Link>
  );
};

export default Button1;
