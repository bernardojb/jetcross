import Image from "next/image";
import React from "react";

function Services1({ subtitle, title, text, background, pillColor }) {
  const services = [
    {
      id: "1",
      title: "Desempenho",
      text: "Com uma ótima relação de peso/potência, nossos mini jetboats equipados com motores de até 325 HP são perfeitos para você que busca uma aventura aquática.",
      icon: "assets/icons/general/speed.svg",
    },
    {
      id: "2",
      title: "Personalização",
      text: "Estrutura completa para você personalizar seu jetboat da forma que quiser! Além da estética, oferecemos uma extensa lista de opcionais para você customizar seu produto sob medida.",
      icon: "assets/icons/general/spray.svg",
    },
    {
      id: "3",
      title: "Versatilidade",
      text: "Tecnologia que permite navegação em água doce e salgada, são capazes de navegar em águas rasas e ultrapassar obstáculos como troncos, pedras e pequenas ilhas.  ",
      icon: "assets/icons/general/lightning.svg",
    },
    {
      id: "4",
      title: "Liberdade",
      text: "Experimente a sensação única de liberdade ao pilotar um Jetcross. Muito mais que um simples barco, esteja preparado para redefinir sua experiência de navegação. ",
      icon: "assets/icons/general/boat.svg",
    },
  ];
  return (
    <div class={`${background} py-24 sm:py-32`} id="sobre">
      <div class="mx-auto max-w-7xl px-4">
        <div class="mx-auto max-w-[936px] text-center">
          <h2 class="font-secondary text-primary-light italic">{subtitle}</h2>
          <h1 class="mt-2 font-primary text-4xl font-bold uppercase tracking-tight text-typo-primary sm:text-6xl title">
            {title}
          </h1>
          <p class="mt-6 font-secondary text-lg leading-8 text-typo-secondary max-w-[618px] text-center mx-auto paragraph">
            {text}
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {services.map((i) => (
              <div class="relative pl-16" key={i.id}>
                <dt class="font-secondary text-base font-semibold leading-7 text-typo-primary">
                  <div
                    class={`absolute left-0 top-0 flex h-10 w-[50px] items-center justify-center ${pillColor}`}
                    style={{clipPath:"polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)"}}
                  >
                    <Image src={i.icon} width={24} height={24} />
                  </div>
                  {i.title}
                </dt>
                <dd class="mt-2 font-secondary text-base leading-7 text-typo-secondary paragraph">
                  {i.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Services1;
