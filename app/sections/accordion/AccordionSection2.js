import React from "react";
import Accordion1 from "@/components/accordions/Accordion1";

function AccordionSection2({ background, button }) {
  return (
    <section className={`${background} px-4 py-32`}>
      <div className={``}>
        <div className="grid grid-cols-12 gap-4">
          <div className=" col-span-12 mb-20 lg:col-span-3 lg:col-start-2 lg:mb-0">
            <div className="flex flex-col">
              <p className="mb-3 font-secondary text-primary-light">FAQ</p>
              <h1 className="max-w-md mb-6 font-primary text-3xl font-bold text-typo-primary sm:text-5xl title">
                PERGUNTAS FREQUENTES
              </h1>
              <p className="mb-12 max-w-md font-secondary text-lg text-typo-secondary paragraph">
                Principais perguntas sobre nossos mini jetboats.
              </p>
              {button}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-6">
            <Accordion1 />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccordionSection2;
