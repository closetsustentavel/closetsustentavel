"use client";

import { AccordionAtom } from "@/components/atoms/Accordion";
import { faqData } from "@/utils/data/faq-data";
export function Faq() {
  return(
    <div>
      <div className="ml-[355px] text-6xl mt-20 mb-20">
        <h3>Perguntas Frequentes</h3>
      </div>
      {faqData.map((item,index)=>{
        return(
          <div key={index} className="py-3">
            <AccordionAtom title={item.title} text={item.text}></AccordionAtom>
          </div>
        )
      })}
    </div>
  )
}
