import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function Marquee1({ direction, style }) {
  return (
    <Marquee
      direction={direction}
      className={`flex items-center justify-center bg-primary-default ${style}`}
      autoFill
      loop={0}
    >
      <div className="h-[60px] py-[10px] flex flex-row">
        <Image src="assets/icons/general/flash.svg" width={70} height={30} className="mx-[50px]"/>
        <Image src="assets/icons/general/jc-icon.svg" width={77} height={30} className="mx-[50px]"/>
        <Image src="assets/icons/general/custom.svg" width={175} height={14} className="mx-[50px]"/>
      </div>
      {/* <div className="h-[60px] py-[10px] flex flex-row">
        <Image src="assets/icons/general/flash.svg" width={70} height={30} className="mx-[50px]"/>
        <Image src="assets/icons/general/jc-icon.svg" width={77} height={30} className="mx-[50px]"/>
        <Image src="assets/icons/general/custom.svg" width={175} height={14} className="mx-[50px]"/>
      </div>
      <div className="h-[60px] py-[10px] flex flex-row">
        <Image src="assets/icons/general/flash.svg" width={70} height={30} className="mx-[50px]"/>
        <Image src="assets/icons/general/jc-icon.svg" width={77} height={30} className="mx-[50px]"/>
        <Image src="assets/icons/general/custom.svg" width={175} height={14} className="mx-[50px]"/>
      </div>   */}
    </Marquee>
  );
}

export default Marquee1;
