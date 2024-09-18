import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function Marquee1({ direction, style }) {
  return (
    <Marquee
      direction={direction}
      className={`flex items-center justify-center bg-primary-default drop-shadow-[0px_4px_15px_#00000040] ${style} pl-[2000px]`}
      autoFill={true}
      loop={0}
      style={{ maxWidth: "100vw !important" }}
    >
      <div className="flex h-[60px] flex-row py-[10px] ">
        <Image
          src="assets/icons/general/flash.svg"
          width={70}
          height={30}
          className="mx-[50px]"
        />
        <Image
          src="assets/icons/general/jc-icon.svg"
          width={77}
          height={30}
          className="mx-[50px]"
        />
        <Image
          src="assets/icons/general/custom.svg"
          width={175}
          height={14}
          className="mx-[50px]"
        />
      </div>
      {/* <div className="flex h-[60px] flex-row py-[10px]">
        <Image
          src="assets/icons/general/flash.svg"
          width={70}
          height={30}
          className="mx-[50px]"
        />
        <Image
          src="assets/icons/general/jc-icon.svg"
          width={77}
          height={30}
          className="mx-[50px]"
        />
        <Image
          src="assets/icons/general/custom.svg"
          width={175}
          height={14}
          className="mx-[50px]"
        />
      </div>
      <div className="flex h-[60px] flex-row py-[10px]">
        <Image
          src="assets/icons/general/flash.svg"
          width={70}
          height={30}
          className="mx-[50px]"
        />
        <Image
          src="assets/icons/general/jc-icon.svg"
          width={77}
          height={30}
          className="mx-[50px]"
        />
        <Image
          src="assets/icons/general/custom.svg"
          width={175}
          height={14}
          className="mx-[50px]"
        />
      </div>
      <div className="flex h-[60px] flex-row py-[10px]">
        <Image
          src="assets/icons/general/flash.svg"
          width={70}
          height={30}
          className="mx-[50px]"
        />
        <Image
          src="assets/icons/general/jc-icon.svg"
          width={77}
          height={30}
          className="mx-[50px]"
        />
        <Image
          src="assets/icons/general/custom.svg"
          width={175}
          height={14}
          className="mx-[50px]"
        />
      </div>
      <div className="flex h-[60px] flex-row py-[10px]">
        <Image
          src="assets/icons/general/flash.svg"
          width={70}
          height={30}
          className="mx-[50px]"
        />
        <Image
          src="assets/icons/general/jc-icon.svg"
          width={77}
          height={30}
          className="mx-[50px]"
        />
        <Image
          src="assets/icons/general/custom.svg"
          width={175}
          height={14}
          className="mx-[50px]"
        />
      </div> */}
    </Marquee>
  );
}

export default Marquee1;
