"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";

import plus from "@/assets/plus.svg";
import line from "@/assets/line.svg";
import Image from "next/image";
import { useState } from "react";
export type AccordionType={
    title:string,
    text:string
}
export function AccordionAtom({title,text}:AccordionType) {
  const [clicked, setClicked] = useState(false);
  function isItOpen() {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
    console.log(clicked);
  }
  return (
    <Accordion type="single" collapsible>
      <AccordionItem
        value="item-1"
        className="w-full max-w-5xl m-auto"
      >
        <AccordionTrigger
          onClick={() => {
            isItOpen();
          }}
          style={{ border: "1px solid rgba(51, 51, 51, 0.10)" }}
          className="flex justify-between items-center w-full px-20 py-5 border-[1px] border-[rgba(51,51,51,0.10)] text-2xl"
        >
          <span className="text-2xl">{title}</span>
          <Image alt="plus" src={clicked ? line : plus} className="cursor-pointer"></Image>
        </AccordionTrigger>
        <AccordionContent className="
            px-20 py-5  
            w-full                  
                       
          " >
          {text}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
