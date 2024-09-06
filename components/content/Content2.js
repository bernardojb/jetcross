import Image from "next/image";
import Button1 from "../buttons/Button1";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: "/assets/icons/general/cloud.svg",
  },
  {
    name: "SSL certificates.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: "/assets/icons/general/cloud.svg",
  },
  {
    name: "Database backups.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: "/assets/icons/general/cloud.svg",
  },
];

export default function Content2({
  background,
  subtitle,
  title,
  text,
  button,
}) {
  return (
    <section>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div
          className={`relative ${background} px-6 py-20 shadow-2xl sm:rounded-3xl sm:px-16 md:py-24 lg:px-24`}
        >
          <div className="mx-auto flex flex-col items-center justify-center text-center lg:mx-0 lg:flex-auto ">
            <h2 className="mb-3 font-primary font-semibold text-primary-default">
              {subtitle}
            </h2>
            <h2 className=" mb-6 max-w-5xl font-primary text-4xl font-bold text-typo-primary md:text-6xl">
              {title}
            </h2>
            <p className="mb-12 mt-6 max-w-2xl font-secondary text-lg text-typo-secondary">
              {text}
            </p>
            <div className="w-fit">{button}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
