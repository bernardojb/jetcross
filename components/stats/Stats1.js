import React from "react";

function Stats1({ background }) {
  const stats = [
    {
      id: "1",
      title: "44 million",
      subtitle: "Transactions every 24 hours",
    },
    {
      id: "2",
      title: "$119 trillion",
      subtitle: "Assets under holding",
    },
    {
      id: "2",
      title: "3000+",
      subtitle: "Trusted partners",
    },
  ];
  return (
    <div class={` py-24 sm:py-32 ${background}`}>
      <div class="mx-auto max-w-7xl px-4">
        <dl class="grid grid-cols-1 gap-x-4 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((i) => (
            <div class="mx-auto flex max-w-xs flex-col gap-y-4" key={i.id}>
              <dt class="font-secondary text-base leading-7 text-typo-secondary">
                {i.subtitle}
              </dt>
              <dd class="order-first font-primary text-3xl font-semibold tracking-tight text-typo-primary sm:text-5xl">
                {i.title}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Stats1;
