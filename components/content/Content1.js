import Image from "next/image";
// import { CloudIcon } from "/assets/icons/general/cloud.svg";

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

export default function Content1({ background, image, subtitle, title, text }) {
  return (
    <div className={`${background} overflow-hidden py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="font-primary font-semibold leading-7 text-primary-default">
                {subtitle}
              </h2>
              <p className="mt-2 font-primary text-4xl font-bold tracking-tight text-typo-primary sm:text-6xl">
                {title}
              </p>
              <p className="mt-6 font-secondary text-lg leading-8 text-typo-secondary">
                {text}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="relative pl-9 font-secondary"
                  >
                    <dt className="inline font-secondary font-semibold text-primary-default">
                      <Image
                        width={20}
                        height={20}
                        src={feature.icon}
                        className="absolute left-1 top-1"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline font-secondary text-typo-secondary">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={image}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
