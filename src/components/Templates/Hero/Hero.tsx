"use client";
import DownArrow from "@/assets/downArrow.gif"
import Image from "next/image";
export function Hero() {
  return (
    <div>
      <div className="text-center mt-9 ml-0 md:ml-12 lg:ml-[100px] md:text-start">
        <h1 className="text-[40px] leading-none my-0 text-wrap md:text-6xl lg:text-7xl xl:text-8xl 3xl:text-[150px]" data-aos="fade-right">
          Tranformando a
        </h1>
        <h1 className="text-[40px] leading-none my-0 text-wrap md:text-6xl lg:text-7xl xl:text-8xl 3xl:text-[150px]" data-aos="fade-right">
          vida de mulheres
        </h1>
        <h1 className="text-[40px] leading-none my-0 text-wrap md:text-6xl lg:text-7xl xl:text-8xl 3xl:text-[150px]" data-aos="fade-right">
          diariamente
        </h1>
      </div>
      <div className="flex justify-center items-center pt-20 sm:hidden">
        <Image src={DownArrow} alt="knowMOre" height={15}></Image>
      </div>
    </div>
  );
}
