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

export default function Content1_Inverted({
  background,
  image,
  subtitle,
  title,
  text,
}) {
  return (
    <div
      className={`${background} overflow-hidden py-24 sm:py-32`}
      id="mini-jetboats"
    >
      <div className="px-4">
        <div className="mx-auto mb-6 grid grid-cols-12 gap-4">

          <div className="col-span-12 lg:col-span-6">
            <Image src="/assets/images/about.jpg" width={952} height={727} />
           
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-8">
              <h2 className="font-secondary font-semibold leading-7 text-primary-light">
                NOSSA HISTÓRIA
              </h2>
              <p className="tracking-[-0.1875rem !important] title mt-2 font-primary text-4xl font-bold uppercase leading-[128%] text-typo-primary sm:text-6xl">
                adrenalina DO ASFALTO PARA A ÁGUA
              </p>
              <p className="mt-6 font-secondary text-lg leading-8 text-typo-secondary mb-6 paragraph">
                Fundada por Guilherme Samaia, ex-piloto de Fórmula 2, a Jetcross
                nasce com o objetivo de trazer para o mundo da navegação toda a
                experiência e emoção que o piloto viveu nas pistas. Com o
                profundo conhecimento em pilotagem de alta performance,
                Guilherme decidiu transferir a adrenalina das corridas para uma
                nova dimensão – as águas.
                <br />
                <br />
                Com o Aqua Seeker, seu modelo de estreia, a Jetcross entrega um
                produto que reflete a paixão pela velocidade e a atenção aos
                detalhes, permitindo aos clientes não apenas adquirir um
                jetboat, mas também personalizá-lo para criar uma experiência
                única e sob medida.
              </p>
              <div className="w-fit">
                <Button1
                  style="mr-0 sm:mr-6 mb-5 sm:mb-0 bg-primary-default text-black"
                  text="contato"
                  link="#contato"
                />
              </div>
          </div>

        </div>
      </div>
    </div>
  );
}
