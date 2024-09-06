// 'use client'
import Link from "next/link";
import Image from "next/image";
// import { footerData2 } from "@/data/footer-data2";
import { generalData } from "@/data/general-data";
import { routerData } from "@/data/router-data";
import Button1 from "../buttons/Button1";

const Footer2 = ({ text, logo }) => {
  return (
    <footer className="px-4">
      <div className="">
        <div className="grid grid-cols-12 gap-x-4 gap-y-12 pb-24 pt-24">
          <div className=" col-span-12 lg:col-span-6">
            {/* <!-- Logo --> */}
            <Link href="/" className="">
              <Image
                src={logo}
                className="mb-5"
                alt="BRITE Informática"
                height={30}
                width={120}
              />
            </Link>
            <p className="text-secondary mb-9 max-w-sm font-secondary text-lg text-typo-secondary">
              {text}
            </p>

            <div className="flex flex-row">
              {generalData.links.map((i) => (
                <a target="_blank" href={i.href} className="mr-4">
                  <Image
                    src={i.image}
                    alt="Social media icon"
                    width={18}
                    height={18}
                    className="transition duration-200 ease-out hover:brightness-200"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className=" col-span-12 lg:col-span-6">
            <div className="flex flex-col items-start justify-start lg:items-end lg:justify-end">
              <div className="asdasdasd flex flex-row flex-wrap items-start justify-start lg:justify-end">
                {routerData.map((single) => (
                  <Link
                    href={single.href}
                    key={single.id}
                    className="mb-6 mr-8 font-primary text-lg font-bold uppercase text-typo-extra hover:text-primary-light lg:ml-8 lg:mr-0"
                  >
                    {single.title}
                  </Link>
                ))}
              </div>
              <Button1
                link="/"
                text="studio btn"
                style="w-fit bg-transparent text-typo-primary font-primary"
                target=""
                arrow
              />
            </div>
          </div>
        </div>
      </div>

      <div className="group border-t-[1px] border-[#c0c0c036] bg-black transition duration-500 ease-out">
        <div className="flex flex-col justify-between py-9 lg:flex-row">
          <div className="container mb-5 flex items-center lg:mb-0">
            <p className="pr-2 font-primary text-base text-typo-secondary">
              hokup studio{" "}
              <span className="mb-2 max-w-[260px] font-primary text-base text-typo-secondary">
                {" "}
                © {new Date().getFullYear()} {generalData.name}{" "}
              </span>{" "}
              - All rights reserved.
            </p>
          </div>

          <div className="flex flex-row">
            <Link href="/">
              <h4 className=" whitespace-nowrap font-primary text-base text-typo-secondary ">
                Privacy Policy
              </h4>
            </Link>
            <Link href="/">
              <h4 className=" ml-8 font-primary text-base text-typo-secondary">
                Cookies
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
