import Image from "next/image";
// import { CloudIcon } from "/assets/icons/general/cloud.svg";
import Button1 from "../buttons/Button1";

const features = [
  {
    name: "Água doce e salgada.",
    description:
      "Desenvolvidos para todos os tipos de águas, são capazes de superar os limites da navegação comum, permitindo o uso em rios, mares, lagos e represas.",
    icon: "/assets/icons/general/water.svg",
  },
  {
    name: "Casco reforçado.",
    description:
      " Feito em fibra, nossos jetboats são capazes de navegar em águas rasas, ultrapassando pequenos obstáculos como troncos, pedras e pequenas ilhas. Obtenha ainda mais reforço com nosso opcional de placas PEAD.",
    icon: "/assets/icons/general/shield.svg",
  },
  {
    name: "Compacto.",
    description:
      "Leve e compacto, possui uma ótima relação de peso/potência. Nossos mini jetboats podem ser equipados com motores de até 325 HP.",
    icon: "/assets/icons/general/ruler.svg",
  },
];

export default function Content1({ background, image, subtitle, title, text }) {
  return (
    <div className={`${background} overflow-hidden py-24 sm:py-32`} id="mini-jetboats">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="font-secondary font-semibold leading-7 text-primary-light italic">
                {subtitle}
              </h2>
              <p className="mt-2 font-primary text-4xl font-bold uppercase title text-typo-primary sm:text-6xl">
                {title}
              </p>
              <p className="mt-6 font-secondary text-lg leading-8 text-typo-secondary paragraph">
                {text}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="relative pl-9 font-secondary"
                  >
                    <dt className="inline font-secondary font-semibold text-primary-light">
                      <Image
                        width={20}
                        height={20}
                        src={feature.icon}
                        className="absolute left-1 top-1"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline font-secondary text-typo-secondary paragraph font-semibold">
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
            className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
        <div className="hidden lg:block w-fit">
          <Button1
            style="mr-0 sm:mr-6 mb-5 sm:mb-0 bg-primary-default text-black"
            text="Produtos"
            link="#produtos"
          />
        </div>
      </div>
    </div>
  );
}
