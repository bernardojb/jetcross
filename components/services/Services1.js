import React from "react";

function Services1({ subtitle, title, text, background, pillColor }) {
  const services = [
    {
      id: "1",
      title: "Desempenho",
      text: "Com uma ótima relação de peso/potência, nossos mini jetboats equipados com motores de até 325 HP são perfeitos para você que busca uma aventura aquática.",
      icon: "",
    },
    {
      id: "2",
      title: "Personalização",
      text: "Estrutura completa para você personalizar seu jetboat da forma que quiser! Além da estética, oferecemos uma extensa lista de opcionais para você customizar seu produto sob medida.",
      icon: "",
    },
    {
      id: "3",
      title: "Versatilidade",
      text: "Tecnologia que permite navegação em água doce e salgada, são capazes de navegar em águas rasas e ultrapassar obstáculos como troncos, pedras e pequenas ilhas.  ",
      icon: "",
    },
    {
      id: "4",
      title: "Liberdade",
      text: "Experimente a sensação única de liberdade ao pilotar um Jetcross. Muito mais que um simples barco, esteja preparado para redefinir sua experiência de navegação. ",
      icon: "",
    },
    // {
    //   id: "5",
    //   title: "Service 5",
    //   text: "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    //   icon: "",
    // },
    // {
    //   id: "6",
    //   title: "Service 6",
    //   text: "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    //   icon: "",
    // },
  ];
  return (
    <div class={`${background} py-24 sm:py-32`}>
      <div class="mx-auto max-w-7xl px-4">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="font-secondary text-primary-light">{subtitle}</h2>
          <p class="mt-2 font-primary text-4xl font-bold uppercase tracking-tight text-typo-primary sm:text-6xl">
            {title}
          </p>
          <p class="mt-6 font-secondary text-lg leading-8 text-typo-secondary">
            {text}
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {services.map((i) => (
              <div class="relative pl-16" key={i.id}>
                <dt class="font-secondary text-base font-semibold leading-7 text-typo-primary">
                  <div
                    class={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center ${pillColor}`}
                  >
                    <svg
                      class="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </div>
                  {i.title}
                </dt>
                <dd class="mt-2 font-secondary text-base leading-7 text-typo-secondary">
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
