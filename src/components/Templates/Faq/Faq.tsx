"use client";

import { AccordionAtom } from "@/components/atoms/Accordion";
import { faqData } from "@/utils/data/faq-data";
export function Faq() {
  return (
    <div data-aos="fade-right">
      <div className="m-auto p-5 mt-10 mb-20 lg:ml-40 xl:ml-56">
        <h3 className="text-3xl md:text-5xl 3xl:text-[100px]">
          Perguntas Frequentes
        </h3>
      </div>
      {faqData.map((item, index) => {
        return (
          <div key={index} className="py-3 p-5">
            <AccordionAtom title={item.title} text={item.text}></AccordionAtom>
          </div>
        );
      })}
    </div>
  );
}
