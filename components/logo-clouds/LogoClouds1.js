import React from "react";

function LogoClouds1({ title, background }) {
  const cloudImages = [
    { id: "1", src: "/assets/icons/logos/logo-hokup.svg" },
    { id: "2", src: "/assets/icons/logos/logo-hokup.svg" },
    { id: "3", src: "/assets/icons/logos/logo-hokup.svg" },
    { id: "4", src: "/assets/icons/logos/logo-hokup.svg" },
    { id: "5", src: "/assets/icons/logos/logo-hokup.svg" },
    { id: "6", src: "/assets/icons/logos/logo-hokup.svg" },
    { id: "7", src: "/assets/icons/logos/logo-hokup.svg" },
  ];

  return (
    <div className={` py-24 sm:py-32 ${background}`}>
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center font-primary text-lg font-semibold leading-8 text-typo-primary">
          {title}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-8 sm:gap-x-10 md:mx-0 md:max-w-none">
          <img
            alt="Transistor"
            src="/assets/icons/logos/logo-hokup.svg"
            width={150}
            height={40}
            className="col-span-2 max-h-12 w-full object-contain sm:col-span-2"
          />
          <img
            alt="Reform"
            src="/assets/icons/logos/logo-hokup.svg"
            width={150}
            height={40}
            className="col-span-2 max-h-12 w-full object-contain sm:col-span-2"
          />
          <img
            alt="Tuple"
            src="/assets/icons/logos/logo-hokup.svg"
            width={150}
            height={40}
            className="col-span-2 max-h-12 w-full object-contain sm:col-span-2"
          />
          <img
            alt="SavvyCal"
            src="/assets/icons/logos/logo-hokup.svg"
            width={150}
            height={40}
            className="col-span-2 max-h-12 w-full object-contain sm:col-span-2"
          />
          <img
            alt="Statamic"
            src="/assets/icons/logos/logo-hokup.svg"
            width={150}
            height={40}
            className="col-span-2 max-h-12 w-full object-contain sm:col-span-2 sm:col-start-2"
          />
          <img
            alt="SavvyCal"
            src="/assets/icons/logos/logo-hokup.svg"
            width={150}
            height={40}
            className="col-span-2 max-h-12 w-full object-contain sm:col-span-2"
          />
          <img
            alt="Statamic"
            src="/assets/icons/logos/logo-hokup.svg"
            width={150}
            height={40}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-span-2"
          />
        </div>
      </div>
    </div>
  );
}

export default LogoClouds1;
