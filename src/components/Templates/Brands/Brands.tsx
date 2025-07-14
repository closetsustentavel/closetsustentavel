"use client";
import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Amaro from "@/assets/amaro.svg";
import Zara from "@/assets/zara.svg";
import leLis from "@/assets/lelis.svg";
import Shoulder from "@/assets/shoulder.svg";
import Farm from "@/assets/farm.svg";
import Forever from "@/assets/forever21.svg";

const animation = { duration: 10000, easing: (t: number) => t };
export function Brands() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,

    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    breakpoints: {
      "(min-width:0px)": {
        slides: { perView: "auto", spacing: 30 },
      },
    },
  });
  return (
    <div
      ref={sliderRef}
      className="keen-slider justify-center items-center mt-50"
    >
      <div className="keen-slider__slide number-slide1">
        <Image src={Amaro} alt="Amaro"></Image>
      </div>
      <div className="keen-slider__slide number-slide2">
        <Image src={Zara} alt="Zara"></Image>
      </div>
      <div className="keen-slider__slide number-slide3">
        <Image src={leLis} alt="LeLis"></Image>
      </div>
      <div className="keen-slider__slide number-slide4">
        <Image src={Shoulder} alt="Shoulder"></Image>
      </div>
      <div className="keen-slider__slide number-slide5">
        <Image src={Farm} alt="Farm"></Image>
      </div>
      <div className="keen-slider__slide number-slide6">
        <Image src={Forever} alt="Forever21"></Image>
      </div>
    </div>
  );
}
